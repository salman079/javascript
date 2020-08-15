var a=prompt("enter number in decimal: ",2.34);
var numRound = Math.round(a);
console.log(numRound);
console.log("using Math ceil on .000001:" + Math.ceil(0.000001));
console.log("using Math floor on .99999:" + Math.floor(0.99999));
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6)+1;
var numberOfStars = Math.floor(improvedNum);
console.log("random number 1 to 6:" + bigDecimal+ " " + improvedNum + " "  + numberOfStars+ " " );
