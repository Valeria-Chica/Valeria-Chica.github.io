let Principal = document.getElementById('Cont-Princ');

imagenes = new Array();

const images = [
    'imag/a.jpg',
    'imag/B.jpg',
    'imag/C1.jpg',
    'imag/D.jpg',
    'imag/E.jpg',
    'imag/F.jpg',
    'imag/G.jpg',
    'imag/H.jpg',
];


let currentIndex = 0;
const carruselCont = document.getElementById('carruselCont');

// Función para mostrar la imagen actual
function showImage() {
    const translateX = -currentIndex * (100 / images.length);
    carruselCont.style.transform = `translateX(${translateX}%)`;
}

// Función para avanzar al siguiente índice
function next() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

// Función para retroceder al índice anterior
function previous() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

// Asignar eventos a los botones
document.getElementById('siguiente').addEventListener('click', next);
document.getElementById('anterior').addEventListener('click', previous);

// Mostrar la primera imagen al cargar
showImage();