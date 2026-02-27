# Terminal Kali — Hackeando Ando #1 (React)

Terminal simulada tipo Kali Linux para la presentación del evento **Hackeando Ando #1**, construida con **React** y **Vite**.

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre en el navegador la URL que muestra Vite (por ejemplo `http://localhost:5173`).

## Build para producción

```bash
npm run build
```

Los archivos quedan en la carpeta `dist/`. Puedes subir esa carpeta a cualquier hosting estático o abrir `dist/index.html` localmente.

## Funcionalidad

- **Comandos**: Escribe y pulsa Enter. Comandos disponibles: `whoami`, `uname -a`, `nmap`, `nmap --help`, `echo "Hackeando Ando #1"`, `help`, `?`, `social-engineer`, `clear`.
- **Historial**: Flecha arriba / abajo para repetir comandos.
- **Modo presentación**: Botón «Siguiente escena» o teclas **Espacio** / **Flecha derecha** para avanzar por las escenas predefinidas.
- **Efecto typing**: La salida de los comandos se muestra con efecto de escritura.

## Estructura

- `src/App.jsx` — Componente raíz.
- `src/components/Terminal.jsx` — Lógica e interfaz de la terminal.
- `src/components/Terminal.css` — Estilos tipo Kali.
- `src/data/commands.js` — Comandos, banner y escenas (fácil de editar).

## Nota

Si la carpeta del proyecto tiene `#` en el nombre, Vite puede mostrar una advertencia. El build suele funcionar igual; si hay problemas, renombra la carpeta (por ejemplo a `HackeandoAndo1`).
