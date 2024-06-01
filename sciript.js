let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active'); 
                document.querySelector('header nav ul li a[href="#' + id + '"]').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => { // Changed oneClick to onclick
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
