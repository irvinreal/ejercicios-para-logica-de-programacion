/*
  Ejercicio 35:
  Crea un programa que dados dos arrays de lenguajes frontend y backend
  y dado un parametro que sera un array con los nombres de dos lenguajes
  nos diga si son compatibles o no.
  
  Solo pueden ser compatibles lenguajes front con uno de back
  
  Ejemplos:
  sonCompatibles(["HTML", "PHP"])   // true
  sonCompatibles(["PHP", "PYTHON"]) // false
 
*/

function sonCompatibles(lenguaje1, lenguaje2) {
  // Definir dos arrays con Lenguajes front y backend
  const frontend = ['HTML', 'HTML5', 'XHTML', 'CSS', 'CSS3', 'JAVASCRIPT'];
  const backend = ['PHP', 'PYTHON', 'RUBY', 'NODE', 'C#', 'RUST', 'PERL', 'GO', 'GOLANG', 'JAVA'];

  if (typeof lenguaje1 === 'object') {
    let copia = lenguaje1;
    lenguaje1 = copia[0];
    lenguaje2 = copia[1];
  }

  // Comprobar si un lenguaje es front y el otro backend
  if (
    (frontend.includes(lenguaje1.toUpperCase()) && backend.includes(lenguaje2.toUpperCase())) ||
    (backend.includes(lenguaje1.toUpperCase()) && frontend.includes(lenguaje2.toUpperCase()))
  ) {
    return true;
  }

  // Si no se cumplen devolver false
  return false;
}

console.log(sonCompatibles(['HTML', 'PHP'])); // true
console.log(sonCompatibles(['PHP', 'PYTHON'])); // false
