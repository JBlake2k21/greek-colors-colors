// components/ImageCarousel.tsx
'use client';
import { useState } from 'react';

interface ImageCarouselProps {
  images?: string[] | string | null;
}

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80";

function parseImages(input?: string[] | string | null): string[] {
  if (!input) return [FALLBACK_IMAGE];
  if (Array.isArray(input)) {
    return input.length > 0 ? input : [FALLBACK_IMAGE];
  }
  if (typeof input === 'string') {
    try {
      const parsed = JSON.parse(input);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch {
      if (input.trim() !== '') return [input];
    }
  }
  return [FALLBACK_IMAGE];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const imageList = parseImages(images);
  const length = imageList.length;

  const prev = () => setIndex((i) => (i - 1 + length) % length);
  const next = () => setIndex((i) => (i + 1) % length);

  const src = imageList[index] || FALLBACK_IMAGE;

  return (
    <div className="relative w-full h-56 overflow-hidden rounded-xl mb-4 bg-gray-100 dark:bg-gray-800 shadow-inner group">
      <img
        src={src}
        alt={`Product View ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        onError={(e) => {
          (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
        }}
      />
      {length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition opacity-0 group-hover:opacity-100"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition opacity-0 group-hover:opacity-100"
          >
            ›
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            {imageList.map((_, idx) => (
              <span
                key={idx}
                className={`block h-1.5 w-1.5 rounded-full transition-all ${
                  idx === index ? 'bg-white w-3' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
