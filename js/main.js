const hamburger = document.querySelector('.hamburger-navigation');
const menu = document.querySelector('.navigation-menu');
const overlay = document.querySelector('.blur-overlay');

const unfoldMenu = () => {
    menu.classList.toggle('unfolded');
    // overlay.classList.toggle('active');
};

hamburger.addEventListener('click', unfoldMenu);  