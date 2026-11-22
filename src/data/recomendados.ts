import { AFFILIATE, amazonSearchUrl } from './site';

/** Productos comprables que pueden aparecer en listas de playbooks / Prepárate. */
export interface Rec {
  id: string;
  re: RegExp;
  nombre: string;
  page?: string;
  query: string;
}

export const RECOMENDADOS: Rec[] = [
  { id: 'estacion', re: /estaci[oó]n de energ[ií]a/i, nombre: 'Estación de energía portátil', page: '/imprescindibles/estaciones-de-energia-portatiles/', query: 'estación de energía portátil' },
  { id: 'filtro', re: /filtro de agua|potabiliz/i, nombre: 'Filtro de agua', page: '/imprescindibles/filtros-de-agua/', query: 'filtro de agua portátil' },
  { id: 'linterna-frontal', re: /linterna frontal|frontal por persona/i, nombre: 'Linterna frontal', page: '/imprescindibles/linternas-frontales/', query: 'linterna frontal emergencia' },
  { id: 'linterna', re: /\blinterna/i, nombre: 'Linterna', page: '/imprescindibles/linternas-frontales/', query: 'linterna LED emergencia' },
  { id: 'powerbank', re: /powerbank|bater[ií]a externa/i, nombre: 'Powerbank', page: '/imprescindibles/powerbanks/', query: 'powerbank 20000 mAh' },
  { id: 'walkie', re: /walkie|PMR\s*446/i, nombre: 'Walkie-talkie PMR446', query: 'walkie talkie PMR446' },
  { id: 'radio', re: /\bradio\b/i, nombre: 'Radio de emergencia', page: '/imprescindibles/radios-de-emergencia/', query: 'radio emergencia manivela' },
  { id: 'bidon', re: /\bbid[oó]n|\bgarrafa/i, nombre: 'Bidón de agua', page: '/imprescindibles/almacenar-agua/', query: 'bidón agua alimentario 20 litros' },
  { id: 'racion', re: /\braci[oó]n(es)?\b|\bDatrex\b|\bConvar\b|comida de larga duraci[oó]n/i, nombre: 'Comida de larga duración', page: '/imprescindibles/comida-larga-duracion/', query: 'ración emergencia larga duración' },
  { id: 'hornillo', re: /hornillo/i, nombre: 'Hornillo de camping', query: 'hornillo camping cartuchos' },
];

export function findRec(text: string): Rec | undefined {
  const plain = text.replace(/<[^>]+>/g, '');
  return RECOMENDADOS.find((r) => r.re.test(plain));
}

export function recAmazonHref(r: Rec) {
  return amazonSearchUrl(r.query);
}

export function recRel() {
  return AFFILIATE.rel;
}
