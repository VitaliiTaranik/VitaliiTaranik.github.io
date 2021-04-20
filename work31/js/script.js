function setCursorPosition(pos, e) {
   e.focus();
   if (e.setSelectionRange) e.setSelectionRange(pos, pos);
   else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
   }
}

/*function mask(e) {
   //console.log('mask',e);
   var matrix = this.placeholder,// .defaultValue
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
   def.length >= val.length && (val = def);
   matrix = matrix.replace(/[_\d]/g, function (a) {
      return val.charAt(i++) || "_"
   });
   this.value = matrix;
   i = matrix.lastIndexOf(val.substr(-1));
   i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
   setCursorPosition(i, this)
}
window.addEventListener("DOMContentLoaded", function () {
   var input = document.querySelector("#online_phone");
   input.addEventListener("input", mask, false);
   input.focus(false);
   setCursorPosition(3, input);
});*/

var accordion = function () {
   var data = $(".accordion").attr("data-accordion");

   $(".accordion-header").on("click", function () {
      if (data === "close") {
         $(".accordion-body").slideUp();
         if ($(this).hasClass("active")) {
            $(this).toggleClass("active");
         }
         else {
            $(".accordion-header").removeClass("active");
            $(this).toggleClass("active");
         }
      }
      else {
         $(this).toggleClass("active");
      }
      $(this).next(".accordion-body").not(":animated").slideToggle();
   });
}

accordion()

$('.menu__mobile-btn').click(function () {
   $('.menu__inner').slideToggle();
});

$(document).ready(function () {
   $('.menu__mobile-btn').click(function () {
      $('.menu__mobile-btn').toggleClass('active')
   })
})

$('.slider').slick({
   fade: true,
   speed: 500,
   autoplaySpeed: 4000,
   arrows: false,
   dots: true,
   infinite: true,
   slidesToShow: 1,
   adaptiveHeight: true,
   autoplay: true,
});
