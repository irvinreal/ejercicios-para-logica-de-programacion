/*
  Ejercicio 67:
  Dada una frase devuelve la longitud de la última palabra que tenga más de 4
  caracteres y que contenga la vocal 'a'.
  
  Ejemplos:
  longitudUltimaPalabra('El cielo está encapotado quien lo desencapotará hoy')
 
*/

function longitudUltimaPalabra(frase) {
  frase = frase.toLowerCase().split(' ')
  const palabrasValidas = []

  frase.forEach((palabra) => {
    if (palabra.length > 4 && palabra.includes('a')) {
      palabrasValidas.push(palabra)
    }
  })

  return palabrasValidas[palabrasValidas.length - 1]
}

console.log(longitudUltimaPalabra('El cielo está encapotado quien lo desencapotará hoy'))
console.log(
  longitudUltimaPalabra(
    'Aprender un nuevo idioma abre puertas a infinitas oportunidades, permitiendo a las personas conectarse con diferentes culturas, obtener perspectivas únicas y crecer personal y profesionalmente. Con dedicación y práctica, cualquiera puede lograr fluidez y disfrutar sus beneficios'
  )
)
