/*
  Ejercicio 38:
  Crea una función que convierta un número a binario.
  
  Ejemplos:
  aBinario(10) // 1010
  aBinario(76) // 1001100

*/

function aBinario(numero) {
  // Crear variable para guardar resultado
  let resultado = '';

  // Bucle que evalue mientras el número que se le ha pasado sea mayor a cero
  while (numero > 0) {
    // sumar a la variable resultado cada 1 o 0
    resultado = (numero % 2) + resultado;

    // Dividir el número entre 2 y añadir el resto al resultado
    numero = Math.floor(numero / 2);
  }

  // Devolver resultado
  return parseInt(resultado);
}

console.log(aBinario(10)); // 1010
console.log(aBinario(76)); // 1001100
