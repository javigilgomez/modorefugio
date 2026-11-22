#!/usr/bin/env bash
# Copia los activos de marca de ../brand al sitio. Ejecutar cuando cambie la marca.
set -e
B="$(dirname "$0")/../../brand"; S="$(dirname "$0")/.."
cp "$B/design-tokens.css" "$S/src/styles/tokens.css"
mkdir -p "$S/public/fonts" "$S/public/brand"
cp "$B"/fonts/*.woff2 "$S/public/fonts/"
cp "$B"/logo-*.svg "$B"/symbol-*.svg "$B"/icon.svg "$S/public/brand/"
cp "$B"/logo-horizontal.png "$B"/logo-stacked.png "$S/public/brand/" 2>/dev/null || true
cp "$B"/favicon.svg "$B"/favicon.ico "$B"/favicon-32.png "$B"/favicon-16.png "$S/public/"
cp "$B"/apple-touch-icon-180.png "$S/public/apple-touch-icon.png"
cp "$B"/icon-192.png "$B"/icon-512.png "$B"/icon-512-maskable.png "$S/public/"
mkdir -p "$S/public/og"
cp "$B/og-image.png" "$S/public/og/default.png"
cp "$B/site.webmanifest" "$S/public/" 2>/dev/null || true
echo "brand synced"
