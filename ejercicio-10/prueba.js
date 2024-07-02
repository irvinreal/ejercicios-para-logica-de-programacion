/*
  Ejercicio 10:
  Crea una función que reciba un DNI (8 números) y calcule la letra del DNI
  
  Es un proceso matemático facil que se basa en obtener el 
  resto de la división entera del número de DNI y el número 23. 
  Y con el resto se obtiene la letra, usandolo como posición o indice
  dentro de un array de letras.
  
  Este sería el array de letras:
  const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
                  'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
  
  Ejemplos:
  generarLetraDNI("25439343");  // Resultado: 25439343D
 
*/

function generarLetraDNI(numeroDNI) {
  // Array de letras de DNI
  const letras = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E',
    'T'
  ];

  // Convertir número de DNI a entero (en caso de ser cadena de caracteres)
  numeroDNI = parseInt(numeroDNI);

  // Comprobar si el DNI es valido (8 cifras)
  if (numeroDNI > 0 && numeroDNI < 99999999) {
    // Calculo de la letra del DNI (numeroDNI % 23 = indice de posicion de la letra)
    let resto = numeroDNI % 23;

    // Conseguir la letra del array en base al resto
    let letraDNI = letras[resto];

    // Devolver el DNI con su letra incluida
    return numeroDNI.toString() + letraDNI;
  } else {
    // En caso de no ser un DNI valido devolver error
    return 'DNI Invalido.';
  }
}

console.log(generarLetraDNI('25439343')); // Resultado: 25439343D
