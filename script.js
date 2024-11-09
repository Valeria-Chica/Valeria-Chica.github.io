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











document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario de manera tradicional

    // Limpiar mensajes de error previos
    document.querySelectorAll('.error-message').forEach(function (errorElem) {
        errorElem.textContent = '';
    });

    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    let isValid = true;

    // Validación del nombre (debe ser al menos 2 caracteres)
    if (nombre.length < 2 || nombre.length > 50) {
        document.getElementById('error-nombre').textContent = 'El nombre debe tener entre 2 y 50 caracteres.';
        isValid = false;
    }

    // Validación del email usando expresión regular
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('error-email').textContent = 'Por favor, ingrese un correo electrónico válido.';
        isValid = false;
    }

    // Validación del teléfono (debe ser un número de 9 dígitos)
    const telefonoPattern = /^\d{9}$/;
    if (!telefonoPattern.test(telefono)) {
        document.getElementById('error-telefono').textContent = 'El teléfono debe tener 9 dígitos.';
        isValid = false;
    }

    // Si los datos son válidos, mostrar los datos enviados
    if (isValid) {
        // Crear el mensaje con los datos enviados
        const result = document.getElementById('result');
        result.innerHTML = ''; // Limpiar contenido previo

        const mensaje = document.createElement('p');
        mensaje.innerHTML = `<strong>Datos enviados correctamente:</strong><br>
                             <strong>Nombre:</strong> ${nombre}<br>
                             <strong>Email:</strong> ${email}<br>
                             <strong>Teléfono:</strong> ${telefono}`;
        result.appendChild(mensaje);
    }
});