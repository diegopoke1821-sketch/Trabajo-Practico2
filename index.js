// 1. Array de meriendas
const meriendas = ["Café con criollitos", "Café con medialunas", "Té con tostadas", "Chocolatada con brownies", "Jugo con galletitas"];

// 2. Referencias a elementos del DOM
const contenedor = document.getElementById("contenedor-meriendas");
// Botón para contar las meriendas
const botonContar = document.getElementById("btn-contar");
// Elemento para mostrar el resultado del conteo
const resultado = document.getElementById("resultado-conteo");

// 3. Mostrar las meriendas en pantalla creando un bloque para cada una
meriendas.forEach(merienda => {

    const caja = document.createElement("div"); 
    caja.textContent = merienda;
    
    caja.classList.add("merienda-item"); 
    
    contenedor.appendChild(caja);
});

// 4. Agregar evento al botón para contar las meriendas y mostrar el resultado
botonContar.addEventListener("click", () => {
    resultado.textContent = "Cantidad total de meriendas: " + meriendas.length;
});