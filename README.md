# DavidFrame Frontend

Aplicación web de la tienda online de presets y LUTs fotográficos, construida con Astro.

## 🛠️ Stack Tecnológico

- **Astro 4.x** - Framework principal (SSG/SSR)
- **React 18** - Islas interactivas
- **TailwindCSS** - Estilos y diseño
- **TypeScript** - Type safety
- **Lucide React** - Iconos SVG

## 🎨 Características

- **Landing Page Completa**
  - Hero section con parallax
  - Sesiones fotográficas (4 cards clickeables)
  - Sección de beneficios
  - Productos destacados
  - Before/After interactivo
  - Galería de portfolio
  - FAQ con acordeón

- **Diseño Responsive** - Mobile-first approach
- **Tema Oscuro** - Estética cinematográfica premium
- **Performance Optimizado** - SSG con islas React selectivas
- **SEO Friendly** - Meta tags, Open Graph, sitemap

## 🚀 Desarrollo

### Prerrequisitos

- Node.js 20+
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env
# Editar .env con la URL del backend

# Iniciar servidor de desarrollo
npm run dev
```

### Comandos Útiles

```bash
# Desarrollo (hot-reload)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint

# Formateo de código
npm run format
```

## 📁 Estructura

```
src/
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Secciones de la landing
│   └── ui/               # Componentes reutilizables
├── data/                 # Datos mock y configuración
├── layouts/              # Layouts Astro
├── lib/                  # Utilidades y API client
├── pages/                # Rutas de la aplicación
└── styles/               # Estilos globales
```

## 🎨 Paleta de Colores

```css
Primary: #6366F1 (Indigo)
Secondary: #EC4899 (Rosa)
BG Primary: #0A0A0F (Negro azulado)
BG Secondary: #13131A (Gris oscuro)
BG Tertiary: #1C1C26 (Cards)
Text Primary: #F9FAFB (Blanco)
Text Secondary: #9CA3AF (Gris claro)
```

## 🔐 Variables de Entorno

```env
PUBLIC_API_URL=http://localhost:4000
PUBLIC_SITE_URL=http://localhost:4321
```

## 🌐 URLs de Desarrollo

- **Frontend**: http://localhost:4321
- **Backend API**: http://localhost:4000

## 📝 Notas

- Este repositorio es parte de un proyecto con submódulos Git
- Ver repositorio principal: [davidframe](https://github.com/nicolaschicaiza/davidframe)
- Proyecto completo: [davidframe-project](https://github.com/nicolaschicaiza/davidframe-project)

---

**Versión**: 1.0.0  
**Licencia**: Privado
