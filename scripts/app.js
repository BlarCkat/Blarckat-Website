// Side Navigation
const sideNav = document.getElementById('sideNav');
const navOverlay = document.getElementById('nav-overlay');

function openNav(){
    // show navbar, make it fit 50% of the screen width, and make the overlay fit 100%, 
    sideNav.style.visibility = 'visible';
    sideNav.style.width = '50vw';
    navOverlay.style.width = '100vw';
}
function closeNav(){
    // hide side navigation, reset everything to 0.
    sideNav.style.visibility = 'hidden';
    sideNav.style.width = '0';
    navOverlay.style.width = '0';
}
// ///////////////////////////////////////////////////

// Light and Dark Mode
let darkMode = localStorage.getItem('darkMode');
let lightMode = localStorage.getItem('lightMode');
const darkModeToggle = document.querySelector('#themeToggle');

const enableDarkMode = ()=>{
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    localStorage.setItem('darkMode', 'enabled');
    localStorage.setItem('lightMode', 'disabled');
}

const enableLightMode = ()=>{
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    localStorage.setItem('lightMode', 'enabled');
    localStorage.setItem('darkMode', 'disabled');
}

if (darkMode === 'enabled') {
    enableDarkMode();
} else{
    enableLightMode();
}

// When theme button is clicked
darkModeToggle.addEventListener('click', ()=> {
    darkMode = localStorage.getItem('darkMode');
    lightMode = localStorage.getItem('lightMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        enableLightMode();
    }
})


// Smooth Scrolling
// let current = 0;
// let target = 0;
// let ease = 0.15;

// let windowWidth;
// let containerHeight;
// let imageHeight;
// let skewDifference;

// let smoothScrollContainer = document.querySelector('.smoothScroll');

// function lerp(animationStart, animationEnd, t) {
//     return animationStart * (1 - t) + animationEnd * t;
// }

// function setTransform(el, transform) {
//     el.style.transform = transform;
// }

// function setupSmoothScroll() {
//     windowWidth =  window.innerWidth;
//     containerHeight =  smoothScrollContainer.getBoundingClientRect().height;
//     document.body.style.height = `${containerHeight}px`;
// }

// function smoothScrollAnimation() {
//     current = lerp(current, target, ease);
//     current = parseFloat(current.toFixed(2));
//     target = window.scrollY

//     setTransform(smoothScrollContainer, `translateY(${-current}px)`);
//     requestAnimationFrame(smoothScrollAnimation);
// }

// setupSmoothScroll()