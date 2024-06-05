document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for registering!');
});

const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('mouseover', () => {
    mobileMenu.classList.add('block');
});

mobileMenuToggle.addEventListener('mouseout', () => {
    mobileMenu.classList.remove('block');
});

