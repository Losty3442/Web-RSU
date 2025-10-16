# Web RSU - Universidad Nacional de Piura

Sitio web oficial de la Dirección de Responsabilidad Social Universitaria (DRSU) de la Universidad Nacional de Piura. Una aplicación web moderna desarrollada con React, TypeScript y Vite que presenta las actividades, proyectos y programas de responsabilidad social universitaria.

## 🚀 Características Principales

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y escritorio
- **Navegación Intuitiva**: Menú lateral y navegación superior con estructura jerárquica
- **Gestión de Noticias**: Sistema completo de noticias con categorías, filtros y paginación
- **Secciones Especializadas**: Páginas dedicadas para cada área de la DRSU
- **Componentes Reutilizables**: Arquitectura modular con componentes UI personalizados
- **Animaciones Suaves**: Transiciones y efectos visuales con Framer Motion
- **Accesibilidad**: Cumple con estándares de accesibilidad web

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca principal para la interfaz de usuario
- **TypeScript 5.9.3** - Tipado estático para mayor robustez del código
- **Vite 7.1.7** - Herramienta de construcción rápida y moderna
- **React Router DOM 7.9.4** - Enrutamiento del lado del cliente

### Estilos y UI
- **Tailwind CSS 4.1.14** - Framework de CSS utilitario
- **Radix UI** - Componentes primitivos accesibles
- **Lucide React** - Iconografía moderna y consistente
- **Framer Motion 12.23.24** - Animaciones y transiciones

### Herramientas de Desarrollo
- **ESLint** - Linter para mantener calidad del código
- **TypeScript ESLint** - Reglas específicas para TypeScript

## 📁 Estructura de Carpetas

```
src/
├── presentation/           # Capa de presentación
│   ├── components/         # Componentes reutilizables
│   │   ├── common/       # Componentes comunes (Breadcrumb, FeatureCard)
│   │   ├── layout/       # Componentes de layout (Header, Sidebar, Layout)
│   │   └── ui/           # Componentes UI base (Button, Card, Dialog, etc.)
│   ├── hooks/            # Hooks personalizados
│   │   ├── useNavigation.ts
│   │   ├── useScrollAnimation.ts
│   │   └── useSidebar.ts
│   ├── lib/              # Utilidades y constantes
│   │   ├── constants.ts  # Configuraciones y datos estáticos
│   │   ├── types.ts      # Definiciones de tipos TypeScript
│   │   └── utils.ts      # Funciones utilitarias
│   └── pages/            # Páginas de la aplicación
│       ├── about/        # Página "Acerca de"
│       ├── alliances/   # Alianzas estratégicas
│       ├── contact/      # Contacto y formularios
│       ├── courses/     # Cursos y capacitaciones
│       ├── home/        # Página principal
│       ├── news/        # Sistema de noticias
│       ├── news-detail/ # Detalle de noticias
│       ├── team/        # Equipo DRSU
│       ├── volunteer/   # Programas de voluntariado
│       └── ...          # Otras páginas especializadas
├── data/                 # Datos estáticos
│   └── newsData.ts      # Base de datos de noticias
├── assets/              # Recursos estáticos
├── App.tsx              # Componente principal
└── main.tsx            # Punto de entrada
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18.0 o superior
- npm 9.0 o superior

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd Web-RSU
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno (opcional)**
   ```bash
   # Crear archivo .env.local si es necesario
   touch .env.local
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 📋 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run preview      # Vista previa de la build de producción

# Calidad de código
npm run lint         # Ejecuta ESLint para verificar el código
```

## 🌐 Variables de Entorno

Actualmente el proyecto no requiere variables de entorno específicas, pero puedes crear un archivo `.env.local` para configuraciones personalizadas:

```env
# Ejemplo de variables de entorno (opcional)
VITE_APP_TITLE="DRSU - Universidad Nacional de Piura"
VITE_API_URL="https://api.unp.edu.pe"
VITE_CONTACT_EMAIL="rsu@unp.edu.pe"
```

## 📱 Funcionalidades Principales

### 🏠 Página Principal
- Hero section con información destacada
- Sección de noticias recientes
- Tarjetas de características principales
- Información sobre programas de voluntariado
- Enlaces a alianzas estratégicas

### 📰 Sistema de Noticias
- **75+ noticias** organizadas por categorías
- Filtros por categoría (Eventos, Alianzas, Voluntariado, etc.)
- Búsqueda por texto
- Paginación automática
- Vista detallada con galería de imágenes
- Noticias relacionadas

### 👥 Secciones Institucionales
- **Nosotros**: Misión, visión, equipo, ubicación
- **Documentos de Gestión**: Reconocimientos, reglamentos, POI
- **Herramientas**: Cursos, videos, presentaciones
- **Actividades**: Eventos y proyectos especiales

### 🤝 Programas de Voluntariado
- Información sobre tipos de voluntariado
- Proceso de inscripción
- Beneficios y certificaciones
- Galería de actividades

### 📞 Contacto
- Formulario de contacto
- Información de ubicación
- Redes sociales
- Horarios de atención

## 🎨 Sistema de Diseño

### Colores Principales
```css
Primary: #071A40    /* Azul oscuro institucional */
Secondary: #0A2A5E  /* Azul medio */
Accent: #1E5EFF     /* Azul brillante */
Success: #28A745    /* Verde */
Warning: #FFC107    /* Amarillo */
Danger: #DC3545     /* Rojo */
```

### Componentes UI
- Botones con variantes (primary, secondary, outline)
- Tarjetas con sombras y efectos hover
- Modales y diálogos accesibles
- Formularios con validación
- Navegación responsive

## 🔧 Configuración de Desarrollo

### Estructura de Componentes
Cada componente sigue las mejores prácticas:
- Máximo 150 líneas por archivo
- Separación clara de responsabilidades
- Tipado estricto con TypeScript
- Componentes funcionales con hooks

### Convenciones de Nombres
- **Componentes**: PascalCase (ej: `NewsCard.tsx`)
- **Hooks**: camelCase con prefijo `use` (ej: `useNavigation.ts`)
- **Utilidades**: camelCase (ej: `formatDate.ts`)
- **Tipos**: PascalCase (ej: `NewsItem`, `NavigationItem`)

## 📊 Datos y Contenido

### Base de Datos de Noticias
- **75 noticias** con contenido completo
- **25+ categorías** diferentes
- Metadatos completos (fecha, autor, vistas, galería)
- Funciones utilitarias para filtrado y búsqueda

### Información Institucional
- Datos de contacto actualizados
- Información del equipo DRSU
- Enlaces a documentos oficiales
- Redes sociales institucionales

## 🚀 Despliegue

### Build de Producción
```bash
npm run build
```

### Servidor de Producción
```bash
npm run preview
```

Los archivos estáticos se generan en la carpeta `dist/` y pueden ser desplegados en cualquier servidor web estático.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia de la Universidad Nacional de Piura.

## 📞 Contacto

**Dirección de Responsabilidad Social Universitaria**
- 📧 Email: rsu@unp.edu.pe
- 📞 Teléfono: +51 073 285132
- 📍 Dirección: Ciudad Universitaria, Urb. Miraflores s/n, Castilla - Piura
- 🌐 Web: [www.unp.edu.pe](https://www.unp.edu.pe)

---

Desarrollado con ❤️ para la comunidad universitaria de la Universidad Nacional de Piura.