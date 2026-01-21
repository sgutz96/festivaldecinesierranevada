# Landing Page FECSINE - Festival de Cine Sierra Nevada

Landing page completa para el Festival de Cine Sierra Nevada (FECSINE) con múltiples páginas y secciones.

## 🎬 Páginas Disponibles

### 1. Página Principal (Home)
**Ruta:** `/` o sin hash en la URL

**Secciones:**
- **Header:** Menú de navegación sticky con logo
- **Hero:** Presentación de la Fundación Cine Jaguar con estadísticas
- **Festival Poster:** Información del Festival 2025 con programación en carrusel
- **Movies Section:** 4 categorías de películas (Cine Étnico, Ambiental, Caribe, Colombiano)
- **Gallery & Press:** Galerías de fotos y notas de prensa
- **Partners:** Aliados del festival
- **Contact:** Información de contacto y footer

### 2. Formación Audiovisual
**Ruta:** `#formacion-audiovisual`

**Secciones:**
- **Header:** Menú de navegación
- **Hero:** Introducción a la formación audiovisual
- **About:** 
  - Programas educativos (4 talleres diferentes)
  - Próximos talleres programados
  - Testimonios de estudiantes
- **Footer:** Sección de contacto completa

### 3. Galería
**Ruta:** `#galeria-completa`

**Secciones:**
- **Header:** Menú de navegación
- **Hero:** Introducción a la galería
- **Galería:** 
  - Filtros por categoría (Todas, 2025, 2024, 2023, Talleres, Ceremonias)
  - Grid de imágenes con hover effects
  - Sección de videos del festival
  - CTA para enviar fotos
- **Footer:** Sección de contacto completa

## 🎨 Características

- **Diseño Responsivo:** Adaptado para móvil, tablet y desktop
- **Animaciones:** Motion (Framer Motion) para interacciones fluidas
- **Carruseles:** Embla Carousel para galerías y programación
- **Colores:** Paleta verde esmeralda y teal reflejando naturaleza
- **Tipografía:** Sistema de escalas definido en globals.css
- **Padding Amplio:** Espaciado generoso (py-24 md:py-32, px-6 md:px-12)

## 📁 Estructura de Archivos

```
/
├── App.tsx                          # Router principal
├── components/
│   ├── Header.tsx                   # Header reutilizable
│   ├── Hero.tsx                     # Hero de la página principal
│   ├── FestivalPoster.tsx          # Sección del festival
│   ├── MoviesSection.tsx           # Sección de películas
│   ├── GalleryPress.tsx            # Galería y prensa
│   ├── Partners.tsx                # Aliados
│   └── Contact.tsx                 # Contacto y footer
├── pages/
│   ├── FormacionAudiovisual.tsx   # Página de formación
│   └── Galeria.tsx                # Página de galería completa
└── assets/
    └── .gitkeep                    # Carpeta para subir imágenes
```

## 🚀 Navegación

### Cómo navegar entre páginas:

1. **Desde el menú del Header:**
   - "Festival" → Scroll a #festival-2025
   - "Formación Audiovisual" → #formacion-audiovisual
   - "Galería" → #galeria-completa

2. **Logo clickeable:** Vuelve a la página principal

3. **Botón "Quiero ser amigo del festival":** Redirecciona a https://waki.co

## 📸 Imágenes

La carpeta `/assets/` está disponible para subir imágenes propias del festival:
- Posters de ediciones anteriores
- Logos de aliados
- Fotografías de eventos
- Banners promocionales

## 🎯 Funcionalidades Especiales

### Formación Audiovisual:
- 4 programas de formación con detalles completos
- 3 talleres próximos con información de inscripción
- Testimonios de participantes

### Galería:
- Sistema de filtros por categoría
- Hover effects en imágenes
- Sección separada de videos
- CTA para contribuir con fotos

## 🎨 Paleta de Colores

- **Verde Esmeralda:** `emerald-600` (#059669)
- **Teal:** `teal-700` - `teal-800`
- **Degradados:** `from-emerald-900 via-teal-800 to-green-900`
- **Grises:** Para textos y fondos neutros

## 💡 Próximas Mejoras Sugeridas

- Conectar formularios de inscripción a backend
- Integrar galería de videos funcional
- Añadir sección de hoteles y restaurantes
- Sistema de filtros avanzado en galería
- Lightbox para ver imágenes en tamaño completo
