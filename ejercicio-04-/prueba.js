/*
  Ejercicio 4:

  Crea el juego del ahorcado.
  El usuario tendrá que ir adivinando y descubriendo las letras de una palabra 
  secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
  
  Utiliza el método de entrada de datos habitual de tu lenguaje,
  en el caso de JS, usaremos la función prompt.
  
  Ejemplo:
  juegoDelAhorcado('victor');  
  
  // Salida:
  Adivina la letra: i
  La palabra es: _i___
  Te quedan 5 intentos

*/

const lanzarJuego = document.querySelector('#lanzarJuego');
lanzarJuego.addEventListener('click', () => juegoDelAhorcado('irvin'));

function juegoDelAhorcado(palabraSecreta) {
  // Crear variable palabra oculta con guiones bajos
  let palabraOculta = '_'.repeat(palabraSecreta.length);
  console.log(palabraOculta);

  // Variable con el número de intentos que vamos a tener
  let intentos = 5;

  // Bucle para pedir letras ( mientras no se hayan adivinado todas las letras y queden intentos )
  while (intentos > 0 && palabraOculta !== palabraSecreta) {
    // Pedir una letra
    let letra = prompt('Adivina una letra');

    // Comprobar si la letra existe en la palabra para actualizar la variable palabraOculta
    if (palabraSecreta.includes(letra)) {
      // Actualizar la variable palabraOculta y meter la letra en la posición correcta
      for (let contadorLetras = 0; contadorLetras < palabraSecreta.length; contadorLetras++) {
        const LetraActual = palabraSecreta[contadorLetras];
        if (letra === LetraActual) {
          // Convertir la palabraOculta en un array
          let palabraOcultaArray = Array.from(palabraOculta);

          // Agregar la letra adivinada al array
          palabraOcultaArray[contadorLetras] = letra;

          // Unir el array en un string
          // Actualizar la variable palabra oculta
          palabraOculta = palabraOcultaArray.join('');
        }
      }
    } else {
      // Si no existe la letra en la variable palabraOculta, resto un intento
      intentos--;
    }

    // Mostrar el estado actual de la variable palabraOculta
    console.log(`La palabra es: ${palabraOculta}`);

    // Mostrar cuantos intentos quedan
    console.log(`Te quedan: ${intentos} intentos.`);
  }

  // Cuando salga del bucle
  // Si se han adivinado todas las letras mostrar mensaje de victoria
  if (palabraOculta === palabraSecreta) {
    console.log(`En hora buena, has ganado! La palabra secreta era: ${palabraSecreta}`);
  } else {
    console.log(`Lo siento, has perdido. La palabra secreta era: ${palabraSecreta}`);
  }
}
