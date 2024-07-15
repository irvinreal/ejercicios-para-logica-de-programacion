/*
  Ejercicio 28:
  Crea una función que me diga si un número es armstrong o no.
  
  Un número es armstrong si la suma de los cubos de sus dígitos es igual al número. 
  Por ejemplo, el número 371 es armstrong porque 3^3 + 7^3 + 1^3 = 371.
  
  Si la cifra es de 4 digitos, se eleva a 4, y si es de 5 a 5.
  
  Ejemplos:
  esArmstrong(371)  // Devuelve: true

*/

function esArmstrong(numero) {
  // Convertir numero a cadena de texto
  numero = numero.toString();

  // Calcular longitud de la cadena
  let tamanio = numero.length;

  // Crear variable para acumular la cifra de calcular la elevación al tamaño
  let suma = 0;

  // Recorrer cada caracter del texto y actualizar variable acumuladora
  for (let i = 0; i < tamanio; i++) {
    suma += Math.pow(parseInt(numero[i]), tamanio);
  }

  // Devolver resultado
  return parseInt(numero) === suma;
}

console.log(esArmstrong(371)); // Devuelve: true
console.log(esArmstrong(2354)); // Devuelve: false
console.log(esArmstrong(153)); // Devuelve: true
