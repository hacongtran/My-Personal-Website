const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// scroll function
window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('.navbar').classList.add('sticky');
    } else {
        $('.navbar').classList.remove('sticky');
    }
}

// Toggle navbar menu
const menuBtns = document.querySelectorAll('.menu-btn');
const navbarMenu = document.querySelector('.navbar__menu');

function togglemenubar(){
    navbarMenu.classList.toggle('active')
    $('.menu-btn i').classList.toggle('active')
}

for (menuBtn of menuBtns){
    menuBtn.addEventListener('click', togglemenubar )
}

// Typing animation
// typing animation use Jquery
var typed = new Typed(".typing",{
    strings: ['Front-end developer','Fresher','Beginner'],
    typeSpeed: 100,
    backSpeed:80,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["Front-end Developer","Beginner"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
});
