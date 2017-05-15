var arrowLeft = document.getElementById("arrowLeft");
var arrowRight = document.getElementById("arrowRight");
// move变量用于记录当前图片的位置，偏移量
var offset=0;
// alert(picLists);

function m(i){
	if(i=="i")alert("ok");
	
}
// onclick 与 addeventlistener区别
//addeventlisterner 中的fn传参数写法
// 为两个按钮添加事件
arrowLeft.addEventListener("click",function(arrowType){movePicture("arrowLeft")},false);
arrowRight.addEventListener("click",function(arrowType){movePicture("arrowRight")},false);
// 图片移动函数，参数箭头类型，用于分辨左右箭头
function movePicture(arrowType){
	var dp = document.getElementById("demo1Panel");
	var picLists = dp.getElementsByTagName("li");
	// 左箭头时执行
	if(arrowType == "arrowRight"){
		if(offset==(picLists.length-1)*-800){
			offset = 0;
		}
		else{
			offset -=800;	
		}
		// 通过改变ul框的left来实现移动
		dp.style.left=offset+"px";
	}
	// 右箭头时执行
	if(arrowType == "arrowLeft"){
		if(offset == 0){
			offset = (picLists.length-1)*-800;
		}
		else{
			offset +=800;
		}
		dp.style.left=offset+"px";
	}
}