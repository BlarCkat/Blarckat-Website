// Side Navigation
const sideNav = document.getElementById('sideNav');
const navOverlay = document.getElementById('nav-overlay');

function openNav(){
    // show navbar, make it fit 50% of the screen width, and make the overlay fit 100%, 
    // Responsiveness
    sideNav.style.visibility = 'visible';
    navOverlay.style.width = '100vw';
    sideNav.style.width = '100vw';
    
    if (window.innerWidth < 400) {
        sideNav.style.width = '100vw';
    }
    else if (window.innerWidth < 900) {
        
        sideNav.style.width = '80vw';
    }
    else{
        sideNav.style.width = '50vw';
    }
    
    
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
let current = 0;
let target = 0;
let ease = 0.05;

let smoothScrollAnimation = document.querySelector('.smoothScroll');

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

function setupScrollAnim() {
    windowWidth = window.innerWidth;
    pageHeight = smoothScrollAnimation.getBoundingClientRect().height;

    document.body.style.height = `${pageHeight}px`;
    smoothScroll();
}

function setTransform(el, transform) {
    el.style.transform = transform;
}

function smoothScroll() {
    current = lerp(current, target, ease);
    current = parseFloat(current.toFixed(2));
    target = window.scrollY

    setTransform(smoothScrollAnimation, `translateY(${-current}px)`);
    requestAnimationFrame(smoothScroll);
}

setupScrollAnim()

