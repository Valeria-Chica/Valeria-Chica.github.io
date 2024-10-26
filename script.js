let index = 0;

        function cambiarImagen(direction) {
            const carruselContenido = document.getElementById("carrusel-contenido");
            const totalImages = carruselContenido.children.length;
            index = (index + direction + totalImages) % totalImages;
            carruselContenido.style.transform = `translateX(${-index * 600}px)`; // Ajusta a 600px
        }
