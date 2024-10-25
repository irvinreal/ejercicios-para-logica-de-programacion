/*
  Ejercicio 61:
  Dado una cadena de números, devuelve todas las combinaciones de letras posibles 
  que el número podría representar.
  
  Aqui tienes un mapeo de dígitos a letras 
  (como en los botones de un teléfono).
  
      const mapeo = [
        ' ', // 0
        '', // 1
        'abc', // 2
        'def', // 3
        'ghi', // 4
        'jkl', // 5
        'mno', // 6
        'pqrs', // 7
        'tuv', // 8
        'wxyz' // 9
      ];
  
  Ejemplos:
  combinacionesLetras("23")
  
  Devuelve:
  ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 
*/

const mapeo = [
  ' ', // 0
  '', // 1
  'abc', // 2
  'def', // 3
  'ghi', // 4
  'jkl', // 5
  'mno', // 6
  'pqrs', // 7
  'tuv', // 8
  'wxyz' // 9
]

function combinacionesLetras(num) {
  // Variables
  let digitosMapeados = ''
  const combinaciones = []

  // mapear cada digito
  num.split('').forEach((char) => {
    const letras = mapeo[parseInt(char)]

    for (const letra of letras) {
      digitosMapeados += letra
    }
  })

  // funcion recursiva para llenar arreglo de combinaciones
  function iterar(mapeo, cantidad) {
    // caso base
    if (cantidad < 1) {
      return
    }
    // caso recursivo
    for (let i = 0; i < mapeo.length; i++) {
      const element = mapeo[i]
      if (mapeo[0] !== element) {
        combinaciones.push(`${mapeo[0]}${element}`)
      }
    }
    mapeo = mapeo.substring(1)
    iterar(mapeo, cantidad - 1)
  }

  iterar(digitosMapeados, digitosMapeados.length - 1)

  return combinaciones
}

console.time('test')
console.log(combinacionesLetras('569'))
console.timeEnd('test')

// Se resolvió con recursividad
/* 
abc

ab ac
bc

abc def

ab ac ad ae af
bc bd be bf
cd ce cf
de df
ef 

*/
