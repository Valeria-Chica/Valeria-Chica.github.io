let index = 0;

function cambiarImagen(direccion) {
    const images = document.querySelectorAll('.carrusel-contenido img');
    index = (index + direccion + images.length) % images.length;
    const offset = -index * 100; // Desplazamiento en porcentaje
    document.querySelector('.carrusel-contenido').style.transform = `translateX(${offset}%)`;
}