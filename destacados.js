// 1. Arreglo de objetos con datos
const tarjetas = document.querySelectorAll(".tarjeta");

// 2. Referencia al contador
const contador = document.getElementById("contador");

// 3. Agregar evento de click a cada tarjeta para alternar la clase "seleccionada" y actualizar el contador
tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {

        tarjeta.classList.toggle("seleccionada");

        const tarjetasElegidas = document.querySelectorAll(".tarjeta.seleccionada").length;

        contador.textContent = tarjetasElegidas;
    });
});