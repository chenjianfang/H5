/*加载动画*/
function myLoad(){
	$(".load").hide();
}
document.documentElement.style.height = window.innerHeight + 'px';
$(".myclick").click(function(){
	$(".firstpart").hide();
	$(".question").show();
});
$(".que img").click(function(){
	$(this).parents(".que").hide();
	$(this).parents(".que").next().show();
});

$(".share").click(function(){
	fxcg();
});
/*计算得分*/
var number=0;
$(".check").click(function(){
	number+=10;
});

function fxcg(){
	$(".question").hide();
	if (number==110) {		
		$(".res").show();	/*90分以上显示的页面*/
		$(".mathnum").text(100);/*添加分数*/
	}
	if (number<110) {		
		$(".ref").show();    /*90分一下的页面*/
		if (number==100||number==90) {
			$(".minnum").text((number-10));/*添加分数*/
		}
		else{
			$(".minnum").text(number);/*添加分数*/
		}
	}
}