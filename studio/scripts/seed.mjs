// Script para popular o Sanity com os produtos e configurações iniciais
// Execute no terminal dentro de /studio: node scripts/seed.mjs SEU_TOKEN
// Obtenha o token em: https://www.sanity.io/manage → projeto → API → Tokens → Add API token (Editor)

import { createClient } from '@sanity/client';

const token = process.argv[2];
if (!token) {
  console.error('❌ Forneça o token: node scripts/seed.mjs SEU_TOKEN');
  process.exit(1);
}

const client = createClient({
  projectId: 'tanjm5z6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

const products = [
  { name: 'Colar Lua Dourada', slug: 'colar-lua-dourada', category: 'colares', price: 129.90, originalPrice: 179.90, description: 'Pingente lua banhado a ouro 18k com corrente delicada.', material: 'Banhado a Ouro 18k', badge: 'Oferta', badgeColor: 'rose', active: true, order: 1 },
  { name: 'Conjunto Cristal Rose', slug: 'conjunto-cristal-rose', category: 'conjuntos', price: 249.90, description: 'Conjunto colar + brincos com cristais austríacos rose gold.', material: 'Rose Gold 18k', badge: 'Novo', badgeColor: 'gold', active: true, order: 2 },
  { name: 'Pulseira Riviera Zircônia', slug: 'pulseira-riviera-zirconia', category: 'pulseiras', price: 159.90, description: 'Pulseira riviera cravejada com zircônias brilhantes.', material: 'Prata 925 + Zircônia', badge: 'Mais Vendido', badgeColor: 'green', active: true, order: 3 },
  { name: 'Brinco Argola Texturizada', slug: 'brinco-argola-texturizada', category: 'brincos', price: 89.90, description: 'Argola grande com textura martelada, acabamento ouro velho.', material: 'Banhado a Ouro', active: true, order: 4 },
  { name: 'Anel Solitário Gota', slug: 'anel-solitario-gota', category: 'aneis', price: 119.90, originalPrice: 149.90, description: 'Anel com pedra gota zircônia, banho ouro 18k.', material: 'Banhado a Ouro 18k', badge: 'Oferta', badgeColor: 'rose', active: true, order: 5 },
  { name: 'Colar Pérola Barroca', slug: 'colar-perola-barroca', category: 'colares', price: 189.90, description: 'Colar com pérola barroca natural e corrente delicada.', material: 'Prata 925 + Pérola', badge: 'Novo', badgeColor: 'gold', active: true, order: 6 },
  { name: 'Pulseira Charm Infinito', slug: 'pulseira-charm-infinito', category: 'pulseiras', price: 109.90, description: 'Pulseira delicada com charm símbolo do infinito.', material: 'Banhado a Ouro 18k', active: true, order: 7 },
  { name: 'Brinco Ear Cuff Folhas', slug: 'brinco-ear-cuff-folhas', category: 'brincos', price: 79.90, description: 'Ear cuff em formato de folha, sem necessidade de furo.', material: 'Banhado a Ouro', badge: 'Novo', badgeColor: 'gold', active: true, order: 8 },
];

const settings = {
  _type: 'storeSettings',
  _id: 'storeSettings',
  storeName: 'Sol Semi-Joias',
  seoTitle: 'Sol Semi-Joias — Coleção Exclusiva Banhada a Ouro 18k',
  seoDescription: 'Descubra nossa coleção exclusiva de semi-joias banhadas a ouro 18k e prata 925.',
  heroBadge: 'Nova Coleção 2025 Disponível',
  heroTitle: 'Elegância que',
  heroTitleHighlight: 'brilha em você',
  heroSubtitle: 'Semi-joias banhadas a ouro 18k e prata 925 com acabamento de joalheria premium. Peças únicas para momentos inesquecíveis.',
  heroBtnPrimary: 'Ver Coleção',
  heroBtnSecondary: 'Nossa História',
  heroStat1Number: '+2k', heroStat1Label: 'Clientes felizes',
  heroStat2Number: '150+', heroStat2Label: 'Peças exclusivas',
  heroStat3Number: '18k', heroStat3Label: 'Banho de ouro',
  aboutTitle: 'Nascemos para realçar',
  aboutTitleHighlight: 'sua beleza',
  aboutText1: 'A Sol Semi-Joias nasceu da paixão por acessórios que combinam beleza, qualidade e acessibilidade. Acreditamos que toda mulher merece se sentir especial — seja num dia comum ou numa grande ocasião.',
  aboutText2: 'Nossas semi-joias são cuidadosamente selecionadas de fornecedores certificados, garantindo banhos de ouro 18k e prata 925 com espessura que faz diferença: mais durabilidade, mais brilho, mais você.',
  aboutStat1Number: '5+', aboutStat1Label: 'Anos de experiência',
  aboutStat2Number: '150+', aboutStat2Label: 'Modelos exclusivos',
  aboutStat3Number: '2k+', aboutStat3Label: 'Clientes satisfeitas',
  aboutStat4Number: '98%', aboutStat4Label: 'Aprovação dos pedidos',
  testimonials: [
    { _key: 't1', name: 'Ana Carolina', initials: 'AC', location: 'São Paulo, SP', text: 'Amei as peças! Qualidade incrível e embalagem super delicada. Com certeza voltarei a comprar.' },
    { _key: 't2', name: 'Juliana Melo', initials: 'JM', location: 'Rio de Janeiro, RJ', text: 'O colar que comprei parece ouro de verdade! Recebi muitos elogios. Entrega super rápida.' },
    { _key: 't3', name: 'Fernanda Costa', initials: 'FC', location: 'Belo Horizonte, MG', text: 'Serviço impecável e joias lindíssimas. O conjunto que recebi superou minhas expectativas!' },
  ],
  phone: '(11) 99999-9999',
  email: 'contato@solsemijoias.com.br',
  businessHours: 'Seg-Sex: 9h às 18h | Sáb: 9h às 14h',
  freeShippingThreshold: 199,
  acceptedPayments: ['Pix', 'Cartão', 'Boleto'],
};

async function seed() {
  console.log('🌱 Populando Sanity...\n');

  // Criar configurações
  await client.createOrReplace(settings);
  console.log('✅ Configurações da loja criadas');

  // Criar produtos
  for (const p of products) {
    await client.create({
      _type: 'product',
      name: p.name,
      slug: { _type: 'slug', current: p.slug },
      category: p.category,
      price: p.price,
      ...(p.originalPrice && { originalPrice: p.originalPrice }),
      description: p.description,
      material: p.material,
      ...(p.badge && { badge: p.badge }),
      ...(p.badgeColor && { badgeColor: p.badgeColor }),
      active: p.active,
      order: p.order,
    });
    console.log(`✅ Produto: ${p.name}`);
  }

  console.log('\n🎉 Concluído! Acesse https://sol-semijoias.sanity.studio para ver os dados.');
}

seed().catch(console.error);
