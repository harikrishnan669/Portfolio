
       document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
  
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
    document.addEventListener('click', (event) => {
      if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
        navbar.classList.remove('active');
      }
    });
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
  const words = ['Computer Science Undergraduate', 'Designer'];
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