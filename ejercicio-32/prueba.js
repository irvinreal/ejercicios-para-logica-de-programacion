/*
  Ejercicio 32:
  Dado un texto, crea una función que sea capaz de generar
  un nuevo texto que incluya solo las palabras de 4 caracteres o más.
  
  Ejemplos:
  fraseFiltrada("Hola soy Irvin Real, hoy hace frio"); 
  
  // Devuelve: Hola Irvin Real, hace frio

*/

function fraseFiltrada(frase) {
  // Separar palabras del texto y guardarlas en un array
  const palabras = frase.split(' ');

  // Filtrar el array con las palabras de 4 o más caracteres
  const palabrasFiltradas = palabras.filter((palabra) => palabra.length >= 4);

  // Devolver frase
  return palabrasFiltradas.join(' ');
}

console.log(fraseFiltrada('Hola soy Irvin Real, hoy hace frio'));
