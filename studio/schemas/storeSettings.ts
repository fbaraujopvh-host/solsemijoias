import { defineField, defineType } from 'sanity';

export const storeSettingsSchema = defineType({
  name: 'storeSettings',
  title: 'Configurações da Loja',
  type: 'document',
  groups: [
    { name: 'geral', title: '🏪 Geral' },
    { name: 'hero', title: '🖼️ Hero (Banner Principal)' },
    { name: 'sobre', title: '📖 Seção Sobre' },
    { name: 'depoimentos', title: '⭐ Depoimentos' },
    { name: 'contato', title: '📞 Contato & Redes Sociais' },
    { name: 'frete', title: '🚚 Frete & Pagamento' },
  ],
  fields: [
    // ── GERAL ──────────────────────────────────────────
    defineField({ name: 'storeName', title: 'Nome da Loja', type: 'string', group: 'geral' }),
    defineField({ name: 'seoTitle', title: 'Título SEO (aba do navegador)', type: 'string', group: 'geral' }),
    defineField({ name: 'seoDescription', title: 'Descrição SEO', type: 'text', rows: 2, group: 'geral' }),

    // ── HERO ───────────────────────────────────────────
    defineField({ name: 'heroBadge', title: 'Texto do Badge', description: 'Ex: Nova Coleção 2025 Disponível', type: 'string', group: 'hero' }),
    defineField({ name: 'heroTitle', title: 'Título Principal', description: 'Ex: Elegância que', type: 'string', group: 'hero' }),
    defineField({ name: 'heroTitleHighlight', title: 'Linha em Destaque (dourada)', description: 'Ex: brilha em você', type: 'string', group: 'hero' }),
    defineField({ name: 'heroSubtitle', title: 'Subtítulo / Descrição', type: 'text', rows: 3, group: 'hero' }),
    defineField({ name: 'heroBtnPrimary', title: 'Botão Principal', type: 'string', group: 'hero', initialValue: 'Ver Coleção' }),
    defineField({ name: 'heroBtnSecondary', title: 'Botão Secundário', type: 'string', group: 'hero', initialValue: 'Nossa História' }),
    defineField({ name: 'heroStat1Number', title: 'Estatística 1 — Número (ex: +2k)', type: 'string', group: 'hero' }),
    defineField({ name: 'heroStat1Label', title: 'Estatística 1 — Rótulo (ex: Clientes felizes)', type: 'string', group: 'hero' }),
    defineField({ name: 'heroStat2Number', title: 'Estatística 2 — Número', type: 'string', group: 'hero' }),
    defineField({ name: 'heroStat2Label', title: 'Estatística 2 — Rótulo', type: 'string', group: 'hero' }),
    defineField({ name: 'heroStat3Number', title: 'Estatística 3 — Número', type: 'string', group: 'hero' }),
    defineField({ name: 'heroStat3Label', title: 'Estatística 3 — Rótulo', type: 'string', group: 'hero' }),

    // ── SOBRE ──────────────────────────────────────────
    defineField({ name: 'aboutTitle', title: 'Título da Seção Sobre', type: 'string', group: 'sobre' }),
    defineField({ name: 'aboutTitleHighlight', title: 'Parte em Destaque do Título', type: 'string', group: 'sobre' }),
    defineField({ name: 'aboutText1', title: 'Parágrafo 1', type: 'text', rows: 4, group: 'sobre' }),
    defineField({ name: 'aboutText2', title: 'Parágrafo 2', type: 'text', rows: 4, group: 'sobre' }),
    defineField({ name: 'aboutStat1Number', title: 'Estatística 1 — Número (ex: 5+)', type: 'string', group: 'sobre' }),
    defineField({ name: 'aboutStat1Label', title: 'Estatística 1 — Rótulo (ex: Anos de experiência)', type: 'string', group: 'sobre' }),
    defineField({ name: 'aboutStat2Number', title: 'Estatística 2 — Número', type: 'string', group: 'sobre' }),
    defineField({ name: 'aboutStat2Label', title: 'Estatística 2 — Rótulo', type: 'string', group: 'sobre' }),
    defineField({ name: 'aboutStat3Number', title: 'Estatística 3 — Número', type: 'string', group: 'sobre' }),
    defineField({ name: 'aboutStat3Label', title: 'Estatística 3 — Rótulo', type: 'string', group: 'sobre' }),
    defineField({ name: 'aboutStat4Number', title: 'Estatística 4 — Número', type: 'string', group: 'sobre' }),
    defineField({ name: 'aboutStat4Label', title: 'Estatística 4 — Rótulo', type: 'string', group: 'sobre' }),

    // ── DEPOIMENTOS ────────────────────────────────────
    defineField({
      name: 'testimonials',
      title: 'Depoimentos',
      type: 'array',
      group: 'depoimentos',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'name', title: 'Nome', type: 'string' }),
          defineField({ name: 'initials', title: 'Iniciais (ex: AC)', type: 'string' }),
          defineField({ name: 'location', title: 'Cidade / Estado', type: 'string' }),
          defineField({ name: 'text', title: 'Depoimento', type: 'text', rows: 3 }),
        ],
        preview: { select: { title: 'name', subtitle: 'location' } },
      }],
    }),

    // ── CONTATO ────────────────────────────────────────
    defineField({ name: 'phone', title: 'Telefone / WhatsApp', type: 'string', group: 'contato' }),
    defineField({ name: 'email', title: 'E-mail de Contato', type: 'string', group: 'contato' }),
    defineField({ name: 'businessHours', title: 'Horário de Atendimento', type: 'string', group: 'contato', initialValue: 'Seg-Sex: 9h às 18h | Sáb: 9h às 14h' }),
    defineField({ name: 'whatsappLink', title: 'Link WhatsApp (ex: https://wa.me/5511999999999)', type: 'url', group: 'contato' }),
    defineField({ name: 'instagram', title: 'Link do Instagram', type: 'url', group: 'contato' }),
    defineField({ name: 'facebook', title: 'Link do Facebook', type: 'url', group: 'contato' }),

    // ── FRETE ──────────────────────────────────────────
    defineField({ name: 'freeShippingThreshold', title: 'Frete Grátis acima de (R$)', type: 'number', group: 'frete' }),
    defineField({
      name: 'acceptedPayments',
      title: 'Formas de Pagamento',
      type: 'array',
      group: 'frete',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Pix', value: 'Pix' },
          { title: 'Cartão de Crédito', value: 'Cartão' },
          { title: 'Boleto', value: 'Boleto' },
          { title: 'Débito', value: 'Débito' },
        ],
        layout: 'grid',
      },
    }),
  ],
  preview: {
    select: { title: 'storeName' },
    prepare: ({ title }: { title?: string }) => ({ title: title ?? 'Configurações da Loja' }),
  },
});
