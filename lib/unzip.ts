// lib/unzip.ts
import fs from "fs";
import path from "path";
import zlib from "zlib";

export interface ExtractedImage {
  filename: string;
  urlPath: string;
  size: number;
}

/**
 * Robust zero-dependency ZIP archive parser and image extractor.
 * Uses native Node.js zlib and Buffer manipulation to extract images
 * from standard PKZIP (.zip) files without external dependencies.
 */
export function extractImagesFromZipBuffer(
  zipBuffer: Buffer,
  collectionName: string,
  publicDir: string
): ExtractedImage[] {
  const cleanCollectionName = collectionName.trim().replace(/[\\/:*?"<>|]/g, "_");
  const targetDir = path.join(publicDir, "collections", cleanCollectionName);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Find End of Central Directory (EOCD) signature PK\x05\x06 (0x06054b50)
  let eocdOffset = -1;
  for (let i = zipBuffer.length - 22; i >= Math.max(0, zipBuffer.length - 65558); i--) {
    if (zipBuffer.readUInt32LE(i) === 0x06054b50) {
      eocdOffset = i;
      break;
    }
  }

  const extracted: ExtractedImage[] = [];

  if (eocdOffset !== -1) {
    const totalEntries = zipBuffer.readUInt16LE(eocdOffset + 10);
    const cdOffset = zipBuffer.readUInt32LE(eocdOffset + 16);

    let curr = cdOffset;
    for (let i = 0; i < totalEntries; i++) {
      if (curr + 46 > zipBuffer.length) break;
      if (zipBuffer.readUInt32LE(curr) !== 0x02014b50) break;

      const compressionMethod = zipBuffer.readUInt16LE(curr + 10);
      const compressedSize = zipBuffer.readUInt32LE(curr + 20);
      const uncompressedSize = zipBuffer.readUInt32LE(curr + 24);
      const filenameLength = zipBuffer.readUInt16LE(curr + 28);
      const extraFieldLength = zipBuffer.readUInt16LE(curr + 30);
      const commentLength = zipBuffer.readUInt16LE(curr + 32);
      const localHeaderOffset = zipBuffer.readUInt32LE(curr + 42);

      const rawPath = zipBuffer.toString("utf8", curr + 46, curr + 46 + filenameLength);
      curr += 46 + filenameLength + extraFieldLength + commentLength;

      // Filter out directories, macOS metadata, and hidden files
      if (rawPath.endsWith("/") || rawPath.includes("__MACOSX") || rawPath.startsWith("._")) {
        continue;
      }

      const basename = path.basename(rawPath);
      if (basename.startsWith(".") || basename.startsWith("._")) {
        continue;
      }

      const ext = path.extname(basename).toLowerCase();
      if (![".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"].includes(ext)) {
        continue;
      }

      // Read local file header to locate compressed data
      if (localHeaderOffset + 30 > zipBuffer.length) continue;
      const localNameLen = zipBuffer.readUInt16LE(localHeaderOffset + 26);
      const localExtraLen = zipBuffer.readUInt16LE(localHeaderOffset + 28);
      const dataStart = localHeaderOffset + 30 + localNameLen + localExtraLen;

      if (dataStart + compressedSize > zipBuffer.length) continue;

      const rawData = zipBuffer.subarray(dataStart, dataStart + compressedSize);
      let decompressed: Buffer;

      try {
        if (compressionMethod === 0) {
          decompressed = rawData;
        } else if (compressionMethod === 8) {
          decompressed = zlib.inflateRawSync(new Uint8Array(rawData));
        } else {
          continue; // Unsupported compression
        }

        const outPath = path.join(targetDir, basename);
        fs.writeFileSync(outPath, new Uint8Array(decompressed));

        const urlPath = `/collections/${cleanCollectionName}/${encodeURIComponent(basename)}`;
        extracted.push({
          filename: basename,
          urlPath,
          size: decompressed.length,
        });
      } catch (err) {
        console.error(`Failed to decompress entry ${basename}:`, err);
      }
    }
  }

  // Fallback sequential parser if EOCD not found or zero entries extracted
  if (extracted.length === 0) {
    let offset = 0;
    while (offset + 30 <= zipBuffer.length) {
      const sig = zipBuffer.readUInt32LE(offset);
      if (sig !== 0x04034b50) break;

      const compressionMethod = zipBuffer.readUInt16LE(offset + 8);
      const compressedSize = zipBuffer.readUInt32LE(offset + 18);
      const uncompressedSize = zipBuffer.readUInt32LE(offset + 22);
      const filenameLength = zipBuffer.readUInt16LE(offset + 26);
      const extraFieldLength = zipBuffer.readUInt16LE(offset + 28);

      const rawPath = zipBuffer.toString("utf8", offset + 30, offset + 30 + filenameLength);
      const dataStart = offset + 30 + filenameLength + extraFieldLength;

      if (dataStart + compressedSize > zipBuffer.length) break;

      const basename = path.basename(rawPath);
      const ext = path.extname(basename).toLowerCase();

      if (
        !rawPath.endsWith("/") &&
        !rawPath.includes("__MACOSX") &&
        !basename.startsWith(".") &&
        [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"].includes(ext)
      ) {
        const rawData = zipBuffer.subarray(dataStart, dataStart + compressedSize);
        try {
          let decompressed: Buffer;
          if (compressionMethod === 0) {
            decompressed = rawData;
          } else if (compressionMethod === 8) {
            decompressed = zlib.inflateRawSync(new Uint8Array(rawData));
          } else {
            offset = dataStart + compressedSize;
            continue;
          }

          const outPath = path.join(targetDir, basename);
          fs.writeFileSync(outPath, new Uint8Array(decompressed));

          const urlPath = `/collections/${cleanCollectionName}/${encodeURIComponent(basename)}`;
          extracted.push({
            filename: basename,
            urlPath,
            size: decompressed.length,
          });
        } catch (err) {
          console.error(`Sequential extraction failed for ${basename}:`, err);
        }
      }

      offset = dataStart + compressedSize;
    }
  }

  return extracted;
}
