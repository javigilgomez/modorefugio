---
title: "Ola de calor: el termómetro no baja"
nombre: Ola de calor
subtitle: "El termómetro no baja"
description: "Aviso por calor extremo: cómo mantener la casa fresca, proteger a mayores, bebés y mascotas, y reconocer un golpe de calor a tiempo."
icon: thermometer-sun
photo: calor
grupo: naturaleza
orden: 7
resumen: "Bebe agua aunque no tengas sed, evita el sol en las horas centrales, mantén la casa a oscuras de día y ventila de noche. Vigila a mayores y bebés. Golpe de calor = 112."
escena:
  lugar: "Un piso sin aire acondicionado"
  hora: "16:00"
  texto: >-
    16:00. El termómetro del balcón marca 43. Dentro, 33, y de noche no baja de 29. El ventilador solo remueve aire caliente. Tu madre, 81 años, vive sola a dos calles. Esta mañana dijo que estaba «bien, un poco cansada». Desde entonces no coge el teléfono. Te pesa la cabeza. Tienes la boca seca y no recuerdas cuándo bebiste agua por última vez.
  gancho: >-
    El calor no avisa. Por eso tienes que adelantarte.
senales:
  - "AEMET activa <strong>aviso amarillo, naranja o rojo</strong> por temperaturas máximas."
  - "Las noches no bajan de 20–25 °C (noches tropicales o tórridas) varios días seguidos."
  - "Tu casa supera los 27–28 °C de forma sostenida."
primero:
  - "<strong>Bebe agua</strong> con frecuencia, aunque no tengas sed. Evita el alcohol."
  - "Cierra <strong>persianas y ventanas</strong> de día; abre y crea corriente de noche."
  - "Evita salir y hacer esfuerzo en las <strong>horas centrales</strong> del día."
  - "<strong>Llama o visita</strong> a las personas mayores que viven solas."
  - "Si alguien tiene <strong>confusión, piel muy caliente o pierde el conocimiento</strong>: 112 y enfriarle ya."
fases:
  - titulo: Al activarse el aviso
    cuando: "Día 0"
    pasos:
      - "Revisa la previsión de AEMET y planifica: compras y paseos a primera hora o al anochecer."
      - "Prepara la casa: toldos, persianas, cortinas claras, ventiladores limpios."
      - "Llena botellas de agua y ten hielo en el congelador."
      - "Revisa con tu médico o farmacéutico si alguno de tus medicamentos aumenta el riesgo con calor (diuréticos, algunos antihipertensivos o psicofármacos) y cómo conservarlos."
      - "Localiza los refugios climáticos de tu ciudad (bibliotecas, centros cívicos con aire acondicionado)."
  - titulo: Cada día de calor
    cuando: "Día a día"
    pasos:
      - { t: "Bebe agua de forma regular. Los mayores y los niños pequeños no siempre notan la sed: ofréceles agua cada poco.", critico: true }
      - "Come ligero: frutas, verduras, ensaladas, gazpacho."
      - "Viste ropa clara, holgada y de tejidos naturales; gorra y protector solar si sales."
      - "Duchas o paños de agua templada para bajar la temperatura corporal."
      - { t: "Nunca dejes a nadie (niños, mayores, mascotas) dentro de un coche aparcado, ni unos minutos.", critico: true }
      - "Pasea a los perros temprano o de noche y comprueba que el asfalto no queme (prueba con el dorso de la mano)."
  - titulo: Si alguien se encuentra mal
    cuando: "Golpe de calor"
    pasos:
      - { t: "Señales de alarma: temperatura corporal muy alta, piel caliente y seca o muy sudorosa, confusión, mareo intenso, vómitos o pérdida de conocimiento. Llama al 112.", critico: true }
      - "Mientras llega la ayuda: llévale a la sombra o a un lugar fresco, aflójale la ropa y enfríale con agua, paños húmedos y abanico."
      - "Si está consciente y puede tragar, dale sorbos de agua. Si no, no le des nada."
      - "Calambres o agotamiento sin confusión: descanso en lugar fresco, agua y vigilar; si no mejora en una hora, al médico."
noHagas:
  - "Hacer deporte o trabajos pesados en las horas de más calor."
  - "Dejar a nadie dentro de un coche cerrado."
  - "Beber alcohol o bebidas muy azucaradas para refrescarte."
  - "Usar ventiladores como única medida cuando la casa supera los 35 °C: muévete a un lugar más fresco."
  - "Suspender o cambiar tu medicación por tu cuenta."
prepara:
  basico:
    - "Agua embotellada y botellas en el congelador"
    - "Ventilador (o dos) y persianas/toldos en buen estado"
    - "Termómetro interior para saber cuándo la casa es un riesgo"
    - "Lista de refugios climáticos de tu municipio"
  avanzado:
    - "Estación de energía para mantener un ventilador si se va la luz"
    - "Láminas reflectantes o toldos exteriores en fachadas al sol"
    - "Ventiladores USB a batería para dormitorios"
    - "Plan de vigilancia diaria para mayores de la familia"
categorias: [refugio-y-temperatura, agua, familia, salud-y-botiquin]
comparativas: [estaciones-de-energia-portatiles]
latam: "Las olas de calor afectan cada vez más a México, Argentina, Paraguay y el norte de Chile. Las pautas son las mismas; consulta los avisos del servicio meteorológico de tu país."
faq:
  - q: "¿A partir de qué temperatura es peligrosa una ola de calor?"
    a: "Depende de la zona y de la persona. Los umbrales de aviso cambian en cada provincia según lo habitual allí. Las personas mayores, los bebés, las embarazadas y quienes tienen enfermedades crónicas tienen más riesgo con temperaturas menores."
  - q: "¿Qué diferencia hay entre golpe de calor y agotamiento por calor?"
    a: "El agotamiento produce cansancio, sudor, mareo y sed, y mejora con descanso y agua. El golpe de calor es una emergencia: la temperatura corporal se dispara, aparece confusión o pérdida de conciencia. Llama al 112."
fuentes:
  - { nombre: "AEMET: avisos meteorológicos", url: "https://www.aemet.es/es/eltiempo/prediccion/avisos" }
  - { nombre: "Ministerio de Sanidad: calor y salud", url: "https://www.sanidad.gob.es/areas/sanidadAmbiental/riesgosAmbientales/calorExtremo/home.htm" }
  - { nombre: "OMS: calor y salud", url: "https://www.who.int/es/news-room/fact-sheets/detail/climate-change-heat-and-health" }
actualizado: 2026-11-22
---

## El calor mata en silencio

Las olas de calor son el fenómeno meteorológico que más muertes causa en España, muy por delante de inundaciones o tormentas. La mayoría de víctimas son personas mayores que viven solas en pisos muy calurosos y que no notan la sed ni el peligro.

Por eso la medida más eficaz de este playbook no es un aparato: es **llamar cada día a tus mayores** durante el aviso.

## Cómo enfriar la casa sin aire acondicionado

1. De día, todo cerrado: persianas bajadas, ventanas cerradas y cortinas echadas en las fachadas al sol.
2. De noche, abre ventanas en fachadas opuestas para crear corriente.
3. Apaga luces y aparatos que den calor. Cocina temprano o en frío.
4. Un ventilador junto a una ventana abierta por la noche, empujando aire hacia fuera, ayuda a sacar el calor acumulado.
