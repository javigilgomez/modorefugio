export const stepText = (s: string | { t: string; d?: string; critico?: boolean }) => (typeof s === 'string' ? { t: s } : s);
export const fmtDate = (d: Date) => d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
export const strip = (s: string) => s.replace(/<[^>]+>/g, '');
/** "para ___" en títulos de Prepárate por riesgo */
export const PARA: Record<string, string> = {
  apagon: 'un apagón', 'dana-inundacion': 'una DANA o inundación', 'caida-mundial-de-internet': 'una caída mundial de internet',
  ciberataque: 'un ciberataque', terremoto: 'un terremoto', 'incendio-forestal': 'un incendio forestal', 'ola-de-calor': 'una ola de calor',
  'ola-de-frio': 'una ola de frío o nevada', 'corte-de-agua': 'un corte de agua', evacuacion: 'una evacuación',
  'emergencia-nuclear': 'una emergencia nuclear', pandemia: 'una pandemia', desabastecimiento: 'una crisis de abastecimiento', disturbios: 'disturbios', 'ia-toma-el-control': 'un abuso o un fallo de sistemas de inteligencia artificial',
};
