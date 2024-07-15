/*
  Enunciado Ejercicio 29:
  Dado un array de objetos de peliculas de los años 80 y 90. 
  
  Crea dos funciones:
  - Una que las filtre por género
  - y otra que las filtre por la decada en este formato 80s o 90s
  
  Array de objetos a utilizar:
  const peliculas = [
      { titulo: "Terminator", genero: "accion", anioLanzamiento: 1984 },
      { titulo: "Alien", genero: "ciencia ficción", anioLanzamiento: 1979 },
      { titulo: "Die Hard", genero: "accion", anioLanzamiento: 1988 },
      { titulo: "Predator", genero: "accion", anioLanzamiento: 1987 },
      { titulo: "Total Recall", genero: "ciencia ficción", anioLanzamiento: 1990 },
      { titulo: "RoboCop", genero: "ciencia ficción", anioLanzamiento: 1987 },
      { titulo: "Starship Troopers", genero: "ciencia ficción", anioLanzamiento: 1997 },
      { titulo: "The Fifth Element", genero: "ciencia ficción", anioLanzamiento: 1997 },
      { titulo: "Armageddon", genero: "accion", anioLanzamiento: 1998 },
      { titulo: "Deep Impact", genero: "ciencia ficción", anioLanzamiento: 1998 }
    ];
  
  Ejemplos:
  filtrarPorGenero(peliculas, "accion")
  filtrarPorDecada(peliculas, "80s")

*/

const peliculas = [
  { titulo: 'Terminator', genero: 'accion', anioLanzamiento: 1984 },
  { titulo: 'Alien', genero: 'ciencia ficción', anioLanzamiento: 1979 },
  { titulo: 'Die Hard', genero: 'accion', anioLanzamiento: 1988 },
  { titulo: 'Predator', genero: 'accion', anioLanzamiento: 1987 },
  { titulo: 'Total Recall', genero: 'ciencia ficción', anioLanzamiento: 1990 },
  { titulo: 'RoboCop', genero: 'ciencia ficción', anioLanzamiento: 1987 },
  { titulo: 'Starship Troopers', genero: 'ciencia ficción', anioLanzamiento: 1997 },
  { titulo: 'The Fifth Element', genero: 'ciencia ficción', anioLanzamiento: 1997 },
  { titulo: 'Armageddon', genero: 'accion', anioLanzamiento: 1998 },
  { titulo: 'Deep Impact', genero: 'ciencia ficción', anioLanzamiento: 1998 }
];

function filtrarPorGenero(peliculas, genero) {
  return peliculas.filter((pelicula) => genero === pelicula.genero);
}

function filtrarPorDecada(peliculas, decada) {
  return peliculas.filter((pelicula) => {
    // Sacar el año de lanzamiento de la pelicula
    const anioLanzamiento = pelicula.anioLanzamiento;

    // Comprobar con una condición el año
    if (decada === '80s') {
      return anioLanzamiento >= 1980 && anioLanzamiento < 1990;
    } else if (decada === '90s') {
      return anioLanzamiento >= 1990 && anioLanzamiento < 2000;
    }
  });
}

console.log('Filtradas por genero: ', filtrarPorGenero(peliculas, 'accion'));
console.log('Filtradas por decada: ', filtrarPorDecada(peliculas, '80s'));
