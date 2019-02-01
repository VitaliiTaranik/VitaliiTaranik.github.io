$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

(function($) {  
$(function() {  
   
  $('#up').click(function() {  
    $('body,html').animate({scrollTop:0},500);  
    return false;  
  })  
   
})  
})(jQuery)  