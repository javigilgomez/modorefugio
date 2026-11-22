import type { ImageMetadata } from 'astro';
import credits from './photo-credits.json';
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp}', { eager: true });
const map: Record<string, ImageMetadata> = {};
for (const [p, mod] of Object.entries(files)) {
  const key = p.split('/').pop()!.replace(/\.(jpe?g|png|webp)$/, '');
  map[key] = mod.default;
}
export interface Credit { autor: string; autorUrl?: string; fuente: string; url: string; licencia: string; licenciaUrl?: string; alt: string }
const CR = credits as Record<string, Credit>;
export function photo(key: string): { src: ImageMetadata; alt: string; credit?: Credit } {
  const src = map[key] ?? map['hero'] ?? Object.values(map)[0];
  if (!src) throw new Error('No hay fotos en src/assets/photos');
  const credit = CR[key] ?? CR['hero'];
  return { src, alt: credit?.alt ?? '', credit };
}
export const allCredits = () => Object.entries(CR).filter(([k]) => map[k]);
