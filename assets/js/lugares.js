//array de objetos que contiene la informacion del clima de diferentes lugares
// id, nombre del lugar, temperatura actual, estado actual, pronostico semanal (array de objetos)

const lugares = [
  {
    id: 1,
    nombre: 'Colbún',
    tempActual: 15,
    estadoActual: 'Parcialmente nublado',
    pronosticoSemanal: [
      {
        dia: 'Lunes',
        min: 11,
        max: 15,
        estado: 'Parcialmente nublado',
      },
      {
        dia: 'Martes',
        min: 14,
        max: 17,
        estado: 'Nublado',
      },
      {
        dia: 'Miercoles',
        min: 17,
        max: 20,
        estado: 'Parcialmente nublado',
      },
      {
        dia: 'Jueves',
        min: 13,
        max: 15,
        estado: 'Lluvioso',
      },
      {
        dia: 'Viernes',
        min: 14,
        max: 25,
        estado: 'Parcialmente nublado',
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
        estado: 'Parcialmente nublado',
      }
    ]
  },
    {
    id: 2,
    nombre: 'Talca',
    tempActual: 28,
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
        min: 12,
        max: 17,
        estado: 'Lluvioso',
      },
      {
        dia: 'Jueves',
        min: 14,
        max: 19,
        estado: 'Nublado',
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
        max: 23,
        estado: 'Soleado',
      }
    ]
  },
      {
    id: 3,
    nombre: 'Curicó',
    tempActual: 28,
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
        max: 26,
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
export default lugares;