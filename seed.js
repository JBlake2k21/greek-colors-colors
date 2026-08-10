const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Clearing old data...');
  await prisma.product.deleteMany();
  await prisma.collection.deleteMany();

  console.log('Creating jewelry collections...');
  const earringsCol = await prisma.collection.create({
    data: {
      name: 'Fine Earrings',
      description: 'Exquisite handcrafted earrings designed for elegance and distinction.',
      displayOrder: 1,
      images: JSON.stringify([
        "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80"
      ])
    }
  });

  const necklacesCol = await prisma.collection.create({
    data: {
      name: 'Signature Necklaces & Rings',
      description: 'Timeless luxury necklaces and statement rings.',
      displayOrder: 2,
      images: JSON.stringify([
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
      ])
    }
  });

  console.log('Creating luxury jewelry products...');
  await prisma.product.createMany({
    data: [
      {
        title: 'Royal Diamond Chandelier Earrings',
        price: 1250.00,
        description: 'Breathtaking 18k white gold chandelier earrings encrusted with brilliant-cut diamonds.',
        inStock: true,
        collectionId: earringsCol.id,
        images: JSON.stringify([
          "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
        ])
      },
      {
        title: 'South Sea Cultured Pearl Drop Earrings',
        price: 890.00,
        description: 'Lustrous South Sea pearls suspended from elegant diamond-accented posts.',
        inStock: true,
        collectionId: earringsCol.id,
        images: JSON.stringify([
          "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80"
        ])
      },
      {
        title: '18k Rose Gold Sapphire Eternity Ring',
        price: 1800.00,
        description: 'Hand-set royal blue sapphires in seamless 18k rose gold.',
        inStock: true,
        collectionId: necklacesCol.id,
        images: JSON.stringify([
          "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
        ])
      },
      {
        title: 'Celestial Diamond Pendant Necklace',
        price: 2450.00,
        description: 'A glowing solitaire diamond pendant on a delicate platinum chain.',
        inStock: true,
        collectionId: necklacesCol.id,
        images: JSON.stringify([
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
        ])
      }
    ]
  });

  const count = await prisma.product.count();
  console.log(`✅ Seed successfully finished! Total products in database: ${count}`);
}

main()
  .catch(e => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
