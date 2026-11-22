---
title: "Caída mundial de internet: qué hacer, paso a paso"
nombre: Caída mundial de internet
description: "Qué hacer si se cae internet a gran escala (o tu operador y la red móvil): cómo informarte, contactar con tu familia, pagar y moverte cuando la red desaparece."
icon: globe-lock
photo: internet
grupo: suministros
orden: 3
resumen: "Un día, la pantalla se queda en blanco para todo el mundo a la vez. Radio para informarte, SMS y llamadas para contactar, efectivo para pagar y un plan familiar en papel. El 112 funciona con cualquier operador que tenga cobertura."
escena:
  lugar: "Supermercado, a mediodía"
  hora: "11:58"
  texto: >-
    11:58. El datáfono pita en rojo: «Error de conexión». La cajera lo intenta otra vez. Detrás, la cola resopla. Sacas el móvil para pagar: la app gira y gira. Google no carga. Las redes, en blanco. Una señora pregunta en voz alta si a alguien le funciona algo. Nadie contesta. En el bar de al lado suben el volumen de la radio: «…una incidencia a escala mundial…». Llevas 8 euros en la cartera.
  gancho: >-
    Y tu hijo sale del colegio en una hora.
senales:
  - "Ninguna web ni app carga (ni buscadores, ni redes, ni mensajería), aunque el móvil marque cobertura."
  - "Ni datos ni llamadas en tu móvil, y tus vecinos tampoco tienen."
  - "Caen a la vez la fibra de casa y el móvil, o falla un operador entero."
  - "Los pagos con tarjeta y las apps dejan de funcionar."
primero:
  - "Comprueba si es tu dispositivo (reinicia) o es general (pregunta a otros)."
  - "Enciende la <strong>radio</strong>: si es un fallo grande, darán información."
  - "Prueba <strong>SMS y llamadas normales</strong>: la red telefónica puede seguir funcionando aunque internet no."
  - "Activa el <strong>plan familiar</strong>: puntos y horas de encuentro acordados."
fases:
  - titulo: Primera hora
    cuando: "0–1 h"
    pasos:
      - "Reinicia el router y el móvil; prueba en modo avión y vuelve a conectar."
      - "Si tienes dos SIM o un amigo con otro operador, comprueba si funciona otra red."
      - { t: "Para emergencias, el 112 puede funcionar con la red de otro operador aunque tu tarjeta no tenga cobertura propia. Pruébalo solo si es una emergencia real.", critico: true }
      - "Escucha la radio cada hora en punto para saber la causa y la duración prevista."
  - titulo: Si dura horas
    cuando: "1–24 h"
    pasos:
      - "Usa efectivo; los datáfonos y Bizum pueden no funcionar."
      - { t: "Si no consigues contactar con tu familia, aplicad el plan acordado: quién recoge a los niños y dónde os reunís.", critico: true }
      - "Si teletrabajas, guarda tu trabajo en local y avisa por otra vía cuando puedas."
      - "Usa mapas descargados sin conexión si necesitas desplazarte."
      - "Ahorra batería: puede que haya que esperar a que vuelva la red."
  - titulo: Si dura días
    cuando: "Más de 24 h"
    pasos:
      - "Acude a puntos de información oficiales (ayuntamiento, protección civil local) si los habilitan."
      - "Coordínate con tus vecinos: un tablón en el portal funciona."
      - "Si tienes walkie-talkies PMR446 (de uso libre en la UE), úsalos para hablar con familia y vecinos cercanos."
noHagas:
  - "Saturar la red con llamadas repetidas: usa SMS."
  - "Creer y reenviar rumores cuando vuelva la conexión sin comprobar la fuente."
  - "Desplazarte a buscar a alguien sin un punto de encuentro acordado: podéis cruzaros."
prepara:
  basico:
    - "Radio a pilas o de manivela"
    - "Plan de contacto familiar escrito en papel con teléfonos y puntos de encuentro"
    - "Efectivo en billetes pequeños"
    - "Mapas de tu zona descargados sin conexión"
  avanzado:
    - "Segunda línea móvil de otro operador (eSIM)"
    - "Walkie-talkies PMR446"
    - "SAI para el router y la ONT de fibra"
    - "Radio con onda corta para información internacional"
categorias: [comunicaciones, documentos-y-dinero, energia-y-luz, familia]
comparativas: [radios-de-emergencia, powerbanks]
faq:
  - q: "¿Funciona el ES-Alert si no tengo datos?"
    a: "Sí. ES-Alert usa la tecnología de difusión celular (cell broadcast), que no necesita datos ni apps. Basta con que el móvil esté encendido y con algo de cobertura."
  - q: "¿Qué es PMR446?"
    a: "Una banda de radio de uso libre en Europa para walkie-talkies de baja potencia. No necesita licencia y permite hablar a distancias cortas, normalmente de unos cientos de metros a pocos kilómetros según el terreno."
fuentes:
  - { nombre: "Microsoft: incidente de CrowdStrike del 19 de julio de 2024 (8,5 millones de dispositivos)", url: "https://blogs.microsoft.com/blog/2024/07/20/helping-our-customers-through-the-crowdstrike-outage/" }
  - { nombre: "Protección Civil: ES-Alert", url: "https://www.proteccioncivil.es/es-alert" }
  - { nombre: "Comisión Europea: preparación de la población (72 horas)", url: "https://spain.representation.ec.europa.eu/noticias-eventos/noticias-0/estrategia-de-preparacion-de-la-union-para-prevenir-amenazas-y-crisis-emergentes-y-reaccionar-frente-2025-03-26_es" }
actualizado: 2026-11-22
---

## El día que se apaga la pantalla

Imagina que a media mañana WhatsApp deja de enviar, Google no carga, el datáfono del súper da error, Bizum no responde y el tren no puede validar tu billete. No es tu móvil. Es **todo el mundo, a la vez**.

No es ciencia ficción. El 19 de julio de 2024, una actualización defectuosa de la empresa de ciberseguridad CrowdStrike tumbó unos 8,5 millones de ordenadores Windows en todo el planeta: aeropuertos, hospitales, bancos y televisiones paralizados durante horas. Cada año se cortan cables submarinos por accidentes con anclas, y una gran tormenta solar como la de 1859 —que dejó fuera de servicio el telégrafo de medio mundo— podría dañar hoy satélites y redes. Y el 28 de abril de 2025, en el apagón ibérico, millones de personas se quedaron a la vez sin luz, sin datos y sin poder pagar con tarjeta.

¿Probabilidad de un apagón total y prolongado de internet en todo el planeta? Baja. ¿Probabilidad de que una caída grande te deje horas o días sin servicios digitales? Real, y ya ha pasado.

## Lo que dependes de internet (y no lo sabes)

Pagos, Bizum, el billete del tren, la puerta del garaje, el termostato, el trabajo, la cita médica, el mapa para volver a casa, las contraseñas guardadas en la nube.

Una buena noticia: **internet y la red telefónica no son lo mismo**. Aunque caigan las apps y las webs, las llamadas, los SMS, la radio y la televisión por antena pueden seguir funcionando.

La solución no es tecnológica: es **tener un plan en papel**. Teléfonos apuntados, un punto de encuentro y un horario acordados (por ejemplo, «si no hay forma de hablar, nos vemos en casa de la abuela a las 20:00»), efectivo y mapas descargados.
