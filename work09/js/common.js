$(document).ready(function(){
  $('.bxslider').bxSlider({
  	auto: true,
  	slideWidth:300,
  	slideHeight:300,
  	minSlides:1, 
  	maxSlides:3,
  	moveSlides:1,
  	 slideMargin: 40
  });
});

$(document).ready(function() {
$('a[href^="#"]').click(function () { 
		 elementClick = $(this).attr("href");
		 destination = $(elementClick).offset().top;
		 if($.browser.safari){
			 $('body').animate( { scrollTop: destination }, 2000 );
		 }else{
			 $('html').animate( { scrollTop: destination }, 2000 );
		 }
		 return false;
	 });
});

$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline", midClick: true});

$(window).scroll(function() {
    $('.mov_1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('zoomIn');
      }
    });
  });
	
$(window).scroll(function() {
    $('.mov_2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+1000) {
        $(this).addClass('zoomIn');
      }
    });
  });

$(window).scroll(function() {
    $('.mov_3').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass('flipInY');
      }
    });
  });

$(window).scroll(function() {
    $('.mov_4').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+100) {
        $(this).addClass('fadeUp');
      }
    });
  });