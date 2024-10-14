/*
  Ejercicio 56:
  Crea una función que tome un array de objetos de peliculas y 
  una clave como parametros y devuelva un objeto donde cada valor de 
  la clave es un array con todos los objetos que tienen ese valor 
  para la clave especificada.
  
    const peliculas = [
      { titulo: 'E.T.', anio: 1982 },
      { titulo: 'Regreso al futuro', anio: 1985 },
      { titulo: 'Cazafantasmas', anio: 1984 },
      { titulo: 'Dirty Dancing', anio: 1987 },
      { titulo: 'Terminator 2: El juicio final', anio: 1991 },
      { titulo: 'Parque Jurásico', anio: 1993 },
      { titulo: 'Forrest Gump', anio: 1994 },
    ];
  
  Ejemplos:
  agruparPor(peliculas, 'anio')
  
  Devuelve:
  {
      1982: [{ titulo: 'E.T.', anio: 1982 }],
      1985: [{ titulo: 'Regreso al futuro', anio: 1985 }],
      1984: [{ titulo: 'Cazafantasmas', anio: 1984 }],
      1987: [{ titulo: 'Dirty Dancing', anio: 1987 }],
      1991: [{ titulo: 'Terminator 2: El juicio final', anio: 1991 }],
      1993: [{ titulo: 'Parque Jurásico', anio: 1993 }],
      1994: [{ titulo: 'Forrest Gump', anio: 1994 }]
  }
 
*/

const peliculas = [
  { titulo: 'E.T.', anio: 1982 },
  { titulo: 'Regreso al futuro', anio: 1985 },
  { titulo: 'Cazafantasmas', anio: 1984 },
  { titulo: 'Dirty Dancing', anio: 1987 },
  { titulo: 'Terminator 2: El juicio final', anio: 1991 },
  { titulo: 'Parque Jurásico', anio: 1993 },
  { titulo: 'Forrest Gump', anio: 1994 }
]

function agruparPor(array, clave) {
  return array.reduce((grupos, elementoActual) => {
    const categoria = elementoActual[clave]

    if (!grupos[categoria]) grupos[categoria] = []

    grupos[categoria].push(elementoActual)

    return grupos
  }, {})
}

console.log(agruparPor(peliculas, 'anio'))
