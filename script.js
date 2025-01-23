const images = [
    "img/image3.png",
    "img/image2.png",
    "img/image1.png",
    "img/image4.png"
];

let currentIndex = 0;

function changeBackground() {
    const section = document.querySelector('.awal');
    section.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // Loop kembali ke awal
}

setInterval(changeBackground, 3000);

// Inisialisasi gambar pertama
changeBackground();

