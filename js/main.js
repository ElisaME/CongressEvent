 $(document).ready(function(){
	$(window).scroll(function() {
		if ($(document).scrollTop() > 50){ 
			$("nav").addClass("secondBG");
		} else {
			$("nav").removeClass("secondBG");
		}
	});

});