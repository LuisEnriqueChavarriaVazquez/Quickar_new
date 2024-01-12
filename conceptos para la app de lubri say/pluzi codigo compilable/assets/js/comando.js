
$(document).ready(function(){

var sectionMenu = document.getElementById('sectionMenu');
var headroom = new Headroom(sectionMenu);
headroom.init();


/*En esta parte se encuentran algunas llamadas
para poder ejecutar algunos efectos BASICOS*/
$('.carousel.carousel-slider').carousel({full_width: true});
$('.carousel').carousel();
$('.slider').slider();
$(".button-collapse").sideNav();
 $('.materialboxed').materialbox();
 $('.parallax').parallax();

$('input#input_text').characterCounter();

$('.modal').modal();

});


document.addEventListener("DOMContentLoaded", function(){
	$('.preloader').delay(2000).fadeOut('slow');

	$('.preloader')
		.delay(5000)
		.fadeOut();
});
