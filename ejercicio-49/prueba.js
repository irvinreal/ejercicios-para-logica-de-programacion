/*
Ejercicio 49:
Crea una función que dado un array de números devuelva el número 
más pequeño de la matriz.
 
No puedes ordenar el array, solo usar estructuras de control.
 
Ejemplos:
elMasPequenio([8,9,99,88,77,1,12,13,6,7])  // Devuelve: 1
*/

function elMasPequenio(arr) {
  let numP = arr[0]
  for (const num of arr) {
    if (num < numP) {
      numP = num
    }
  }
  return numP
}

console.log(elMasPequenio([8, 9, 99, 88, 77, 1, 12, 13, 6, 7])) // Devuelve: 1
