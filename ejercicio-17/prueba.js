/*
  Ejercicio 17:
  Dada un array de frases, contar el número de palabras que tiene
  
  Ejemplos:
  contarPalabras([
                  "Hola, soy Víctor Robles WEB",
                  "Me gusta programar",
                  "Y soy desarrollador web"
              ]);
  
  Devuelve: 12
 
*/

function contarPalabras(arrayDeFrases) {
  // Variable que acumula el total de palabras de cada frase
  let totalPalabras = 0;

  // Bucle para recorrer cada frase
  arrayDeFrases.forEach((fraseActual) => {
    // Dividir frase actual en un array de palabras
    const palabras = fraseActual.split(' ');
    const palabrasXFrase = palabras.length;

    // Sumar el numero de palabras de cada frase a la variable acumuladora totalPalabras
    totalPalabras += palabrasXFrase;
  });
  // Devolver total de palabras
  // return arrayDePalabras.join(' ').split(' ').length;
  return `Total de palabras: ${totalPalabras}`;
}

console.log(
  contarPalabras(['Hola, soy Irvin Gonzalez Real', 'Me gusta programar', 'Y soy desarrollador web'])
);
