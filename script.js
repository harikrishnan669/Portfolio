const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('hidden');
});

// Add event listener to document to close the menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('hidden');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.readMoreBtn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const moreContent = this.nextElementSibling;
            moreContent.style.display = moreContent.style.display === 'none' ? 'block' : 'none';

            this.textContent = moreContent.style.display === 'none' ? 'Read More' : 'Read Less';
        });
    });
});
const words = ['Computer Science Undergraduate', 'A Graphic Designer', 'Web Development', 'UI/UX Designing'];
let wordIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById('typed-text');
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    const displayedText = currentWord.substring(0, charIndex);
    typingElement.textContent = displayedText;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, 1000);
    }
}

document.addEventListener('DOMContentLoaded', type);
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Add 'active' to the clicked link
        link.classList.add('active');
    });
});
const closeIcon = document.getElementById("close-icon");

menuIcon.addEventListener("click", () => {
    navbar.classList.add("active");
    menuIcon.style.display = "none"; // Hide menu icon
});

closeIcon.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.style.display = "block"; // Show menu icon again
});