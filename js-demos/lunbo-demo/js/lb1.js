// 获取左右两个箭头对象
var arrowLeft = document.getElementById("arrowLeft");
var arrowRight = document.getElementById("arrowRight");
// 获得图片容器对象
var container = document.getElementById("md-container");
// move变量用于记录当前图片的位置，偏移量
var offset=0;
// 为两个按钮添加click事件
var pointBox = document.getElementById("point-box");
var points = pointBox.getElementsByTagName("li");
var index = 0;
// console.log(points.length);
arrowLeft.addEventListener("click",function(arrowType){movePicture("arrowLeft")},false);
arrowRight.addEventListener("click",function(arrowType){movePicture("arrowRight")},false);

arrowLeft.addEventListener("click",function(){index--;movePoint()},false);
arrowRight.addEventListener("click",function(){index++;movePoint()},false);
// 定时器：setInterval()
var Interval = setInterval("arrowRight.click()",3000);
container.onmouseover = function(){
	clearInterval(Interval);
}
container.onmouseout = function(){
	Interval = setInterval("arrowRight.click()",3000);
}
// 图片移动函数，参数箭头类型，用于分辨左右箭头
function movePicture(arrowType){
	var dp = document.getElementById("demo1Panel");
	var picLists = dp.getElementsByTagName("li");
	// 左箭头时执行
	// 判断是否是最前一张
	if(arrowType == "arrowRight"){
		if(offset==(picLists.length-1)*-1000){
			offset = 0;
		}
		else{
			offset -=1000;	
		}
		
	}
	// 右箭头时执行
	// 判断是否到了最后一张
	if(arrowType == "arrowLeft"){
		if(offset == 0){
			offset = (picLists.length-1)*-1000;
		}
		else{
			offset +=1000;
		}
	}
	// 通过改变ul框的left来实现移动
	dp.style.left=offset+"px";
}
function movePoint(){
	if(index>points.length-1) index=0;
	else if(index<0) index = points.length-1;

	for(var i = 0 ; i<points.length;i++){
		points[i].style.backgroundColor = "#ccc";
	}
	points[index].style.backgroundColor = "#f58220";
}

/*本次收获：
on事件句柄 与 addeventlistener区别
addeventlisterner中的fn传参数写法
*/