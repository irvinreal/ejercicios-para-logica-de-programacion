/*
  Ejercicio 8:

  Crea un algoritmo al cual le pase un número entero
  y me lo convierta a número romano
  
  Ejemplos:
  enteroARomano(100); // Resultado:  C
  enteroARomano(345); // Resultado: CCCXLV
 
*/

function enteroARomano(numeroEntero) {
  // Variable del número original
  const numeroOriginal = numeroEntero;

  // Variable para guardar el String final
  let resultado = '';

  // Listado de números romanos
  const caracteresRomanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  // El equivalente en números decimales
  const valoresDecimales = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  // Bucle para recorrer números decimales
  for (let i = 0; i < valoresDecimales.length; i++) {
    // console.log(valoresDecimales[i], caracteresRomanos[i]);

    // Bucle para iterar mientras el número sea mayor o igual número decimal que estoy recorriendo
    while (numeroEntero >= valoresDecimales[i]) {
      // Añadir el caracter romano al resultado
      resultado += caracteresRomanos[i];

      // Actualizar número para restar el valor decimal que ya he agregado al resultado de números romanos
      numeroEntero -= valoresDecimales[i];
    }
  }

  // Devolver resultado
  return `El número decimal "${numeroOriginal}" en número romano es "${resultado}"`;
}

console.log(enteroARomano(126)); // Resultado:  CXXVI
