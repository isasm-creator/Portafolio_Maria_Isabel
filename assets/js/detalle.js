var links = document.querySelectorAll('.nav-link');

links.forEach(function (link) {
  if (link.href === window.location.href) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

//Array de lugares: contendra listado de ciudades(minimo 5)//Array de lugares: contendra listado de ciudades(minimo 5)
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
  'Parcialmente Nublado': 'bi-cloud-sun',
};
//obtener el id del lugar desde la URL
const urlParams = new URLSearchParams(window.location.search);

//Extraer el id de los parametros
const locationId = urlParams.get('id');

//Console.log(locationId); //para verificar que se obtiene el id correctamente

// 2.filtrar el lugar del array lugares que coincida con el id obtenido de la URL
const lugarEncontrado = lugares.find((lugar) => {
    console.log('Buscando en array lugares el lugar con id: ${locationId');
    return lugar.id === locationId;
});
console.log(lugarEncontrado); //para verificar que se encuentra el lugar correctamente
