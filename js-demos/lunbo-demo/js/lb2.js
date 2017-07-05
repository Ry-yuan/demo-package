// 图片容器
var container = document.getElementById("md-container");
// 图片组
var pics = container.getElementsByTagName("img");
// 获取左右箭头
var arrowLeft = document.getElementById("arrowLeft");
var arrowRight = document.getElementById("arrowRight");
// 绑定点击函数
var index = 0;
arrowLeft.addEventListener("click",function(){
	index--;
	changeImage();
},false);
arrowRight.addEventListener("click",function(){
	index++;
	changeImage();
},false)

// 设定定时器
var Interval = setInterval("arrowRight.click()",3000);
container.onmouseover = function(){
	clearInterval(Interval);
}
container.onmouseout = function(){
	Interval = setInterval("arrowRight.click()",3000);
}
// 切换图片函数
function changeImage(){
	if(index>pics.length-1){
		index=0;
	}
	if(index<0){
		index=pics.length-1;
	}
	var i=0;
	for(i=0;i<pics.length;i++){
		pics[i].style.opacity="0";
	}
	pics[index].style.opacity="1";
}

// 关键点：使用opacity来实现隐藏和显示的效果，通过配合使用css3中的transition的过渡效果来达到渐变