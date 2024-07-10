/*
  Ejercicio 19:
  Crea una función que simule el lanzamiento de dos dados.
  
  Ejemplos:
  dados();
 
*/

function dados() {
  let dado1 = Math.ceil(Math.random() * 6);
  let dado2 = Math.ceil(Math.random() * 6);

  return [dado1, dado2];
}

console.log(dados());
