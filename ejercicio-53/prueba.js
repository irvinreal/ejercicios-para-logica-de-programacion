/*
  Ejercicio 53:
  Crea una función para encontrar la longitud del mayor
  subconjunto de caracteres que no se repiten.
  
  Ejemplos:
  encontrarSubcadenaSinRepetir("abcabcbb")  // abc, 3
  encontrarSubcadenaSinRepetir("bbbbb")     // b, 1
  encontrarSubcadenaSinRepetir("pwwkew")    // wke, 3
*/

function encontrarSubcadenaSinRepetir(texto) {
  let subcadenaSinRepetir = ''

  let subcadenaActual = ''

  for (const caracter of texto) {
    if (subcadenaActual.indexOf(caracter) !== -1) subcadenaActual = ''

    subcadenaActual += caracter

    if (subcadenaActual.length > subcadenaSinRepetir.length) subcadenaSinRepetir = subcadenaActual
  }

  console.log(subcadenaSinRepetir, subcadenaSinRepetir.length)
  return subcadenaSinRepetir.length
}

console.log(encontrarSubcadenaSinRepetir('abcabcbb')) // abc, 3
console.log(encontrarSubcadenaSinRepetir('bbbbb')) // b, 1
console.log(encontrarSubcadenaSinRepetir('pwwkew')) // wke, 3
