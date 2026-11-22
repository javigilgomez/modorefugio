---
title: "Energía de emergencia avanzada: estaciones portátiles, paneles solares y SAI"
description: "Cómo elegir y dimensionar una estación de energía portátil y paneles solares para un apagón: cálculo de Wh, qué aparatos puedes mantener y cuánto tiempo, y alternativas como el SAI o el generador."
categoria: energia-y-luz
nivel: avanzado
resumen: "Calcula tu consumo en vatios-hora, elige una estación de energía LiFePO4 a la medida (de 250 Wh para comunicaciones a 1 kWh para nevera o equipos médicos) y añade un panel solar para recargarla."
checklist:
  - { item: "Lista de aparatos críticos con su potencia (W) y horas de uso" }
  - { item: "Estación de energía portátil LiFePO4", cantidad: "250–1.000 Wh", nota: "Según tu cálculo de consumo." }
  - { item: "Panel solar plegable compatible", cantidad: "100–200 W" }
  - { item: "SAI (UPS) para router y ONT de fibra", nota: "Mantiene internet mientras haya red en la calle." }
  - { item: "Cables y adaptadores: XT60/MC4, USB-C PD, mechero de coche" }
  - { item: "Luces LED recargables por estancia" }
  - { item: "Plan de carga: recargar la estación al 80–100 % cada 3 meses" }
productos: [ecoflow-river-2, bluetti-eb3a, jackery-explorer-300-plus, ecoflow-river-2-pro, anker-solix-c1000]
comparativas: [estaciones-de-energia-portatiles, powerbanks]
playbooks: [apagon, ola-de-calor, ola-de-frio, caida-mundial-de-internet]
faq:
  - q: "¿Puede una estación portátil mantener la nevera?"
    a: "Sí, si tiene capacidad y potencia suficientes. Mira la etiqueta energética de tu nevera (kWh/año): divídelo entre 365 para saber su consumo diario aproximado. Muchas neveras modernas consumen del orden de 0,5–1,5 kWh al día. Necesitarás una estación de al menos 1 kWh para un día completo, o conectarla a ratos."
  - q: "¿Estación de energía o generador de gasolina?"
    a: "La estación se usa dentro de casa, no hace ruido ni humos y se recarga con sol. El generador da más energía, pero solo puede usarse en el exterior, lejos de ventanas, por el riesgo de monóxido de carbono, y nunca debe conectarse a la instalación de la vivienda sin un conmutador instalado por un electricista."
  - q: "¿Por qué LiFePO4?"
    a: "Las baterías de litio-ferrofosfato soportan muchos más ciclos de carga y son más estables térmicamente que otras químicas de litio. Por eso se han convertido en el estándar de las estaciones de energía."
fuentes:
  - { nombre: "EcoFlow: especificaciones serie RIVER 2", url: "https://www.ecoflow.com/es/river-2-portable-power-station" }
  - { nombre: "WattLong: especificaciones de 30 estaciones de energía", url: "https://wattlong.com/models/" }
actualizado: 2026-11-22
---

## Paso 1: calcula tu consumo

La fórmula es sencilla: **vatios del aparato × horas de uso = vatios-hora (Wh)**. Súmalos y añade un 15–20 % de margen por pérdidas del inversor.

| Aparato | Potencia típica | Uso en 24 h | Energía |
|---|---|---|---|
| Router + ONT de fibra | 10–20 W | 24 h | 240–480 Wh |
| Móvil (carga completa) | — | 2 cargas | ≈ 40 Wh |
| Portátil | 40–60 W | 4 h | 160–240 Wh |
| Luces LED | 5 W cada una | 3 × 5 h | 75 Wh |
| Ventilador | 30–50 W | 6 h | 180–300 Wh |
| CPAP (sin humidificador) | variable | 8 h | consulta el manual |

*Potencias orientativas: mira la etiqueta de tu aparato o usa un medidor de consumo de enchufe.*

Prueba nuestra [calculadora de batería](/herramientas/calculadora-bateria/) para hacerlo en un minuto.

## Paso 2: elige la gama

- **250–300 Wh** (RIVER 2, EB3A, Explorer 300 Plus): comunicaciones, luz y móviles durante un día. Pesan 3,5–4,6 kg.
- **700–800 Wh** (RIVER 2 Pro): suma portátil, ventilador o nevera a ratos.
- **1 kWh o más** (SOLIX C1000 Gen 2): nevera, equipos médicos o teletrabajo durante un apagón largo.

Fíjate en dos cifras: la **capacidad** (Wh, cuánto tiempo) y la **potencia de salida** (W, qué aparatos puede mover). Un hervidor de 2.000 W no funcionará con una estación de 300 W aunque tenga batería.

## Paso 3: añade sol

Un panel plegable de 100–200 W permite recargar durante el día. Su producción real es menor que la nominal: depende de la orientación, la estación del año y las nubes. Como orientación, un panel de 100 W bien orientado en un día soleado puede aportar unos cientos de Wh. Coloca el panel en exterior, perpendicular al sol, y muévelo cada pocas horas.

## Paso 4: el SAI para internet

Un SAI (sistema de alimentación ininterrumpida) pequeño para el router y la ONT mantiene tu conexión durante un corte local de luz, siempre que la red del operador siga funcionando. Es la mejora más barata para quien teletrabaja.

## Seguridad

- Nunca conectes una estación o un generador a un enchufe de la casa para «alimentar la instalación».
- Generadores de combustión, solo en el exterior.
- Guarda las estaciones a temperatura moderada y con carga parcial si no las usas en meses.
