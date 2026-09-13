# Joaquín Pérez Gorostizu — Landing page

Landing page de un solo scroll para Joaquín Pérez Gorostizu, coach físico en Mar del Plata. Basada en el diseño **Nocturne** hecho en Claude Design.

**Stack:** React 18 + Vite (JSX, sin TypeScript) · Tailwind CSS · Framer Motion.

## Estructura

```
src/
  components/       Hero, Value, Services, Gallery, Testimonials, Contact, Footer, etc.
  siteData.js        Todo el copy y los datos de contacto, centralizados acá
  motion.js           Variantes de Framer Motion compartidas (fade + subida, stagger)
  hooks/
    useScrolledPast.js  Detecta el scroll para el CTA de WhatsApp flotante
  assets/             Fotos ya optimizadas a .webp (los .jpg originales quedan
                       en assets/design-originals/ por si hay que reconvertir)
scripts/
  convert-images.mjs  Script one-off para regenerar los .webp desde los originales
```

## Desarrollo local

Requisitos: Node 18+.

```bash
npm install
npm run dev
```

Abre en `http://localhost:5173`.

## Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para servir como sitio estático. Para previsualizar el build:

```bash
npm run preview
```

## Deploy a Cloudflare Pages (subdominio `*.pages.dev`)

**Opción A — desde el dashboard (sin CLI):**

1. Subí este proyecto a un repo de GitHub/GitLab.
2. En Cloudflare → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Elegí el repo. Configuración de build:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare te da una URL `https://<proyecto>.pages.dev`.

**Opción B — con Wrangler CLI:**

```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist --project-name=joaquin-perez-gorostizu
```

Cada push a la rama configurada vuelve a buildear y desplegar automáticamente (opción A).

### Pasar a dominio propio (más adelante)

Cuando se compre el dominio: Cloudflare Pages → proyecto → **Custom domains** → agregar el dominio (si el DNS ya está en Cloudflare, queda andando en minutos). No hace falta tocar código — actualizar únicamente en `index.html`:

- `<link rel="canonical" href="...">`
- `og:url`, `og:image`, `twitter:image` (hoy son placeholders relativos, ver comentario `TODO` en el archivo)

## Contenido pendiente (marcado en el diseño original)

- Mail de contacto y horarios de atención (hoy dice "Mail · pendiente" en el footer).
- Los dos testimonios son placeholders a propósito — reemplazar por texto y nombre reales antes de publicar.
- Definir si se muestran precios en las cards de servicios.
- Con 2–3 fotos más en gimnasio con poca luz, la galería completa podría pasar a fundida (`mix-blend-mode: lighten`), igual que el hero.

Todo el copy y los datos de contacto (WhatsApp, Instagram) están en [`src/siteData.js`](src/siteData.js) — es el único archivo que hace falta tocar para actualizar texto o el número de WhatsApp.
