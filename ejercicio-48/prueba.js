/*
Ejercicio 48:
Dado un array eleva al cubo todos sus numeros y devuelve la mitad de 
cada uno.
 
Ejemplos:
elevaMitad([1, 2, 3, 4])  //Devuelve: [ 0.5, 4, 13.5, 32 ]
*/

function elevaMitad(arr) {
  return arr.map((num) => Math.pow(num, 3) / 2)
}

console.log(elevaMitad([1, 2, 3, 4])) //Devuelve: [ 0.5, 4, 13.5, 32 ]
