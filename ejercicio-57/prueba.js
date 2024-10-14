/*
  Ejercicio 57:
  Crea una función que convierta cualquier frase a una SEO slug.
  
  Una seo slug es un fragmento de url optimizado para posicionamiento web:
  cursos-de-victor-robles-web
  
  Ejemplos:
  transformarURL("Cursos de Victor Robles WEB");
  
  Devuelve:
  cursos-de-victor-robles-web
 
*/

// function transformarURL(titulo) {
//   return titulo.toLowerCase().replace(/ /g, '-')
// }

function transformarURL(titulo) {
  return titulo.toLowerCase().split(' ').join('-')
}

console.log(transformarURL('Bienvenido a la pagina principal de Irvin Real'))
