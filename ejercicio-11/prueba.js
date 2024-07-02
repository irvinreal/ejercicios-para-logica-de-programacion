/*
  Ejercicio 11:
  Crea una función a la cual le pase un array de numeros
  y un numero que será el resultado de la suma de dos de los valores
  
  Ejemplos:
  sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
  sumarDos([4, 5, 9, 1], 10) // [9, 1]
  sumarDos([1, 2, 3, 4], 5) // [2, 3]
 
*/

function sumarDos(arrayDeNumeros, resultado) {
  // Recorrer el array de numeros
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    // Calculo para sacar el segundo número para devolver
    let primerNumero = arrayDeNumeros[i];
    let segundoNumero = resultado - primerNumero;

    // Comprobar si existe un segundo numero en el array que sumado al actual sea igual al resultado esperado y comprobar que la variable segundoNumero es distinta de al númeroActual que estoy recorriendo
    if (arrayDeNumeros.includes(segundoNumero) && segundoNumero !== primerNumero) {
      // Si se cumple la condición devolver un array con el número actual y el segundo número
      return [primerNumero, segundoNumero];
    }
  }
}

console.log(sumarDos([3, 7, 8, 2], 10)); // [3, 7] (ambos suman 10)
console.log(sumarDos([4, 5, 9, 1], 10)); // [9, 1]
console.log(sumarDos([1, 2, 3, 4], 5)); // [1, 4]
