const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const location0 = () => {
    location.href = '#about-us' 
};

const location1 = () => {
    location.href = '/about-us.html' 
};

const location2 = () => {
    location.href = '/anime.html' 
};

const location3 = () => {
    location.href = '/join-us.html' 
    console.log('test')
};

const location4 = () => {
    location.href = '/main.html' 
};

console.log(window.location.pathname)
if (window.location.pathname == "/main.html") {
    const button0 = document.getElementsByClassName('main_btn') [0];
    const button1 = document.getElementsByClassName('main_btn') [1];
    const button2 = document.getElementsByClassName('main_btn') [2];
    const button3 = document.getElementsByClassName('main_btn') [3];

    button0.addEventListener('click', location0);
    button1.addEventListener('click', location1);
    button2.addEventListener('click', location2);
    button3.addEventListener('click', location3);
    console.log('test')
};

if (window.location.pathname == "/join-us.html") {
    const button4 = document.getElementsByClassName('submitbtn') [0];
    const button5 = document.getElementsByClassName('cancelbtn') [0];

    button4.addEventListener('click', location3);
    button5.addEventListener('click', location4);
};
