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
    id: 4,
    nombre: 'Rancagua',
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
    id: 5,
    nombre: 'Santiago',
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
];