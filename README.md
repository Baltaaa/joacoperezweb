# Joaquín Pérez Gorostizu — Landing page

Landing page de un solo scroll para Joaquín Pérez Gorostizu, coach físico en Mar del Plata. Basada en el diseño **Nocturne** hecho en Claude Design.

**Stack:** React 18 + Vite (JSX, sin TypeScript) · Tailwind CSS · Framer Motion.

**En vivo:** [joaquinperezgorostizu.pages.dev](https://joaquinperezgorostizu.pages.dev) — Cloudflare Pages, conectado al repo [Baltaaa/joacoperezweb](https://github.com/Baltaaa/joacoperezweb). Cada push a `main` dispara un build y deploy automático.

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

Ya está configurado — este es el setup actual, por si hay que tocarlo o replicarlo:

1. Cloudflare → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git** → repo `Baltaaa/joacoperezweb`.
2. **Framework preset:** React (Vite) — autocompleta:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. **Production branch:** `main`.
4. Deploy. Cada `git push` a `main` dispara un build y deploy automático — se ve en Cloudflare → proyecto → **Deployments**.

Deploy manual puntual (sin esperar al push), con Wrangler CLI:

```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist --project-name=joaquinperezgorostizu
```

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
