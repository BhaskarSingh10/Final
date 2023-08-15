// retro-radio.js

// Handle audio playback
const radio = document.getElementById('retroRadio');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');

playButton.addEventListener('click', () => {
    radio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
});

pauseButton.addEventListener('click', () => {
    radio.pause();
    pauseButton.style.display = 'none';
    playButton.style.display = 'block';
});

// Navigation menu toggle
const menuButton = document.getElementById('menuButton');
const navigation = document.getElementById('navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
});

// Smooth scroll to sections
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animations
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Other functionalities can be added here based on your website's requirements
