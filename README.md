# Slyphi Dev's

Landing page del estudio de desarrollo de software Slyphi Dev's — Pasto, Nariño, Colombia.

## Stack

React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide React.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Genera el sitio estático en `dist/`, listo para GitHub Pages (`base: /Slyphi-Dev-s/` configurado en `vite.config.ts`).

## Despliegue

El workflow `.github/workflows/deploy.yml` construye y publica a GitHub Pages automáticamente en cada push a `main`.

## Estructura

```
src/
  components/   componentes reutilizables (Button, Section, Navbar, ProjectCard...)
  sections/     secciones de la landing (Hero, About, Services, Team...)
  i18n/         diccionarios ES/EN y contexto de idioma
  data/         datos de contacto y tecnologías
  hooks/        hooks propios (tema claro/oscuro)
```
