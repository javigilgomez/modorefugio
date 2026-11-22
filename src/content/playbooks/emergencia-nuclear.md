---
title: "Emergencia nuclear: quédate dentro, ahora"
nombre: Emergencia nuclear
subtitle: "Quédate dentro, ahora"
description: "Accidente en una central, incidente radiológico o alerta nuclear: entra, quédate dentro y sintoniza. Cómo confinarte, cuándo tomar yoduro potásico (solo si lo indican) y qué hacer si estabas fuera."
icon: radiation
photo: nuclear
grupo: sociedad
orden: 11
resumen: "Entra en un edificio, quédate dentro y sintoniza la radio. Cierra puertas y ventanas, apaga la ventilación y sigue solo las instrucciones oficiales. Yoduro potásico, únicamente si lo ordenan las autoridades sanitarias."
escena:
  lugar: "Oficina a 15 km de la central"
  hora: "10:15"
  texto: >-
    10:15. Suenan todos los móviles a la vez, con un pitido que atraviesa las paredes. ES-Alert: «Accidente en la central nuclear. Permanezca en el interior. Cierre puertas y ventanas». Un segundo de silencio. Luego todos hablan a la vez. Alguien dice que hay que ir corriendo a la farmacia a por pastillas de yodo. Otro ya busca las llaves del coche para salir de la zona.
  gancho: >-
    Las dos ideas son malas. La buena es más sencilla.
senales:
  - "Las autoridades activan un plan de emergencia nuclear o radiológica (ES-Alert, megafonía, radio)."
  - "Se informa de un accidente en una central o instalación con material radiactivo cercana."
primero:
  - "<strong>Entra</strong> en el edificio sólido más cercano."
  - "<strong>Quédate dentro</strong>: cierra puertas y ventanas y apaga ventiladores y aire acondicionado."
  - "<strong>Sintoniza</strong> la radio o la TV y sigue solo las instrucciones oficiales."
  - "<strong>No tomes yoduro potásico</strong> por tu cuenta: solo si lo indican las autoridades."
fases:
  - titulo: Primeros minutos
    cuando: "Al recibir el aviso"
    pasos:
      - { t: "Si estás fuera, entra en el edificio más cercano. Un sótano o una habitación interior, lejos de ventanas, protege más.", critico: true }
      - "Cierra puertas y ventanas, baja persianas y apaga ventilación, climatización y extractores."
      - { t: "Si estabas al aire libre, al entrar quítate la ropa exterior y métela en una bolsa cerrada: elimina gran parte de la posible contaminación. Dúchate con agua templada y jabón, sin frotar fuerte.", critico: true }
      - "Enciende la radio o la TV. Ten el móvil cargado para recibir ES-Alert."
  - titulo: Confinamiento
    cuando: "Horas o días"
    pasos:
      - "Permanece dentro hasta que te indiquen lo contrario. El confinamiento suele durar horas, no semanas."
      - "Tapa rendijas de puertas y ventanas con paños húmedos o cinta."
      - "Consume agua embotellada y alimentos envasados o que estuvieran dentro de casa."
      - "No vayas a recoger a los niños al colegio: los centros educativos tienen sus propios planes de protección."
      - { t: "Toma yoduro potásico solo si las autoridades sanitarias lo indican, en la dosis que señalen. Solo protege la tiroides frente al yodo radiactivo y tiene contraindicaciones.", critico: true }
  - titulo: Si ordenan evacuar
    cuando: "Por indicación oficial"
    pasos:
      - "Lleva documentos, medicación, mochila de emergencia y mascotas."
      - "Cierra gas, luz y agua."
      - "Sigue la ruta y el medio de transporte indicados y regístrate en el punto de recepción."
noHagas:
  - "Salir a la calle para ver qué pasa o huir por tu cuenta sin indicación."
  - "Tomar yoduro potásico sin indicación oficial, ni sustituirlo por desinfectantes con yodo (son tóxicos)."
  - "Consumir alimentos que estuvieran al aire libre o productos de huerta de la zona hasta que lo autoricen."
  - "Difundir información no oficial."
prepara:
  basico:
    - "Radio a pilas o de manivela"
    - "Agua y comida envasada para 3 días"
    - "Cinta americana ancha"
    - "Lámina de plástico de polietileno para sellar ventanas y rendijas"
    - "Tijeras"
    - "Toallas o trapos para rendijas"
    - "Mochila 72 h por si ordenan evacuar"
  avanzado:
    - "Saber si vives en la zona de planificación de una central (planes PENBU, PENCA, PENGUA, PENTA, PENVA)"
    - "Habitación interior o sótano preparado para confinamiento, con reserva"
    - "Mascarillas FFP2/FFP3 y ropa de recambio en bolsa"
    - "Medidor Geiger o dosímetro"
    - "Traje de protección química tipo Tyvek, guantes de nitrilo y cubrebotas"
categorias: [agua, alimentos, comunicaciones, refugio-y-temperatura, salud-y-botiquin]
comparativas: [radios-de-emergencia]
faq:
  - q: "¿Debo tener pastillas de yoduro potásico en casa?"
    a: "En España, la distribución de yoduro potásico a la población está prevista en los planes de emergencia nuclear de las zonas cercanas a centrales, y su toma siempre se hace por indicación de las autoridades sanitarias. No lo tomes por tu cuenta: no protege contra otros elementos radiactivos y puede tener efectos adversos."
  - q: "¿Qué protege más, irse o quedarse en casa?"
    a: "En los primeros momentos, quedarse dentro de un edificio cerrado reduce mucho la exposición. Evacuar sin indicación puede exponerte más en el exterior. Sigue siempre la instrucción oficial."
  - q: "¿Me sirve un medidor Geiger?"
    a: "Un dosímetro o un contador Geiger doméstico mide sobre todo radiación gamma y beta (en CPM y en µSv/h) y te ayuda a contrastar con la información oficial. No sustituye las instrucciones de Protección Civil ni del CSN. Más detalle, límites y el equipo de protección en la página de Salud nivel Prepper."
  - q: "¿Es lo mismo confinarse por radiación que por una nube química?"
    a: "No del todo. Frente a la radiación, un sótano o una habitación interior baja protege más porque hay más material sobre tu cabeza. En una nube tóxica, muchos gases son más densos que el aire: evitas sótanos y garajes y te confinas en una habitación interior alta. El plan para una fuga o un ataque químico está en su propio playbook."
fuentes:
  - { nombre: "Protección Civil: riesgo nuclear", url: "https://www.proteccioncivil.es/coordinacion/gestion-de-riesgos/tecnologicos/riesgo-nuclear" }
  - { nombre: "CSN: información en emergencias", url: "https://www.csn.es/emergencias/informacion-en-emergencias" }
  - { nombre: "Ministerio del Interior: información a la población sobre los planes de emergencia nuclear (PDF)", url: "https://www.interior.gob.es/opencms/pdf/archivos-y-documentacion/documentacion-y-publicaciones/publicaciones-descargables/proteccion-civil/Informacion-a-la-poblacion-sobre-medidas-de-proteccion-previstas-en-los-planes-de-emergencia-nuclear-NIPO-126-12-031-2.pdf" }
actualizado: 2026-11-22
---

## Sin alarmismo: qué es realista

Una emergencia nuclear grave es muy improbable, pero es uno de los riesgos que más preguntas genera. En España, las zonas alrededor de las centrales tienen planes de emergencia específicos coordinados por Protección Civil y el Consejo de Seguridad Nuclear (CSN).

La medida más eficaz es también la más sencilla: **entrar, quedarse dentro y sintonizar**. Las paredes y el techo de un edificio reducen mucho la exposición, y la información oficial te dirá cuándo y cómo actuar.

Un **medidor Geiger** o un dosímetro te permite contrastar lecturas (CPM y µSv/h) con lo que digan el CSN y Protección Civil; no sirve para decidir una evacuación por tu cuenta. Y un apunte importante: el sitio de la casa que más protege **no es el mismo** que en una [nube tóxica](/playbook/ataque-quimico/). Aquí conviene un sótano o una estancia interior con mucho material encima; allí, una habitación alta, porque muchos gases se acumulan abajo. El equipo (máscara, traje tipo Tyvek, kit de sellado) está detallado en [Salud nivel Prepper](/preparate/salud-y-botiquin/prepper/).
