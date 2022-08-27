const navToggle = document.getElementById('nav-toggle'),
  navMenu = document.getElementById('nav-list');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});
