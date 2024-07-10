/*
  Ejercicio 18:
  Dado un array de usuarios, mostrar sólo los que tengan más de 20 años
  y en su nombre tengan la letra "o" y "n"
  
    const usuarios = [
      { nombre: 'Antonio', edad: 20 },
      { nombre: 'Juan', edad: 23 },
      { nombre: 'Pepe', edad: 12 },
      { nombre: 'Raul', edad: 28 },
      { nombre: 'Paco', edad: 38 },
      { nombre: 'Jason', edad: 56}
    ];
  
  Ejemplos:
  filtrarUsuarios(usuarios);
  
  Devuelve: 
  [
      { nombre: 'Antonio', edad: 20 },
      { nombre: 'Jason', edad: 56}
  ]
 
*/

const usuarios = [
  { nombre: 'Antonio', edad: 20 },
  { nombre: 'Juan', edad: 23 },
  { nombre: 'Pepe', edad: 12 },
  { nombre: 'Raul', edad: 28 },
  { nombre: 'Paco', edad: 38 },
  { nombre: 'Jason', edad: 56 }
];

function filtrarUsuarios(usuarios) {
  // Usar la funcion filter
  const usuariosFiltrados = usuarios.filter(({ nombre, edad }) => {
    return edad >= 20 && nombre.toLowerCase().includes('o') && nombre.toLowerCase().includes('n');
  });

  // Devolver como validos solamente los objetos que cumplen las 3 condiciones

  return usuariosFiltrados;
}

console.log(filtrarUsuarios(usuarios));
