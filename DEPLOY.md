# Guía de despliegue — NotionFreelancer

## Stack
- **Framework:** Astro 4 (generación estática)
- **Hosting:** Cloudflare Pages (gratis)
- **Dominio:** notionfreelancer.com

---

## 1. Instalar dependencias y probar en local

```bash
cd notionfreelancer
npm install
npm run dev       # → http://localhost:4321
npm run build     # verificar que el build pasa sin errores
```

---

## 2. Subir a GitHub

```bash
git init
git add .
git commit -m "feat: initial blog setup"
git remote add origin https://github.com/TU_USUARIO/notionfreelancer.git
git push -u origin main
```

---

## 3. Cloudflare Pages

1. Ir a [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages**
2. Conectar con GitHub y seleccionar el repo `notionfreelancer`
3. Configuración de build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**

Cloudflare genera automáticamente una URL `*.pages.dev` para previsualizar.

---

## 4. Dominio personalizado

### Registrar el dominio
- Opción recomendada: registrarlo directamente en **Cloudflare Registrar** (~$10/año sin markup)
  → dash.cloudflare.com → **Domain Registration** → buscar `notionfreelancer.com`
- Alternativa: Namecheap, Porkbun, o cualquier registrador. Luego apuntar los nameservers a Cloudflare.

### Conectar dominio a Pages
1. En el proyecto de Pages → **Custom domains** → **Set up a custom domain**
2. Escribir `notionfreelancer.com`
3. Si el dominio está en Cloudflare Registrar: se configura automáticamente en segundos
4. Si está en otro registrador: añadir el CNAME que Cloudflare indica en los DNS del registrador

### www redirect (opcional)
Añadir en Cloudflare → DNS:
- CNAME `www` → `notionfreelancer.com` (proxied)

Y en Pages → Custom domains añadir también `www.notionfreelancer.com`.

---

## 5. Publicar un nuevo post

Crear archivo en `src/content/blog-es/` (o `blog-en/` para inglés):

```markdown
---
title: "Título del artículo"
description: "Descripción corta para SEO (150-160 caracteres)"
pubDate: 2026-07-01
tags: ["Notion", "Freelance"]
heroImage: "/blog/nombre-imagen.jpg"   # opcional
---

Contenido del artículo en Markdown...
```

Hacer commit y push → Cloudflare Pages despliega automáticamente en ~30 segundos.

---

## 6. Variables de entorno (si las necesitas en el futuro)

En Cloudflare Pages → **Settings** → **Environment variables**. Por ahora el proyecto no necesita ninguna.

---

## Estructura del proyecto

```
notionfreelancer/
├── src/
│   ├── i18n/          # Strings de traducción ES/EN
│   ├── content/
│   │   ├── blog-es/   # Posts en español (.md)
│   │   └── blog-en/   # Posts en inglés (.md)
│   ├── layouts/       # BaseLayout, BlogPostLayout
│   ├── components/    # Header, Footer, PostCard
│   └── pages/
│       ├── es/        # /es/blog/, /es/templates/, /es/sobre-mi/
│       └── en/        # /en/blog/, /en/templates/, /en/about/
├── public/
│   ├── _redirects     # Cloudflare: / → /es/
│   ├── robots.txt
│   └── favicon.svg
└── astro.config.mjs
```
