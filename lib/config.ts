// Central config — update prices and contact info here, not in components

export const WHATSAPP_NUMBER = "5491165916614";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_GREETING = `${WHATSAPP_URL}?text=Hola%20Juan%20Pablo%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20ConCiencia%20Digital`;

export const PROPOSALS = {
  opcion1: {
    title: "Capacitación única",
    subtitle: "Diagnóstico y punto de partida",
    price: 95000,
    currency: "ARS",
    duration: "90 minutos presenciales",
    group: "hasta 30 docentes",
    paymentNote: "Pago único · Incluye materiales y 30 días de seguimiento por WhatsApp",
    description:
      "Para instituciones que quieren tener una primera mirada clara y práctica sobre cómo integrar nuevas tecnologías e IA en su equipo docente. Una sesión completa, sin compromisos previos, que genera conciencia, herramientas y un camino concreto para continuar.",
    includes: [
      "1 encuentro presencial de 90 minutos con todo el equipo docente",
      "Panorama actual: dónde estamos con la IA en educación y qué significa para las escuelas hoy",
      "Demo en vivo de herramientas concretas: NotebookLM, Claude, Canva AI",
      "Cómo usarlas: planificación, diferenciación, materiales y comunicación con familias",
      "Kit de actividades, guía de herramientas y recursos digitales para llevarse ese día",
      "Espacio de intercambio y preguntas abiertas del equipo",
      "Dinámica de cierre: del encuentro a la acción",
      "Acceso al grupo de WhatsApp durante 30 días para consultas posteriores",
    ],
    forWho: [
      "Instituciones que quieren entender de qué se trata realmente la IA y cómo impacta en la educación",
      "Equipos que ya usan herramientas digitales intuitivamente y quieren ordenar ese conocimiento con criterio pedagógico",
      "Escuelas que recién están comenzando a pensar en tecnología con criterio",
      "Instituciones que valoran probar antes de escalar, y quieren que esa primera experiencia valga la pena",
    ],
    takeaway: [
      "Claridad sobre qué herramientas de IA son útiles en el aula y cuáles son ruido",
      "Confianza para usar al menos tres herramientas concretas desde el día siguiente",
      "Un kit de actividades listo para implementar — con o sin dispositivos",
      "Una acción concreta y acotada para poner en práctica esa misma semana",
    ],
  },
  opcion2: {
    title: "Acompañamiento guiado",
    subtitle: "Proceso de integración real",
    price: 280000,
    currency: "ARS",
    duration: "6 meses",
    group: "",
    paymentNote: "100% al inicio o divisible en 6 cuotas fijas al mismo valor",
    description:
      "Para instituciones que quieren que el cambio sea genuino y sostenido. Un proceso de seis meses que acompaña al equipo docente desde la primera toma de contacto hasta la implementación real en el aula.",
    includes: [
      "Charla inicial de 90 minutos (punto de partida del proceso)",
      "Diagnóstico institucional previo: entrevista con dirección para entender el contexto y necesidades",
      "2 encuentros de seguimiento (mes 2 y mes 4) · 60 min · presencial o virtual",
      "Grupo de WhatsApp activo durante los 6 meses: consultas, recursos y acompañamiento continuo",
      "Materiales adaptados a los proyectos y áreas de la institución (no materiales genéricos)",
      "Apoyo en el diseño de al menos una secuencia didáctica con integración tecnológica por grado o área",
      "Informe de cierre con diagnóstico del proceso, logros del equipo y recomendaciones",
      "Acceso al repositorio de recursos actualizado durante todo el proceso",
    ],
    forWho: [
      "Instituciones que quieren que la IA deje de ser un tema que genera ansiedad y empiece a ser una herramienta que el equipo domina con criterio",
      "Equipos que ya tuvieron una primera experiencia y quieren que algo realmente cambie en el aula",
      "Escuelas con proyectos pedagógicos propios que quieren integrar tecnología a lo que ya están haciendo, no reemplazarlo",
      "Instituciones que quieren mostrar resultados concretos al finalizar el año",
    ],
    builds: [
      "Docentes que pasaron de usar la IA intuitivamente a usarla con criterio, propósito y confianza",
      "Al menos una secuencia didáctica con integración tecnológica real por grado o área",
      "Producciones digitales de los alumnos vinculadas a los proyectos del año",
      "Una cultura institucional donde la pregunta no es '¿usamos tecnología?' sino '¿cómo la usamos bien?'",
      "Un camino trazado hacia adelante: qué continuar, cómo crecer, qué herramientas priorizar el próximo año",
    ],
  },
} as const;

export const DIFFERENTIATORS = [
  {
    icon: "🏫",
    title: "Vengo del aula.",
    body: "10 años de docencia. Conozco la realidad institucional desde adentro, no desde un manual.",
  },
  {
    icon: "🤝",
    title: "Trabajo desde adentro, no desde afuera.",
    body: "La propuesta se adapta a cada escuela. No es un talle único ni un paquete enlatado.",
  },
  {
    icon: "🌱",
    title: "Tecnología al servicio de los valores.",
    body: "Nunca un fin en sí misma. La IA es una herramienta — lo que importa es para qué la usamos.",
  },
] as const;

export const RESOURCES = [
  {
    slug: "juegos-didacticos",
    title: "15 juegos didácticos sin pantalla",
    description:
      "Actividades para todas las etapas escolares. Creadas para el evento RedViva 2025.",
    file: "/docs/juegos_didacticos_redviva25.docx",
    fileLabel: "Descargar .docx",
  },
  {
    slug: "propuesta-comercial",
    title: "Propuesta de servicios",
    description:
      "Documento completo con Opción 1 y Opción 2. Para compartir con autoridades o directivos.",
    file: "/docs/ConCienciaDigital_Propuesta_Servicios.docx",
    fileLabel: "Descargar .docx",
  },
] as const;

export const COMPARISON_TABLE: {
  feature: string;
  opcion1: string | boolean;
  opcion2: string | boolean;
}[] = [
  { feature: "Encuentro inicial (90 min)", opcion1: true, opcion2: true },
  { feature: "Diagnóstico institucional previo", opcion1: false, opcion2: true },
  { feature: "Encuentros de seguimiento", opcion1: "—", opcion2: "2 encuentros" },
  { feature: "WhatsApp de acompañamiento", opcion1: "30 días", opcion2: "6 meses" },
  { feature: "Materiales", opcion1: "Generales", opcion2: "Personalizados" },
  { feature: "Apoyo en diseño de secuencias didácticas", opcion1: false, opcion2: true },
  { feature: "Informe de cierre con recomendaciones", opcion1: false, opcion2: true },
  { feature: "Inversión", opcion1: "$95.000", opcion2: "$280.000" },
  { feature: "Duración del proceso", opcion1: "1 día", opcion2: "6 meses" },
];
