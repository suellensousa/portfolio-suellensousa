function toggleMenu() {
  var menu = document.getElementById('menu');
  var menuIcon = document.querySelector('.menu-icon');
  var closeIcon = document.querySelector('.close-icon');

  menu.classList.toggle('active');
  menuIcon.classList.toggle('active');
  closeIcon.classList.toggle('active');
}