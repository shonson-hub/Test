// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
document.addEventListener('DOMContentLoaded', () => {

	
	const burger = document.querySelector('.nav__burger');
	const navMobile = document.querySelector('.nav-mobile');

	burger.addEventListener('click', () => {
		navMobile.classList.toggle('active');
		burger.classList.toggle('active');
	});

	// init Swiper:

	var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
	});
	swiper	

})



