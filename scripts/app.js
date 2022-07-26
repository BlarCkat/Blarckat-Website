


// Side Navigation
const sideNav = document.getElementById('sideNav');
const navOverlay = document.getElementById('nav-overlay');

function openNav(){
    sideNav.style.visibility = 'visible';
    sideNav.style.width = '50vw';
    navOverlay.style.width = '100vw';
    console.log(navOverlay.style.width)
}
function closeNav(){
    sideNav.style.visibility = 'hidden';
    sideNav.style.width = '0';
    navOverlay.style.width = '0';

    console.log(navOverlay.style.width)
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