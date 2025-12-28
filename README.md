# Proyecto de Clima - Módulo 3

Esta el la tercera versión del frontend de una aplicación de clima, desarrollada en el **Módulo 3**. Permite ver el clima actual en distintas localidades y acceder a una **vista de detalle** con pronóstico semanal aplicando **HTML5 semántico**, **SASS** con metodología BEM, **Bootstrap** para estilos y **diseño responsivo**, y **JavaScript** básico para la interacción. El trabajo se versiona en **Git/GitHub** e incluye un **README** descriptivo.

## Estructura de carpetas

Portafolio_Maria_Isabel/
├── index.html # Página principal con listado de localidades
├── detalle.html # Vista de detalle del clima
├── assets/
│ ├── css/ # CSS compilado desde SASS
│ ├── scss/ # Archivos SASS
│ │ ├── abstracts/ # Variables, mixins
│ │ ├── base/ # Estilos base (reset, tipografía)
│ │ ├── components/ # Cards, botones, navbar
│ │ └── layout/ # Header, footer, grid
│ └── images/ # Imágenes y íconos
└── README.md # Este archivo

## Metodología de estilos

Se utiliza **BEM (Block, Element, Modifier)** para nombrar clases y mantener consistencia:

- **Block**: `card` - componente independiente que representa una tarjeta de clima.
- **Element**: `card__icon` - icono que pertenece al bloque card.
- **Modifier**: `card__icon--sun`, `card__icon--cloudy`,`card__icon--rain`- variantes visuales del icono según el estado del clima.

## Aplicación del tiempo

Esta aplicación permite mostrar el tiempo actual en 10 localidades.
Al hacer click en una localidad , te llevará a una vista de detalle mostrando el tiempo actual junto con un pronóstico para la siguiente semana.

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
