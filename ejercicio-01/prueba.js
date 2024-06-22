/*
  Ejercicio 1:
  
  Dado un array u objeto de superhéroes de Marvel:
  -Has un programa que pueda mostrar la información de un superhéroe.
  -Añade una capacidad de buscar la información de varios superhéroes a la vez.


  Ejemplo:
  mostrarInformacionSuperheroe('Iron Man');
  
  Salida:
  Nombre real: Tony Stark
  Poderes: Tecnología avanzada, Movilidad aérea
  Equipo: Los vengadores
  
  Ejemplo 2: 
  mostrarInformacionSuperheroes([array de nombres]]);
  
  Salida:
  Muestra la información de todos los superheroes
*/

// Crear array de objetos de superheroes marvel
const infoSuperheroes = {
  'Iron Man': {
    nombreReal: 'Tony Stark',
    poderes: ['Tecnologia avanzada', 'Movilidad aérea'],
    equipo: 'Los vengadores'
  },
  'Capitán América': {
    nombreReal: 'Steve Rogers',
    poderes: ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
    equipo: 'Los vengadores'
  },
  Thor: {
    nombreReal: 'Thor Odinson',
    poderes: ['Mjolnir', 'Viento y trueno'],
    equipo: 'Los vengadores'
  },
  'Spider-Man': {
    nombreReal: 'Peter Parker',
    poderes: ['Balanceo', 'Telarañas pegajosas', 'Sentido aracnido'],
    equipo: 'Los vengadores'
  },
  Hulk: {
    nombreReal: 'Bruce Banner',
    poderes: ['Fuerza sobrehumana', 'Invulnerabilidad'],
    equipo: 'Los vengadores'
  }
};

function mostrarInformacionSuperheore(aka) {
  console.log(`########### ${aka} ###########`);

  // Comprobar si el superheore existe dentro del objeto
  if (aka in infoSuperheroes) {
    // Conseguir la información de ese superheroe
    const informacion = infoSuperheroes[aka];

    // Mostrar la información
    console.log(`Nombre real: ${informacion.nombreReal}`);
    console.log(`Poderes: ${informacion.poderes.join(', ')}`);
    console.log(`Equipo: ${informacion.equipo}`);
  } else {
    console.log(`No existe el superheroe: ${aka}`);
  }
}

// mostrarInformacionSuperheore('Thor');

function mostrarInformacionSuperheroes(akas) {
  // Recorre todos los nombres
  akas.forEach((aka) => {
    // Mostrar la info ( usar función anterior )
    mostrarInformacionSuperheore(aka);
    console.log('');
  });
}

mostrarInformacionSuperheroes(['Iron Man', 'Thor', 'Joker']);
