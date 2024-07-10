/*
  Ejercicio 23:
  Crea una función que a la cual le pase unos números en un array y me decodifique
  el mensaje teniendo en cuenta que cada letra tiene un numero asignado.
  
  Las letras del abecedario de la A a la Z tienen un número
  por ejemplo la A es el numero 1 y la Z es el numero 26
  
  Ejemplos:
  decodificarMensaje([8, 15, 12, 1]);
  
  Devuelve: 
  HOLA
 
*/

function decodificarMensaje(codigo) {
  // Variable para almacenar cadena de texto decifrada
  let textoDecifrado = '';

  // Bucle para recorrer el array
  codigo.forEach((numero) => {
    // Convertir número a letra
    let letra = String.fromCharCode(parseInt(numero) + 64);

    // Actualizar variable principal con la letra que corresponde a cada número dentro del array
    textoDecifrado += letra;
  });

  // Devolver resultado
  return textoDecifrado.toLowerCase();
}

console.log(decodificarMensaje([8, 15, 12, 1]));
