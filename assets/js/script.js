import lugares from './lugares.js';
// Manejo del DOM con JavaScript//
//QuerySelectorAll selecciona todos los elementos. En este caso todos los que tienen clase nav-link//

var links = document.querySelectorAll('.nav-link');

links.forEach(function (link) {
  if (link.href === window.location.href) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// Manejo de Evento//

var cardLinks = document.querySelectorAll('.card-link');

// console.log(cardLinks); //

cardLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    window.location.href = './detalle.html';
  });
});

//Iconos para los estados del clima
const ICONOS = {
  Soleado: 'bi-sun',
  Nublado: 'bi-cloud',
  Lluvioso: 'bi-cloud-rain',
  'Parcialmente Nublado': 'bi-cloud-sun', // Agregar comillas para clave con espacio
};

//Mostrar lugares en el index
const lugaresContainer = document.getElementById('lugares');

const mostrarLugares = () => {
  lugares.forEach((lugar) => {
    const tarjeta = `
    <div class="col ">
                    <div class="card text-center">
                        <i class="bi ${ICONOS[lugar.estadoActual]} card__icon card__icon--${lugar.estadoActual.toLowerCase()}"></i>
                        <div class="card-body">
                            <h5 class="card-title">${lugar.nombre}</h5>
                            <p class="card-text">${lugar.tempActual}°C</p>
                            <p class="card-text">${lugar.estadoActual}</p>
                        </div>
                        <div class="card-body">
                            <a href="./detalle.html?id=${lugar.id}" class="card-link">Ver detalle</a>
                        </div>
                    </div>
                </div>
                `;
    lugaresContainer.innerHTML += tarjeta;
  });
};
mostrarLugares();
//TODO: hacer sumas de temperaturas, promedios, mínimo y máximos

//TODO: mostrar estadisticas de la semana