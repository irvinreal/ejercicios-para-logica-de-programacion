/*
  Ejercicio 62:
  Dado un diccionario de letras disponibles:
  [
    ['A','B','C','D'],
    ['S','V','C','S'],
    ['A','D','O','E']
  ]
  
  Crea una función que me diga si la palabra que le paso
  como parametro se puede formar con las letras del
  diccionario disponibles.
  
  ¡PERO OJO! Cada vez que se usa una letra, se eliminia del array.
  
  Ejemplos:
  puedeFormarPalabra('BESO', diccionario)   // true
  puedeFormarPalabra('SOSO', diccionario)   // false   
 
*/

const diccionario = [
  ['A', 'B', 'C', 'D'],
  ['S', 'V', 'C', 'S'],
  ['A', 'D', 'O', 'E']
]

function puedeFormarPalabra(palabra, diccionario) {
  let comparacion = ''
  diccionario = diccionario.flat()
  palabra = palabra.toUpperCase()

  // Iterar letras de la palabra
  for (let letra of palabra) {
    // Buscar si existe cada letra en el diccionario
    if (diccionario.indexOf(letra) >= 0) {
      comparacion += letra
      // Si existe la eliminamos
      diccionario = diccionario.map((l, i) => {
        if (i !== diccionario.indexOf(letra)) return l
      })
    }
  }

  // Si todas las letras fueron encontradas devolvemos true, sino false
  return comparacion === palabra
}

console.time('test')
console.log(puedeFormarPalabra('BESO', diccionario)) // true
console.timeEnd('test')

console.log(puedeFormarPalabra('SOSO', diccionario)) // false
