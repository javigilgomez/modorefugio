/**
 * Catálogo de productos recomendados.
 * Reglas: solo especificaciones publicadas por el fabricante (ver `fuente`) y NUNCA precios
 * (Amazon prohíbe mostrar precios estáticos). Los enlaces usan búsqueda con el tag de afiliado;
 * cuando tengas el ASIN exacto, rellena `asin` y el enlace irá directo a la ficha.
 */
export interface Producto {
  id: string;
  nombre: string;
  marca: string;
  tipo: string;
  nivel: 'basico' | 'avanzado';
  resumen: string;
  specs: [string, string][];
  pros: string[];
  contras: string[];
  idealPara: string;
  amazonQuery: string;
  asin?: string;
  fuente: string;
  destacado?: string; // etiqueta: "Mejor para empezar", etc.
}

export const PRODUCTOS: Producto[] = [
  // ---------- Estaciones de energía ----------
  {
    id: 'ecoflow-river-2', nombre: 'EcoFlow RIVER 2', marca: 'EcoFlow', tipo: 'Estación de energía portátil', nivel: 'avanzado',
    resumen: 'La más ligera del grupo. Carga completa en enchufe en unos 60 minutos según el fabricante: ideal para recargarla en cuanto vuelve la luz.',
    specs: [['Capacidad', '256 Wh'], ['Salida AC', '300 W (X-Boost 600 W)'], ['Batería', 'LiFePO4'], ['Entrada solar', 'hasta 110 W'], ['Peso', '3,5 kg']],
    pros: ['Carga muy rápida desde la red', 'Química LiFePO4 de larga vida', 'Ligera y compacta'],
    contras: ['300 W no mueven una nevera con arranque exigente', '256 Wh dan para router y móviles, no para cocinar'],
    idealPara: 'Router, móviles, luces LED y un portátil durante un apagón de un día.',
    amazonQuery: 'EcoFlow RIVER 2 256Wh', fuente: 'https://www.ecoflow.com/es/river-2-portable-power-station', destacado: 'Mejor para empezar',
  },
  {
    id: 'bluetti-eb3a', nombre: 'BLUETTI EB3A', marca: 'BLUETTI', tipo: 'Estación de energía portátil', nivel: 'avanzado',
    resumen: 'Capacidad parecida a la RIVER 2 pero con el doble de potencia de salida continua y más entrada solar.',
    specs: [['Capacidad', '268 Wh'], ['Salida AC', '600 W'], ['Batería', 'LiFePO4'], ['Entrada solar', 'hasta 200 W'], ['Peso', '4,6 kg']],
    pros: ['600 W continuos: más margen con aparatos de cocina pequeños', 'Admite paneles de 200 W'],
    contras: ['Algo más pesada', 'La capacidad sigue siendo de gama pequeña'],
    idealPara: 'Quien quiere poca capacidad pero algo de potencia (un hervidor pequeño, una batidora, herramientas).',
    amazonQuery: 'BLUETTI EB3A', fuente: 'https://versus.com/es/bluetti-eb3a-vs-ecoflow-river-2', destacado: 'Más potencia en tamaño pequeño',
  },
  {
    id: 'jackery-explorer-300-plus', nombre: 'Jackery Explorer 300 Plus', marca: 'Jackery', tipo: 'Estación de energía portátil', nivel: 'avanzado',
    resumen: 'La de mayor capacidad entre las compactas de 300 W, con batería LiFePO4.',
    specs: [['Capacidad', '288 Wh'], ['Salida AC', '300 W (pico 600 W)'], ['Batería', 'LiFePO4'], ['Entrada solar', 'hasta 100 W'], ['Peso', '3,75 kg']],
    pros: ['Un poco más de capacidad que sus rivales', 'Formato muy compacto'],
    contras: ['Entrada solar limitada a 100 W', 'Solo 300 W continuos'],
    idealPara: 'Mantener comunicaciones y luz el máximo tiempo posible con un solo aparato pequeño.',
    amazonQuery: 'Jackery Explorer 300 Plus', fuente: 'https://wattlong.com/models/',
  },
  {
    id: 'ecoflow-river-2-pro', nombre: 'EcoFlow RIVER 2 Pro', marca: 'EcoFlow', tipo: 'Estación de energía portátil', nivel: 'avanzado',
    resumen: 'El salto de gama: casi tres veces la capacidad de la RIVER 2 sin pasar a equipos de 12 kg.',
    specs: [['Capacidad', '768 Wh'], ['Salida AC', '800 W (X-Boost 1.600 W)'], ['Batería', 'LiFePO4'], ['Entrada solar', 'hasta 220 W'], ['Peso', '8,25 kg']],
    pros: ['Capacidad para un fin de semana de consumos básicos', 'Todavía transportable con una mano'],
    contras: ['Más cara y pesada', 'X-Boost reduce la potencia real del aparato conectado'],
    idealPara: 'Hogares que quieren cubrir nevera a ratos, comunicaciones y luz durante 1-2 días.',
    amazonQuery: 'EcoFlow RIVER 2 Pro 768Wh', fuente: 'https://www.ecoflow.com/es/river-2-portable-power-station',
  },
  {
    id: 'anker-solix-c1000', nombre: 'Anker SOLIX C1000', marca: 'Anker', tipo: 'Estación de energía portátil', nivel: 'avanzado',
    resumen: 'Clase de 1 kWh: la opción para quien depende de un aparato médico o quiere mantener nevera y congelador.',
    specs: [['Capacidad', '1.056 Wh'], ['Salida AC', '1.800 W (pico 2.400 W)'], ['Batería', 'LiFePO4'], ['Entrada solar', 'hasta 600 W']],
    pros: ['1 kWh real de capacidad nominal', 'Potencia para casi cualquier electrodoméstico doméstico', 'Admite mucha entrada solar'],
    contras: ['Pesa y ocupa bastante más', 'Inversión alta: solo compensa si sabes qué vas a alimentar'],
    idealPara: 'Personas con CPAP u otro equipo médico, teletrabajo crítico o apagones largos con nevera.',
    amazonQuery: 'Anker SOLIX C1000', fuente: 'https://wattlong.com/models/', destacado: 'Para apagones largos',
  },
  // ---------- Radios ----------
  {
    id: 'midland-er300', nombre: 'Midland ER300', marca: 'Midland', tipo: 'Radio de emergencia', nivel: 'basico',
    resumen: 'Radio AM/FM europea con dinamo, panel solar, USB y opción de pilas AA: cuatro formas de tener energía.',
    specs: [['Bandas', 'AM 531-1629 kHz · FM 87,5-108 MHz'], ['Batería', 'Li-ion 2.200 mAh o 6 pilas AA'], ['Carga', 'Manivela, solar, USB'], ['Extras', 'Linterna LED, SOS, powerbank'], ['Peso', '470 g']],
    pros: ['Funciona con pilas AA normales si todo lo demás falla', 'Pensada para el mercado europeo', 'Puede dar algo de carga al móvil'],
    contras: ['Sin onda corta', 'La manivela da poca carga por minuto (es normal en todas)'],
    idealPara: 'El kit básico de cualquier casa en España.',
    amazonQuery: 'Midland ER300 radio emergencia', fuente: 'https://support.midlandeurope.com/media/manual/c/9/d/6/c9d6f5fbf891d741b0e6db652064edcad6ddab15_MANUAL_ER300.pdf', destacado: 'Mejor opción en España',
  },
  {
    id: 'sangean-mmr-88', nombre: 'Sangean MMR-88', marca: 'Sangean', tipo: 'Radio de emergencia', nivel: 'basico',
    resumen: 'Compacta y robusta, con esquinas de goma y muy buena recepción en FM según el fabricante.',
    specs: [['Bandas', 'AM · FM (y WX, solo útil en EE. UU.)'], ['Batería', 'Li-ion 18350 de 850 mAh'], ['Autonomía', 'hasta 14 h'], ['Carga', 'Manivela, solar, micro-USB'], ['Peso', '377 g']],
    pros: ['Construcción resistente', 'Pequeña y ligera', 'Linterna y sirena'],
    contras: ['Batería pequeña para cargar el móvil', 'No admite pilas AA'],
    idealPara: 'Mochila de evacuación y quien prioriza tamaño y robustez.',
    amazonQuery: 'Sangean MMR-88', fuente: 'https://us.sangean.com/es/product/mmr-88-fcc-yellow',
  },
  {
    id: 'kaito-ka500', nombre: 'Kaito KA500 Voyager', marca: 'Kaito', tipo: 'Radio de emergencia', nivel: 'avanzado',
    resumen: 'La más completa: añade dos bandas de onda corta para escuchar emisoras internacionales cuando lo local falla.',
    specs: [['Bandas', 'AM · FM · SW1 3,2-8 MHz · SW2 9-22 MHz · WX'], ['Energía', 'NiMH, manivela, solar, 3 AA, USB'], ['Autonomía', 'unas 30 h'], ['Peso', 'unos 770 g (1,7 lb)']],
    pros: ['Onda corta: información aunque caigan emisoras nacionales', 'Cinco fuentes de energía', 'Gran autonomía'],
    contras: ['Sintonía analógica', 'Grande y pesada para una mochila'],
    idealPara: 'El prepper que quiere escuchar onda corta y tener redundancia total.',
    amazonQuery: 'Kaito KA500 radio', fuente: 'https://deal.ai/compare/kaito-ka500-vs-eton-frx3', destacado: 'Para avanzados',
  },
  {
    id: 'eton-frx3', nombre: 'Eton FRX3', marca: 'Eton', tipo: 'Radio de emergencia', nivel: 'basico',
    resumen: 'Clásica radio de emergencia con batería 18650 de 2.600 mAh, suficiente para dar una carga parcial al móvil.',
    specs: [['Bandas', 'AM · FM (y WX, solo útil en EE. UU.)'], ['Batería', '18650 de 2.600 mAh'], ['Autonomía', 'unas 12 h'], ['Carga', 'Manivela, solar, USB']],
    pros: ['Batería mayor para cargar el móvil', 'Pantalla digital con búsqueda automática'],
    contras: ['Sin certificación de resistencia al agua', 'Batería no reemplazable por el usuario'],
    idealPara: 'Quien quiere radio y algo de reserva de carga para el teléfono.',
    amazonQuery: 'Eton FRX3 radio', fuente: 'https://deal.ai/compare/kaito-ka500-vs-eton-frx3',
  },
  // ---------- Frontales ----------
  {
    id: 'petzl-actik-core', nombre: 'Petzl ACTIK CORE', marca: 'Petzl', tipo: 'Linterna frontal', nivel: 'basico',
    resumen: 'Recargable por USB-C y compatible con 3 pilas AAA: no te deja tirado si no hay forma de cargar.',
    specs: [['Potencia', '625 lm (450 lm con AAA)'], ['Batería', 'CORE 1.250 mAh o 3 AAA'], ['Autonomía', '100 h a 7 lm · 2 h a máxima'], ['Estanqueidad', 'IPX4'], ['Peso', '88 g']],
    pros: ['Sistema híbrido batería/pilas', 'Luz roja para no deslumbrar', 'Muy buena autonomía en modo bajo'],
    contras: ['Cable de carga no incluido', 'Precio superior a frontales de pilas'],
    idealPara: 'La frontal de casa y de la mochila de evacuación.',
    amazonQuery: 'Petzl Actik Core', fuente: 'https://www.petzl.com/es/es/sport/productos/linternas-frontales-multisport/actik-core/ACTIK-CORE_SPO_a2mTx000000o12YIAQ.html', destacado: 'Mejor en general',
  },
  {
    id: 'bd-spot-400', nombre: 'Black Diamond Spot 400', marca: 'Black Diamond', tipo: 'Linterna frontal', nivel: 'basico',
    resumen: 'Frontal de pilas AAA, sumergible (IPX8). Sencilla y fiable para guardar en el kit.',
    specs: [['Potencia', '400 lm'], ['Energía', '3 AAA (o batería BD 1500 aparte)'], ['Estanqueidad', 'IPX8'], ['Luz roja', 'Sí, con bloqueo']],
    pros: ['Resistente al agua de verdad', 'Funciona con pilas comunes', 'Bloqueo para que no se encienda en la mochila'],
    contras: ['Con pilas alcalinas pierde brillo según se gastan'],
    idealPara: 'Kits que se guardan mucho tiempo: pon pilas de litio y olvídate.',
    amazonQuery: 'Black Diamond Spot 400 frontal', fuente: 'https://peakgearguide.com/es/mejor-equipo/linternas-frontales', destacado: 'Mejor calidad-precio',
  },
  {
    id: 'ledlenser-mh5', nombre: 'Ledlenser MH5', marca: 'Ledlenser', tipo: 'Linterna frontal', nivel: 'basico',
    resumen: 'Cabezal desmontable que también sirve como linterna de mano, con batería 14500 o una pila AA.',
    specs: [['Potencia', '400 lm · alcance 180 m'], ['Autonomía', '4 h alta · 35 h baja'], ['Energía', 'Li-ion 750 mAh o 1 AA'], ['Protección', 'IP54'], ['Peso', '94 g']],
    pros: ['Foco ajustable', 'Usa una sola pila AA si se agota', 'Sirve de linterna de mano'],
    contras: ['Cable magnético propio'],
    idealPara: 'Quien quiere un único aparato para cabeza y mano.',
    amazonQuery: 'Ledlenser MH5', fuente: 'https://ledlenser.co.uk/products/mh5',
  },
  // ---------- Agua ----------
  {
    id: 'helguefer-bg20', nombre: 'Bidón alimentario 20 L con grifo (Helguefer)', marca: 'Plásticos Helguefer', tipo: 'Almacenaje de agua', nivel: 'basico',
    resumen: 'Bidón de polietileno alimentario, apilable y con grifo: la forma más barata de guardar agua en cantidad.',
    specs: [['Capacidad', '20 L'], ['Material', 'HDPE apto para uso alimentario'], ['Boca', '63 mm'], ['Medidas', '298 × 365 × 255 mm']],
    pros: ['Apilable', 'Grifo para servir sin derramar', 'Fabricación española'],
    contras: ['Lleno pesa más de 20 kg: no es para transportar'],
    idealPara: 'Reserva de agua en casa (agua de grifo rotada cada 6 meses).',
    amazonQuery: 'bidon 20 litros grifo alimentario Helguefer', fuente: 'https://www.amazon.es/dp/B01M22FS00', destacado: 'Para la reserva de casa',
  },
  {
    id: 'reliance-aqua-tainer', nombre: 'Reliance Aqua-Tainer 26,5 L', marca: 'Reliance', tipo: 'Almacenaje de agua', nivel: 'basico',
    resumen: 'Bidón rígido con grifo y respiradero, un clásico de los kits norteamericanos.',
    specs: [['Capacidad', '26,5 L'], ['Material', 'Libre de BPA'], ['Medidas', '29 × 29 × 40 cm'], ['Apilable', 'Sí']],
    pros: ['Grifo reversible que se guarda dentro', 'Muy robusto'],
    contras: ['Lleno pesa unos 27 kg'],
    idealPara: 'Despensa de agua de 1-2 semanas.',
    amazonQuery: 'Reliance Aqua-Tainer 26 litros', fuente: 'https://ferrehogar.es/p/reliance-aqua-tainer-bidon-26-5-litros-con-llave-para-agua-potable-00941003',
  },
  {
    id: 'datrex-agua', nombre: 'Datrex agua de emergencia (bolsas de 125 ml)', marca: 'Datrex', tipo: 'Agua envasada de larga duración', nivel: 'avanzado',
    resumen: 'Agua purificada en bolsitas selladas de 125 ml con 5 años de vida útil: para mochila y coche, no para la reserva de casa.',
    specs: [['Formato', 'Bolsas de 125 ml'], ['Vida útil', '5 años (fabricante)'], ['Caja', '64 bolsas (DX1000W)']],
    pros: ['No hay que rotarla cada pocos meses', 'Plana y ligera para mochilas'],
    contras: ['Coste por litro muy superior al agua embotellada'],
    idealPara: 'Mochila de evacuación y maletero del coche.',
    amazonQuery: 'Datrex agua emergencia 125 ml', fuente: 'https://tormag.mx/comida-y-agua-de-emergencia',
  },
  // ---------- Filtros ----------
  {
    id: 'sawyer-mini', nombre: 'Sawyer Mini', marca: 'Sawyer', tipo: 'Filtro de agua portátil', nivel: 'avanzado',
    resumen: 'Filtro de membrana de fibra hueca de 0,1 micras, reutilizable mediante retrolavado con la jeringa incluida.',
    specs: [['Poro', '0,1 µm'], ['Vida útil', 'hasta ~378.000 L (fabricante)'], ['Incluye', 'Bolsa, pajita y jeringa de limpieza']],
    pros: ['Ligerísimo', 'Se rosca a botellas comunes', 'Vida útil enorme si se limpia'],
    contras: ['No elimina virus ni químicos', 'Se daña si se congela con agua dentro'],
    idealPara: 'Mochila de evacuación y senderismo.',
    amazonQuery: 'Sawyer Mini filtro agua', fuente: 'https://www.sawyer.com.co/sp128.html', destacado: 'Mejor para la mochila',
  },
  {
    id: 'katadyn-befree', nombre: 'Katadyn BeFree 1 L', marca: 'Katadyn', tipo: 'Filtro de agua portátil', nivel: 'avanzado',
    resumen: 'Botella blanda con filtro de 0,1 micras de caudal muy alto; se limpia agitando.',
    specs: [['Poro', '0,1 µm'], ['Vida útil', 'hasta 1.000 L según calidad del agua'], ['Formato', 'Botella plegable de 1 L']],
    pros: ['Caudal rápido', 'Plegada ocupa casi nada'],
    contras: ['Vida útil menor que Sawyer', 'No elimina virus ni químicos'],
    idealPara: 'Beber directamente en ruta durante una evacuación.',
    amazonQuery: 'Katadyn BeFree 1L', fuente: 'https://www.katadyngroup.com/Downloads/katadyn/manuals/filters/current/Manual%20BeFree_EU_es.pdf',
  },
  {
    id: 'lifestraw-personal', nombre: 'LifeStraw Personal', marca: 'LifeStraw', tipo: 'Filtro de agua portátil', nivel: 'basico',
    resumen: 'La pajita filtrante más conocida. Sin piezas, sin bombeo: sorbes directamente.',
    specs: [['Poro', '0,2 µm'], ['Vida útil', 'hasta 4.000 L (fabricante)'], ['Formato', 'Pajita']],
    pros: ['Imposible de usar mal', 'Barata y ligera'],
    contras: ['Solo para beber en el momento: no llena botellas', 'No elimina virus ni químicos'],
    idealPara: 'Un plan B barato en cada mochila de la familia.',
    amazonQuery: 'LifeStraw Personal', fuente: 'https://supervivencia.tienda/blog/lifestraw-vs-sawyer-vs-katadyn.html',
  },
  // ---------- Powerbanks ----------
  {
    id: 'anker-zolo-20000', nombre: 'Anker Zolo Power Bank 20.000 mAh 22,5 W', marca: 'Anker', tipo: 'Batería externa', nivel: 'basico',
    resumen: 'Con cable USB-C integrado: no dependes de encontrar el cable en plena oscuridad.',
    specs: [['Capacidad', '20.000 mAh (74 Wh)'], ['Salida máx.', '22,5 W'], ['Puertos', '2 USB-C + 1 USB-A + cable integrado'], ['Peso', '392 g']],
    pros: ['Cable integrado', 'Carga varios móviles completos', 'Puede viajar en avión (menos de 100 Wh)'],
    contras: ['Pesada para el bolsillo'],
    idealPara: 'Tener 3-4 cargas de móvil en cualquier apagón.',
    amazonQuery: 'Anker Zolo power bank 20000 22.5W cable integrado', fuente: 'https://www.mrmicro.es/tablets-smartphones/baterias-externas/powerbank-anker-20000-mah-22-5w-con-cable-usb-c-integrado_84439/especificaciones/', destacado: 'Mejor en general',
  },
  {
    id: 'redmi-20000-18w', nombre: 'Xiaomi Redmi Power Bank 20.000 mAh 18 W', marca: 'Xiaomi', tipo: 'Batería externa', nivel: 'basico',
    resumen: 'Opción económica y muy extendida con la misma energía nominal (74 Wh).',
    specs: [['Capacidad', '20.000 mAh (74 Wh)'], ['Salida máx.', '18 W'], ['Puertos', '2 USB-A · entrada micro-USB y USB-C']],
    pros: ['Precio ajustado', 'Dos salidas USB-A'],
    contras: ['Carga más lenta', 'Sin salida USB-C'],
    idealPara: 'Segunda batería de la familia o la del coche.',
    amazonQuery: 'Xiaomi Redmi power bank 20000 18W', fuente: 'https://www.mi.com/mx/product/20000mah-redmi-fast-charge-power-bank/specs/', destacado: 'Más económica',
  },
  // ---------- Comida ----------
  {
    id: 'datrex-3600', nombre: 'Datrex ración de emergencia 3.600 kcal', marca: 'Datrex', tipo: 'Comida de emergencia', nivel: 'avanzado',
    resumen: 'Barritas compactas pensadas para balsas salvavidas: no dan sed, no necesitan cocinarse y duran 5 años.',
    specs: [['Energía', '3.600 kcal por paquete'], ['Formato', '18 barritas de 200 kcal'], ['Vida útil', '5 años (fabricante)']],
    pros: ['Calorías densas en poco espacio', 'Aguantan calor del maletero'],
    contras: ['Sabor monótono', 'Solo para emergencia real, no para el día a día'],
    idealPara: 'Mochila de evacuación y coche.',
    amazonQuery: 'Datrex 3600 racion emergencia', fuente: 'https://www.datrex.com/product/datrex-emergency-food-ration-20-pack-case/', destacado: 'Para la mochila',
  },
  {
    id: 'convar-7', nombre: 'Convar-7 / NRG-5 (raciones de larga conservación)', marca: 'Convar', tipo: 'Comida de emergencia', nivel: 'avanzado',
    resumen: 'Raciones alemanas de emergencia con versiones de muy larga conservación (el fabricante anuncia hasta 20 años en algunas referencias).',
    specs: [['Formato', 'Barritas comprimidas'], ['Conservación', 'Versiones de 10 y 20 años según referencia']],
    pros: ['Pensadas para almacenar y olvidar', 'Se pueden comer sólidas o en papilla'],
    contras: ['Disponibilidad irregular', 'Caras por caloría'],
    idealPara: 'El fondo de reserva del prepper avanzado.',
    amazonQuery: 'Convar 7 racion emergencia', fuente: 'https://www.liofilizado.es/12277-racion-energetica-de-emergencia-20-anos.html',
  },
];

export const prodById = (id: string) => {
  const p = PRODUCTOS.find((x) => x.id === id);
  if (!p) throw new Error(`Producto desconocido: ${id}`);
  return p;
};
