/*
  Ejercicio 55:

  Dado un conjunto de enteros distintos, 
  devuelve todos los subconjuntos posibles.
  
  Ejemplos:
  subconjuntos([1,2,3]);
  
  Devuelve:
  [
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
  ]
*/

function subconjuntos(nums) {
  const resultados = [[]]

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i])

    const tamano = resultados.length

    for (let j = 0; j < tamano; j++) {
      console.log(j, resultados[j], resultados[i], nums[i], '\n', resultados.length, tamano)
      resultados.push([...resultados[j], nums[i]])
    }
  }

  return resultados
}

console.log(subconjuntos([1, 2, 3]))

/*
  [
    [],                       , resultados.length=1
    [1],            j=0,i=0   , resultados.length=2
    [2],            j=0,i=1   
    [1,2],          j=1,i=1   , resultados.length=4
    [3],            j=0,i=2   
    [1,3]           j=1,i=2   
    [2,3]           j=2,i=2   
    [1,2,3]         j=3,i=2

  ]
*/
