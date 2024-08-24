/*
Ejercicio 43:
Dada una colección de letras:
[
   ['A','B','C','D'],
   ['Z','V','K','S'],
   ['F','G','O','E']
]
 
Crea una función que me diga si la palabra que le paso como parametro 
se puede formar con las letras de la colección
 
Ejemplos:
puedeFormarPalabra('PERRO', coleccion)  // false
puedeFormarPalabra('CASO', coleccion)   // true
 
*/

function puedeFormarPalabra(palabra, diccionario) {
  // Aplanar array de entrada
  const letras = diccionario.flat()

  // Recorrer cada letra de la palabra
  for (let letra of palabra) {
    // Comprobar si la letra existe en el diccionario
    if (!letras.includes(letra)) return false
  }
  return true
}

const coleccion = [
  ['A', 'B', 'C', 'D'],
  ['Z', 'V', 'K', 'S'],
  ['F', 'G', 'O', 'E']
]

console.log(puedeFormarPalabra('PERRO', coleccion))
console.log(puedeFormarPalabra('CASO', coleccion))
console.log(puedeFormarPalabra('SECO', coleccion))
