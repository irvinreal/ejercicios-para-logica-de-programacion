/*
  Ejercicio 36:
  Crea un programa que encuentre las parejas de números que como resultado
  dan un número que pasamos a la función por parametro.
  
  Ejemplos:
  encontrarParejasConSuma([1, 2, 3, 4], 5);
  
  Devuelve: 
  [ [ 1, 4 ], [ 2, 3 ] ]
 
*/

function encontrarParejasConSuma(numeros, suma) {
  // Array de números valido y longitud mínima de 2 números
  if (!Array.isArray(numeros) || numeros.length < 2) return false;

  // Crear array de parejas de números para guardar las parejas
  const parejas = [];

  // Recorrer el array de números
  for (const numeroActual of numeros) {
    // Recorrer de nuevo a partir del elemento que recorro ahora
    for (const otroNumero of numeros.slice(numeros.indexOf(numeroActual) + 1)) {
      // Comprobar si la suma me da el resultado de suma esperado
      if (numeroActual + otroNumero === suma) {
        parejas.push([numeroActual, otroNumero]);
      }
    }
  }

  // Devolver parejas
  return parejas;
}

console.log(encontrarParejasConSuma([1, 2, 3, 4], 5)); // => [ [ 1, 4 ], [ 2, 3 ] ]
