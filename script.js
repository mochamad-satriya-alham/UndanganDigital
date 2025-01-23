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

const targetDate = new Date('February 2, 2025 00:00:00').getTime();

// Update countdown every second
const countdownInterval = setInterval(() => {
const now = new Date().getTime();
const timeLeft = targetDate - now;

if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent =
        `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
} else {
    document.getElementById('countdown').textContent = '00:00:00:00';
    clearInterval(countdownInterval);
}
}, 1000);