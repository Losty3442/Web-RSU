# Panel Administrativo DRSU

## Configuración Inicial

### 1. Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
```

### 2. Configuración de Supabase

Asegúrate de tener configuradas las siguientes tablas en tu proyecto de Supabase:

#### Tabla `news`
```sql
CREATE TABLE news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  summary TEXT,
  image_url TEXT,
  author TEXT,
  published_at TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ,
  deleted_at TIMESTAMPTZ,
  user_id UUID
);
```

#### Tabla `documents`
```sql
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  type TEXT CHECK (type IN ('WEB', 'DOCUMENT', 'VIDEO', 'IMAGE')) NOT NULL,
  link TEXT,
  section TEXT CHECK (section IN ('DOCUMENTS', 'TOOLS')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ,
  deleted_at TIMESTAMPTZ,
  user_id UUID
);
```

### 3. Configuración de Autenticación

En Supabase, configura la autenticación por email/contraseña:

1. Ve a Authentication > Settings
2. Habilita "Enable email confirmations" si deseas confirmación por email
3. Configura las políticas RLS (Row Level Security) según tus necesidades

## Uso del Dashboard

### Acceso

1. Navega a `/admin/login`
2. Inicia sesión con las credenciales de Supabase Auth
3. Serás redirigido automáticamente al dashboard principal

### Funcionalidades

#### Dashboard Principal (`/admin`)
- Vista general con estadísticas
- Total de noticias, documentos y herramientas
- Noticias recientes
- Accesos rápidos para crear contenido

#### Gestión de Noticias (`/admin/news`)
- **Listar noticias**: Tabla con todas las noticias creadas
- **Crear noticia**: Formulario con editor enriquecido (TipTap)
- **Editar noticia**: Modificar noticias existentes
- **Eliminar noticia**: Soft delete (eliminación lógica)
- **Búsqueda**: Filtrar por título o autor

#### Gestión de Documentos (`/admin/documents`)
- **Tabs separados**: Documentos y Herramientas
- **Crear documento**: Formulario para nuevos documentos
- **Editar documento**: Modificar documentos existentes
- **Eliminar documento**: Soft delete
- **Tipos soportados**: WEB, DOCUMENT, VIDEO, IMAGE
- **Secciones**: DOCUMENTS, TOOLS

### Editor de Noticias

El editor incluye las siguientes funcionalidades:
- **Formato de texto**: Negrita, cursiva
- **Encabezados**: H1, H2
- **Listas**: Con viñetas y numeradas
- **Enlaces**: Agregar links
- **Vista previa**: Preview en tiempo real

### Características Técnicas

#### Arquitectura
- **Separación de capas**: Infrastructure, Presentation
- **Repositorios**: Encapsulación de operaciones de base de datos
- **Hooks personalizados**: TanStack Query para gestión de estado
- **Context API**: Autenticación global

#### Componentes
- **Responsive**: Diseño adaptable a móviles y escritorio
- **Accesibilidad**: Componentes con ARIA labels
- **Loading states**: Skeletons y spinners
- **Error handling**: Manejo de errores con toasts

#### Seguridad
- **Rutas protegidas**: Autenticación obligatoria
- **Soft deletes**: No eliminación física de datos
- **Validación**: Formularios con Zod
- **Sanitización**: Contenido HTML seguro

## Estructura de Archivos

```
src/
├── infrastructure/
│   ├── supabase/
│   │   └── supabaseClient.ts
│   └── repositories/
│       ├── newsRepository.ts
│       ├── documentRepository.ts
│       └── authRepository.ts
├── presentation/
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useNewsQueries.ts
│   │   └── useDocumentQueries.ts
│   ├── components/
│   │   ├── auth/
│   │   │   └── ProtectedRoute.tsx
│   │   └── ui/
│   │       ├── table.tsx
│   │       ├── sonner.tsx
│   │       ├── form.tsx
│   │       ├── select.tsx
│   │       ├── tabs.tsx
│   │       └── alert-dialog.tsx
│   └── pages/
│       └── dashboard/
│           ├── index.tsx
│           ├── login/
│           │   └── index.tsx
│           ├── components/
│           │   └── DashboardLayout.tsx
│           ├── news/
│           │   ├── index.tsx
│           │   ├── new.tsx
│           │   ├── edit.tsx
│           │   └── components/
│           │       ├── NewsForm.tsx
│           │       └── NewsTable.tsx
│           └── documents/
│               ├── index.tsx
│               ├── new.tsx
│               ├── edit.tsx
│               └── components/
│                   ├── DocumentForm.tsx
│                   └── DocumentTable.tsx
```

## Desarrollo

### Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Linting
npm run lint
```

### Dependencias Principales

- **@supabase/supabase-js**: Cliente de Supabase
- **@tanstack/react-query**: Gestión de estado y caché
- **@tiptap/react**: Editor de texto enriquecido
- **react-hook-form**: Manejo de formularios
- **zod**: Validación de esquemas
- **sonner**: Notificaciones toast

## Notas Importantes

1. **Variables de entorno**: Asegúrate de configurar correctamente las variables de Supabase
2. **Políticas RLS**: Configura las políticas de seguridad en Supabase según tus necesidades
3. **Backup**: Implementa estrategias de backup para los datos importantes
4. **Monitoreo**: Considera agregar logging y monitoreo en producción
5. **Performance**: El dashboard está optimizado para cargar datos de forma eficiente con TanStack Query

## Soporte

Para problemas o preguntas sobre el dashboard administrativo, contacta al equipo de desarrollo.
