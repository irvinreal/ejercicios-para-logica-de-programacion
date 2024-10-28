/*
  Ejercicio 65:
  Dado un array de objetos de usuarios, con nombre y fecha,
  crea una función que los ordene por fecha.
  
  [
    {
      nombre: "Juan",
      fecha: new Date(1984, 7, 10),
    },
    {
      nombre: "Paco",
      fecha: new Date(2017, 8, 12),
    },
    {
      nombre: "Pepe",
      fecha: new Date(1991, 12, 6),
    },
  ]
  
  Ejemplos:
  ordenarPorFecha(usuarios)
  
  // Devolver solo nombre
*/

const usuarios = [
  {
    nombre: 'Paco',
    fecha: new Date(1984, 7, 10)
  },
  {
    nombre: 'Juan',
    fecha: new Date(2017, 8, 12)
  },
  {
    nombre: 'Pepe',
    fecha: new Date(1991, 12, 6)
  },
  {
    nombre: 'Carlos',
    fecha: new Date(1966, 12, 6)
  },
  {
    nombre: 'Ariel',
    fecha: new Date(2004, 12, 6)
  }
]

function ordenarPorFecha(usuarios) {
  return usuarios.sort((a, b) => b.fecha - a.fecha)
}

console.log(ordenarPorFecha(usuarios))
