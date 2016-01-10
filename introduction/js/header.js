$(document).ready(function(){
	var topScroll = $(document).scrollTop(),
		topHeight=$("#header").outerHeight(),
		topPadding=parseInt($("#header").css("padding-top"));
	$(document).scroll( function() {
		topScroll = $(document).scrollTop();
		toFixed();
	});

	function toFixed(){
		if (topScroll >= topPadding){
			$("#header").css({"position": "fixed", "padding": "15px 0"}).addClass('fixed');
			$("#header").next().css("margin-top", topHeight+"px");
		}else{
			$("#header").css({"position": "relative","padding": "30px 0"}).removeClass('fixed');
			$("#header").next().css("margin-top", "0px");
		}
	}
	$(".nav li a").bind('click', function(event) {
		$('html, body').stop().animate({'scrollTop': $($(this).attr('href')).offset().top-119}, 600);
		event.preventDefault();
	});
});