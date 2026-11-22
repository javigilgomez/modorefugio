---
title: "Comunicaciones nivel Prepper: radio HF, CB, LoRa y licencias en España"
description: "Cómo comunicarte cuando cae todo: licencia de radioaficionado en España, HF y VHF, banda ciudadana CB-27, Meshtastic en LoRa, mensajeros satelitales y el plan PACE."
categoria: comunicaciones
nivel: prepper
resumen: "Con el PMR446 hablas con tu calle. Con HF hablas con otro continente. Pero esto no se improvisa: tiene examen, licencia y práctica. Lo bueno es que existe una red de radioaficionados que apoya a Protección Civil."
checklist:
  - { item: "Walkie-talkies PMR446 para toda la familia", nota: "De uso libre: no necesitan licencia." }
  - { item: "Radio CB de 27 MHz homologada con antena", nota: "Uso común: no requiere licencia. Canal 9 reservado a emergencias." }
  - { item: "Transceptor HF para banda de aficionados", nota: "Requiere certificado y autorización de radioaficionado." }
  - { item: "Antena dipolo HF de hilo y coaxial", nota: "Ligera y barata: una antena de hilo bien colgada vale más que una cara mal puesta." }
  - { item: "Batería LiFePO4 de 12 V para alimentar la estación de radio" }
  - { item: "Nodos Meshtastic LoRa con antena", nota: "Mensajes de texto sin red móvil: límite de potencia y duty cycle." }
  - { item: "Receptor de radio de onda corta SW de buen rendimiento" }
  - { item: "Receptor SDR para escuchar frecuencias", nota: "Solo escuchar: no emitas." }
  - { item: "Mensajero satelital tipo Garmin inReach", nota: "Funciona sin cobertura móvil. Pago de suscripción." }
  - { item: "Bolsa Faraday para un equipo de repuesto" }
  - { item: "Libreta con frecuencias, canales y plan PACE", nota: "Primario, Alternativo, Contingencia, Emergencia." }
productos: []
comparativas: [radios-de-emergencia]
playbooks: [caida-mundial-de-internet, llamarada-solar, apagon, ciberataque]
faq:
  - q: "¿Necesito licencia para usar el walkie?"
    a: "No para los PMR446 (de uso libre en la UE). Para HF y VHF/UHF de aficionados necesitas aprobar un examen y obtener la autorización de radioaficionado."
  - q: "¿Qué es REMER?"
    a: "Es la Red Nacional de Radio de Emergencia: radioaficionados voluntarios que apoyan las comunicaciones de Protección Civil cuando las redes habituales fallan. Para colaborar hay que tener autorización de radioaficionado en vigor."
fuentes:
  - { nombre: "Ministerio para la Transformación Digital: exámenes de radioaficionado", url: "https://digital.gob.es/telecomunicaciones-infraestructuras-digitales/areas-interes/espectro-radioelectrico/radioaficionados-cb27/examenes-radioaficionado" }
  - { nombre: "Unión de Radioaficionados Españoles (URE): obtener la autorización", url: "https://www.ure.es/obtener-autorizacion/" }
  - { nombre: "Protección Civil: REMER (Red de Radio de Emergencia)", url: "https://www.proteccioncivil.es/coordinacion/redes/remer" }
  - { nombre: "BOE: interfaz reglamentada IR-10 de banda ciudadana CB-27", url: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2015-9309" }
  - { nombre: "Meshtastic: ajustes de radio por región", url: "https://meshtastic.org/docs/overview/radio-settings/" }
actualizado: 2026-11-22
---

## Una escalera de alcance

Comunicarse es una escalera, y cada peldaño tiene su regla:

| Tecnología | Alcance típico | ¿Licencia en España? |
|---|---|---|
| PMR446 | cientos de metros a pocos km | No |
| CB 27 MHz | pocos a decenas de km | No (equipo homologado, hasta 4 W) |
| LoRa / Meshtastic | km a decenas de km en cadena | No (869 MHz, con límites) |
| VHF/UHF y HF de aficionados | de local a otro continente | **Sí**: examen y autorización |
| Satélite (inReach) | todo el planeta | No (suscripción) |

## Radioafición: la red que sigue funcionando

La banda HF rebota en la ionosfera y permite comunicar a cientos o miles de kilómetros con una antena de hilo y una batería. Es el sistema que usan los radioaficionados en catástrofes. **En España** hay que aprobar un examen del Ministerio para la Transformación Digital (electricidad y normativa) y solicitar después la autorización con tu indicativo. La URE ofrece información y cursos. Una estación fija requiere además licencia propia.

> **En España:** emitir en bandas de aficionados sin autorización es una infracción. Escuchar, en cambio, es libre. Y existe **REMER**, la Red Nacional de Radio de Emergencia, que organiza a radioaficionados voluntarios para apoyar a Protección Civil.

## CB y LoRa: sin papeles

La banda ciudadana CB-27 es de **uso común**: sin licencia, con equipo homologado y hasta 4 W; el canal 9 se reserva a emergencias. **Meshtastic** funciona en 869 MHz en la UE, también sin licencia, con límites de potencia y de ocupación de canal. Sirve para mensajes de texto en tu barrio o en el valle, no para videollamadas.

## La tormenta solar y la radio

Una gran tormenta geomagnética degrada las comunicaciones HF y el GPS durante horas o días. Ahí un receptor de onda corta, un transmisor VHF local y un **plan PACE** (primario, alternativo, contingencia, emergencia) te dan opciones. Escribe tus frecuencias en papel.

## Satélite y mucha prudencia

Un mensajero satelital tipo inReach envía mensajes y un SOS desde cualquier punto, sin red móvil. Es una póliza de seguro con cuota mensual. Si la red eléctrica se cae, necesitarás cargarlo: de ahí el powerbank solar.

## Practicar antes

Una radio que no has usado no vale nada. Reservad una tarde al año para hacer un simulacro de comunicación con la familia. Los radioaficionados locales suelen recibir con los brazos abiertos a los novatos.
