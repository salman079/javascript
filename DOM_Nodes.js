var nodeToAdd = document.createElement("p");
var imgNodeToAdd = document.createElement("img");
nodeToAdd.setAttribute("class", "regular");
imgNodeToAdd.setAttribute("border", "1");
var newTxt = document.createTextNode("Hello!");
nodeToAdd.appendChild(newTxt);
// 
var parentDiv = document.getElementById("div1");
var newParagraph = document.createElement("p");
var t = document.createTextNode("Hello world!");
newParagraph.appendChild(t);
parentDiv.appendChild(newParagraph);
// 
var parentDiv = document.getElementById("div1");
var newParagraph = document.createElement("p");
var t = document.createTextNode("Hello world!");
newParagraph.appendChild(t);
parentDiv.appendChild(newParagraph);