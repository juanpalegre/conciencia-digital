# ConCiencia Digital — Sitio Web

Sitio web personal/profesional de Juan Pablo, Ingeniero de IA y ex-docente, fundador de **ConCiencia Digital**: propuestas de capacitación y acompañamiento en tecnología educativa (IA, programación y robótica) para escuelas e instituciones.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Estilos:** Tailwind CSS
- **Fuentes:** Google Fonts (definir en proyecto)
- **Deploy:** Vercel
- **Contenido:** archivos `.md` o `.mdx` en `/content` — sin CMS externo por ahora
- **Formulario de contacto:** Resend o Formspree (a definir)
- **Analytics:** Vercel Analytics (sin cookies)

---

## Estructura del proyecto

```
/
├── app/
│   ├── page.tsx              # Landing principal (home)
│   ├── propuestas/
│   │   └── page.tsx          # Página de propuestas (Opción 1 y Opción 2)
│   ├── recursos/
│   │   └── page.tsx          # Recursos descargables
│   ├── eventos/
│   │   └── page.tsx          # Capacitaciones pasadas y próximas
│   └── contacto/
│       └── page.tsx          # Formulario de contacto
├── components/
│   ├── ui/                   # Componentes base reutilizables
│   ├── sections/             # Secciones del home (Hero, Sobre, Propuestas, etc.)
│   └── layout/               # Header, Footer, Nav
├── content/
│   ├── recursos/             # Archivos .md de cada recurso descargable
│   └── eventos/              # Archivos .md de cada evento
├── public/
│   ├── docs/                 # PDFs descargables (propuestas, materiales)
│   └── images/
└── lib/
    └── utils.ts
```

---

## Secciones del home (orden)

1. **Hero** — Nombre + tagline + CTA principal
2. **Para qué existe** — El problema que resuelve ConCiencia Digital (3-4 líneas)
3. **Cómo trabajo** — 3 diferenciadores: vengo del aula / trabajo desde adentro / tecnología con valores
4. **Propuestas** — Cards de Opción 1 (Capacitación única) y Opción 2 (Acompañamiento guiado)
5. **Recursos** — Grid de materiales descargables gratuitos
6. **Eventos** — Últimas capacitaciones realizadas + próximas fechas
7. **Contacto** — Formulario simple + link a WhatsApp

---

## Paleta de colores

```
--teal:       #0F6E56   /* color primario — verde oscuro */
--teal-light: #E1F5EE   /* fondo suave primario */
--teal-mid:   #9FE1CB   /* bordes y acentos suaves */
--blue:       #185FA5   /* color secundario */
--blue-light: #E6F1FB   /* fondo suave secundario */
--gray-text:  #444444   /* cuerpo de texto */
--black:      #1A1A1A   /* títulos */
--white:      #FFFFFF
--bg:         #F7F7F5   /* fondo general muy suave */
```

Estos colores son los mismos que la propuesta comercial en PDF — mantener consistencia visual.

---

## Tipografía

- **Títulos:** fuente con carácter (no Inter, no Roboto) — sugerencia: DM Serif Display o Fraunces para display, DM Sans o Outfit para cuerpo
- **Tamaños:** escala tipográfica consistente con Tailwind (`text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-4xl`, `text-6xl`)
- **Peso:** 400 para cuerpo, 600-700 para títulos — nunca usar 900

---

## Convenciones de código

- TypeScript estricto — sin `any`
- Componentes en PascalCase, archivos en kebab-case
- Exportaciones nombradas (no default exports) excepto en page.tsx y layout.tsx de Next.js
- Tailwind puro — sin CSS custom salvo variables globales en `globals.css`
- Imágenes siempre con `next/image`
- Links internos siempre con `next/link`
- Sin dependencias innecesarias — mantener el bundle liviano

---

## Comandos

```bash
npm run dev        # servidor local en puerto 3000
npm run build      # build de producción
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

---

## Contenido — textos clave

### Tagline principal
> "Tecnología con propósito para docentes y escuelas."

### Bajada del hero
> "La IA llegó sin que nadie avisara. ConCiencia Digital acompaña a instituciones educativas a integrar tecnología con sentido pedagógico y valores humanos."

### Los 3 diferenciadores
- **Vengo del aula.** 10 años de docencia. Conozco la realidad institucional desde adentro.
- **Trabajo desde adentro, no desde afuera.** La propuesta se adapta a cada escuela, no es un talle único.
- **Tecnología al servicio de los valores.** Nunca un fin en sí misma.

### Propuesta 1 — Capacitación única
- Precio: $95.000 ARS
- Duración: 90 minutos presenciales
- Incluye: materiales digitales + 30 días WhatsApp

### Propuesta 2 — Acompañamiento guiado
- Precio: $280.000 ARS
- Duración: 3 meses (charla inicial + 2 seguimientos + WhatsApp continuo)
- Incluye: materiales personalizados + informe de cierre

---

## Recursos disponibles para descargar

Todos en `/public/docs/` — se listan en `/content/recursos/`:

- `juegos-didacticos-redviva25.docx` — 15 actividades sin pantalla para todas las etapas
- `estructura-charla-ia-educacion.html` — Mapa de la charla completa (90 min)
- `slides-gamma-redviva25.docx` — Módulos de presentación para Gamma
- `ConCienciaDigital_Propuesta_Servicios.docx` — Propuesta comercial (Opción 1 y 2)

---

## Notas importantes

- **NO** hardcodear precios en el código — usar constantes en `lib/config.ts` para poder actualizarlos fácilmente (contexto inflacionario Argentina)
- El formulario de contacto NO debe enviar al mismo email que aparece públicamente — usar variable de entorno `CONTACT_EMAIL`
- Las variables de entorno van en `.env.local` — nunca commitear ese archivo
- El sitio debe funcionar perfectamente sin JavaScript habilitado para el contenido principal (SSR/SSG)
- Optimizar para mobile first — la mayoría de las directoras van a ver el sitio desde el celular

---

## Tono del sitio

Cálido, directo, sin jerga técnica innecesaria. El visitante típico es una directora o coordinadora pedagógica de una escuela privada de GBA que vio algo en Instagram o recibió un link por WhatsApp. No es desarrolladora ni tech. Necesita entender en 10 segundos qué hace este sitio y si le sirve.

Evitar:
- Términos como "soluciones", "ecosistema", "disruptivo", "innovación"
- Bullet points excesivos en el copy principal
- CTAs agresivos ("¡Reservá ya!")

Preferir:
- Frases cortas y directas
- Primera persona cuando habla Juan Pablo
- CTAs amables ("Contame más", "Escribime", "Hablemos")
