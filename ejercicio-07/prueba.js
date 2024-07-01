/*
  Enunciado Ejercicio 7:

  Dada un array de enteros, detectar si esa lista
  de números es una permutación del 1 al ultimo número del array.
  
  En este caso una permutación es una secuencia de números
  en orden sin que falte ninguno entre ellos.
  
  Devolver el número faltante más grande.
  
  El array puede venir desordenado.
  
  Ejemplos:
  permutacion([1, 2, 3, 4, 5])   // Devuelve: 5
  permutacion([1, 2, 3, 5]))     // Devuelve: 4
 
*/

function permutacion(arrayDeNumeros) {
  // Ordenar el array de números
  arrayDeNumeros.sort((a, b) => a - b);

  // Pila de números faltantes
  let numerosFaltantes = [];

  // Recorrer el array
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    // Comprobar si el indice del elemento actual + 1 es igual al siguiente número
    // Si no es igual: Devolver el número faltante (el número actual - no es igual el indice + 1 al siguiente número)
    if (arrayDeNumeros[i + 1] !== arrayDeNumeros[i] + 1) {
      numerosFaltantes.push(arrayDeNumeros[i] + 1);
    }
  }

  // Eliminar el último elemento que no existe pero se agrega al recorrer el bucle
  numerosFaltantes.pop();

  // Si todo es correcto: Devolver el número más grande (el último número)
  let resultado = arrayDeNumeros[arrayDeNumeros.length - 1];
  if (numerosFaltantes.length >= 1) {
    resultado = numerosFaltantes[numerosFaltantes.length - 1];
  }

  return resultado;
}

console.log(permutacion([2, 8, 5, 4, 7, 6, 1])); // => 3
