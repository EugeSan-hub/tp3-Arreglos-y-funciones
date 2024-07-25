// Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
//  como resultado una cadena de texto que indica si el número es par o impar. 
// Mostrar por pantalla el resultado devuelto por la función.

function paridad(numero) {
    if (numero % 2 === 0) {
        return document.write(`${numero} es par.`);
    } else {
        return document.write(`${numero} es impar.`);
    }
    

}
const usuario = parseInt(prompt("Ingrese un número entero:"));
paridad (usuario);
