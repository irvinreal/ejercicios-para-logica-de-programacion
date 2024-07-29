/*
  Ejercicio 39:
  Dado un número crea una función que genere todas las combinaciones
  de parentesis válidas.
  
  Ejemplos:
  combinacionesParentesis(3);
  
  Devuelve:
  [
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()"
  ]

*/

function combinacionesParentesis(numero) {
  // Definir variable de resultados
  let resultados = [];

  // Comprobar si el número es valido
  if (numero < 1) return resultados;

  // Ejecutar función recursiva para generar los parentesis
  generarParentesis('', numero, numero, resultados);

  // Devolver resultados
  return resultados;
}

// Contador ejecuciones
let contadorEjecucionesRecursivas = 0;

// Función recursiva para generar parentesis
function generarParentesis(combinacion, abiertos, cerrados, resultados) {
  // Si no quedan parentesis abiertos ni cerrados, añadir combinación a resultados
  if (abiertos === 0 && cerrados === 0) {
    resultados.push(combinacion);
    return true;
  }

  // Si todavia quedan parentesis abiertos disponibles, añadimos uno a la combinación y seguimos con la recursión
  if (abiertos > 0) {
    generarParentesis(combinacion + '(', abiertos - 1, cerrados, resultados);
  }

  // Si todavía quedan parentesis cerrados disponibles y hay al menos un parentesis abierto disponible para cerrar, añadimos uno a la combinacion y seguimos
  if (cerrados > 0 && abiertos < cerrados) {
    generarParentesis(combinacion + ')', abiertos, cerrados - 1, resultados);
  }

  // Actualizar contador recursión
  contadorEjecucionesRecursivas++;
}

console.log(combinacionesParentesis(3));

// Devuelve: ['((()))', '(()())', '(())()', '()(())', '()()()'];
