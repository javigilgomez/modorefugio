---
title: "Comunicaciones de emergencia avanzadas: walkies, onda corta y redundancia"
description: "Cómo comunicarte cuando cae la red móvil: walkie-talkies PMR446, radio con onda corta, redes en malla LoRa, radioafición y una segunda línea de otro operador."
categoria: comunicaciones
nivel: avanzado
resumen: "Redundancia: segunda línea de otro operador, walkie-talkies PMR446 para la familia, radio con onda corta para información y, si quieres ir más allá, radioafición o redes en malla."
checklist:
  - { item: "Segunda línea (eSIM) de un operador distinto" }
  - { item: "Walkie-talkies PMR446 para la familia", nota: "Uso libre sin licencia en la UE. Alcance corto." }
  - { item: "Radio con onda corta (SW)" }
  - { item: "SAI para router y ONT" }
  - { item: "Frecuencias y canales acordados apuntados en papel" }
  - { item: "Opcional: licencia de radioaficionado o nodo LoRa (Meshtastic)" }
productos: [kaito-ka500, midland-er300]
comparativas: [radios-de-emergencia]
playbooks: [caida-mundial-de-internet, apagon, terremoto]
faq:
  - q: "¿Necesito licencia para usar walkie-talkies?"
    a: "Los equipos PMR446 homologados son de uso libre en la Unión Europea, sin licencia. Para equipos de radioaficionado sí necesitas una licencia, que en España se obtiene tras un examen."
  - q: "¿Qué es Meshtastic?"
    a: "Un proyecto de código abierto que usa pequeños dispositivos LoRa para enviar mensajes de texto entre ellos formando una red en malla, sin internet ni red móvil. En Europa funciona en la banda de 868 MHz de uso libre."
fuentes:
  - { nombre: "Protección Civil: ES-Alert", url: "https://www.proteccioncivil.es/coordinacion/redes/ran/public-warning-system" }
actualizado: 2026-11-22
---

## Los cuatro niveles de redundancia

1. **Otro operador.** Las caídas suelen afectar a una red concreta. Una eSIM barata de otro operador es la mejora más simple.
2. **Walkie-talkies PMR446.** Para coordinar la familia en el barrio o en una evacuación. Acordad canal y subtono de antemano.
3. **Radio con onda corta.** Cuando las emisoras locales no emiten, la onda corta permite escuchar emisoras de otras regiones o países.
4. **Radioafición o malla LoRa.** Para quien quiere comunicación bidireccional a larga distancia. Requiere aprender y, en el caso de la radioafición, licencia.

## Practica antes

Haz una prueba al año: un sábado sin móvil, coordinándoos solo con walkies y el plan en papel. Descubriréis enseguida qué falla.
