/*
Ejercicio 44:
Crea una función que detecte si un string es un pangrama o no.
 
Un pangrama es una frase que incluye todas las letras del abecedario.
 
Ejemplos:
esPangrama("El pequeño jabato erizo se balanceaba sobre la rama del árbol.") // true
esPangrama("Hola soy Víctor Robles") // false
*/

function esPangrama(frase) {
  frase = frase.toLowerCase().replace(/\s/g, '')

  const abecedario = 'abcdefghijklmnñopqrstuvwxyz'.split('')

  return abecedario.every((letra) => frase.includes(letra))
}

console.log(
  esPangrama(
    'Benjamín pidió una bebida de kiwi y fresa. Noé, sin vergüenza, la más exquisita champaña del menú.'
  )
) // true
console.log(esPangrama('Hola soy Irvin Real')) // false
