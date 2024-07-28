/*
  Ejercicio 37:
  Crea dos funciones que comprueben si dado un array de números,
  todos ellos son pares.
  
  Una función usando metodos del lenguaje y otra solo usando estructuras de control.
  
  Ejemplos:
  todosPares([1, 2, 3, 4]); // false
  todosPares([2, 6, 8, 12]); // true

*/

function todosParesV1(numeros) {
  return numeros.every((numero) => numero % 2 === 0);
}

function todosParesV2(numeros) {
  // Recorrer array
  for (let i = 0; i < numeros.length; i++) {
    // Comprobar si es par o impar
    if (numeros[i] % 2 !== 0) return false;
  }

  // Devolver resultado
  return true;
}

console.log('todosParesV1:');
console.log(todosParesV1([1, 2, 3, 4])); // false
console.log(todosParesV1([2, 6, 8, 12])); // true

console.log('\ntodosParesV2:');
console.log(todosParesV2([1, 2, 3, 4])); // false
console.log(todosParesV2([2, 6, 8, 12])); // true
