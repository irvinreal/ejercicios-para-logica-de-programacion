/*
  Ejercicio 70:
  Crea una función que dado un texto que contenga varias frases en minusculas,
  logre poner en mayusculas las letras correctas del texto. 
  
  Ejemplos:
  capitalizarFrase("hola. como estas. soy Irvin Real. me gusta programar.");
  
  Devuelve:
  Hola. Como estas. Soy Irvin Real. Me gusta programar.

*/

function capitalizarFrase(frase) {
  let nuevaFrase = ''
  frase = frase.split(' ')
  
  frase.forEach((letra, i) => {
    if (i === 0) {
      nuevaFrase += `${frase[0][0].toUpperCase()}${frase[0].substring(1)} `
    }
    if (letra.includes('.') && i !== frase.length - 1) {
      nuevaFrase += `${frase[i + 1][0].toUpperCase()}${frase[i + 1].substring(1)} `
    } else if (i < frase.length - 1) {
      nuevaFrase += `${frase[i + 1]} `
    }
  })
  return nuevaFrase
}

console.log(capitalizarFrase('hola. como estas. soy Irvin Real. me gusta programar.'))
