// 图片容器
var container = document.getElementById("md-container");
// 图片组
var pics = container.getElementsByTagName("img");
// 获取左右箭头
var arrowLeft = document.getElementById("arrowLeft");
var arrowRight = document.getElementById("arrowRight");
// 绑定点击函数
var index = 0;
var pointBox = document.getElementById("point-box");
var points = pointBox.getElementsByTagName("li");
// 左右箭头添加事件
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
	// 清除定时器
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
	for(var i=0;i<pics.length;i++){
		pics[i].style.opacity="0";
		points[i].style.backgroundColor="#ccc";
	}
	pics[index].style.opacity="1";
	points[index].style.backgroundColor="#f58220"
}
// 为每一个下标原点添加点击事件，跳转到对应的图片
for(var k = 0 ; k<points.length ; k++){
	points[k].index = k;
	points[k].onclick = function(){
		index = this.index;
		changeImage();
	}
}
// 关键点：使用opacity来实现隐藏和显示的效果，通过配合使用css3中的transition的过渡效果来达到渐变