var a=prompt("enter number in decimal: ",2.34);
var numRound = Math.round(a);
console.log(numRound);
console.log("using Math ceil on .000001:" + Math.ceil(0.000001));
console.log("using Math floor on .99999:" + Math.floor(0.99999));
var abc = 0.65978392324213;
console.log("using Math toFixed function to round 3 places of decimal on " + abc +" is "+ abc.toFixed(3));

var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6)+1;
var numberOfStars = Math.floor(improvedNum);
console.log("random number 1 to 6:" + bigDecimal+ " " + improvedNum + " "  + numberOfStars+ " " );
console.log("Maths Functions");
console.log("Math.pow() \nMath.sqrt() \nMath.abs() \nMath.sin() \nMath.cos() \nMath.min() \nMath.max() \nMath.exp() \nMath.log() \n");