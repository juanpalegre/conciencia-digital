// Central config — update prices and contact info here, not in components

export const WHATSAPP_NUMBER = "5491165916614";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_GREETING = `${WHATSAPP_URL}?text=Hola%20Juan%20Pablo%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20ConCiencia%20Digital`;

export const PROPOSALS = {
  opcion1: {
    title: "Capacitación única",
    price: 95000,
    currency: "ARS",
    duration: "90 minutos presenciales",
    includes: [
      "Materiales digitales para todos los docentes",
      "Soporte por WhatsApp durante 30 días",
      "Certificado de participación",
    ],
    description:
      "Una jornada intensiva para que tu equipo docente entienda qué es la IA, cómo ya está impactando el aula, y qué pueden hacer desde hoy.",
  },
  opcion2: {
    title: "Acompañamiento guiado",
    price: 280000,
    currency: "ARS",
    duration: "3 meses",
    includes: [
      "Charla inicial + 2 seguimientos presenciales",
      "WhatsApp continuo durante todo el proceso",
      "Materiales personalizados para tu institución",
      "Informe de cierre con recomendaciones",
    ],
    description:
      "Un proceso de tres meses para integrar la tecnología de forma sostenida, acompañando a tu equipo en cada paso.",
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
    file: "/docs/juegos-didacticos-redviva25.docx",
    fileLabel: "Descargar .docx",
  },
  {
    slug: "estructura-charla-ia",
    title: "Mapa de la charla: IA en educación",
    description:
      "Estructura completa de la charla de 90 minutos. Útil para coordinadores que quieren replicarla.",
    file: "/docs/estructura-charla-ia-educacion.html",
    fileLabel: "Descargar .html",
  },
  {
    slug: "slides-gamma",
    title: "Módulos para Gamma",
    description:
      "Slides editables para presentar en Gamma. Basados en el evento RedViva 2025.",
    file: "/docs/slides-gamma-redviva25.docx",
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
