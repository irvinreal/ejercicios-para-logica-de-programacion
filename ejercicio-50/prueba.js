/*
  Ejercicio 50:
  Crea una función que dada una temperatura la pase a grados
  celsius o grados fahrenheit.
  
  Ejemplos:
  convertirTemperatura('29°C')  // Devuelve: "84.20°F"
  convertirTemperatura('77°F')  // Devuelve: "25.00°C"
*/

function convertirTemperatura(temperatura) {
  // Separar la temperatura del formato
  const tipo = temperatura.slice(-1)
  const valor = parseFloat(temperatura.slice(0, -2))

  // Comprobar si la temperatura tiene el formato correcto
  if ((tipo !== 'C' && tipo !== 'F') || isNaN(valor)) return 'Formato incorrecto!'

  if (tipo === 'C') {
    const gradosF = ((valor * 9) / 5 + 32).toFixed(2)
    return gradosF + '°F'
  } else {
    const gradosC = (((valor - 32) * 5) / 9).toFixed(2)
    return gradosC + '°C'
  }
}

console.log(convertirTemperatura('29°C')) // Devuelve: "84.20°F"
console.log(convertirTemperatura('77°F')) // Devuelve: "25.00°C"
