// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

function calcularPerimetro(ladoA, ladoB) {
    return 2 * (ladoA + ladoB);
}

const ladoA = parseInt(prompt("Ingrese el valor del lado A del rectángulo:"));
const ladoB = parseInt(prompt("Ingrese el valor del lado B del rectángulo:"));

if (!isNaN(ladoA) && !isNaN(ladoB)) {
    const perimetro = calcularPerimetro(ladoA, ladoB);
    document.write(`El perímetro del rectángulo con lados A = ${ladoA} y B = ${ladoB} es: ${perimetro}`);
} else {
    document.write("Por favor, ingrese valores numéricos válidos para ambos lados del rectángulo.");
}