/*
  Ejercicio 58:
  Crea una función que tome una cadena de caracteres como argumento 
  y devuelva una nueva cadena que contenga únicamente las letras 
  únicas de la cadena original. 
  
  Las letras deben aparecer en el mismo orden en que se 
  encontraron en la cadena original.
  
  Ejemplos:
  letrasUnicas("Hola soy Victor Robles WEB")
  
  Devuelve:
  Hola syVictrRbeWEB

*/

function letrasUnicas(cadena) {
  let cadenaResultante = ''

  for (let i = 0; i < cadena.length; i++) {
    const elementoActual = cadena[i]
    if (cadena.indexOf(elementoActual) === i || elementoActual === ' ') {
      if (cadenaResultante[cadenaResultante.length - 1] === ' ' && elementoActual === ' ') continue
      cadenaResultante += cadena[i]
    }
  }

  return cadenaResultante
}

const textoIrvin =
  'Hola mi nombre es irvin y soy Programador Web e Ingeniero de Software desde hace 2 años'

console.time('test1')

console.log(letrasUnicas(textoIrvin))

console.timeEnd('test1')
