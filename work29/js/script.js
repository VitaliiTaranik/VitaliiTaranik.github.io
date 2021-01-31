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

let btns = document.querySelectorAll("*[data-modal-btn]");

for (let i = 0; i < btns.length; i++) {
   btns[i].addEventListener('click', function () {
      let name = btns[i].getAttribute('data-modal-btn');
      let modal = document.querySelector("[data-modal-window='" + name + "']");
      modal.style.display = "block";
      let close = modal.querySelector(".close_modal_window");
      close.addEventListener('click', function () {
         modal.style.display = "none";
      })
   })
}

window.onclick = function (e) {
   if (e.target.hasAttribute('data-modal-window')) {
      let modals = document.querySelectorAll("*[data-modal-window]");
      for (let i = 0; i < modals.length; i++) {
         modals[i].style.display = "none";
      }
   }
}