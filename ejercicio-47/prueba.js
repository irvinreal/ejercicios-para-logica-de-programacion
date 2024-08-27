/*
Ejercicio 47:
Crea un simulador de pieda, papel o tijera.
 
El resultado podrá ser: "Jugador 1", Jugador 2" o "Empate"
 
Ejemplos:
 
quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PIEDRA"], ["PAPEL", "TIJERA"]]); 
// Devuelve: "Jugador 2"
 
quienGana([["PIEDRA", "PIEDRA"], ["TIJERA", "TIJERA"], ["PAPEL", "PAPEL"]]); 
// Devuelve: "Empate"
 
quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PAPEL"], ["PAPEL", "PIEDRA"]]); 
// Devuelve "Jugador 1"
*/

function quienGana(jugadas) {
  let contadorjugador1 = 0
  let contadorjugador2 = 0

  for (const partida of jugadas) {
    const jugada1 = partida[0]
    const jugada2 = partida[1]

    if (jugada1 === jugada2) continue

    if (
      (jugada1 === 'PIEDRA' && jugada2 === 'TIJERA') ||
      (jugada1 === 'PAPEL' && jugada2 === 'PIEDRA') ||
      (jugada1 === 'TIJERA' && jugada2 === 'PAPEL')
    ) {
      contadorjugador1++
    } else {
      contadorjugador2++
    }
  }

  if (contadorjugador1 > contadorjugador2) return 'Ganó el jugador 1'
  if (contadorjugador1 < contadorjugador2) return 'Ganó el jugador 2'
  if (contadorjugador1 === contadorjugador2) return 'Empate'
}

console.log(
  quienGana([
    ['PIEDRA', 'TIJERA'],
    ['TIJERA', 'PIEDRA'],
    ['PAPEL', 'TIJERA']
  ])
)
