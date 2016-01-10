/**
 * 专业技能 环形进度条
 */
$(document).ready(function(){
	$(".process").each(function(){
		var text=$.trim($(this).text());

		var bg=this;
		var ctx = bg.getContext('2d');
		var imd = null;
		
		ctx.strokeStyle = '#ffce54';
		ctx.lineCap = 'square'; 
        ctx.lineWidth = 10.0;

        //画一个灰色的圆
        ctx.beginPath();
        ctx.arc(75, 75, 75, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fillStyle = '#ddd'; 
        ctx.fill();

        //画内部白色的圆
        ctx.beginPath();
        ctx.arc(75, 75, 65, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fillStyle = '#fff'; 
        ctx.fill();

		imd = ctx.getImageData(0, 0, 220, 220);
		function draw(current){
			ctx.putImageData(imd, 0, 0);
			ctx.beginPath();
			ctx.arc(75, 75, 70, -Math.PI / 2, (Math.PI * 2 * current) - Math.PI / 2, false);
			ctx.stroke();
		}

		var t=0;
		var timer=null;
		function loadCanvas(now){
			timer = setInterval(function(){
				if(t>now){
					clearInterval(timer);
				}else{
					draw(t);
					t+=0.01;
				}
			},20);
		}
		loadCanvas(text);
		timer=null;
	});
});