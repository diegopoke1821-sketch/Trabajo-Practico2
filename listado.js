// 1. Arreglo de objetos con datos
const inventario = [
    { nombre: "Manzana", categoria: "fruta" },
    { nombre: "Silla", categoria: "mueble" },
    { nombre: "Banana", categoria: "fruta" },
    { nombre: "Mesa", categoria: "mueble" },
    { nombre: "Naranja", categoria: "fruta" },
    { nombre: "Lámpara", categoria: "mueble" }
];

// 2. Referencias a elementos del DOM
const contenedor = document.getElementById("contenedor-lista");

// Botones para filtrar
const btnTodos = document.getElementById("btn-todos");
const btnFrutas = document.getElementById("btn-frutas");

// 3. Función para mostrar los datos en pantalla
function mostrarEnPantalla(arreglo) {
    contenedor.innerHTML = ""; 
    
    arreglo.forEach(item => {
        const bloque = document.createElement("div");
        bloque.classList.add("bloque-item"); 
        
        bloque.innerHTML = "<strong>" + item.nombre + "</strong><br />Categoría: " + item.categoria;
        
        contenedor.appendChild(bloque);
    });
}

// 4. Mostrar todos los items al cargar la página
mostrarEnPantalla(inventario);

// 5. Agregar eventos a los botones para filtrar los datos
btnTodos.addEventListener("click", () => {
    mostrarEnPantalla(inventario);
});

btnFrutas.addEventListener("click", () => {
    const soloFrutas = inventario.filter(item => item.categoria === "fruta");
    
    mostrarEnPantalla(soloFrutas);
}); 