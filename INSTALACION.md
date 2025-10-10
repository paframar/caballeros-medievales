# 📦 Instalación y Configuración

## Estado Actual de Dependencias

Todas las dependencias necesarias ya están presentes en `package.json`:

```json
{
  "dependencies": {
    "i18next": "^25.6.0", // ✅ Ya instalado
    "motion": "^12.23.0", // ✅ Ya instalado
    "react": "^19.1.0", // ✅ Ya instalado
    "react-dom": "^19.1.0", // ✅ Ya instalado
    "react-i18next": "^16.0.0", // ✅ Ya instalado
    "react-router-dom": "^7.9.4" // ✅ Ya instalado
  }
}
```

## 🚀 Comandos para Iniciar

### Verificar instalación de dependencias

Si las dependencias ya están instaladas (existe `node_modules/`), simplemente ejecuta:

```bash
yarn dev
```

### Si necesitas reinstalar dependencias

```bash
yarn install
```

### Luego iniciar el servidor de desarrollo

```bash
yarn dev
```

El sitio estará disponible en: `http://localhost:5173`

## ✅ Verificación

Una vez iniciado el servidor, deberías ver:

1. **Home Page**: Título "Caballeros Medievales" con una carta de Bandera
2. Al hacer clic en la Bandera, se expanden las cartas de Castillo y Caballero
3. Hover sobre las cartas muestra los textos de navegación
4. Las páginas de Reglas, Contacto y Quiénes Somos están funcionando

## 🎨 Características Implementadas

- ✅ Routing completo con React Router
- ✅ Internacionalización con i18next
- ✅ Animaciones fluidas con Motion
- ✅ Layout responsivo
- ✅ Paleta de colores medieval
- ✅ Componente Card reutilizable
- ✅ 4 páginas completamente funcionales

## 🔧 Scripts Disponibles

```bash
yarn dev      # Modo desarrollo con HMR
yarn build    # Build de producción
yarn preview  # Preview del build
yarn lint     # Verificar código con ESLint
```

## 📋 Notas Importantes

1. **No se requieren instalaciones adicionales**: Todas las librerías ya están en package.json
2. **i18next**: La configuración está en `src/config/i18n.ts`
3. **react-i18next**: Provee el hook `useTranslation()` usado en todos los componentes
4. **Motion**: Es la nueva versión de Framer Motion, ya instalada

## 🎯 Próximos Pasos

Una vez que el servidor esté corriendo:

1. Navega por las diferentes páginas
2. Prueba las animaciones de las cartas
3. Verifica que los textos se cargan desde las traducciones
4. Ajusta colores o animaciones según necesites

---

**¡Todo está listo para empezar a trabajar!** 🏰⚔️
