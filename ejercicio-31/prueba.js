/*
  Ejercicio 31:
  Dado un texto, crea una función que sea capaz de invertir
  el orden de sus palabras.
  
  No podemos usar funciones nativas del lenguaje.
  
  Ejemplos:
  invertirPalabras("Hola soy Irvin Real"); // Devuelve: Real Irvin soy Hola
  
*/

function invertirPalabras(frase) {
  // Convertir frase a un array de palabras
  const palabras = frase.split(' ');

  // Array para guardar las palabras de manera invertida
  let fraseInvertida = [];

  // Bucle para iterar array de palabras de manera inversa
  for (let contador = palabras.length - 1; contador >= 0; contador--) {
    // Guardar las palabras de manera invertida en la variable fraseInvertida
    fraseInvertida.push(palabras[contador]);
  }

  // Devolver array como cadena de caracteres
  return fraseInvertida.join(' ');
}

console.log(invertirPalabras('Hola soy Irvin Real'));
