/*
  Ejercicio 64:
  Crea un programa que compruebe si los paréntesis, llaves y corchetes 
  de una expresión están equilibrados, es decir, que estos delimitadores 
  se abren y cieran de forma adecuada.
  
  Ejemplos:
  expresionEquilibrada('{ [ x * ( y + z ) ] * 12 }');  // imprime true
  expresionEquilibrada('{ x * ( y + z ) ] + 12 }');  // imprime false
*/

function expresionEquilibrada(expresion) {
  // El mismo indice para ambos subarrays corresponde a cada tipo
  const DELIMITADORES = [
    ['{', '[', '('],
    ['}', ']', ')']
  ]

  // Se almacenan los caracteres que se van encontrando en un mismo orden
  // para poder evaluar si en ese mismo orden se corresponden segun su tipo
  const delimitadoresApertura = []
  const delimitadoresCierre = []

  // 1. Encontrar delimitadores de apertura
  // Almacenar al ultimo el caracter que se encuentra ( , , , ,_)
  for (const caracter of expresion) {
    if (DELIMITADORES[0].includes(caracter)) delimitadoresApertura.push(caracter)
  }

  // 2. Encontrar delimitadores de cierre
  // Almacenar al principio el caracter que se encuentra (_, , , , )
  for (const caracter of expresion) {
    if (DELIMITADORES[1].includes(caracter)) delimitadoresCierre.unshift(caracter)
  }

  // 3. Buscar si existe la misma cantidad de delimitadores de cierre que los de apertura
  for (let i = 0; i < delimitadoresApertura.length; i++) {
    const a = delimitadoresApertura[i]
    const b = delimitadoresCierre[i]
    console.log('a: ', DELIMITADORES[0].indexOf(a)) // Indice del caracter 'a'
    console.log('b: ', DELIMITADORES[1].indexOf(b)) // Indice del caracter 'b'
    /*
      ** Para encontrar el mismo tipo de caracter de apertura y de cierre
      ** el mismo indice de DELIMITADORES[0] y DELIMITADORES[1] se corresponden

      Si el indice del caracter 'a' es diferente al inidice del caracter 'b':
      - el caracter 'a' no es del mismo tipo que el caracter 'b'
      - terminar la ejecución del programa y devolvemos false ( return false )
    */
    if (DELIMITADORES[0].indexOf(a) !== DELIMITADORES[1].indexOf(b)) return false
  }
  // Si salimos del bucle significa que los indices de ambos arrays son iguales
  // por lo tanto devolvemos true ( return true )
  return true
}

console.log(expresionEquilibrada('{ [ x * ( y + z ) ] * 12 }')) // imprime true
console.log(expresionEquilibrada('{ x (* ( y + z ) ] + 12 }')) // imprime false
