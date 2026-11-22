import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const fuente = z.object({ nombre: z.string(), url: z.string().url() });
const paso = z.union([
  z.string(),
  z.object({ t: z.string(), d: z.string().optional(), critico: z.boolean().optional() }),
]);

const playbooks = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/playbooks' }),
  schema: z.object({
    title: z.string(), // H1 / SEO title
    nombre: z.string(), // nombre corto (H1 / tarjetas / nav): "Apagón"
    subtitle: z.string(), // gancho de 4–6 palabras bajo el H1
    description: z.string(),
    icon: z.string(),
    photo: z.string(),
    grupo: z.enum(['suministros', 'naturaleza', 'sociedad']),
    orden: z.number(),
    resumen: z.string(), // 1 frase: qué hacer en lo esencial
    escena: z.object({ lugar: z.string(), hora: z.string(), texto: z.string(), gancho: z.string() }).optional(), // entradilla narrativa (thriller)
    senales: z.array(z.string()), // cómo saber que está pasando / cuándo activar
    primero: z.array(z.string()).min(3).max(5), // "Lo primero" (3-5 acciones clave en grande)
    fases: z.array(z.object({ titulo: z.string(), cuando: z.string(), pasos: z.array(paso) })),
    noHagas: z.array(z.string()),
    despues: z.array(z.string()).optional(),
    prepara: z.object({ basico: z.array(z.string()), avanzado: z.array(z.string()) }),
    categorias: z.array(z.string()),
    comparativas: z.array(z.string()).default([]),
    latam: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    fuentes: z.array(fuente),
    actualizado: z.coerce.date(),
  }),
});

const preparate = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/preparate' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categoria: z.string(),
    nivel: z.enum(['basico', 'avanzado', 'prepper']),
    resumen: z.string(),
    checklist: z.array(z.object({ item: z.string(), cantidad: z.string().optional(), nota: z.string().optional() })),
    productos: z.array(z.string()).default([]),
    comparativas: z.array(z.string()).default([]),
    playbooks: z.array(z.string()).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    fuentes: z.array(fuente).default([]),
    actualizado: z.coerce.date(),
  }),
});

const equipo = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/equipo' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    photo: z.string(),
    nivel: z.enum(['basico', 'avanzado', 'ambos']),
    categoria: z.string(),
    intro: z.string(),
    productos: z.array(z.string()),
    criterios: z.array(z.object({ nombre: z.string(), detalle: z.string() })),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    fuentes: z.array(fuente).default([]),
    actualizado: z.coerce.date(),
  }),
});

export const collections = { playbooks, preparate, equipo };
