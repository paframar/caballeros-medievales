# Arquitectura del Proyecto - Caballeros Medievales

## 📋 Resumen

Este documento describe la arquitectura profesional implementada para el sitio web de Caballeros Medievales.

## 🏛️ Principios de Diseño

### Separación de Responsabilidades

- **Components**: Componentes reutilizables sin lógica de negocio
- **Pages**: Páginas completas con lógica específica
- **Styles**: Estilos globales y tokens de diseño centralizados
- **Config**: Configuración de librerías externas (i18n, etc.)
- **Translation**: Archivos de traducción separados

### Estructura Modular

Cada componente y página tiene su propia carpeta con:

- Archivo TypeScript (`.tsx`)
- Archivo de estilos (`.css`)
- Archivo barrel export (`index.ts`)

## 📂 Estructura Detallada

```
src/
│
├── assets/                          # 🖼️ Recursos Estáticos
│   ├── background.png              # Fondo compartido
│   └── cards/                      # 16 imágenes de cartas
│       ├── caballeros-medievales-bandera.png
│       ├── caballeros-medievales-caballero.png
│       ├── caballeros-medievales-castillo.png
│       └── ... (13 más)
│
├── components/                      # 🧩 Componentes Reutilizables
│   ├── Card/
│   │   ├── Card.tsx                # Componente de carta animada
│   │   ├── Card.css                # Estilos con efectos hover
│   │   └── index.ts                # Export
│   │
│   └── Layout/
│       ├── Layout.tsx              # Layout con background y footer
│       ├── Layout.css              # Estilos del layout
│       └── index.ts                # Export
│
├── config/                          # ⚙️ Configuración
│   └── i18n.ts                     # Setup de i18next
│
├── pages/                           # 📄 Páginas
│   ├── HomePage/
│   │   ├── HomePage.tsx            # Menú interactivo con cartas
│   │   ├── HomePage.css            # Estilos específicos
│   │   └── index.ts                # Export
│   │
│   ├── RulesPage/
│   │   ├── RulesPage.tsx           # Reglas completas del juego
│   │   ├── RulesPage.css           # Estilos de la página
│   │   └── index.ts                # Export
│   │
│   ├── ContactPage/
│   │   ├── ContactPage.tsx         # Información de contacto
│   │   ├── ContactPage.css         # Estilos de contacto
│   │   └── index.ts                # Export
│   │
│   └── AboutPage/
│       ├── AboutPage.tsx           # Sobre el proyecto
│       ├── AboutPage.css           # Estilos about
│       └── index.ts                # Export
│
├── styles/                          # 🎨 Estilos Globales
│   ├── global.css                  # Reset CSS y estilos base
│   └── theme.ts                    # Design tokens y paleta
│
├── translation/                     # 🌐 Traducciones
│   └── translation.es.json         # Textos en español
│
├── App.tsx                          # 🎯 App principal con Router
├── main.tsx                         # 🚀 Entry point
└── vite-env.d.ts                   # TypeScript definitions
```

## 🎨 Sistema de Diseño

### Theme Tokens (`src/styles/theme.ts`)

```typescript
theme = {
  colors: {
    primary: { gold, lightGold, darkGold, bronze },
    metal: { bronze, silver, iron },
    nature: { forestGreen, mossGreen, earthBrown, darkBrown, woodBrown },
    background: { dark, mediumDark, overlay },
    text: { light, gold, darkBrown, brown, goldBrown },
  },
  shadows: {
    cardGlow: "brillo dorado para hover",
    cardShadow: "sombra base de cartas",
    cardHover: "sombra intensificada al hover",
    textGlow: "resplandor para títulos",
  },
  fonts: {
    primary: "UnifrakturCook", // Fuente medieval
  },
  borderRadius: {
    card: "bordes irregulares para efecto artesanal",
  },
};
```

## 🔄 Flujo de Navegación

```
HomePage (/)
    │
    ├─ Click Bandera inicial → Expande menú
    │
    ├─ Hover Bandera → Muestra "Reglas" → /rules
    │
    ├─ Hover Castillo → Muestra "Contacto" → /contact
    │
    └─ Hover Caballero → Muestra "Quiénes somos" → /about
```

## 🎬 Sistema de Animaciones

### HomePage

- **Título**: Fade-in + slide desde arriba (0.8s)
- **Carta Bandera**: Scale-up con delay (0.5s)
- **Expansión**: Spring animation (stiffness: 80, damping: 15)
  - Castillo: Traslación radial izquierda (-180px, 80px, -15°)
  - Caballero: Traslación radial derecha (180px, 80px, 15°)

### Card Component

- **Hover**: Scale 1.05 + golden glow shadow
- **Active**: Scale 0.98
- **Hover Text**: Fade-in con slide-up (0.2s)

### Pages

- **Entrada**: Fade-in global (0.5s)
- **Secciones**: Staggered animations con delays incrementales
- **Botones**: Scale effects en hover y tap

## 🌐 Sistema i18n

### Estructura de Traducciones

```json
{
  "nav": { navegación },
  "home": { textos del home },
  "rules": {
    "objective": "...",
    "setup": { "description": [...] },
    "cards": {
      "cardName": {
        "name": "...",
        "description": "...",
        "effects": { opcionales }
      }
    }
  }
}
```

### Uso

```tsx
const { t } = useTranslation();
t("nav.rules");
t("rules.cards.knight.name");
```

## 📱 Responsive Design

### Breakpoints

- **Mobile**: ≤ 600px
- **Tablet**: ≤ 768px
- **Desktop**: > 768px

### Ajustes por Dispositivo

- Tamaños de fuente escalados
- Cartas más pequeñas en móvil
- Padding reducido en pantallas pequeñas
- Animaciones suavizadas en móvil

## 🔧 Configuración de Herramientas

### Vite

- Hot Module Replacement (HMR)
- Build optimizado con tree-shaking
- Assets optimization

### TypeScript

- Strict mode habilitado
- Type checking completo
- Interfaces para props de componentes

### ESLint

- Reglas de React Hooks
- React Refresh plugin
- TypeScript ESLint

## 🚀 Comandos de Desarrollo

```bash
yarn dev      # Servidor de desarrollo en localhost:5173
yarn build    # Build de producción
yarn preview  # Preview del build
yarn lint     # Verificar código
```

## ✅ Checklist de Calidad

- ✅ Estructura modular y escalable
- ✅ Separación clara de responsabilidades
- ✅ Type safety con TypeScript
- ✅ Internacionalización completa
- ✅ Animaciones fluidas y performantes
- ✅ Responsive design
- ✅ Design tokens centralizados
- ✅ Sin errores de linter
- ✅ Código limpio y mantenible
- ✅ Documentación completa

## 🔮 Extensibilidad

### Agregar una nueva página

1. Crear carpeta en `src/pages/NombrePage/`
2. Crear `NombrePage.tsx`, `NombrePage.css` e `index.ts`
3. Agregar ruta en `App.tsx`
4. Agregar traducciones en `translation.es.json`

### Agregar un nuevo componente

1. Crear carpeta en `src/components/NombreComponente/`
2. Crear archivos siguiendo la estructura existente
3. Exportar desde `index.ts`

### Agregar un nuevo idioma

1. Crear `translation.{lang}.json`
2. Importar en `src/config/i18n.ts`
3. Agregar al objeto `resources`

---

**Arquitectura diseñada para escalabilidad y mantenibilidad** 🏰⚔️
