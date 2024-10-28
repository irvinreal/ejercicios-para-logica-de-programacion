/*
  Ejercicio 69:
  Crea una función que dado un texto, sea capaz de censurar palabras.
  
  Ejemplos:
  censurar("Texto de prueba", "texto") // ***** de prueba
 
*/

function censurar(texto, palabra) {
  const asterisco = '*'
  const asteriscos = asterisco.repeat(palabra.length)
  return texto.toLowerCase().replace(palabra, asteriscos)
}

console.log(censurar('Texto de prueba', 'texto')) // ***** de prueba
console.log(censurar('Bienvenidos a la playa', 'playa')) // ***** de prueba
