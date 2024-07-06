/*
  Ejercicio 16:
  Crea una función que meta en una caja de asteriscos la frase 
  que le pasemos por parametro
  
  Ejemplos:
  mostrarTextoCaja('Hola soy Víctor Robles WEB');
  
  **********
  * Hola   *
  * soy    *
  * Víctor *
  * Robles *
  * WEB    *
  **********
 
*/

function mostrarTextoCaja(frase) {
  // Separar la frase en palabras y ver cual es la palabra con mayor cantidad de caracteres
  const palabras = frase.split(' ');
  let longitudMaxima = 0;

  palabras.forEach((palabra) => {
    longitudMaxima = Math.max(longitudMaxima, palabra.length);
  });

  // Huecos ( extra ) por defecto
  const huecosPorDefecto = 4;

  // Imprimir la primera línea del marco
  const asteriscosTotales = longitudMaxima + huecosPorDefecto;
  console.log('*'.repeat(asteriscosTotales));

  // Recorrer palabras y mostrarlas una por línea dentro de la caja
  palabras.forEach((palabra) => {
    const espacios = ' '.repeat(longitudMaxima - palabra.length);
    console.log(`* ${palabra}${espacios} *`);
  });

  // Imprimir última línea del marco
  console.log('*'.repeat(asteriscosTotales));

  return '';
}

console.log(mostrarTextoCaja('Hola soy Irvin Osvaldo Real y soy desarrollador web'));
