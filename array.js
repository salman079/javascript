var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
alert("Welcome to " + cities[3]);
var mixedArray = [1, "Bob", "Now is", true];
var names =[];
// var name = prompt("suggest a name");
names[0] = "Tooba";
names[1] = "Abullah";
names[2] = "Hassan";
var pets = [];
pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";
pets[3] = "lizard";
pets[6] = "snake";
pets[3] = "lizard";
pets[4] = "fish";
pets[5] = "gerbil";
pets[6] = "snake";
console.log(pets);
console.log(names);
pets.pop();
console.log(pets);
pets.push("fish","cow");
console.log(pets);
console.log("to check Push command on Array")
var aa = [];
aa.push("Farayha");
console.log(aa);
aa.push("Ahmed");
console.log(aa);
aa.push("Rafaya");
console.log(aa);
console.log("to check Unshift command on Array")
aa.unshift("Saima");
console.log(aa);
aa.unshift("Faizan");
console.log(aa);
console.log("to check Pop command on Array")
aa.pop();
console.log(aa);
console.log("to check Shift command on Array")
aa.shift();
console.log(aa);
console.log("to check Splice function on Array")
aa.splice(1,0,"Aman"); // splice(index where to add, how many values to replace, value to add)
console.log(aa);
aa.splice(3,0,"Usman", "Marium");
console.log(aa);
aa.splice(3,2,"Saad'o Bhaia");
console.log(aa);
aa.splice(3,0,"Usman", "Marium");
console.log(aa);
console.log("to check Slice function on Array")
var ab = aa.slice(3,6); // splice(index where to add, how many values to replace, value to add)
console.log(ab);
console.log(aa);
console.log("More function of Array")
// aa.filter()
// aa.find()
// aa.findIndex()
// aa.indexOf()
// aa.lastIndexOf()
// aa.map()
// aa.reverse()
// aa.sort()
// aa.fill()
