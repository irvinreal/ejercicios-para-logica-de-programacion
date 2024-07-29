/*
  Ejercicio 40:
  Crea una función que convierta un número romano a decimal.
  
  Ejemplos:
  romanoAEntero("XVIII")   // 18
  romanoAEntero("CXX")     // 120
 
*/

function romanoAEntero(numeroRomano) {
  // Crear objeto con números romanos y sus correspondientes valores numericos
  const tablaRomanos = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  // Crear variable para almancenar resultado
  let resultado = 0;

  // Recorrer numero romano letra a letra
  for (let i = 0; i < numeroRomano.length; i++) {
    // Si la letra actual es la último o si el valor del siguiente caracter es menor o igual al del actual, entonces añadimos el valor al resultado
    if (
      i === numeroRomano.length - 1 ||
      tablaRomanos[numeroRomano[i + 1]] <= tablaRomanos[numeroRomano[i]]
    ) {
      resultado += tablaRomanos[numeroRomano[i]];
    } else {
      // Si no, restar el valor de la letra actual al resultado
      resultado -= tablaRomanos[numeroRomano[i]];
    }
  }

  // Devolver resultado
  return resultado;
}

console.log(romanoAEntero('XVIII')); // 18
console.log(romanoAEntero('CXX')); // 120
