
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
  
