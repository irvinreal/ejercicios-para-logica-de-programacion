/*
  Ejercicio 2:

  Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
  crear una función que la simplifique
  
  Ejemplo:
  simplificarRuta("/home/");             // Salida: /home
  simplificarRuta("/x/./y/../../z/");    // Salida: /z
  simplificarRuta("/../");               // Salida: /
  simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
  
*/

function simplificarRuta(ruta) {
  // Crear variable pila para almacenar las partes de la ruta
  let pila = [];

  // Dividir la ruta en sus diferentes partes usando el separador "/"
  const partes = ruta.split('/');

  // Recorrer cada parte
  for (let parte of partes) {
    // Si la parte es ".." quito el último elemento
    if (parte === '..') {
      pila.pop();
    }

    // Si la parte es diferente a ".", ".." o "" => guardar esa parte en la pila
    else if (parte !== '.' && parte !== '') {
      pila.push(parte);
    }
  }

  return '/' + pila.join('/');
}

console.log(simplificarRuta('/home/')); // Salida: /home
console.log(simplificarRuta('/x/./y/../../z/')); // Salida: /z
console.log(simplificarRuta('/../')); // Salida: /
console.log(simplificarRuta('/home//pruebas/')); // Salida: /home/pruebas
