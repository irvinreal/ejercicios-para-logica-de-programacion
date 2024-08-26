/*
Ejercicio 45:
Dado un array de números, elimina los números duplicados.
 
Ejemplos:
eliminarDuplicados([1, 1, 2, 2, 3, 4, 5, 5, 5, 6])
 
// Devuelve:
[ 1, 2, 3, 4, 5, 6 ]
*/

function eliminarDuplicados(numeros) {
  numeros.sort((a, b) => a - b)

  const numerosUnicos = []

  for (const numero of numeros) {
    if (!numerosUnicos.includes(numero)) {
      numerosUnicos.push(numero)
    }
  }

  return numerosUnicos
}

console.log(eliminarDuplicados([1, 1, 6, 2, 2, 3, 4, 1, 5, 5, 5, 6]))
// Devuelve: [1, 2, 3, 4, 5, 6]
