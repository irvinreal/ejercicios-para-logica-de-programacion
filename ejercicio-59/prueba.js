/*
  Ejercicio 59:

  Crea una función que retorne el número total de bumeranes de un 
  array de números enteros e imprima cada uno de ellos.
  
  Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números seguidos, 
  en el que el primero y el último son iguales, y el segundo es diferente. 
  Por ejemplo [2, 1, 2].
  
  Ejemplos:
  contrarBumeranes([2, 1, 2, 3, 3, 4, 2, 4])
  
  Devuelve:
  Hay 2 bumeranes: [[2, 1, 2], [4, 2, 4]]
 
*/

function contarBumeranes(array) {
  const bumeranes = []

  for (let i = 0; i < array.length; i++) {
    const elementoActual = array[i]
    const ultimo = array[i + 2]
    const medio = array[i + 1]

    if (elementoActual === ultimo && elementoActual !== medio) {
      bumeranes.push([elementoActual, medio, ultimo])
    }
  }

  const totalBumeranes = bumeranes.length

  return [totalBumeranes, bumeranes]
}

let bum = contarBumeranes([2, 1, 2, 3, 3, 4, 2, 4])
console.log('Hay', bum[0], 'bumeranes:', bum[1])

// console.time('test1')

// console.log(contarBumeranes([5, 1, 5, 3, 1, 8, 1, 3, 7, 2, 7, 6, 1, 6, 9, 2, 6, 8, 1, 6, 1]))

// console.timeEnd('test1')
