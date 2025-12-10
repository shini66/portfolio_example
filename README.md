# portfolio_example

Descripción
-----------

`portfolio_example` es un portafolio estático (diseñado en modo oscuro) creado con HTML, Tailwind CSS y JavaScript. Incluye una maqueta con secciones de presentación, proyectos y contacto. Tailwind se compila desde `src/style.css` hacia `dist/style.css` usando los scripts incluidos en `package.json`.

Requisitos
----------

- Node.js (recomendado v16 o superior)
- npm (v8+ o la que venga con Node.js)

Instalación
-----------

1. Clona el repositorio o descarga los archivos y sitúate en la carpeta del proyecto:

```pwsh
cd path\to\portfolio_example
```

2. Instala dependencias:

```pwsh
npm install
```

Desarrollo (modo watch)
------------------------

Este proyecto usa Tailwind CLI para compilar los estilos. Para levantar el watcher que regenerará `dist/style.css` automáticamente mientras trabajas:

```pwsh
npm run dev
```

Luego, en otro terminal puedes servir el proyecto localmente para abrir `src/index.html` en el navegador. Dos opciones comunes:

```pwsh
# Opción A: usar 'serve' (puedes especificar puerto)
npx serve -l 5000 .

# Opción B: usar 'http-server'
npx http-server -c-1 .
```

Abre en el navegador: `http://localhost:5000/src/index.html` (ajusta el puerto según la herramienta que uses).

Build (producción)
-------------------

Para generar los estilos optimizados para producción:

```pwsh
npm run build
```

Esto rellenará `dist/style.css` con la versión minificada de Tailwind.

Notas y resolución de problemas
--------------------------------
- Si ves estilos faltantes, verifica que `dist/style.css` exista y que `src/index.html` cargue la ruta `../dist/style.css` correctamente.
- Si no quieres ejecutar un servidor, puedes abrir `src/index.html` directamente con el navegador, pero usar un servidor local evita problemas con rutas y CORS.
- Para detener el watcher de Tailwind, presiona `Ctrl+C` en la terminal donde ejecutaste `npm run dev`.

Contacto
--------

Si encuentras problemas o quieres contribuir, abre un issue en el repositorio o envía un pull request.

