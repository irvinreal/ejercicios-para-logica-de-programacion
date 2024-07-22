/*
  Ejercicio 33:
  Crea una función a la cual le pase un string y lo convierta 
  a un listado en un objeto que cuente el número de elementos.
  
  Las palabras no deben incluir guiones ni guiones bajos.
  
  Ejemplos:
  contarElementos("pc -ordenador _computadora consola- ps5 theLastOfUs ordenador"); 
  
  Devuelve: 
  { pc: 1, ordenador: 2, computadora: 1, consola: 1, ps5: 1, theLastOfUs: 1 }
  
*/

function contarElementos(texto) {
  // Separar texto por palabras
  const palabras = texto.split(' ');

  // objeto para contar palabras
  const mapeo = {};

  // Recorrer cada palabra y limpiarle los guines (medios y bajos)
  palabras.forEach((palabra) => {
    // Limpiar guiones
    palabra = palabra.replace(/[-_.,¡!]/g, '');

    if (mapeo[palabra]) {
      mapeo[palabra]++;
    } else {
      mapeo[palabra] = 1;
    }
  });

  return mapeo;
}

console.log(
  contarElementos('pc -ordenador _computadora consola- ps5 theLastOfUs ordenador theLastOfUs')
);
