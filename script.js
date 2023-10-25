const menuActive = document.querySelector('.menu-active'); 
const burgerBtN = document.querySelector('.btnMenu');

function toggleMenu() {
	menuActive.classList.toggle('hidden');
}

burgerBtN.addEventListener('click', toggleMenu); 
menuClose.addEventListener('click', toggleMenu); 