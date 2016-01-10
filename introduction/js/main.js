$(document).ready(function(){
	$(window).scroll(function() {
		if($(this).scrollTop()>100){
			$("#back-top").fadeIn();
		}else {
			$("#back-top").fadeOut();
		}
	});
	$("#back-top span").click(function() {
		$("body").animate({scrollTop: 0}, 800);
	});
});