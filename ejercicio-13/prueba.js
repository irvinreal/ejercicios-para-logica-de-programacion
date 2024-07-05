/*
  Ejercicio 13:
  Crea una funcion que calcule el area de un cuadrado, un rectangulo o un triangulo
  
  Ejemplos:
  calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }); 
  
  Devuelve: 27
 
*/

function calcularAreaPoligono(poligono) {
  // Variable para almacenar resultado del calculo del área
  let resultado = 0;

  // Operación para calcular el área de un cuadrado
  if (poligono.tipo === 'cuadrado' && poligono.lado) {
    resultado = poligono.lado * poligono.lado;
  }

  // Operación para calcular el área de un rectangulo
  else if (poligono.tipo === 'rectangulo' && poligono.base && poligono.altura) {
    resultado = poligono.base * poligono.altura;
  }

  // Operación para calcular el área de un triangulo
  else if (poligono.tipo === 'triangulo' && poligono.base && poligono.altura) {
    resultado = (poligono.base * poligono.altura) / 2;
  }

  // Devolver el resultado
  return `${poligono.tipo}: ${resultado}`;
}

console.log(calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }));
console.log(calcularAreaPoligono({ tipo: 'cuadrado', lado: 6 }));
console.log(calcularAreaPoligono({ tipo: 'rectangulo', base: 6, altura: 9 }));
