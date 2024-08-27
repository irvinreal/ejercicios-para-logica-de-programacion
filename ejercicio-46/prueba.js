/*
Ejercicio 46:
Crea una función a la que le pasemos una nota y nos de una calificación:
 
0-3: Deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
 
Ejemplos:
calificar(8.2) // Notable
*/

function calificar(nota) {
  switch (true) {
    case nota >= 0 && nota < 3:
      return 'Deficiente'
    case nota >= 3 && nota < 5:
      return 'Insuficiente'
    case nota >= 5 && nota < 6:
      return 'Suficiente'
    case nota >= 6 && nota < 7:
      return 'Bien'
    case nota >= 7 && nota < 9:
      return 'Notable'
    case (nota >= 9 && nota <= 10) || nota > 10:
      return 'Sobresaliente'

    default:
      break
  }
}

console.log(calificar(2))
