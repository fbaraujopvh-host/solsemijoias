export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  material: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'colares', label: 'Colares' },
  { id: 'pulseiras', label: 'Pulseiras' },
  { id: 'brincos', label: 'Brincos' },
  { id: 'aneis', label: 'Anéis' },
  { id: 'conjuntos', label: 'Conjuntos' },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Colar Lua Dourada',
    category: 'colares',
    price: 129.90,
    originalPrice: 179.90,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    badge: 'Oferta',
    badgeColor: 'rose',
    description: 'Pingente lua banhado a ouro 18k com corrente delicada.',
    material: 'Banhado a Ouro 18k',
    isBestseller: true,
  },
  {
    id: 2,
    name: 'Conjunto Cristal Rose',
    category: 'conjuntos',
    price: 249.90,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    badge: 'Novo',
    badgeColor: 'gold',
    description: 'Conjunto colar + brincos com cristais austríacos rose gold.',
    material: 'Rose Gold 18k',
    isNew: true,
  },
  {
    id: 3,
    name: 'Pulseira Riviera Zircônia',
    category: 'pulseiras',
    price: 159.90,
    image: 'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=600&q=80',
    badge: 'Mais Vendido',
    badgeColor: 'green',
    description: 'Pulseira riviera cravejada com zircônias brilhantes.',
    material: 'Prata 925 + Zircônia',
    isBestseller: true,
  },
  {
    id: 4,
    name: 'Brinco Argola Texturizada',
    category: 'brincos',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=600&q=80',
    description: 'Argola grande com textura martelada, acabamento ouro velho.',
    material: 'Banhado a Ouro',
  },
  {
    id: 5,
    name: 'Anel Solitário Gota',
    category: 'aneis',
    price: 119.90,
    originalPrice: 149.90,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    badge: 'Oferta',
    badgeColor: 'rose',
    description: 'Anel com pedra gota zircônia, banho ouro 18k.',
    material: 'Banhado a Ouro 18k',
  },
  {
    id: 6,
    name: 'Colar Pérola Barroca',
    category: 'colares',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1573408301185-9519f94815ca?w=600&q=80',
    badge: 'Novo',
    badgeColor: 'gold',
    description: 'Colar com pérola barroca natural e corrente delicada.',
    material: 'Prata 925 + Pérola',
    isNew: true,
  },
  {
    id: 7,
    name: 'Pulseira Charm Infinito',
    category: 'pulseiras',
    price: 109.90,
    image: 'https://images.unsplash.com/photo-1596944924591-2a225e088bdc?w=600&q=80',
    description: 'Pulseira delicada com charm símbolo do infinito.',
    material: 'Banhado a Ouro 18k',
  },
  {
    id: 8,
    name: 'Brinco Ear Cuff Folhas',
    category: 'brincos',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1630019925419-5a47e0b73f3c?w=600&q=80',
    badge: 'Novo',
    badgeColor: 'gold',
    description: 'Ear cuff em formato de folha, sem necessidade de furo.',
    material: 'Banhado a Ouro',
    isNew: true,
  },
];

export const testimonials = [
  {
    name: 'Ana Carolina',
    avatar: 'AC',
    rating: 5,
    text: 'Amei as peças! Qualidade incrível e embalagem super delicada. Com certeza voltarei a comprar.',
    location: 'São Paulo, SP',
  },
  {
    name: 'Juliana Melo',
    avatar: 'JM',
    rating: 5,
    text: 'O colar que comprei parece ouro de verdade! Recebi muitos elogios. Entrega super rápida.',
    location: 'Rio de Janeiro, RJ',
  },
  {
    name: 'Fernanda Costa',
    avatar: 'FC',
    rating: 5,
    text: 'Serviço impecável e joias lindíssimas. O conjunto que recebi superou minhas expectativas!',
    location: 'Belo Horizonte, MG',
  },
];
