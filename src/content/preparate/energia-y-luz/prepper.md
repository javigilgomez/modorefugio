---
title: "Energía nivel Prepper: solar aislada, LiFePO4 y generador dual-fuel"
description: "Cómo montar una instalación solar aislada con baterías LiFePO4, cuándo tiene sentido un generador dual-fuel, y la verdad sobre la jaula de Faraday y los pulsos electromagnéticos. Con notas de legalidad en España."
categoria: energia-y-luz
nivel: prepper
resumen: "Para dejar de depender de la red: solar con baterías LiFePO4 como pilar, un generador dual-fuel solo de apoyo (y siempre fuera de casa) y un poco de sentido común con el mito del EMP."
checklist:
  - { item: "Paneles solares rígidos o plegables de 400–800 W", nota: "Orientación sur, sin sombras entre las 10:00 y las 16:00." }
  - { item: "Regulador de carga MPPT compatible con tus paneles y baterías" }
  - { item: "Batería LiFePO4 de 12 V o 24 V con BMS", nota: "4.000+ ciclos, seguras y sin mantenimiento. Mide tu consumo antes de comprar." }
  - { item: "Inversor de onda pura dimensionado para tu pico de potencia" }
  - { item: "Cableado, fusibles y protecciones de tamaño correcto", nota: "Aquí es donde se producen los incendios. Si dudas, instalador." }
  - { item: "Generador inverter dual-fuel gasolina/GLP", nota: "Solo en exterior, a 3 m de ventanas y puertas." }
  - { item: "Conmutador de transferencia manual instalado por electricista", nota: "Evita que la corriente retroceda a la red y mate a un operario." }
  - { item: "Bidones de combustible homologados con estabilizador", nota: "Pocos litros, fuera de la vivienda y lejos del calor." }
  - { item: "Detector de monóxido de carbono cerca de cualquier equipo de combustión" }
  - { item: "Bolsa Faraday para radio, powerbank y dispositivos de repuesto", nota: "Protección barata ante un pulso electromagnético; no es prioridad uno." }
  - { item: "Linterna recargable y pilas para 6 meses de uso", nota: "Con la instalación solar o sin ella." }
productos: []
comparativas: [estaciones-de-energia-portatiles, powerbanks]
playbooks: [apagon, llamarada-solar, ola-de-frio, ola-de-calor]
faq:
  - q: "¿Necesito autorización para una instalación solar aislada de la red?"
    a: "Las instalaciones que no se conectan a la red quedan fuera del régimen de autoconsumo conectado (RD 244/2019), pero tienen que cumplir el Reglamento Electrotécnico de Baja Tensión. Consulta con un instalador autorizado."
  - q: "¿Una tormenta solar fríe mi móvil?"
    a: "No es lo normal. Las tormentas geomagnéticas afectan sobre todo a líneas eléctricas largas y transformadores, al GPS y a las comunicaciones HF. Un aparato pequeño desconectado no suele sufrir daños."
fuentes:
  - { nombre: "Real Decreto 244/2019: autoconsumo de energía eléctrica", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2019-5089" }
  - { nombre: "NOAA SWPC: escalas de meteorología espacial", url: "https://www.swpc.noaa.gov/noaa-scales-explanation" }
  - { nombre: "ESA: meteorología espacial y red eléctrica", url: "https://swe.ssa.esa.int/pow_pow" }
actualizado: 2026-11-22
---

## Primero, mide

El error más común es comprar paneles por impulso. Haz una lista de lo que quieres alimentar (nevera, router, luces, portátil, bomba) con su potencia en vatios y las horas de uso al día. Suma y tendrás los **Wh diarios**. Un hogar que solo quiere luces, router, móviles y nevera eficiente se mueve entre 1 y 2 kWh/día; con aire acondicionado se dispara.

## El pilar: solar + LiFePO4

Una instalación aislada tiene cuatro piezas: **paneles**, **regulador MPPT**, **baterías** e **inversor**. Las baterías de litio-ferrofosfato (LiFePO4) han ganado la partida a las de plomo para uso doméstico: más ciclos, más seguras, no necesitan mantenimiento. Dimensiona con margen: un día sin sol no es un día sin consumo.

> **En España:** una instalación aislada, que no se conecta a la red, no sigue el régimen de autoconsumo conectado del RD 244/2019, pero sí el Reglamento Electrotécnico de Baja Tensión. Para la parte de cableado y protecciones, usa un **instalador autorizado**: los incendios de instalaciones caseras empiezan casi siempre en un cable mal calculado.

## Generador dual-fuel: de apoyo, no de pilar

Un generador inverter que funciona con gasolina y GLP es un buen respaldo de días nublados y de cargas grandes (bomba, taladro, horno eléctrico). Reglas innegociables:

- **Siempre en el exterior**, lejos de ventanas, puertas y tomas de aire. Cada año hay intoxicaciones por monóxido de carbono en garajes y terrazas cerradas.
- **Nunca enchufes el generador a una toma de casa** sin un conmutador de transferencia instalado por un electricista: puedes electrocutar a un técnico de la compañía.
- Combustible: poco, en bidones homologados, estabilizado y rotado, en un cobertizo exterior. El almacenamiento doméstico tiene límites y riesgos reales.
- Ruido: piensa en los vecinos. Un inverter silencioso se agradece.

## EMP y jaula de Faraday: la dosis de realidad

Un pulso electromagnético de origen nuclear a gran altitud es un escenario de probabilidad muy baja. Las **tormentas solares** (ver el playbook *Llamarada solar*) afectan sobre todo a **conductores muy largos**: líneas de alta tensión, oleoductos, transformadores. Tu radio de bolsillo desconectada no se achicharra. Aun así, una **bolsa Faraday** cuesta poco y te permite guardar de reserva una radio, un powerbank y un cargador. Pruébala: mete dentro un móvil encendido y llámale; si suena, no sirve. Y no pongas aquí tu presupuesto: primero, baterías y agua.

## Lo que realmente salva noches

Una linterna frontal por persona, pilas de repuesto, un powerbank cargado y una radio. La instalación solar es el siguiente paso, no el primero.
