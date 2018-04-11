// var str="<div>"
// +"<div id='div1'>"
//     +"<div id='div1_1'>div1-1</div>"
//     +"<div id='div1_2'>div1-2</div>"
// +"</div>"
// +"<div id='div2'>"
//     +"<div id='div2_1'>div2-1</div>"
//     +"<div id='div2_2'>div2-2</div>"
// +"</div>";
// +"/div>";
// var parser = new DOMParser();
// var doc=parser.parseFromString(str, "text/xml");
// getElementById('div1').innerHTML = doc;
// console.log(doc);
// var li = document.createElement('li');
// console.log(li);
// console.log(doc);
// document.getElementById('div1').appendChild(li);
// alert(doc.getElementById('div1').innerHTML);

var div = document.getElementById('div1');
div.innerHTML='<li>sss</li>';