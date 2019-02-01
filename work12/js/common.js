$(document).ready(function() {
	 $('a[href^="#"]').click(function () { 
		 elementClick = $(this).attr("href");
		 destination = $(elementClick).offset().top;
		 if($.browser.safari){
			 $('body').animate( { scrollTop: destination }, 3000 );
		 }else{
			 $('html').animate( { scrollTop: destination }, 3000 );
		 }
		 return false;
	 });
 });

$(function () {
		var filterList = {
			init: function () {
				$('#portfoliolist').mixItUp({
				selectors: {
				  target: '.portfolio',
				  filter: '.filter'	
			  },
			  load: {
			  filter: '.app'  
			}     
				});								
			}
		};
		filterList.init();
	});	
