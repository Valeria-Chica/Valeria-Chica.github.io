document.addEventListener("DOMContentLoaded", function() {
    // Array de imágenes (confirmar las rutas de las imágenes)
    const imagesArray = [
        'imagenes/carrusel.webp',
        'imagenes/carrusel1.webp',
        'imagenes/carrusel2.jpg',
        'imagenes/carrusel4.jpg',
        'imagenes/carrusel10.jpg',
        'imagenes/carrusel11.jpg',
        'imagenes/carrusel2.jpg',
        'imagenes/carrusel13.webp'
    ];

    // Selección de los elementos HTML
    const carruselContent = document.querySelector(".carrusel-content");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Contador de la imagen actual
    let currentIndex = 0;

    // Función para renderizar las imágenes en el carrusel
    function renderCarousel() {
        // Usamos translateX para mover el contenedor
        carruselContent.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Debugging: Verificar el estado del carrusel y el índice actual
        console.log("Renderizando carrusel. Índice actual:", currentIndex);
    }

    // Función para ir a la imagen anterior
    prevBtn.addEventListener("click", () => {
        // Actualiza el índice para ir a la imagen anterior (navegación circular)
        currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
        renderCarousel(); // Actualiza el carrusel
    });

    // Función para ir a la imagen siguiente
    nextBtn.addEventListener("click", () => {
        // Actualiza el índice para ir a la siguiente imagen (navegación circular)
        currentIndex = (currentIndex + 1) % imagesArray.length;
        renderCarousel(); // Actualiza el carrusel
    });

    // Inicializa el carrusel
    renderCarousel();
});