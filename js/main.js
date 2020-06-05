const menuBtn =document.querySelector(".m-menu");
const menu = document.querySelector('.menu-saidbar')

menuBtn.addEventListener('click', function () {
   menu.classList.toggle('active');
});