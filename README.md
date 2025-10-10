# Caballeros Medievales

Un juego de cartas medieval de estrategia y astucia.

## 🏗️ Estructura del Proyecto

```
src/
├── assets/                 # Recursos estáticos
│   ├── background.png     # Fondo del sitio
│   └── cards/             # Imágenes de las cartas del juego
├── components/            # Componentes reutilizables
│   ├── Card/             # Componente de carta con animaciones
│   └── Layout/           # Layout principal con footer
├── config/               # Configuración de la aplicación
│   └── i18n.ts          # Configuración de i18next
├── pages/                # Páginas de la aplicación
│   ├── HomePage/        # Página principal con menú animado
│   ├── RulesPage/       # Página de reglas del juego
│   ├── ContactPage/     # Página de contacto
│   └── AboutPage/       # Página sobre nosotros
├── styles/               # Estilos globales y tema
│   ├── global.css       # Reset y estilos globales
│   └── theme.ts         # Tokens de diseño y paleta de colores
├── translation/          # Archivos de traducción
│   └── translation.es.json
├── App.tsx              # Componente principal con rutas
└── main.tsx            # Punto de entrada
```

## 🎨 Paleta de Colores

El proyecto utiliza una paleta medieval con tonos naturales:

- **Dorados**: `#bfa76f`, `#e6c97a`, `#a67c52`
- **Metales**: Bronze `#cd7f32`, Silver `#c0c0c0`, Iron `#4a4a4a`
- **Naturaleza**: Verde bosque, marrón tierra, marrón madera
- **Fondos**: Tonos oscuros con overlays transparentes

Todos los tokens de diseño están definidos en `src/styles/theme.ts`.

## 🌐 Internacionalización

El proyecto usa `i18next` y `react-i18next` para la gestión de traducciones.

- Archivo de traducción: `src/translation/translation.es.json`
- Configuración: `src/config/i18n.ts`

Uso en componentes:

```tsx
import { useTranslation } from "react-i18next";

const { t } = useTranslation();
const text = t("nav.rules");
```

## 🎯 Páginas

### Home

- Menú interactivo con cartas animadas
- Al hacer clic en la carta de Bandera, se expanden las cartas de Castillo y Caballero
- Navegación a través de hover sobre las cartas

### Reglas

- Objetivo del juego
- Preparación
- Descripción detallada de todas las cartas

### Contacto

- Información de contacto
- Email, redes sociales y ubicación

### Quiénes Somos

- Historia del proyecto
- Misión y equipo
- Características del juego

## 🎬 Animaciones

El proyecto usa `motion` (Framer Motion) para animaciones fluidas:

- Transiciones suaves entre páginas
- Animación de apertura de cartas en el menú principal
- Efectos hover con brillo dorado
- Animaciones de entrada escalonadas

## 🚀 Scripts

```bash
# Desarrollo
yarn dev

# Build
yarn build

# Preview
yarn preview

# Linter
yarn lint
```

## 📦 Dependencias Principales

- **React 19**: Framework principal
- **React Router DOM**: Navegación entre páginas
- **i18next**: Internacionalización
- **Motion (Framer Motion)**: Animaciones
- **TypeScript**: Type safety
- **Vite**: Build tool

## 🎴 Cartas Disponibles

El juego incluye las siguientes cartas:

1. **Bandera** - Objetivo del juego
2. **Caballero** - Unidad básica
3. **Ladrón** - Roba banderas
4. **Hechicera** - Contrarresta al Ladrón
5. **Duende** - Ataca caballeros
6. **Hada** - Protege de Duendes
7. **Espada** - Ataca caballeros
8. **Escudo** - Protege de Espadas
9. **Castillo** - Protección total
10. **Catapulta** - Transfiere ataques
11. **Cambio de cartas** - Intercambia manos
12. **Dado** - Declara guerra

## 🔧 Personalización

### Colores

Modifica los tokens en `src/styles/theme.ts`

### Textos

Edita `src/translation/translation.es.json`

### Animaciones

Ajusta los valores en los componentes individuales o en `Card.tsx`

---

© 2025 www.caballerosmedievales.com
