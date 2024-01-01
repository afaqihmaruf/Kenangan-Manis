//Toggle Class Active
const navbarnav = document.querySelector('.navbar-nav');

// Ketika Menu Di Click
document.querySelector('#hamburger-menu').onclick = () => {
  navbarnav.classList.toggle('active');
};

// klik sidebarr untuk menghilangkan navbar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove('active');
  }
})