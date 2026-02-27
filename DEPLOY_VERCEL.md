# Despliegue en Vercel — Hackeando Ando #1

Sigue estos pasos para publicar el proyecto en Vercel.

---

## Opción A: Desde la web (con GitHub)

1. **Sube el proyecto a GitHub** (si aún no está):
   - Crea un repositorio en [github.com](https://github.com/new).
   - En la carpeta del proyecto ejecuta:
     ```bash
     git init
     git add .
     git commit -m "Deploy Hackeando Ando terminal"
     git branch -M main
     git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
     git push -u origin main
     ```

2. **Entra en Vercel**  
   Ve a [vercel.com](https://vercel.com) e inicia sesión (con GitHub).

3. **Importa el proyecto**  
   - Clic en **Add New…** → **Project**.  
   - Conecta tu cuenta de GitHub si te lo pide.  
   - Elige el repositorio del proyecto.  
   - Vercel detectará **Vite** y usará:
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`

4. **Despliega**  
   Clic en **Deploy**. En unos minutos tendrás una URL tipo:  
   `https://tu-proyecto.vercel.app`

5. **Rutas útiles**  
   - App principal (React): `https://tu-proyecto.vercel.app/`  
   - Presentación por scroll: `https://tu-proyecto.vercel.app/terminal-ilustracion.html`  
   - Terminal standalone: `https://tu-proyecto.vercel.app/terminal-standalone.html`

---

## Opción B: Desde la terminal (Vercel CLI)

1. **Instala Vercel CLI**  
   ```bash
   npm i -g vercel
   ```

2. **Inicia sesión**  
   ```bash
   vercel login
   ```  
   Sigue el enlace que te muestre y autoriza en el navegador.

3. **Despliega desde la carpeta del proyecto**  
   ```bash
   cd "ruta\a\HackeandoAndo#1"
   vercel
   ```  
   - Si es la primera vez, responde las preguntas:  
     - **Set up and deploy?** Yes  
     - **Which scope?** Tu cuenta  
     - **Link to existing project?** No  
     - **Project name?** (Enter para aceptar el nombre por defecto)  
     - **Directory?** `./` (Enter)

4. **Producción**  
   Para desplegar a producción (dominio principal):  
   ```bash
   vercel --prod
   ```

5. **URL**  
   Al finalizar verás la URL de tu proyecto (ej. `https://hackeando-ando-terminal.vercel.app`).  
   Las mismas rutas que arriba: `/`, `/terminal-ilustracion.html`, `/terminal-standalone.html`.

---

## Notas

- **Carpeta con `#` en el nombre**  
  Si tu carpeta se llama `HackeandoAndo#1`, en algunos entornos puede dar problemas. Si el deploy falla, renómbrala a `HackeandoAndo1` y vuelve a intentar.

- **Configuración**  
  El proyecto ya incluye `vercel.json` con `framework: "vite"`, `buildCommand` y `outputDirectory: "dist"`. No hace falta cambiarlo salvo que quieras dominio o variables de entorno.

- **Archivos estáticos**  
  `terminal-ilustracion.html` y `terminal-standalone.html` están en `public/`; Vite los copia a `dist/` en el build y quedan en la raíz de la URL.

- **Variables de entorno**  
  Este proyecto no usa env. Si más adelante añades alguna, configúralas en **Vercel → Project → Settings → Environment Variables**.
