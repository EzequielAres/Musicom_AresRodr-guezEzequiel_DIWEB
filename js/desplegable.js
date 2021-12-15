function abrir() {
    let elemento = document.getElementById("sidebar");
    elemento.style.display = "initial";

    let elemento2 = document.getElementById("contenedor__fondo");
    elemento2.style.display = "initial";
}

function cerrar() {
    let elemento = document.getElementById("sidebar");
    elemento.style.display = "none";

    let elemento2 = document.getElementById("contenedor__fondo");
    elemento2.style.display = "none";
}