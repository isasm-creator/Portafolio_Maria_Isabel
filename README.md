# Proyecto de Clima - Módulo 3

- Esta el la tercera versión del frontend de una aplicación de clima, desarrollada en el **Módulo 3**. Permite ver el clima actual en distintas localidades y acceder a una **vista de detalle** con pronóstico semanal aplicando **HTML5 semántico**, **SASS** con metodología BEM, **Bootstrap** para estilos y **diseño responsivo**, y **JavaScript** básico para la interacción. El trabajo se versiona en **Git/GitHub** e incluye un **README** descriptivo.

## Estructura de carpetas

Portafolio_Clima_Maria Isabel Soto/
├── index.html
├── detalle.html
├── assets/
│ ├── css/  
│ ├── scss/  
│ │ ├── abstracts/
│ │ ├── base/
│ │ ├── components/
│ │ └── layout/
│ └── images/
└── README.md

## Metodología de estilos

Se utiliza **BEM (Block, Element, Modifier)** para nombrar clases y mantener consistencia:

- **Block**: `card` - componente independiente que representa una tarjeta de clima.
- **Element**: `card__icon` - icono que pertenece al bloque card.
- **Modifier**: `card__icon--sun`, `card__icon--cloudy`,`card__icon--rain`- variantes visuales del icono según el estado del clima.

## Aplicación del tiempo

- Esta aplicación permite mostrar el tiempo actual en 10 localidades.
  Al hacer click en una localidad , te llevará a una vista de detalle mostrando el tiempo actual junto con un pronóstico para la siguiente semana.

# Utilización de Sass(SCSS) en el proyecto

- Este proyecto utiliza Sass (SCSS) como preprocesador CSS para organizar mejor los estilos, reutilizar código y facilitar el mantenimiento.

# Descripción de cada carpeta

- abstracts/: contiene variables y mixins globales que se reutilizan en todo el proyecto.

- base/: estilos base del sitio (reset, tipografía, estilos generales).

- components/: estilos de componentes reutilizables (por ejemplo, cards).

- layout/: estilos de la estructura del sitio (footer, header, etc.).

- pages/: estilos específicos de cada página.

- themes/: estilos relacionados con temas o variaciones visuales.

- vendors/: librerías externas (si se usan).

- main.scss: archivo principal que importa todos los parciales.

# Archivo principal (main.scss)

- El archivo main.scss se encarga de importar todos los parciales usando @use:

// abstracts
@use './abstracts/variables';

// base
@use './base/base';

// layout
@use './layout/footer';

// components
@use './components/card';

- Este archivo se compila para generar un único archivo CSS final.

# Compilación de Sass a CSS

- El archivo SCSS se compila a CSS y se guarda en la carpeta assets/css.

- Ejemplo de comando para compilar Sass:

sass assets/scss/main.scss assets/css/main.css

- Para compilar automáticamente al detectar cambios:

sass --watch assets/scss/main.scss assets/css/main.css

## Requisitos funcionales

- Ejemplo de uso de JS 1: Navegación desde card

```js
cardLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    window.location.href = "./detalle.html";
  });
});
```

- Ejemplo de uso de JS 2: Modificando clases dependiendo de la ubicación:

```js
links.forEach(function (link) {
  if (link.href === window.location.href) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
```
