const images = [
    './images/hood.jpg',
    './images/1060_2.jpg',
    './images/1060.jpg'
];

let slideIndex = 0;

function changeBackground() {
    const heroSection = document.querySelector('.hero');

    heroSection.style.backgroundImage = ` 
        url(${images[slideIndex]})
    `;
    slideIndex = (slideIndex + 1) % images.length; 
    setTimeout(changeBackground, 7000); 
}

changeBackground();