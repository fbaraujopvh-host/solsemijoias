import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'tanjm5z6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

const [count, settings, products] = await Promise.all([
  client.fetch('count(*[_type == "product"])'),
  client.fetch('*[_type == "storeSettings"][0]{ storeName, heroTitle, heroTitleHighlight, phone, email }'),
  client.fetch('*[_type == "product"] | order(order asc) { name, price, category, active, badge }'),
]);

console.log('\n=== ✅ SANITY STATUS ===');
console.log(`📦 Total de produtos: ${count}`);
console.log(`\n⚙️  Configurações:`);
console.log(`   Nome: ${settings?.storeName}`);
console.log(`   Hero: ${settings?.heroTitle} ${settings?.heroTitleHighlight}`);
console.log(`   Tel: ${settings?.phone}`);
console.log(`   Email: ${settings?.email}`);
console.log(`\n💍 Produtos:`);
products.forEach((p, i) =>
  console.log(`   ${i+1}. ${p.active ? '🟢' : '🔴'} ${p.name} — R$ ${p.price} (${p.category})${p.badge ? ' ['+p.badge+']' : ''}`)
);
console.log('\n✅ Tudo OK no Sanity!\n');
