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

//Array de lugares: contendra listado de ciudades(minimo 5)
/*
id, nombre del lugar, temperatura actual, estado actual, pronostico semanal (array de objetos)
*/
const lugares = [
  {
    id: 1,
    nombre: 'Colbún',
    tempActual: 27,
    estadoActual: 'Soleado',
    pronosticoSemanal: [
      {
        dia: 'Lunes',
        min: 18,
        max: 28,
        estado: 'Soleado',
      },
      {
        dia: 'Martes',
        min: 16,
        max: 25,
        estado: 'Soleado',
      },
      {
        dia: 'Miercoles',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Jueves',
        min: 18,
        max: 28,
        estado: 'Soleado',
      },
      {
        dia: 'Viernes',
        min: 14,
        max: 25,
        estado: 'Soleado',
      },
      {
        dia: 'Sabado',
        min: 15,
        max: 26,
        estado: 'Soleado',
      },
      {
        dia: 'Domingo',
        min: 16,
        max: 26,
        estado: 'Soleado',
      }
    ]
  },
    {
    id: 2,
    nombre: 'Talca',
    tempActual: 27,
    estadoActual: 'Soleado',
    pronosticoSemanal: [
      {
        dia: 'Lunes',
        min: 18,
        max: 28,
        estado: 'Soleado',
      },
      {
        dia: 'Martes',
        min: 16,
        max: 25,
        estado: 'Soleado',
      },
      {
        dia: 'Miércoles',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Jueves',
        min: 18,
        max: 28,
        estado: 'Soleado',
      },
      {
        dia: 'Viernes',
        min: 14,
        max: 25,
        estado: 'Soleado',
      },
      {
        dia: 'Sábado',
        min: 15,
        max: 26,
        estado: 'Soleado',
      },
      {
        dia: 'Domingo',
        min: 16,
        max: 26,
        estado: 'Soleado',
      }
    ]
  },
      {
    id: 3,
    nombre: 'Curicó',
    tempActual: 27,
    estadoActual: 'Soleado',
    pronosticoSemanal: [
      {
        dia: 'Lunes',
        min: 18,
        max: 28,
        estado: 'Soleado',
      },
      {
        dia: 'Martes',
        min: 16,
        max: 25,
        estado: 'Soleado',
      },
      {
        dia: 'Miércoles',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Jueves',
        min: 18,
        max: 28,
        estado: 'Soleado',
      },
      {
        dia: 'Viernes',
        min: 14,
        max: 25,
        estado: 'Soleado',
      },
      {
        dia: 'Sábado',
        min: 15,
        max: 26,
        estado: 'Soleado',
      },
      {
        dia: 'Domingo',
        min: 16,
        max: 26,
        estado: 'Soleado',
      },
    
    ]
  },
        {
    id: 4,
    nombre: 'Rancagua',
    tempActual: 29,
    estadoActual: 'Soleado',
    pronosticoSemanal: [
      {
        dia: 'Lunes',
        min: 18,
        max: 28,
        estado: 'Soleado',
      },
      {
        dia: 'Martes',
        min: 16,
        max: 25,
        estado: 'Soleado',
      },
      {
        dia: 'Miércoles',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Jueves',
        min: 18,
        max: 28,
        estado: 'Soleado',
      },
      {
        dia: 'Viernes',
        min: 14,
        max: 25,
        estado: 'Soleado',
      },
      {
        dia: 'Sábado',
        min: 15,
        max: 26,
        estado: 'Soleado',  
      },
      {
        dia: 'Domingo',
        min: 16,
        max: 26,
        estado: 'Soleado',
      }
    ]
  },
          {
    id: 5,
    nombre: 'Santiago',
    tempActual: 26,
    estadoActual: 'Soleado',
    pronosticoSemanal: [
      {
        dia: 'Lunes',
        min: 18,
        max: 28,
        estado: 'Soleado',
      },
      {
        dia: 'Martes',
        min: 16,
        max: 25,
        estado: 'Soleado',
      },
      {
        dia: 'Miércoles',
        min: 17,
        max: 29,
        estado: 'Soleado',
      },
      {
        dia: 'Jueves',  
        min: 18,
        max: 28,
        estado: 'Soleado',
      },
      {
        dia: 'Viernes',
        min: 14,
        max: 25,
        estado: 'Soleado',    
      },
      {
        dia: 'Sábado',
        min: 15,
        max: 26,
        estado: 'Soleado',
      },
      {
        dia: 'Domingo',
        min: 16,
        max: 26,
        estado: 'Soleado',
      }
    ]
  },
];
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
