/*
  Ejercicio 9:
  Crea una función que reciba un array de números y calcule
  la suma de todos los números pares del array
  
  Ejemplos:
  sumarPares([2, 13, 6, 15]);  // Resultado: 8
 
*/

function sumarPares(arrayDeNumeros) {
  // Variable para acumular la suma
  let totalSuma = 0;

  // Recorrer array de números
  arrayDeNumeros.forEach((numero) => {
    // En cada iteración comprobar si el número que estoy iterando es par
    if (numero % 2 === 0) {
      // Si es para sumar a variable totalSuma
      totalSuma += numero;
    }
  });

  // Una vez que termine el bucle devolver resultado
  return totalSuma;
}

console.log(sumarPares([2, 13, 6, 15])); // Resultado: 8
console.log(sumarPares([2, 13, 6, 15, 4, 12])); // Resultado: 24
