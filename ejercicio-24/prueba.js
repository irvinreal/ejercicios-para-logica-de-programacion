/*
  Ejercicio 24:
  Crea una función a la cual le pasemos un array de nombres de archivo
  y nos devuelva un array con esos mismos archivos, pero si hay alguno
  duplicado debe estar númerado con un (numero de repeticiones)
  como hacen los sistemas operativos.
  
  Ejemplos:
  renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]);
  
  Devuelve: 
  [ 'nombre', 'apellido', 'nombre(1)', 'nombre(2)' ]
 
*/

function renombrarArchivos(arrayNombres) {
  // Recorrer cada nombre de archivo dentro del array y devolver un nuevo array
  return arrayNombres.map((nombre, indice) => {
    // Crear nuevo array filtrado que contenga todos los archivos menos el actual
    let filtrados = arrayNombres
      .slice(0, indice)
      .filter((nombreFiltrado) => nombre === nombreFiltrado);

    // Si no hay repetidos devolvemos el archivo actual
    // Si sí hay repetidos agregamos numeración
    return filtrados.length === 0 ? nombre : `${nombre}(${filtrados.length})`;
  });
}

console.log(renombrarArchivos(['nombre', 'apellido', 'nombre', 'nombre', 'apellido', 'nombre']));
