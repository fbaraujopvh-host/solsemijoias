// Script para importar os produtos estáticos para o Sanity
// Execute: npx ts-node --esm scripts/migrate-products.ts

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'tanjm5z6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN, // precisa de token com permissão de escrita
  useCdn: false,
});

const products = [
  {
    _type: 'product',
    name: 'Colar Lua Dourada',
    slug: { _type: 'slug', current: 'colar-lua-dourada' },
    category: 'colares',
    price: 129.90,
    originalPrice: 179.90,
    image: { _type: 'image', _sanityAsset: 'image@https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80' },
    description: 'Pingente lua banhado a ouro 18k com corrente delicada.',
    material: 'Banhado a Ouro 18k',
    badge: 'Oferta',
    badgeColor: 'rose',
    active: true,
    order: 1,
  },
  {
    _type: 'product',
    name: 'Conjunto Cristal Rose',
    slug: { _type: 'slug', current: 'conjunto-cristal-rose' },
    category: 'conjuntos',
    price: 249.90,
    description: 'Conjunto colar + brincos com cristais austríacos rose gold.',
    material: 'Rose Gold 18k',
    badge: 'Novo',
    badgeColor: 'gold',
    active: true,
    order: 2,
  },
  {
    _type: 'product',
    name: 'Pulseira Riviera Zircônia',
    slug: { _type: 'slug', current: 'pulseira-riviera-zirconia' },
    category: 'pulseiras',
    price: 159.90,
    description: 'Pulseira riviera cravejada com zircônias brilhantes.',
    material: 'Prata 925 + Zircônia',
    badge: 'Mais Vendido',
    badgeColor: 'green',
    active: true,
    order: 3,
  },
  {
    _type: 'product',
    name: 'Brinco Argola Texturizada',
    slug: { _type: 'slug', current: 'brinco-argola-texturizada' },
    category: 'brincos',
    price: 89.90,
    description: 'Argola grande com textura martelada, acabamento ouro velho.',
    material: 'Banhado a Ouro',
    active: true,
    order: 4,
  },
  {
    _type: 'product',
    name: 'Anel Solitário Gota',
    slug: { _type: 'slug', current: 'anel-solitario-gota' },
    category: 'aneis',
    price: 119.90,
    originalPrice: 149.90,
    description: 'Anel com pedra gota zircônia, banho ouro 18k.',
    material: 'Banhado a Ouro 18k',
    badge: 'Oferta',
    badgeColor: 'rose',
    active: true,
    order: 5,
  },
  {
    _type: 'product',
    name: 'Colar Pérola Barroca',
    slug: { _type: 'slug', current: 'colar-perola-barroca' },
    category: 'colares',
    price: 189.90,
    description: 'Colar com pérola barroca natural e corrente delicada.',
    material: 'Prata 925 + Pérola',
    badge: 'Novo',
    badgeColor: 'gold',
    active: true,
    order: 6,
  },
  {
    _type: 'product',
    name: 'Pulseira Charm Infinito',
    slug: { _type: 'slug', current: 'pulseira-charm-infinito' },
    category: 'pulseiras',
    price: 109.90,
    description: 'Pulseira delicada com charm símbolo do infinito.',
    material: 'Banhado a Ouro 18k',
    active: true,
    order: 7,
  },
  {
    _type: 'product',
    name: 'Brinco Ear Cuff Folhas',
    slug: { _type: 'slug', current: 'brinco-ear-cuff-folhas' },
    category: 'brincos',
    price: 79.90,
    description: 'Ear cuff em formato de folha, sem necessidade de furo.',
    material: 'Banhado a Ouro',
    badge: 'Novo',
    badgeColor: 'gold',
    active: true,
    order: 8,
  },
];

async function migrate() {
  console.log(`Importando ${products.length} produtos para o Sanity...`);
  for (const product of products) {
    const result = await client.create(product);
    console.log(`✅ Criado: ${result.name} (${result._id})`);
  }
  console.log('\n🎉 Migração concluída!');
}

migrate().catch(console.error);
