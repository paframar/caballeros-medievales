# 🎬 Guía de Animaciones - Caballeros Medievales

## 📱 HomePage - Menú Interactivo con Cartas

### Estado Inicial

```
┌─────────────────────────────────────┐
│                                     │
│      Caballeros Medievales          │
│           (Título)                  │
│                                     │
│                                     │
│            ╔═══════╗                │
│            ║       ║                │
│            ║   🚩  ║  ← Carta Bandera
│            ║       ║                │
│            ╚═══════╝                │
│                                     │
│   Hover: "Comienza a jugar"         │
│                                     │
└─────────────────────────────────────┘
```

### Estado Expandido (después de hacer clic en Bandera)

```
┌─────────────────────────────────────┐
│                                     │
│      Caballeros Medievales          │
│           (Título)                  │
│                                     │
│    ╔═════╗       ╔═════╗            │
│    ║     ║       ║     ║            │
│    ║ 🏰  ║       ║ ⚔️  ║            │
│    ║     ║  🚩   ║     ║            │
│    ╚═════╝ ╔═══╗ ╚═════╝            │
│   Castillo ║   ║ Caballero          │
│            ║   ║                    │
│            ╚═══╝                    │
│           Bandera                   │
│                                     │
│  Hover Bandera → "Reglas"           │
│  Hover Castillo → "Contacto"        │
│  Hover Caballero → "Quiénes somos"  │
│                                     │
└─────────────────────────────────────┘
```

## 🎨 Detalles de Animación

### 1. Entrada Inicial (Carga de página)

**Título**

- Animación: Fade-in + Slide desde arriba
- Duración: 0.8s
- Easing: ease-out
- Valores: opacity 0→1, y: -50→0

**Carta Bandera**

- Animación: Scale-up + Fade-in
- Delay: 0.3s
- Duración: 0.5s
- Valores: opacity 0→1, scale 0.8→1

### 2. Expansión del Menú (Click en Bandera)

**Carta Castillo (Izquierda)**

```
Posición inicial: x: 0, y: 0, rotate: 0
Posición final:   x: -180px, y: 80px, rotate: -15°
```

- Animación: Spring
- Stiffness: 80
- Damping: 15
- Duración: ~0.6s
- Efecto: Sale radialmente hacia abajo-izquierda

**Carta Caballero (Derecha)**

```
Posición inicial: x: 0, y: 0, rotate: 0
Posición final:   x: 180px, y: 80px, rotate: 15°
```

- Animación: Spring
- Stiffness: 80
- Damping: 15
- Duración: ~0.6s
- Efecto: Sale radialmente hacia abajo-derecha

**Nota**: Las cartas quedan visibles al 70% (solapadas con la Bandera)

### 3. Efectos Hover en Cartas

**Transformación**

- Scale: 1.0 → 1.05
- Transición: 0.3s ease

**Brillo Dorado (Box Shadow)**

```css
Normal:
  0 8px 32px rgba(166, 124, 82, 0.13),
  0 2px 8px rgba(191, 167, 111, 0.6),
  0 1.5px 0 #bfa76f

Hover:
  0 12px 40px rgba(191, 167, 111, 0.8),
  0 4px 16px rgba(230, 201, 122, 0.9),
  0 0 24px rgba(191, 167, 111, 0.7)
```

**Texto de Navegación**

- Aparece debajo del grupo de cartas
- Animación: Fade-in + Slide-up
- Duración: 0.2s
- Valores: opacity 0→1, y: -10→0
- Tamaño: 2rem (grande)
- Color: #ffe082 (dorado claro)
- Text-shadow: Brillo dorado

### 4. Click en Cartas (Navegación)

**Visual Feedback**

- Active state: Scale 0.98
- Transición: 0.1s

**Navegación**

- Bandera (expandido) → /rules
- Castillo → /contact
- Caballero → /about

## 🎭 Animaciones de Página

### Transición de Entrada (Todas las páginas)

```typescript
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.5 }}
```

### Elementos de Página (Staggered)

**Títulos**

```typescript
initial={{ opacity: 0, y: -30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.2, duration: 0.6 }}
```

**Secciones**

```typescript
// Primera sección
delay: 0.3;

// Segunda sección
delay: 0.4;

// Tercera sección
delay: 0.5;

// Elementos de lista (incremental)
delay: 0.6 + index * 0.05;
```

### Botón "Volver"

```typescript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

## 📱 Responsive Adjustments

### Mobile (≤ 600px)

**HomePage**

- Cartas más pequeñas: 200x280px (vs 280x400px)
- Texto hover: 1.5rem (vs 2rem)
- Posición expandida ajustada al 80% del ancho

**Animaciones**

- Mismas animaciones pero con valores escalados
- Hover effects ligeramente reducidos

## ⚙️ Configuración Técnica

### Motion (Framer Motion) Settings

```typescript
// Spring Animation
{
  type: 'spring',
  stiffness: 80,      // Rigidez del resorte
  damping: 15,        // Amortiguación
  duration: 0.6       // Duración aproximada
}

// Ease Animation
{
  duration: 0.5,
  ease: 'easeOut'
}
```

### CSS Transitions

```css
.game-card {
  transition: all 0.3s ease;
}

.back-button {
  transition: all 0.2s;
}
```

## 🎯 Tips de Performance

1. **Will-change**: No usado excesivamente (solo en animaciones críticas)
2. **Transform & Opacity**: Priorizados para animaciones (GPU-accelerated)
3. **AnimatePresence**: Usado para mount/unmount animations
4. **Spring Physics**: Valores optimizados para smoothness sin lag

## 🔧 Personalización

### Ajustar Velocidad de Expansión

En `HomePage.tsx`:

```typescript
stiffness: 80,  // ↑ más rápido, ↓ más lento
damping: 15,    // ↑ menos rebote, ↓ más rebote
```

### Ajustar Posición de Cartas Expandidas

```typescript
x: -180,  // Distancia horizontal
y: 80,    // Distancia vertical
rotate: -15  // Rotación en grados
```

### Ajustar Intensidad del Brillo

En `Card.css` modificar `whileHover.boxShadow`:

```typescript
// Valores en rgba: (r, g, b, alpha)
// Alpha: 0.0 (transparente) a 1.0 (opaco)
```

---

**Todas las animaciones están diseñadas para ser fluidas y performantes** ✨🎬
