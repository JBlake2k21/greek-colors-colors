// lib/default-catalog.ts
// Automatically generated static luxury catalog for zero-database serverless fallback

export interface CatalogProduct {
  id: string;
  title: string;
  price: string;
  description: string;
  inStock: boolean;
  images: string;
  collectionId: string;
}

export interface CatalogCollection {
  id: string;
  name: string;
  description: string;
  images: string;
  displayOrder: number;
  isFeatured?: boolean;
  products: CatalogProduct[];
}

export const DEFAULT_COLLECTIONS: CatalogCollection[] = [
  {
    "id": "col-1",
    "name": "Caribbean Collection",
    "description": "Bespoke pieces inspired by azure waters and golden island sunsets.",
    "images": "[\"/collections/Caribbean Collection/Caribbean Collection/0E9AACD7-8B43-4300-B88E-EEECD7335AC2.JPG\"]",
    "displayOrder": 0,
    "isFeatured": true,
    "products": [
      {
        "id": "col-1-prod-1",
        "title": "Caribbean Sovereign Piece #1",
        "price": "1250",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/0E9AACD7-8B43-4300-B88E-EEECD7335AC2.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-2",
        "title": "Caribbean Sovereign Piece #2",
        "price": "1384",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/1464D560-07B6-4B6E-9B37-F77060304930.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-3",
        "title": "Caribbean Sovereign Piece #3",
        "price": "1518",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/2BD34A7C-5247-4671-A588-0458EA24885B.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-4",
        "title": "Caribbean Sovereign Piece #4",
        "price": "1653",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/2F13CAA5-E3C8-410A-B073-6B884B338A49.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-5",
        "title": "Caribbean Sovereign Piece #5",
        "price": "1787",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/31A79F50-AA7E-461F-BE39-24CBB2EBE012.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-6",
        "title": "Caribbean Sovereign Piece #6",
        "price": "1921",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/45141433-EBFF-4BA0-8D98-1B0768CE081F.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-7",
        "title": "Caribbean Sovereign Piece #7",
        "price": "2055",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/58B88DCB-BD5D-4C68-89DE-B06968FB99B3.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-8",
        "title": "Caribbean Sovereign Piece #8",
        "price": "2189",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/61941058-ED74-4913-8844-F678CE802A60.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-9",
        "title": "Caribbean Sovereign Piece #9",
        "price": "2324",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/704981EC-F7AE-4199-BB57-C3AD4BE70F1A.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-10",
        "title": "Caribbean Sovereign Piece #10",
        "price": "2458",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/714177FB-A203-4A89-887E-CA5A990C77D8.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-11",
        "title": "Caribbean Sovereign Piece #11",
        "price": "2592",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/7C5A758C-80A1-41D4-A6E7-EEF1CD1D4F3A.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-12",
        "title": "Caribbean Sovereign Piece #12",
        "price": "2726",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/7E000979-4A7E-4A45-8806-599E870B8D2D.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-13",
        "title": "Caribbean Sovereign Piece #13",
        "price": "2861",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/9AB55E0C-F41C-490F-9D05-5AD7E45928DB.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-14",
        "title": "Caribbean Sovereign Piece #14",
        "price": "2995",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/A0853152-F1A3-459C-AA4D-832795DF7F75.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-15",
        "title": "Caribbean Sovereign Piece #15",
        "price": "3129",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/AAEDB301-E03A-4D06-8547-8D08D7646683.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-16",
        "title": "Caribbean Sovereign Piece #16",
        "price": "3263",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/AE7D385D-A271-40D3-A4CB-B998FAD398F0.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-17",
        "title": "Caribbean Sovereign Piece #17",
        "price": "3397",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/BA665149-17EA-49BC-BCAE-EE11F7156A1E.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-18",
        "title": "Caribbean Sovereign Piece #18",
        "price": "3532",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/BAD1BCFC-F794-48F4-A28F-BA4E0C2B1D5D.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-19",
        "title": "Caribbean Sovereign Piece #19",
        "price": "3666",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/E85AFC64-EBDB-4945-90A9-FCEF6CA8413A.JPG\"]",
        "collectionId": "col-1"
      },
      {
        "id": "col-1-prod-20",
        "title": "Caribbean Sovereign Piece #20",
        "price": "3800",
        "description": "Bespoke pieces inspired by azure waters and golden island sunsets. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Caribbean Collection/Caribbean Collection/F398FF6E-D6B4-40EB-A2D6-2F6C20EAE28C.JPG\"]",
        "collectionId": "col-1"
      }
    ]
  },
  {
    "id": "col-2",
    "name": "Christian Collection",
    "description": "Sacred elegance and regal symbolism crafted in champagne gold and obsidian.",
    "images": "[\"/collections/Christian Collection-selected/2313523E-2234-42FC-8C08-4BB3BD7ABD67.JPG\"]",
    "displayOrder": 1,
    "products": [
      {
        "id": "col-2-prod-1",
        "title": "Seraphim Heritage Jewel #1",
        "price": "1400",
        "description": "Sacred elegance and regal symbolism crafted in champagne gold and obsidian. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Christian Collection-selected/2313523E-2234-42FC-8C08-4BB3BD7ABD67.JPG\"]",
        "collectionId": "col-2"
      },
      {
        "id": "col-2-prod-2",
        "title": "Seraphim Heritage Jewel #2",
        "price": "1633",
        "description": "Sacred elegance and regal symbolism crafted in champagne gold and obsidian. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Christian Collection-selected/4C520BDB-5C93-4B44-9963-17047C9DB190.JPG\"]",
        "collectionId": "col-2"
      },
      {
        "id": "col-2-prod-3",
        "title": "Seraphim Heritage Jewel #3",
        "price": "1867",
        "description": "Sacred elegance and regal symbolism crafted in champagne gold and obsidian. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Christian Collection-selected/ECAD4087-0F0F-485A-B21C-EBE9E66AC6B9.JPG\"]",
        "collectionId": "col-2"
      },
      {
        "id": "col-2-prod-4",
        "title": "Seraphim Heritage Jewel #4",
        "price": "2100",
        "description": "Sacred elegance and regal symbolism crafted in champagne gold and obsidian. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Christian Collection-selected/FullSizeRender.jpg\"]",
        "collectionId": "col-2"
      },
      {
        "id": "col-2-prod-5",
        "title": "Seraphim Heritage Jewel #5",
        "price": "2333",
        "description": "Sacred elegance and regal symbolism crafted in champagne gold and obsidian. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Christian Collection-selected/IMG_2387.JPG\"]",
        "collectionId": "col-2"
      },
      {
        "id": "col-2-prod-6",
        "title": "Seraphim Heritage Jewel #6",
        "price": "2567",
        "description": "Sacred elegance and regal symbolism crafted in champagne gold and obsidian. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Christian Collection-selected/IMG_3609.JPG\"]",
        "collectionId": "col-2"
      },
      {
        "id": "col-2-prod-7",
        "title": "Seraphim Heritage Jewel #7",
        "price": "2800",
        "description": "Sacred elegance and regal symbolism crafted in champagne gold and obsidian. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Christian Collection-selected/IMG_4135.JPG\"]",
        "collectionId": "col-2"
      },
      {
        "id": "col-2-prod-8",
        "title": "Seraphim Heritage Jewel #8",
        "price": "3033",
        "description": "Sacred elegance and regal symbolism crafted in champagne gold and obsidian. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Christian Collection-selected/IMG_4136.JPG\"]",
        "collectionId": "col-2"
      },
      {
        "id": "col-2-prod-9",
        "title": "Seraphim Heritage Jewel #9",
        "price": "3267",
        "description": "Sacred elegance and regal symbolism crafted in champagne gold and obsidian. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Christian Collection-selected/IMG_4137.JPG\"]",
        "collectionId": "col-2"
      },
      {
        "id": "col-2-prod-10",
        "title": "Seraphim Heritage Jewel #10",
        "price": "3500",
        "description": "Sacred elegance and regal symbolism crafted in champagne gold and obsidian. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Christian Collection-selected/IMG_4138.JPG\"]",
        "collectionId": "col-2"
      },
      {
        "id": "col-2-prod-11",
        "title": "Seraphim Heritage Jewel #11",
        "price": "3733",
        "description": "Sacred elegance and regal symbolism crafted in champagne gold and obsidian. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Christian Collection-selected/IMG_4139.JPG\"]",
        "collectionId": "col-2"
      },
      {
        "id": "col-2-prod-12",
        "title": "Seraphim Heritage Jewel #12",
        "price": "3967",
        "description": "Sacred elegance and regal symbolism crafted in champagne gold and obsidian. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Christian Collection-selected/IMG_4140.JPG\"]",
        "collectionId": "col-2"
      },
      {
        "id": "col-2-prod-13",
        "title": "Seraphim Heritage Jewel #13",
        "price": "4200",
        "description": "Sacred elegance and regal symbolism crafted in champagne gold and obsidian. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Christian Collection-selected/IMG_4141.JPG\"]",
        "collectionId": "col-2"
      }
    ]
  },
  {
    "id": "col-3",
    "name": "Cobra Collection",
    "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents.",
    "images": "[\"/collections/Cobra Collection/Cobra Collection/531C9604-A633-46C3-8846-F35206871CCA.JPG\"]",
    "displayOrder": 2,
    "products": [
      {
        "id": "col-3-prod-1",
        "title": "Cobra Imperial Silhouette #1",
        "price": "1800",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/531C9604-A633-46C3-8846-F35206871CCA.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-2",
        "title": "Cobra Imperial Silhouette #2",
        "price": "1968",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/60F31335-25EC-45DD-A22F-523D5AB0F2A1.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-3",
        "title": "Cobra Imperial Silhouette #3",
        "price": "2136",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/6A276620-1C11-4E7A-A3A9-E4CCF7AAA6B1.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-4",
        "title": "Cobra Imperial Silhouette #4",
        "price": "2305",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/7D8424C0-5AC9-48AE-8C30-F331F43C4BAA.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-5",
        "title": "Cobra Imperial Silhouette #5",
        "price": "2473",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/C1B7BEAE-B13B-4C6E-A2EB-56BD8E87E0E2.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-6",
        "title": "Cobra Imperial Silhouette #6",
        "price": "2641",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/D3EF9F32-5586-4CFD-B9E5-E914A8CB9565.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-7",
        "title": "Cobra Imperial Silhouette #7",
        "price": "2809",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/D408C954-A58C-474B-BE72-D98079FCEA0A.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-8",
        "title": "Cobra Imperial Silhouette #8",
        "price": "2977",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/E728F53E-BDD0-4252-B822-DB0624D9C3A5.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-9",
        "title": "Cobra Imperial Silhouette #9",
        "price": "3145",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/FCEB73B5-7902-4960-9566-2AAA919D7828.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-10",
        "title": "Cobra Imperial Silhouette #10",
        "price": "3314",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/IMG_3499.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-11",
        "title": "Cobra Imperial Silhouette #11",
        "price": "3482",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/IMG_3500.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-12",
        "title": "Cobra Imperial Silhouette #12",
        "price": "3650",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/IMG_3501.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-13",
        "title": "Cobra Imperial Silhouette #13",
        "price": "3818",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/IMG_3502.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-14",
        "title": "Cobra Imperial Silhouette #14",
        "price": "3986",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/IMG_3503.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-15",
        "title": "Cobra Imperial Silhouette #15",
        "price": "4155",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/IMG_3504.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-16",
        "title": "Cobra Imperial Silhouette #16",
        "price": "4323",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/IMG_3505.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-17",
        "title": "Cobra Imperial Silhouette #17",
        "price": "4491",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/IMG_3507.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-18",
        "title": "Cobra Imperial Silhouette #18",
        "price": "4659",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/IMG_3508.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-19",
        "title": "Cobra Imperial Silhouette #19",
        "price": "4827",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/IMG_3509.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-20",
        "title": "Cobra Imperial Silhouette #20",
        "price": "4995",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/IMG_3510.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-21",
        "title": "Cobra Imperial Silhouette #21",
        "price": "5164",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/IMG_3511.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-22",
        "title": "Cobra Imperial Silhouette #22",
        "price": "5332",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/IMG_3512.JPG\"]",
        "collectionId": "col-3"
      },
      {
        "id": "col-3-prod-23",
        "title": "Cobra Imperial Silhouette #23",
        "price": "5500",
        "description": "Bold, serpentine silhouettes with captivating gold texture and emerald accents. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Cobra Collection/Cobra Collection/IMG_3514.JPG\"]",
        "collectionId": "col-3"
      }
    ]
  },
  {
    "id": "col-4",
    "name": "Greek Collection",
    "description": "Mythological grandeur and neoclassical motifs in polished high-karat gold.",
    "images": "[\"/collections/Greek Collection/Greek Collection/4E5F3DF8-8C84-4DA5-8D53-2758679195B6.JPG\"]",
    "displayOrder": 3,
    "products": [
      {
        "id": "col-4-prod-1",
        "title": "Athena Neoclassical Earring #1",
        "price": "1600",
        "description": "Mythological grandeur and neoclassical motifs in polished high-karat gold. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Greek Collection/Greek Collection/4E5F3DF8-8C84-4DA5-8D53-2758679195B6.JPG\"]",
        "collectionId": "col-4"
      },
      {
        "id": "col-4-prod-2",
        "title": "Athena Neoclassical Earring #2",
        "price": "2240",
        "description": "Mythological grandeur and neoclassical motifs in polished high-karat gold. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Greek Collection/Greek Collection/6201E77C-2D8E-40F1-8953-3B2630A8BC88.JPG\"]",
        "collectionId": "col-4"
      },
      {
        "id": "col-4-prod-3",
        "title": "Athena Neoclassical Earring #3",
        "price": "2880",
        "description": "Mythological grandeur and neoclassical motifs in polished high-karat gold. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Greek Collection/Greek Collection/74BA1797-3883-40C0-9AEF-27E35B4E0252.JPG\"]",
        "collectionId": "col-4"
      },
      {
        "id": "col-4-prod-4",
        "title": "Athena Neoclassical Earring #4",
        "price": "3520",
        "description": "Mythological grandeur and neoclassical motifs in polished high-karat gold. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Greek Collection/Greek Collection/9279868F-5139-4975-89FD-668F936072F5.JPG\"]",
        "collectionId": "col-4"
      },
      {
        "id": "col-4-prod-5",
        "title": "Athena Neoclassical Earring #5",
        "price": "4160",
        "description": "Mythological grandeur and neoclassical motifs in polished high-karat gold. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Greek Collection/Greek Collection/FCEB73B5-7902-4960-9566-2AAA919D7828.JPG\"]",
        "collectionId": "col-4"
      },
      {
        "id": "col-4-prod-6",
        "title": "Athena Neoclassical Earring #6",
        "price": "4800",
        "description": "Mythological grandeur and neoclassical motifs in polished high-karat gold. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Greek Collection/Greek Collection/IMG_3675.JPG\"]",
        "collectionId": "col-4"
      }
    ]
  },
  {
    "id": "col-5",
    "name": "Holiday Collection",
    "description": "Festive opulence designed for grand celebrations and gala evenings.",
    "images": "[\"/collections/Holiday Collection/Holiday Collection/FullSizeRender-1.jpg\"]",
    "displayOrder": 4,
    "products": [
      {
        "id": "col-5-prod-1",
        "title": "Gala Royale Diamond Earring #1",
        "price": "2200",
        "description": "Festive opulence designed for grand celebrations and gala evenings. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Holiday Collection/Holiday Collection/FullSizeRender-1.jpg\"]",
        "collectionId": "col-5"
      },
      {
        "id": "col-5-prod-2",
        "title": "Gala Royale Diamond Earring #2",
        "price": "4350",
        "description": "Festive opulence designed for grand celebrations and gala evenings. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Holiday Collection/Holiday Collection/FullSizeRender-2.jpg\"]",
        "collectionId": "col-5"
      },
      {
        "id": "col-5-prod-3",
        "title": "Gala Royale Diamond Earring #3",
        "price": "6500",
        "description": "Festive opulence designed for grand celebrations and gala evenings. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Holiday Collection/Holiday Collection/FullSizeRender.jpg\"]",
        "collectionId": "col-5"
      }
    ]
  },
  {
    "id": "col-6",
    "name": "Hoops Collection",
    "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication.",
    "images": "[\"/collections/Hoops/Hoops/1464D560-07B6-4B6E-9B37-F77060304930.JPG\"]",
    "displayOrder": 5,
    "products": [
      {
        "id": "col-6-prod-1",
        "title": "Architectural Sovereign Hoop #1",
        "price": "950",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/1464D560-07B6-4B6E-9B37-F77060304930.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-2",
        "title": "Architectural Sovereign Hoop #2",
        "price": "1020",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/158677F3-311F-4481-AEAC-B5B0897FE0F2.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-3",
        "title": "Architectural Sovereign Hoop #3",
        "price": "1089",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/412A7C20-8C5F-4317-8631-8685BE9AFD5D.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-4",
        "title": "Architectural Sovereign Hoop #4",
        "price": "1159",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/449A21DC-C2E1-42F2-9D6C-26CAAF0906FC.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-5",
        "title": "Architectural Sovereign Hoop #5",
        "price": "1229",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/4B78EF4D-DB84-4674-82A4-788D2BECE8F2.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-6",
        "title": "Architectural Sovereign Hoop #6",
        "price": "1298",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/531C9604-A633-46C3-8846-F35206871CCA.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-7",
        "title": "Architectural Sovereign Hoop #7",
        "price": "1368",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/60F31335-25EC-45DD-A22F-523D5AB0F2A1.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-8",
        "title": "Architectural Sovereign Hoop #8",
        "price": "1438",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/6A276620-1C11-4E7A-A3A9-E4CCF7AAA6B1.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-9",
        "title": "Architectural Sovereign Hoop #9",
        "price": "1507",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/6C45AACF-C27D-4732-8380-EE461F3BEB32.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-10",
        "title": "Architectural Sovereign Hoop #10",
        "price": "1577",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/6F224E31-60C8-4989-889E-2336DF4FF3E6.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-11",
        "title": "Architectural Sovereign Hoop #11",
        "price": "1646",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/6F8DDED9-4233-42CA-9892-EE362BF25989.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-12",
        "title": "Architectural Sovereign Hoop #12",
        "price": "1716",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/714177FB-A203-4A89-887E-CA5A990C77D8.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-13",
        "title": "Architectural Sovereign Hoop #13",
        "price": "1786",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/7C2CC19D-77E8-416E-8FC2-7DF4F408320A.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-14",
        "title": "Architectural Sovereign Hoop #14",
        "price": "1855",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/7E000979-4A7E-4A45-8806-599E870B8D2D.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-15",
        "title": "Architectural Sovereign Hoop #15",
        "price": "1925",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/8B038360-D1F0-4797-9E2D-4E7AB38309EC.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-16",
        "title": "Architectural Sovereign Hoop #16",
        "price": "1995",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/8E80081D-A419-404C-ABA6-9173A0DC63AB.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-17",
        "title": "Architectural Sovereign Hoop #17",
        "price": "2064",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/9458C55E-F812-4423-A35D-61CD52BB626E.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-18",
        "title": "Architectural Sovereign Hoop #18",
        "price": "2134",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/A0853152-F1A3-459C-AA4D-832795DF7F75.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-19",
        "title": "Architectural Sovereign Hoop #19",
        "price": "2204",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/AA178024-3ED5-433F-A0A5-744C8F3E777B.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-20",
        "title": "Architectural Sovereign Hoop #20",
        "price": "2273",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/AE7D385D-A271-40D3-A4CB-B998FAD398F0.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-21",
        "title": "Architectural Sovereign Hoop #21",
        "price": "2343",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/BAD1BCFC-F794-48F4-A28F-BA4E0C2B1D5D.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-22",
        "title": "Architectural Sovereign Hoop #22",
        "price": "2413",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/BB2B360C-6022-4DD7-9CD2-AA6151EE65DD.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-23",
        "title": "Architectural Sovereign Hoop #23",
        "price": "2482",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/C1B7BEAE-B13B-4C6E-A2EB-56BD8E87E0E2.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-24",
        "title": "Architectural Sovereign Hoop #24",
        "price": "2552",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/D3EF9F32-5586-4CFD-B9E5-E914A8CB9565.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-25",
        "title": "Architectural Sovereign Hoop #25",
        "price": "2621",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/DD6259D7-2E64-41EE-A993-E6B70F5EE1F9.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-26",
        "title": "Architectural Sovereign Hoop #26",
        "price": "2691",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/E511C475-C286-4BE5-A099-089F797477F5.PNG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-27",
        "title": "Architectural Sovereign Hoop #27",
        "price": "2761",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/E72A123D-7302-4512-A0E1-AAD78363BD19.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-28",
        "title": "Architectural Sovereign Hoop #28",
        "price": "2830",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/E85AFC64-EBDB-4945-90A9-FCEF6CA8413A.JPG\"]",
        "collectionId": "col-6"
      },
      {
        "id": "col-6-prod-29",
        "title": "Architectural Sovereign Hoop #29",
        "price": "2900",
        "description": "Architectural hoop silhouettes redefining everyday luxury and sophistication. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Hoops/Hoops/EE5F076D-58B0-4684-BCA1-24920BAD5DDD.JPG\"]",
        "collectionId": "col-6"
      }
    ]
  },
  {
    "id": "col-7",
    "name": "New Arrivals",
    "description": "The latest avant-garde designs by Roslyn Kiser Miller.",
    "images": "[\"/collections/New/New/IMG_3665.JPG\"]",
    "displayOrder": 6,
    "products": [
      {
        "id": "col-7-prod-1",
        "title": "Roslyn Miller Debut Jewel #1",
        "price": "1500",
        "description": "The latest avant-garde designs by Roslyn Kiser Miller. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/New/New/IMG_3665.JPG\"]",
        "collectionId": "col-7"
      },
      {
        "id": "col-7-prod-2",
        "title": "Roslyn Miller Debut Jewel #2",
        "price": "2000",
        "description": "The latest avant-garde designs by Roslyn Kiser Miller. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/New/New/IMG_3667.JPG\"]",
        "collectionId": "col-7"
      },
      {
        "id": "col-7-prod-3",
        "title": "Roslyn Miller Debut Jewel #3",
        "price": "2500",
        "description": "The latest avant-garde designs by Roslyn Kiser Miller. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/New/New/IMG_3668.JPG\"]",
        "collectionId": "col-7"
      },
      {
        "id": "col-7-prod-4",
        "title": "Roslyn Miller Debut Jewel #4",
        "price": "3000",
        "description": "The latest avant-garde designs by Roslyn Kiser Miller. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/New/New/IMG_3671.JPG\"]",
        "collectionId": "col-7"
      },
      {
        "id": "col-7-prod-5",
        "title": "Roslyn Miller Debut Jewel #5",
        "price": "3500",
        "description": "The latest avant-garde designs by Roslyn Kiser Miller. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/New/New/IMG_3673.JPG\"]",
        "collectionId": "col-7"
      },
      {
        "id": "col-7-prod-6",
        "title": "Roslyn Miller Debut Jewel #6",
        "price": "4000",
        "description": "The latest avant-garde designs by Roslyn Kiser Miller. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/New/New/IMG_3675.JPG\"]",
        "collectionId": "col-7"
      },
      {
        "id": "col-7-prod-7",
        "title": "Roslyn Miller Debut Jewel #7",
        "price": "4500",
        "description": "The latest avant-garde designs by Roslyn Kiser Miller. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/New/New/IMG_3677.JPG\"]",
        "collectionId": "col-7"
      }
    ]
  },
  {
    "id": "col-8",
    "name": "Wedding Collection",
    "description": "Timeless bridal heirloom jewels crafted to last generations.",
    "images": "[\"/collections/Wedding collection/Wedding collection/87DC5C96-9864-499D-A3BB-C4ACA7A74B61.JPG\"]",
    "displayOrder": 7,
    "products": [
      {
        "id": "col-8-prod-1",
        "title": "Heirloom Bridal Solitaire #1",
        "price": "2800",
        "description": "Timeless bridal heirloom jewels crafted to last generations. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wedding collection/Wedding collection/87DC5C96-9864-499D-A3BB-C4ACA7A74B61.JPG\"]",
        "collectionId": "col-8"
      },
      {
        "id": "col-8-prod-2",
        "title": "Heirloom Bridal Solitaire #2",
        "price": "3940",
        "description": "Timeless bridal heirloom jewels crafted to last generations. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wedding collection/Wedding collection/8A43A996-CD2A-4822-B1FE-543DEDB0FF06.JPG\"]",
        "collectionId": "col-8"
      },
      {
        "id": "col-8-prod-3",
        "title": "Heirloom Bridal Solitaire #3",
        "price": "5080",
        "description": "Timeless bridal heirloom jewels crafted to last generations. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wedding collection/Wedding collection/8E80081D-A419-404C-ABA6-9173A0DC63AB.JPG\"]",
        "collectionId": "col-8"
      },
      {
        "id": "col-8-prod-4",
        "title": "Heirloom Bridal Solitaire #4",
        "price": "6220",
        "description": "Timeless bridal heirloom jewels crafted to last generations. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wedding collection/Wedding collection/92178489-015D-4A59-9BD4-65BB7BA79C2A.JPG\"]",
        "collectionId": "col-8"
      },
      {
        "id": "col-8-prod-5",
        "title": "Heirloom Bridal Solitaire #5",
        "price": "7360",
        "description": "Timeless bridal heirloom jewels crafted to last generations. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wedding collection/Wedding collection/B89EA470-CE55-44B0-9577-69B33AC6D69C.JPG\"]",
        "collectionId": "col-8"
      },
      {
        "id": "col-8-prod-6",
        "title": "Heirloom Bridal Solitaire #6",
        "price": "8500",
        "description": "Timeless bridal heirloom jewels crafted to last generations. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wedding collection/Wedding collection/IMG_3960.JPG\"]",
        "collectionId": "col-8"
      }
    ]
  },
  {
    "id": "col-9",
    "name": "Wire Collection",
    "description": "Delicate wirework artistry showcasing ethereal movement and balance.",
    "images": "[\"/collections/Wire Collection/Wire Collection/6A0A12B3-C50C-40BA-9395-9E5D55779C19.JPG\"]",
    "displayOrder": 8,
    "products": [
      {
        "id": "col-9-prod-1",
        "title": "Ethereal Wirework Drop #1",
        "price": "1100",
        "description": "Delicate wirework artistry showcasing ethereal movement and balance. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wire Collection/Wire Collection/6A0A12B3-C50C-40BA-9395-9E5D55779C19.JPG\"]",
        "collectionId": "col-9"
      },
      {
        "id": "col-9-prod-2",
        "title": "Ethereal Wirework Drop #2",
        "price": "1292",
        "description": "Delicate wirework artistry showcasing ethereal movement and balance. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wire Collection/Wire Collection/81A7C1C6-4DDE-4F93-8EFC-167277FA4B92.JPG\"]",
        "collectionId": "col-9"
      },
      {
        "id": "col-9-prod-3",
        "title": "Ethereal Wirework Drop #3",
        "price": "1483",
        "description": "Delicate wirework artistry showcasing ethereal movement and balance. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wire Collection/Wire Collection/F226880D-8C7F-44E4-9DE7-85723275AD28.JPG\"]",
        "collectionId": "col-9"
      },
      {
        "id": "col-9-prod-4",
        "title": "Ethereal Wirework Drop #4",
        "price": "1675",
        "description": "Delicate wirework artistry showcasing ethereal movement and balance. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wire Collection/Wire Collection/F537EAFE-FA55-4FCC-A64C-5487A1A31EBA.JPG\"]",
        "collectionId": "col-9"
      },
      {
        "id": "col-9-prod-5",
        "title": "Ethereal Wirework Drop #5",
        "price": "1867",
        "description": "Delicate wirework artistry showcasing ethereal movement and balance. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wire Collection/Wire Collection/IMG_2472.JPG\"]",
        "collectionId": "col-9"
      },
      {
        "id": "col-9-prod-6",
        "title": "Ethereal Wirework Drop #6",
        "price": "2058",
        "description": "Delicate wirework artistry showcasing ethereal movement and balance. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wire Collection/Wire Collection/IMG_2473.JPG\"]",
        "collectionId": "col-9"
      },
      {
        "id": "col-9-prod-7",
        "title": "Ethereal Wirework Drop #7",
        "price": "2250",
        "description": "Delicate wirework artistry showcasing ethereal movement and balance. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wire Collection/Wire Collection/IMG_2480.JPG\"]",
        "collectionId": "col-9"
      },
      {
        "id": "col-9-prod-8",
        "title": "Ethereal Wirework Drop #8",
        "price": "2442",
        "description": "Delicate wirework artistry showcasing ethereal movement and balance. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wire Collection/Wire Collection/IMG_2481.JPG\"]",
        "collectionId": "col-9"
      },
      {
        "id": "col-9-prod-9",
        "title": "Ethereal Wirework Drop #9",
        "price": "2633",
        "description": "Delicate wirework artistry showcasing ethereal movement and balance. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wire Collection/Wire Collection/IMG_2490.JPG\"]",
        "collectionId": "col-9"
      },
      {
        "id": "col-9-prod-10",
        "title": "Ethereal Wirework Drop #10",
        "price": "2825",
        "description": "Delicate wirework artistry showcasing ethereal movement and balance. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wire Collection/Wire Collection/IMG_2492.JPG\"]",
        "collectionId": "col-9"
      },
      {
        "id": "col-9-prod-11",
        "title": "Ethereal Wirework Drop #11",
        "price": "3017",
        "description": "Delicate wirework artistry showcasing ethereal movement and balance. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wire Collection/Wire Collection/IMG_2494.JPG\"]",
        "collectionId": "col-9"
      },
      {
        "id": "col-9-prod-12",
        "title": "Ethereal Wirework Drop #12",
        "price": "3208",
        "description": "Delicate wirework artistry showcasing ethereal movement and balance. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wire Collection/Wire Collection/IMG_2501.JPG\"]",
        "collectionId": "col-9"
      },
      {
        "id": "col-9-prod-13",
        "title": "Ethereal Wirework Drop #13",
        "price": "3400",
        "description": "Delicate wirework artistry showcasing ethereal movement and balance. Handcrafted by Roslyn Kiser Miller.",
        "inStock": true,
        "images": "[\"/collections/Wire Collection/Wire Collection/IMG_2509.JPG\"]",
        "collectionId": "col-9"
      }
    ]
  }
];
