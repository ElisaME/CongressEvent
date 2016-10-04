 $(document).ready(function(){
	$(window).scroll(function() {
		if ($(document).scrollTop() > 50){ 
			$("nav").addClass("secondBG");
			$('.logo').hide()
		} else {
			$("nav").removeClass("secondBG");
			$('.logo').show()
		}
	});

});