
$(document).ready(function(){

var sectionMenu = document.getElementById('sectionMenu');
var headroom = new Headroom(sectionMenu);
headroom.init();


/*En esta parte se encuentran algunas llamadas
para poder ejecutar algunos efectos BASICOS*/
$('.carousel.carousel_shower').carousel({'dist' : '100'});
$('.carousel.carousel-slider').carousel({fullWidth: true});
$('.carousel.carousel-slider').carousel({'dist' : '0'});


$('.slider').slider();

   $('ul.tabs').tabs();
   $('#tabs-swipe-demo').tabs({ 'swipeable': true });

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

//SLIDER DE PRODUCTOS

$(function() {
  var slider = $('.container > div');
  
  $('.content').click(function() {
    var left = -$(this).position().left;
    left -= $(this).outerWidth() / 2;
    left += $('.container').width() / 2;
    
    slider.css('left', left + 'px');
  });
});