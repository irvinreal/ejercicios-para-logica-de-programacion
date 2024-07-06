/*
  Ejercicio 15:
  Dada un array de palabras, crear una función que lo devuelva ordenado
  por la longitud de sus palabras de menor a mayor
  
  Ejemplos:
  ordenarPorLongitud([
    "Hola",
    "soy",
    "Víctor Robles",
    "como",
    "estas",
    "hoy",
    "amigo",
    "yo",
    "voy",
    "a",
    "estudiar",
    "ahora"
  ]);
 
*/

function ordenarPorLongitud(arrayDePalabras) {
  // Ordernar con ayuda del metodo sort usando la longitud de cada palabra
  
  return arrayDePalabras.sort((a, b) => a.length - b.length);
}

console.log(
  ordenarPorLongitud([
    'Hola',
    'soy',
    'Víctor Robles',
    'como',
    'estas',
    'hoy',
    'amigo',
    'yo',
    'voy',
    'a',
    'estudiar',
    'ahora'
  ])
);
