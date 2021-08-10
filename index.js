// ============= nav hamburger ================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".navbar-item");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// ============== nav ================

const navbar = document.querySelector('nav');
let img = document.querySelector('.nav-img');
window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add('sticky');
        img.src = "img/bee.jpg";
        img.style.visibility = 'visible';
    } else {
        navbar.classList.remove('sticky');
        img.style.visibility = 'hidden';
    }
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 20) {
//         return document.querySelector('nav').classList.add('sticky')
//     }
//     return document.querySelector('nav').classList.remove('sticky')

// });

// ============== cover text =================

let i = 0;
let txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus esse corrupti culpa voluptatum debitis, incidunt facilis exercitationem tempore amet nam vero error quos dolor, voluptas, reprehenderit alias cupiditate doloremque perferendis.';
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.querySelector('.cover-text').textContent += txt.charAt(i);
        document.querySelector('.cover-text').style.fontSize = '36px';
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

// ================= Poga uz augšu ==============

let mybutton = document.getElementById("myBtn");
let rootElement = document.documentElement;
function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

mybutton.addEventListener("click", scrollToTop)