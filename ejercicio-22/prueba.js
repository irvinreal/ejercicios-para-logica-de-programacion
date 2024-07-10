/*
  Ejercicio 22:
  Crea una función que invierta el orden de un texto
  sin usar funciones nativas del lenguaje.
  
  Ejemplos:
  invertirTexto("Hola");
  
  Devuelve: 
  aloH
 
*/

function invertirTexto(texto) {
  // Crear una variable para almacenar la cadena invertida
  let cadenaInvertida = '';

  // Recorrer la cadena de forma inversa
  for (let i = texto.length - 1; i >= 0; i--) {
    const letra = texto[i];
    cadenaInvertida += letra;
  }

  // Devolver resultado
  return cadenaInvertida;
}

console.log(invertirTexto('Hola'));
console.log(invertirTexto('Bienvenidos a la prueba del texto invertido'));
