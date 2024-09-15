/*
  Ejercicio 51:
  Crea una función que dibuje un diamante de asteriscos.
  
  Ejemplos:
  generarDiamante(5);
  
  Devuelve: 
    *
   *** 
  *****
   *** 
    *  
  
*/

function generarDiamante(numero) {
  // Forzar que el tamaño sea impar
  if (numero % 2 === 0) numero--

  // Calcular la mitad del diamante
  const mitad = Math.floor(numero / 2)

  // Recorrer filas del diamante
  for (let filaActual = 0; filaActual < numero; filaActual++) {
    let fila = ''

    // Calcular número de espacios
    const espacios = Math.abs(mitad - filaActual)

    // Imprimir espacios en cada fila
    for (let espacioActual = 0; espacioActual < espacios; espacioActual++) {
      fila += ' '
    }

    for (let asteriscoActual = 0; asteriscoActual < numero - espacios * 2; asteriscoActual++) {
      fila += '*'
    }
    console.log(fila)
  }
}

console.log(generarDiamante(5))
console.log(generarDiamante(22))
console.log(generarDiamante(14))
