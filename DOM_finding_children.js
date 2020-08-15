var p = document.getElementsByTagName("p");
console.log(p);
var contents = p[2].innerHTML;
console.log(contents);
// 
var div0 = document.getElementById("ny");
var p1 = div0.getElementsByTagName("p");
var contents1 = p1[0].innerHTML;
console.log(div0);
console.log(p1);
console.log(contents1);
// 
var d2 = document.getElementById("cal");
console.log(d2);
var p2 = d2.childNodes[5];
console.log(d2);
var contents2 = p2.innerHTML;
console.log(contents2);
// 
var a = 4;
var d = document.getElementById("ny");
var nType = d.childNodes[a].nodeType;
var nName = d.childNodes[a].nodeName;
var nValue = d.childNodes[a].nodeValue;
console.log(nType);
console.log(nName);
console.log(nValue);
console.log(nName.innerHTML);
console.log(nType.innerHTML);
console.log(nValue.innerHTML);
// 
// var p3 = document.childNodes[1].childNodes[1].childNodes[1].childNodes[3];
// var contents = p3.innerHTML;
