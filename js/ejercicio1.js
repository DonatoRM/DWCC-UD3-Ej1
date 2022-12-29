/**
 * Función que nos devuelve la cadena preparada
 * @param {String} texto Cadena a chequear con espacios sobrantes
 * @returns Cadena ya preparada y sin espacio sobrantes
 */
function comprobarEspacios(texto) {
  for (let contador = 0; contador < texto.length; contador++) {
    if (contador < texto.length - 1) {
      // Si existen 2 caracteres consecutivos que sean un espacio...
      if (texto.charAt(contador) == " " && texto.charAt(contador + 1) == " ") {
        let cadena1 = texto.substring(0, contador);
        let cadena2 = texto.substring(contador + 1, texto.length);
        // Cogemos ambas cadenas y las solapamos
        let cadenaTotal = cadena1.concat(cadena2);
        texto = cadenaTotal;
        // Decremento el contador para comprobar de nuevo si existe o no otro espacio solapado
        contador--;
      }
    }
  }
  return texto;
}
/**
 * Función que nos devuelve las iniciales
 * @param {String} texto Texto a comprobar las iniciales
 * @param {String} iniciales Iniciales iniciales nates de la comprobación
 * @returns Devuelve un String con las iniciales finales
 */
function visualizarInicial(texto, iniciales) {
  // Insertamos la primera inicial
  iniciales += texto.charAt(0).toUpperCase() + ".";
  // Comprobamos si el texto es compuesto, en cuyo caso se añade una nueva inicial
  for (let contador = 0; contador < texto.length; contador++) {
    if (texto.charAt(contador) == " ") {
      iniciales += texto.charAt(contador + 1).toUpperCase() + ".";
    }
  }
  return iniciales;
}
/**
 * Función que nos devuelve con * las letras que no sean espacios, y con espacios los espacios
 * @param {String} texto texto a encriptar
 * @returns texto encriptado
 */
function encriptarTexto(texto) {
  let resultado = "";
  for (let contador = 0; contador < texto.length; contador++) {
    // Si hay un espacio se conserva, y sino se añade un espacio
    if (texto.charAt(contador) != " ") {
      resultado += "*";
    } else {
      resultado += " ";
    }
  }
  return resultado;
}
/**
 * Función para averiguar si un texto es un palíndromo
 * @param {String} texto Texto a averiguar si es un palíndromo o no
 * @returns Devuelve true si es palíndromo, y false si no lo es
 */
function palindromo(texto) {
  let palindomo = true;
  /* Comprobamos los caracteres simétricos respecto al centro del string. Si no nos iguales no 
  es un palíndromo */
  for (let contador = 0; contador < texto.length / 2; contador++) {
    if (texto.charAt[contador] != texto.charAt[length - contador - 1]) {
      palindomo = false;
    }
  }
  return palindomo;
}
let nombreCompleto = window.prompt("Introduzca el nombre completo por teclado con el formato:\napellidos, nombre");
let errores = [
  "No aparece una coma y un espacio después",
  "Tenemos varias comas con un espacio cada vez",
  "No existen los apellidos",
  "No existe el nombre",
  "No existe una coma",
];
let error; // Variable en donde se almacenará el error
let salida = ""; // Resultado que se mostrará en pantalla
let arrayNombreCompleto; // Lectura inicial por pantalla
// Comprobamos qur exista al menos 1 coma en la lectura inicial
if (nombreCompleto.charAt(",") != -1) {
  // Comprobamos que si existe la coma, inmediatamente después haya un espacio como mínimo
  let indice = nombreCompleto.indexOf(",");
  if (nombreCompleto.charAt(indice + 1) == " ") {
    // Creamos un array tomando como base la lectura inicial por pantalla y la coma y el espacio
    // Si el array tiene 2 elementos querrá decir que hay apellidos y nombre
    arrayNombreCompleto = nombreCompleto.split(", ");
    if (arrayNombreCompleto.length == 2) {
      for (let contador = 0; contador < arrayNombreCompleto.length; contador++) {
        arrayNombreCompleto[contador] = arrayNombreCompleto[contador].trim();
      }
      // Controlaremos que no exista ningún valor del array que sea un espacio vacío
      if (arrayNombreCompleto[0] != "") {
        if (arrayNombreCompleto[1] != "") {
          // Eliminar espacios en los apellidos y el nombre
          arrayNombreCompleto[0] = comprobarEspacios(arrayNombreCompleto[0]);
          arrayNombreCompleto[1] = comprobarEspacios(arrayNombreCompleto[1]);
          // Creamos el nombre completo bien formateado
          let nombreCompletoBien = arrayNombreCompleto[0] + ", " + arrayNombreCompleto[1];
          // Lo añadimos al resultado que se mostrará a la salida
          salida += nombreCompleto + "\n" + nombreCompletoBien + "\n";
          // Buscamos cuál es el primer nombre
          let espacio = arrayNombreCompleto[1].indexOf(" ");
          // Y añadimos a la salida la expresión Hola primerNombre
          if (espacio == -1) {
            salida += "Hola " + arrayNombreCompleto[1] + "\n";
          } else {
            salida += "Hola " + arrayNombreCompleto[1].substring(0, espacio) + "\n";
          }
          // Añadimos a la salida el nombre completo en minúsculas y en mayúsculas
          salida += (arrayNombreCompleto[0] + ", " + arrayNombreCompleto[1]).toLowerCase() + "\n";
          salida += (arrayNombreCompleto[0] + ", " + arrayNombreCompleto[1]).toUpperCase() + "\n";
          // Añadimos a la salida la longitud de los apellidos y del nombre
          salida += arrayNombreCompleto[1].length + "\n";
          salida += arrayNombreCompleto[0].length + "\n";
          // Buscamos las iniciales y las visualizamos a la salida
          let iniciales = "";
          iniciales = visualizarInicial(arrayNombreCompleto[1], iniciales);
          iniciales = visualizarInicial(arrayNombreCompleto[0], iniciales);
          salida += iniciales + "\n";
          // Encriptamos el nombre y los apellidos y los mostramos a la salida en el formato correcto
          let encriptado1 = encriptarTexto(arrayNombreCompleto[0]);
          let encriptado2 = encriptarTexto(arrayNombreCompleto[1]);
          let encriptadoFinal = encriptado1 + " " + encriptado2;
          salida += encriptadoFinal + "\n";
          iniciales = iniciales.replace(".", "");
          // Chequeamos si sus iniciales forman un nombre palíndromo y mostramos el resultado a la salida
          if (palindromo(iniciales)) {
            salida += "Sí\n";
          } else {
            salida += "No\n";
          }
        } else {
          error = 3;
        }
      } else {
        error = 2;
      }
    } else {
      if (arrayNombreCompleto.length > 2) {
        error = 1;
      } else {
        error = 4;
      }
    }
  } else {
    error = 0;
  }
} else {
  error = 4;
}
// Si existe algún error se muestra por pantalla, y si no, se muestra el resultado por pantalla
if (error != null) {
  window.alert(errores[error]);
} else {
  window.alert(salida);
}
