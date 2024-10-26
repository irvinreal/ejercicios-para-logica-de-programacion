/*
  Ejercicio 63:
  Crea una función para conseguir las sumas acumuladas de una array de numeros
  
  Ejemplos:
  sumasAcumuladas([1, 2, 3, 4])   // [1, 3, 6, 10] 
  
  (se calcula como: [1, 1+2, 1+2+3, 1+2+3+4])

*/

function sumasAcumuladas(array) {
  const resultadoSumasAcumuladas = []

  for (let index = 0; index < array.length; index++) {
    let sumaAcc = 0
    for (let i = 0; i <= index; i++) {
      const element = array[i]

      sumaAcc += element
    }
    resultadoSumasAcumuladas.push(sumaAcc)
  }
  return resultadoSumasAcumuladas
}

console.time('test')
console.log(sumasAcumuladas([1, 2, 3, 4])) // [1, 3, 6, 10]
console.timeEnd('test')
