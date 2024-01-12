

$(document).ready(function(){

$(window).load(function() {
    $('.preloader').fadeOut('slow');
    $('body').css({'overflow':'visible'});
});

 var top_search = $(".search_container").offset().top;

$(window).on("scroll", function(){
  if($(window).scrollTop() >= top_search){
    $(".search_container").addClass("fixed_position");
  }else{
    $(".search_container").removeClass("fixed_position");
  }});

$('.carousel.carousel-slider').carousel({full_width: true});
$('.carousel').carousel();





});
