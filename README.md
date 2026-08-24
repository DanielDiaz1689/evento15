# EVENTO15 — Wedding & Event Planners

Sitio premium para empresa de eventos (bodas, 15 años, corporativos). React + Vite + Tailwind + Framer Motion. Desarrollado por Daniel Díaz.

## Comandos

```bash
npm install      # primera vez
npm run dev      # → http://localhost:5175
npm run build    # versión de producción
```

## Configuración IMPORTANTE (src/data/evento15.js)

- `negocio.whatsapp` → ⚠️ poner el número real del dueño (57 + celular)
- `negocio.correoCitas` → correo que recibe las citas. La PRIMERA solicitud
  dispara un correo de activación de FormSubmit: abrirlo y confirmar (una vez).

## ¿Dónde edito cada cosa?

| Quiero cambiar... | Dónde |
|---|---|
| Textos, servicios, testimonios, secciones | `src/data/evento15.js` |
| Fotos | carpeta `public/galeria/` (mismo nombre de archivo) |
| Videos | carpeta `public/videos/` + lista `videos` en evento15.js |
| Colores dorados / fuentes | `src/index.css` (bloque `@theme`) |
| Efecto de galería al hacer scroll | `src/components/GaleriaScroll.jsx` |

## Nota sobre las fotos y videos

Son material de stock gratuito (Unsplash y Mixkit, licencia libre comercial)
como marcadores de posición. Reemplazar por fotos y videos REALES de los
eventos del cliente — mismo nombre de archivo y listo.
