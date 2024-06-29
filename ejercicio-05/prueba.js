/*
  Enunciado Ejercicio 5:

  Dado un array de personas con nombres y apellidos
  crear una función para ordenar el array por los apellidos
  en orden alfabético
  
  Ejemplo:
  ordenarPorApellidos([
      "Víctor Robles",
      "Antonio Alcantara",
      "Al Pacino",
      "Robert DeNiro",
      "Brad Pitt",
      "Sylvester Stallone"
  ]);  
*/

const personas = [
  'Víctor Robles',
  'Antonio Alcantara',
  'Al Pacino',
  'Robert DeNiro',
  'Brad Pitt',
  'Sylvester Stallone'
];

function ordenarPorApellido(listaDePersonas) {
  // Crear una variable con un nuevo array de apellidos
  const arrayApellidos = listaDePersonas.map((persona) => persona.split(' ')[1]);

  // Ordenar los apellidos
  arrayApellidos.sort();

  // Crear nuevo array con los nombres y apellidos ya ordenados
  const personasOrdenadas = arrayApellidos.map((apellido) => {
    // Encontrar el nombre completo...
    // Correspondiente al apellido ordenado
    const nombre = listaDePersonas.find((nombreCompleto) => {
      return nombreCompleto.split(' ')[1] === apellido;
    });

    return nombre;
  });

  return personasOrdenadas;
}

console.log(ordenarPorApellido(personas));
