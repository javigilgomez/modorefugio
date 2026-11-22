/**
 * Configuración central de Modo Refugio.
 * Todo lo que el dueño tiene que cambiar al crear cuentas está aquí.
 */
export const SITE = {
  name: 'Modo Refugio',
  url: 'https://modorefugio.com',
  tagline: 'Prepárate sin miedo. Actúa con un plan.',
  description:
    'La guía en español para prepararte ante apagones, DANAs, olas de calor, ciberataques y cualquier emergencia. Listas básicas, nivel avanzado y playbooks descargables para el momento en que pasa.',
  locale: 'es_ES',
  lang: 'es',
  social: {
    x: 'https://x.com/modorefugio',
    instagram: 'https://www.instagram.com/modorefugio',
    youtube: 'https://www.youtube.com/@modorefugio',
    pinterest: 'https://www.pinterest.es/modorefugio',
    tiktok: 'https://www.tiktok.com/@modorefugio',
  },
  /** Fecha de la última revisión editorial general */
  revisado: '2026-11-22',
};

/** Amazon Afiliados. Cambia el tag cuando Amazon apruebe la cuenta. */
export const AFFILIATE = {
  enabled: true,
  amazonTag: 'modorefugio-21',
  amazonDomain: 'www.amazon.es',
  rel: 'sponsored nofollow noopener',
  /** Texto obligatorio del Acuerdo Operativo de Amazon Afiliados (versión ES). */
  amazonDisclosure:
    'En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.',
};

/** Google AdSense: desactivado hasta que la cuenta esté aprobada. */
export const ADS = {
  enabled: false,
  client: 'ca-pub-0000000000000000',
  slots: { inArticle: '0000000000', sidebar: '0000000000', footer: '0000000000' },
};

/** Newsletter: proveedor pendiente (MailerLite o Brevo). */
export const NEWSLETTER = {
  enabled: false, // cuando haya proveedor, poner true y rellenar action
  provider: 'PENDIENTE',
  action: '#',
  leadMagnet: '/pdf/kit-basico-apagon.pdf',
};

/** Datos del titular (LSSI). Rellenar antes de publicar. */
export const OWNER = {
  nombre: '[NOMBRE Y APELLIDOS O RAZÓN SOCIAL DEL TITULAR]',
  nif: '[NIF/CIF]',
  direccion: '[DIRECCIÓN POSTAL O APARTADO DE CORREOS]',
  email: '[EMAIL DE CONTACTO, p. ej. hola@modorefugio.com]',
  registro: '[DATOS REGISTRALES, si es sociedad]',
};

export function amazonSearchUrl(query: string) {
  const u = new URL(`https://${AFFILIATE.amazonDomain}/s`);
  u.searchParams.set('k', query);
  u.searchParams.set('tag', AFFILIATE.amazonTag);
  return u.toString();
}
export function amazonAsinUrl(asin: string) {
  return `https://${AFFILIATE.amazonDomain}/dp/${asin}?tag=${AFFILIATE.amazonTag}`;
}
