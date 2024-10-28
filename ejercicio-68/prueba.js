/*
  Ejercicio 68:
  Crea una función que pueda generar contraseñas aleatorias.
  
  Podrás pasar los siguientnes parámetros para las contraseñas:
  - Longitud: Entre 6 y 20.
  - Con o sin mayúsculas.
  - Con o sin números.
  - Con o sin símbolos.
  
  Ejemplos:
  generarContrasenia(12, true, true, false)
 
*/

function generarContrasenia(longitud, mayusculas, numeros, simbolos) {
  if (longitud < 6 || longitud > 20) return 'La contraseña debe estar entre 6 y 20 caracteres.'

  let contrasenia = ''

  let diccionario = 'abcdefghijklmnopqrstuvwxyz'

  if (mayusculas) diccionario += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (numeros) diccionario += '0123456789'
  if (simbolos) diccionario += '!¡¿?@#$%&/(){}[]*=,.-<>'

  for (let contador = 0; contador < longitud; contador++) {
    let indiceAleatorio = Math.floor(Math.random() * diccionario.length)

    contrasenia += diccionario[indiceAleatorio]
  }

  return contrasenia
}

console.log(generarContrasenia(19, true, true, true))
