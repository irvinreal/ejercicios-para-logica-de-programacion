/*
  Ejercicio 66:
  Crea una función que pueda filtrar la información de los superhéroes por afiliación. 
  Puedes hacer que la función tome una afiliación como parámetro 
  y muestre la información de los superhéroes que pertenecen a esa afiliación.
  
  Ejemplos:
  filtrarPorAfiliacion('Crimen organizado')
 
*/

const personajesDC = {
  Superman: {
    nombre: 'Superman',
    nombreReal: 'Clark Kent / Kal-El',
    poderes: [
      'Super fuerza',
      'Vuelo',
      'Visión de rayos X',
      'Súper velocidad',
      'Invulnerabilidad',
      'Aliento congelante',
      'Visión de calor'
    ],
    afiliacion: 'Liga de la Justicia'
  },
  Batman: {
    nombre: 'Batman',
    nombreReal: 'Bruce Wayne',
    poderes: [
      'Intelecto superior',
      'Experto en artes marciales',
      'Equipamiento avanzado',
      'Habilidades de detective'
    ],
    afiliacion: 'Liga de la Justicia'
  },
  'Wonder Woman': {
    nombre: 'Wonder Woman',
    nombreReal: 'Diana Prince',
    poderes: [
      'Super fuerza',
      'Vuelo',
      'Resistencia mejorada',
      'Lazo de la verdad',
      'Habilidades de combate'
    ],
    afiliacion: 'Liga de la Justicia'
  },
  Flash: {
    nombre: 'Flash',
    nombreReal: 'Barry Allen',
    poderes: ['Súper velocidad', 'Viaje en el tiempo', 'Regeneración rápida', 'Reflejos mejorados'],
    afiliacion: 'Liga de la Justicia'
  },
  Aquaman: {
    nombre: 'Aquaman',
    nombreReal: 'Arthur Curry',
    poderes: [
      'Comunicación con vida marina',
      'Super fuerza',
      'Resistencia mejorada',
      'Habilidad para respirar bajo el agua'
    ],
    afiliacion: 'Liga de la Justicia'
  },
  'Green Lantern': {
    nombre: 'Green Lantern',
    nombreReal: 'Hal Jordan',
    poderes: [
      'Creación de constructos con energía',
      'Vuelo',
      'Campo de fuerza',
      'Súper fuerza (con el anillo)'
    ],
    afiliacion: 'Liga de la Justicia'
  },
  Cyborg: {
    nombre: 'Cyborg',
    nombreReal: 'Victor Stone',
    poderes: [
      'Intelecto avanzado',
      'Fuerza sobrehumana',
      'Interfaz tecnológica',
      'Armas integradas'
    ],
    afiliacion: 'Liga de la Justicia'
  },
  Joker: {
    nombre: 'Joker',
    nombreReal: 'Desconocido',
    poderes: ['Intelecto criminal', 'Inmunidad al dolor', 'Experto en armas y venenos'],
    afiliacion: 'Crimen organizado'
  },
  'Harley Quinn': {
    nombre: 'Harley Quinn',
    nombreReal: 'Harleen Quinzel',
    poderes: ['Agilidad mejorada', 'Resistencia mejorada', 'Experta en combate y armas'],
    afiliacion: 'Crimen organizado'
  },
  'Lex Luthor': {
    nombre: 'Lex Luthor',
    nombreReal: 'Lex Luthor',
    poderes: ['Intelecto superior', 'Manipulación y estrategia', 'Experto en tecnología avanzada'],
    afiliacion: 'Crimen organizado'
  }
}

function filtrarPorAfiliacion(afiliacion) {
  const personajesFiltrados = []
  for (const personaje in personajesDC) {
    const info = personajesDC[personaje]
    if (info.afiliacion === afiliacion) {
      personajesFiltrados.push(info)
    }
  }
  return personajesFiltrados
}

console.log(filtrarPorAfiliacion('Crimen organizado'))
console.log(filtrarPorAfiliacion('Liga de la Justicia'))
