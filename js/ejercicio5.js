// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
// A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
// sólo por minúsculas o por una mezcla de ambas.

function verificarCadena(cadena) {
  if (cadena === cadena.toUpperCase()) {
    document.write(`"${cadena}" está formada solo por mayúsculas.`);
  } else if (cadena === cadena.toLowerCase()) {
    document.write(`"${cadena}" está formada solo por minúsculas.`);
  } else {
    document.write(
      `"${cadena}" está formada por una mezcla de mayúsculas y minúsculas.`
    );
  }
}
const cadenaUsuario = prompt("Ingrese una cadena de texto:");
verificarCadena(cadenaUsuario)
