/** Las 12 categorías de "Prepárate". Cada una tiene página Básico y Avanzado (src/content/preparate). */
export interface Categoria {
  id: string;
  nombre: string;
  icon: string; // nombre lucide (kebab-case)
  photo: string; // clave en data/photos.ts
  claim: string; // frase corta para tarjetas
}
export const CATEGORIAS: Categoria[] = [
  { id: 'agua', nombre: 'Agua', icon: 'droplets', photo: 'agua', claim: 'Cuánta guardar, cómo rotarla y cómo potabilizarla.' },
  { id: 'alimentos', nombre: 'Alimentos', icon: 'wheat', photo: 'alimentos', claim: 'Despensa que no necesita nevera ni fuego.' },
  { id: 'energia-y-luz', nombre: 'Energía y luz', icon: 'zap', photo: 'energia', claim: 'Linternas, pilas, powerbanks y estaciones solares.' },
  { id: 'comunicaciones', nombre: 'Comunicaciones', icon: 'radio', photo: 'radio', claim: 'Radio, plan de contacto y qué hacer sin cobertura.' },
  { id: 'salud-y-botiquin', nombre: 'Salud y botiquín', icon: 'heart-pulse', photo: 'salud', claim: 'Botiquín, medicación crónica y primeros auxilios.' },
  { id: 'refugio-y-temperatura', nombre: 'Refugio, calor y frío', icon: 'house', photo: 'refugio', claim: 'Mantener la casa habitable sin calefacción ni aire.' },
  { id: 'higiene-y-saneamiento', nombre: 'Higiene y saneamiento', icon: 'hand-heart', photo: 'higiene', claim: 'Aseo, basura y WC cuando no hay agua.' },
  { id: 'documentos-y-dinero', nombre: 'Documentos y dinero', icon: 'file-lock-2', photo: 'documentos', claim: 'Efectivo, copias y tus datos a salvo.' },
  { id: 'seguridad', nombre: 'Seguridad en casa', icon: 'shield-check', photo: 'seguridad', claim: 'Incendios, gas, CO y una casa que no se vuelva trampa.' },
  { id: 'mochila-72h', nombre: 'Mochila de evacuación 72 h', icon: 'backpack', photo: 'mochila', claim: 'Lo que coges si tienes 10 minutos para salir.' },
  { id: 'mascotas', nombre: 'Mascotas', icon: 'paw-print', photo: 'mascotas', claim: 'Comida, agua, papeles y transportín listos.' },
  { id: 'familia', nombre: 'Niños, mayores y dependientes', icon: 'users', photo: 'familia', claim: 'Bebés, personas mayores y quien depende de un enchufe.' },
];
export const catById = (id: string) => CATEGORIAS.find((c) => c.id === id)!;

export const GRUPOS_PLAYBOOK = {
  suministros: { nombre: 'Cortes de suministro', icon: 'plug-zap', desc: 'Luz, agua, internet, comida: cuando falla lo que damos por hecho.' },
  naturaleza: { nombre: 'Fenómenos naturales', icon: 'cloud-lightning', desc: 'DANA, terremotos, incendios, calor y frío extremos.' },
  sociedad: { nombre: 'Crisis tecnológicas y sociales', icon: 'radiation', desc: 'Ciberataques, emergencias nucleares, pandemias y disturbios.' },
} as const;
export type GrupoPlaybook = keyof typeof GRUPOS_PLAYBOOK;
