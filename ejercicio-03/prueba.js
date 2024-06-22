/*
Ejercicio 3:

Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
 
*/

function diferenciaDeDias(fecha1, fecha2) {
  // Comprobar que ambas fechas tengan un formato correcto ( sino lo tiene, darle el formato correcto)
  fecha1 = fecha1 instanceof Date ? fecha1 : new Date(fecha1);
  fecha2 = fecha2 instanceof Date ? fecha2 : new Date(fecha2);

  // Obtener la diferencia en milisegundos entre las dos fechas
  const diferenciaEnMilisegundos = Math.abs(
    fecha1.getTime() - fecha2.getTime()
  );

  // Dividir la diferencia en milisegundos entre el número de milisegundos que tiene un día y redondearla
  const dias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

  if (isNaN(dias)) {
    return 'El formato de la fecha es incorrecto. Usa el formato Americano.';
  }

  return `La diferencia son: ${dias} días.`;
}

console.log(diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023'));
