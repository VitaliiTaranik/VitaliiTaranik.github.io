//@prepros-append js-start.js
//@prepros-append script.js
//@prepros-append js-end.js
// alert("Привет"),alert("mir");

$('.nav__link-user , .nav__burger-user').click(function(){
    $('.header__form').slideToggle();
});

// $('.header__burger__btn').click(function(){
//     $('.header__burger_menu').slideToggle();
// });

$(document).ready(function(){
	$('.header__burger__btn').click(function(){
		$('.header__burger__btn').toggleClass('active')
		$('.header__burger_menu').slideToggle()
	})
})