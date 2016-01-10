$(function() {
	var
		offsetArray = []
	,	offsetValueArray = []
	,	currHash = ''
	,	isAnim = false
	,	isHomePage = $('body').hasClass('home')? true:false
	;
	
	//--------------------------- Menu navigation ---------------------------
	

	
	//offsetListener(200px, true);
	function offsetListener(scrollTopValue, anim){
		if(isHomePage){  //isHomePage = $('body').hasClass('home')? true:false;
	
			scrolledValue = scrollTopValue;  //scrolledValue=200px
			var nearIndex = 0;

			nearIndex = findNearIndex(offsetValueArray, scrolledValue)
			currHash = offsetArray[nearIndex].hashVal;

			if(window.location.hash != currHash){
				if(anim){
					isAnim = true;
					$('html, body').stop().animate({'scrollTop':scrolledValue}, 600, function(){
						isAnim = false;
						window.location.hash = currHash;
						$('html, body').stop().animate({'scrollTop':scrolledValue},0);
						return false;
					});
				}else{
					window.location.hash = currHash;
					$('html, body').stop().animate({'scrollTop':scrolledValue},0);
					return false;
				}
			}
		}
	}

	function findNearIndex(array, targetNumber){
		var
			currDelta
		,	nearDelta
		,	nearIndex = -1
		,	i = array.length
		;

		while (i--){
			currDelta = Math.abs( targetNumber - array[i] );
			if( nearIndex < 0 || currDelta < nearDelta )
				{
					nearIndex = i;
					nearDelta = currDelta;
				}
		}
		return nearIndex;
	}
	
	$('#topnav > li a[href^="#"]').on('click',function (e) {  //以#开头的href
		e.preventDefault();  //阻止元素发生默认的行为，防止a标签打开url

		var target = this.hash,  //this.hash：获取当前链接的标签值
		$target = $(target);
        
		offsetListener($target.offset().top, true);   //$target.offset().top section相对于文档偏移的top  如200px
        //offsetListener(200px, true);
        if(window.location.hash == currHash){
            $('html, body').stop().animate({'scrollTop':$target.offset().top},600); 
        }

		return false;
	});
	

}) 
