/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 54:
En la película de Avatar, existen diferentes tribus de Na'vi 
que habitan Pandora. Cada tribu tiene una habilidad especial y 
un valor de poder entre 1 y 5:
 
Tribus pacifistas: Omaticaya (1), Tawkami (2), Kekunan (3)
Tribus guerreras: Rda (2), Hometree (3), Toruk Makto (5)
 
Crea un programa que calcule el resultado de una guerra 
entre dos ejércitos de Na'vi. 
 
Ejemplos:
calcularResultadoGuerra(tribusBuenas, tribusMalas);
 
Devuelve:
"¡Gana el mal!"
*/

const tribusBuenas = [
  { nombre: { valor: 1, nombre: 'Omaticaya' }, cantidad: 10 },
  { nombre: { valor: 2, nombre: 'Tawkami' }, cantidad: 5 },
  { nombre: { valor: 3, nombre: 'Kekunan' }, cantidad: 13 }
]

const tribusMalas = [
  { nombre: { valor: 2, nombre: 'Rda' }, cantidad: 10 },
  { nombre: { valor: 3, nombre: 'Hometree' }, cantidad: 5 },
  { nombre: { valor: 5, nombre: 'Toruk Makto' }, cantidad: 1 }
]

function calcularResultadoGuerra(tribusBuenas, tribusMalas) {
  let potenciaBuena = 0
  let potenciaMala = 0

  // Calculo de potencia equipo bueno
  for (const { nombre, cantidad } of tribusBuenas) {
    potenciaBuena += cantidad * nombre.valor
  }

  // Calculo de potencia equipo malo
  for (const { nombre, cantidad } of tribusMalas) {
    potenciaMala += cantidad * nombre.valor
  }

  if (potenciaBuena > potenciaMala) {
    console.log('Los buenos, han ganado!')
  } else if (potenciaBuena < potenciaMala) {
    console.log('Los malos, han ganado!')
  } else {
    console.log('Ha habido un empate!')
  }
}

calcularResultadoGuerra(tribusBuenas, tribusMalas)
