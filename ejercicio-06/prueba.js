/*
  Enunciado Ejercicio 6:

  Dado un año actual, crea un programa que me muestre 
  los años bisiestos que habrá en los proximos 30 años
  
  Ejemplo:
  bisiestos(2023);
  
  // Salida:
  2024
  2028
  2032
  2036
  2040
  2044
  2048
  2052
 
*/

function bisiestos(anio) {
  // Variable con límite de años
  const limite = 30;

  // Bucle que se ejecute tantas veces como años límite tengamos
  for (let i = 0; i < limite; i++) {
    // Comprobar si el día 29 de febrero existe en el año actual
    const fecha = new Date(anio, 1, 29).getMonth();

    if (fecha === 1) {
      console.log(anio);
    }

    anio++;
  }

  // Si sí existe, mostrar como año bisiesto
}

bisiestos(2023);
