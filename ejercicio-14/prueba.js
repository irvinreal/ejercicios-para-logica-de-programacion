/*
  Ejercicio 14:
  Dada una cadena de texto, comprobar si es un palindromo o no. No usar funciones de
  javascript, solo estructuras de control
  
  Los palíndromos son palabras que se leen igual aun estando invertidas. 
  Por ejemplo: ana, bob, otto, allivessevilla
  
  Ejemplos:
  esPalindromo("otto") // Devuelve: true
  esPalindromo("victor") // Devuelve: false
 
*/

// Funcion realizada con estructuras de control
function esPalindromo(palabra) {
  // Dividir la palabra en un array de letras
  // let letras = [];
  // for (let i = 0; i < palabra.length; i++) {
  //   letras.push(palabra[i]);
  // }

  // Invertir el array con un bucle
  let letrasInvertidas = [];
  for (let i = palabra.length - 1; i >= 0; i--) {
    letrasInvertidas.push(palabra[i]);
  }

  // Unir todas las letras del array usando un bucle y guardar resultado en una variable
  let palabraInvertida = '';
  for (let i = 0; i < letrasInvertidas.length; i++) {
    palabraInvertida += letrasInvertidas[i];
  }

  // Devolver el resultado
  return palabraInvertida === palabra;
}

console.log(esPalindromo('otto')); // Devuelve: true
console.log(esPalindromo('irvin')); // Devuelve: false
