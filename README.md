# Modo Refugio

Sitio estático en español (España + Latinoamérica) de preparación ante emergencias: [modorefugio.com](https://modorefugio.com).

Stack: [Astro](https://astro.build) + MDX, solo estático. Se puede desplegar en Cloudflare Pages (conectar el repositorio; no hace falta cuenta para desarrollar en local).

## Cómo está organizado

La información se parte en **antes** y **cuando pasa**, inspirado en sitios como [ready.gov](https://www.ready.gov) y [theprepared.com](https://theprepared.com) (preparación / during an emergency).

| Sección | URL | Qué es |
|---|---|---|
| **The Playbook** | `/playbook/` | Qué hacer **cuando está pasando**: 15 planes por tipo de evento, con escena inicial, checklist por fases y PDF A4. |
| **Prepárate** | `/preparate/` | Qué tener **antes**. 12 categorías, cada una con nivel **Básico** (`/preparate/<cat>/`) y **Avanzado** (`/preparate/<cat>/avanzado/`). También por riesgo: `/preparate/riesgo/<evento>/`. |
| **Empieza aquí** | `/empieza-aqui/` | Onboarding: kit en una tarde, kit de 72 h de la UE, test «¿Qué nivel eres?». |
| **Imprescindibles** | `/imprescindibles/` | El equipo concreto (linterna, radio, powerbank…). Las URLs antiguas `/equipo/*` redirigen aquí. |
| **Herramientas** | `/herramientas/` | Calculadoras de agua/comida y de batería. |
| **Descargas** | `/descargas/` | Todos los PDF (playbooks, checklists, kit básico de apagón, pack completo). |

Los playbooks enlazan a las categorías de Prepárate y a Imprescindibles, y al revés.

## Playbooks (15)

1. Apagón — La ciudad se queda a oscuras (`/playbook/apagon/`)
2. DANA e inundación — El agua entra en casa
3. Caída mundial de internet — La pantalla se apaga (antes «Sin internet»; `/playbook/sin-internet/` redirige)
4. Ciberataque — Tus archivos, rehenes
5. Terremoto — El suelo se mueve
6. Incendio forestal — El humo llega ya
7. Ola de calor — El termómetro no baja
8. Ola de frío y nevada — Se va la calefacción
9. Corte de agua — El grifo se queda mudo
10. Evacuación — Solo tienes diez minutos
11. Emergencia nuclear — Quédate dentro, ahora
12. Pandemia — Empieza otra vez
13. Desabastecimiento — Los lineales están vacíos
14. Disturbios — La calle no es segura
15. La IA toma el control — Cuando nada es real (enfoque práctico: deepfakes, estafas de voz, fallos de sistemas automáticos; no es ciencia ficción)

Cada playbook tiene un campo `nombre` (título corto), un `subtitle` (gancho de 4–6 palabras bajo el H1, en tarjetas y PDF) y un `title` SEO que combina ambos.

## Desarrollo

```bash
cd site
npm install
npm run dev          # http://localhost:4321
npm run build        # astro build + PDFs A4 y capturas OG (Playwright + Chrome)
npm run preview      # sirve dist/ en el puerto 4321
npm run screenshots  # capturas desktop/móvil; THEME=dark para el modo oscuro
```

Requisitos del postbuild: Google Chrome o Chromium (`channel: 'chrome'` apunta a `/usr/bin/google-chrome`). Si no hay navegador, el sitio se construye igual y se omiten PDF y OG.

## Configuración (antes de publicar)

Todo lo que hay que cambiar al crear cuentas está en `src/data/site.ts`:

- `AFFILIATE.amazonTag` — ahora `modorefugio-21`. Los botones dicen «Ver precio en Amazon» (sin precios inventados) y llevan `rel="sponsored nofollow noopener"`.
- `ADS.enabled` — `false` hasta tener cuenta y un CMP certificado por Google (obligatorio en el EEE antes de activar AdSense).
- `NEWSLETTER` — proveedor pendiente; si está desactivado, el formulario ofrece la descarga directa del PDF «Kit básico apagón».
- `OWNER.email` — ahora `modorefugio@proton.me`. Nombre, NIF y domicilio: pendientes (TODO en el código); hay que rellenarlos antes de publicar en serio (LSSI).

## Marca y modo oscuro

Paleta y tokens en `src/styles/tokens.css` (sincronizables con `../brand/` vía `scripts/sync-brand.sh`). Tipografías autoalojadas: Bricolage Grotesque (titulares), Inter (cuerpo), Special Elite (escenas de los playbooks).

El modo oscuro («Refugio también de noche») sigue `prefers-color-scheme`, tiene un interruptor en la cabecera y se guarda en `localStorage` (`mr-theme`) sin parpadeo al cargar.

## Contenido y SEO

- Colecciones en `src/content/` (playbooks, preparate, equipo). El esquema está en `src/content.config.ts`.
- Fotos en `src/assets/photos/`, créditos en `src/data/photo-credits.json` y `CREDITS.md`. Astro Image las sirve en WebP.
- `trailingSlash: 'always'`, idioma `es`, sitemap (sin `/imprimir/` ni `/og/`), `robots.txt`, Schema.org (Article, HowTo, FAQPage, BreadcrumbList, ItemList), Open Graph.

## Huecos conocidos

- Las fotos locales ronda los 1024 px de ancho (límite de Openverse / CDNs de origen).
- Datos del titular legales pendientes.
- Enlaces de Amazon: ficha directa `/dp/ASIN` con el tag de afiliado cuando el ASIN está verificado en amazon.es; si no, se mantiene la búsqueda.
- Newsletter y AdSense desactivados (hace falta proveedor y un CMP certificado).
- Algunas fuentes externas (p. ej. un PDF de Interior) bloquean a los robots; hay que revisarlas a mano de vez en cuando.
- El artículo de Euronews citado en documentos/dinero devolvió 406 en una comprobación automática.
