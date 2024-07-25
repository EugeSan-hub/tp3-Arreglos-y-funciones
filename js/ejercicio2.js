// Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo,
// cuando el usuario selecciona cancelar se debe mostrar el arreglo generado,
// luego realizar las siguientes acciones:

 

// NO SE COMO HACER PARA ALMACENAR LO QUE INGRESO EN EL PROMPT EN EL ARRAY. ASI QUE AGREGUE LAS CIUDADES MANUALMENTE. 
// QUIERO SABER SI CON ESTA FUNCION SE PUEDE 
/* function agregarCiudades() {
    const ciudadesUsuario = prompt("Ingrese nombres de ciudades");}
const ciudades = [];*/ 
// NO SE COMO SEGUIR AHI 


const ciudadesUsuario = prompt("Ingrese nombre de ciudades:");
const ciudades = ['Nueva York, Estados Unidos', 'Barcelona, España', 'Tokio, Japón', 'Londres, Reino Unido', 'Roma, Italia', 'Pekín, China', 'Río de Janeiro, Brasil', 'Ámsterdam, Países Bajos', 'Sídney, Australia', 'El Cairo, Egipto']
document.write(`<h2> El arreglo de ciudades tiene ${ciudades.length} elementos</h2>`
);
document.write(`<ul>`);
for (let i = 0; i < ciudades.length; i++) {
  document.write(`<li>${ciudades[i]} </li>`);
}
document.write(`</ul>`);
document.write(`<p>  Elemento 1er posición: ${ciudades[0]} </p>`);
document.write(`<p>  Elemento 3er posición: ${ciudades[2]} </p>`);
document.write(`<p> Elemento última posición: ${ciudades[ciudades.length - 1]}</p>`);
ciudades.push("Paris");
document.write(`<p>Elemento añadido: París</p>`);
ciudades[2] = "Barcelona";