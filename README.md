# 🎈 Mateo's Adventure - Página Web Interactiva

![Estado del Build](https://img.shields.io/badge/build-passing-brightgreen)
![Versión](https://img.shields.io/badge/version-1.0.0-blue)
![Licencia](https://img.shields.io/badge/license-MIT-green)

Una página web moderna y colorida dedicada a Mateo, con galerías de fotos, cuentos interactivos, juegos educativos y un espacio para la familia.

## 🌟 Características

### 📸 Galería de Recuerdos

- **19 fotos** organizadas con descripciones y fechas
- Sistema de **likes** persistente con LocalStorage
- **Comentarios** interactivos en cada foto
- Lightbox profesional con vista detallada
- Diseño responsive con grid adaptativo

### 📚 Cuentos Mágicos

- Cuentos interactivos con ilustraciones
- **Text-to-Speech** en español para escuchar los cuentos
- Sistema de likes y comentarios por cuento
- Navegación fluida entre lista y detalle

### 🎮 Juegos Interactivos

- **Explosión de Color**: Juego sensorial con efectos visuales y sonoros
- **Parejas**: Juego de memoria con emojis
- Más juegos próximamente (Piano Musical, Bloques)

### 👨‍👩‍👧 Salón de la Familia

- Chat en tiempo real usando LocalStorage
- Mensajes persistentes entre sesiones
- Interfaz amigable y colorida

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: Vanilla JavaScript (SPA con router personalizado)
- **Estilos**: TailwindCSS v4.1.17
- **Build Tool**: Vite v7.2.4
- **Almacenamiento**: LocalStorage (100% gratis, sin backend)
- **Despliegue**: GitHub Pages con GitHub Actions
- **Fuentes**: Google Fonts (Fredoka One, Nunito)

## 🎨 Paleta de Colores

```css
--mateo-blue: #4FC3F7    /* Azul cielo */
--mateo-yellow: #FFF176  /* Amarillo suave */
--mateo-red: #FF8A65     /* Coral */
--mateo-green: #81C784   /* Verde menta */
--mateo-purple: #BA68C8  /* Púrpura pastel */
```

## 📦 Estructura del Proyecto

```
mateo-web/
├── src/
│   ├── assets/          # Imágenes y recursos
│   ├── components/      # Componentes reutilizables
│   │   └── Navbar.js
│   ├── pages/           # Páginas de la aplicación
│   │   ├── Home.js
│   │   ├── Gallery.js
│   │   ├── Stories.js
│   │   ├── Games.js
│   │   └── Lounge.js
│   ├── games/           # Juegos interactivos
│   │   ├── ColorExplosion.js
│   │   └── Memory.js
│   ├── services/        # Servicios de datos
│   │   └── storage.js   # LocalStorage service
│   ├── data/            # Datos estáticos
│   │   └── storiesData.js
│   ├── router.js        # Sistema de routing SPA
│   ├── main.js          # Punto de entrada
│   └── style.css        # Estilos globales
├── public/              # Archivos públicos
├── .github/
│   └── workflows/
│       └── deploy.yml   # CI/CD para GitHub Pages
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🚀 Instalación y Desarrollo

### Requisitos Previos

- Node.js v18 o superior
- npm v9 o superior

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/GLHacker/mateo.git
cd mateo

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Build para Producción

```bash
# Generar build optimizado
npm run build

# Vista previa del build
npm run preview
```

## 🌐 Despliegue

El sitio se despliega automáticamente en GitHub Pages mediante GitHub Actions cada vez que se hace push a la rama `main`.

**URL del sitio**: `https://glhacker.github.io/mateo/`

### Configuración de GitHub Pages

1. Ve a Settings → Pages
2. Source: GitHub Actions
3. El workflow `.github/workflows/deploy.yml` se ejecutará automáticamente

## 💾 Sistema de Almacenamiento

El proyecto utiliza **LocalStorage** para persistir datos sin necesidad de backend:

### Datos Almacenados

- `mateo_stories_data`: Likes y comentarios de cuentos
- `mateo_gallery_data`: Likes y comentarios de fotos
- `mateo_guestbook_data`: Entradas del libro de visitas
- `mateo_chat_data`: Mensajes del chat familiar (últimos 50)

### Ventajas

- ✅ 100% gratuito (sin costos de servidor)
- ✅ Funciona offline
- ✅ Sin configuración de backend
- ✅ Datos persistentes por navegador

### Limitaciones

- ⚠️ Datos locales al navegador (no sincronizados entre dispositivos)
- ⚠️ Límite de ~5-10MB por dominio
- ⚠️ Se pierden si se limpian los datos del navegador

## 🎯 Características Técnicas

### Rendimiento

- ⚡ Build optimizado con Vite
- 🖼️ Imágenes optimizadas (total: ~4.5MB)
- 📦 JavaScript minificado (~22KB gzipped)
- 🎨 CSS optimizado (~0.6KB gzipped)

### Accesibilidad

- ♿ Navegación por teclado
- 🎤 Text-to-Speech para cuentos
- 📱 Diseño responsive (móvil, tablet, desktop)
- 🎨 Alto contraste en textos

### SEO

- 📝 Meta tags apropiados
- 🏷️ Títulos descriptivos
- 🌐 HTML semántico
- 🔍 URLs amigables con SPA routing

## 🔄 Migración desde Firebase

Este proyecto fue migrado exitosamente de Firebase a LocalStorage:

### Cambios Realizados

- ❌ Eliminado: `firebase.js` y dependencias de Firebase
- ✅ Agregado: `storage.js` con API compatible
- ✅ Actualizado: Todas las páginas para usar `storageService`
- ✅ Mantenido: Misma funcionalidad y UX

## 📝 Próximas Mejoras

- [ ] Agregar más juegos (Piano Musical, Bloques)
- [ ] Sistema de temas (modo oscuro/claro)
- [ ] Exportar/importar datos del LocalStorage
- [ ] PWA (Progressive Web App) para instalación
- [ ] Animaciones más elaboradas
- [ ] Sistema de logros y badges

## 🤝 Contribuciones

Este es un proyecto personal, pero las sugerencias son bienvenidas. Por favor abre un issue para discutir cambios mayores.

## 📄 Licencia

MIT License - Siéntete libre de usar este código como referencia para tus propios proyectos.

## 👨‍💻 Autor

Creado con ❤️ para Mateo

---

**Nota**: Este proyecto fue desarrollado como una página web familiar interactiva, priorizando la simplicidad, el diseño colorido y la experiencia de usuario.
