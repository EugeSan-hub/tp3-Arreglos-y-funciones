// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
// la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 
// del número elegido por el usuario.

function tablaDeMultiplicar(numero) {
    document.write(`<h2>Tabla de multiplicar del ${numero}</h2>`);
    document.write('<ul>'); 
    for (let i = 1; i <= 10; i++) {
        document.write(`<li>${numero} x ${i} = ${numero * i}</li>`);
    }
    document.write('</ul>'); 
}

// Solicitar al usuario un número
const numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar del 1 al 10:"));

// Verificar que el input es un número válido
if (!isNaN(numero)) {
    tablaDeMultiplicar(numero);
} else {
    document.write("Por favor, ingrese un número válido.");
}