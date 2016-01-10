/*       navFixed       */
/*  author : Jasin Yip  */
/*  version: 1.0.2      */

$.fn.navFixed = function(){
	var $_this = $(this),
		_topPosition = $(document).scrollTop(),
		_topHeight=$_this.outerHeight(),
		_navPadding=parseInt($_this.css("padding-top"));
	$(document).scroll( function() {
		_topPosition = $(document).scrollTop();
		_if();
	});

	function _if(){
		if (_topPosition >= _navPadding){
			$_this.css({"position": "fixed", "padding": "15px 0"}).addClass('fixed');
			$_this.next().css("margin-top", _topHeight+"px");
		}else{
			$_this.css({"position": "relative","padding": "30px 0"}).removeClass('fixed');
			$_this.next().css("margin-top", "0px");
		}
	}
}