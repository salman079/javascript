var cleanestCities = ["jeDDah", "karachi","santa fe", "tucson", "great falls", "honolulu","muscat"];
console.log(cleanestCities);
var firstChar = cleanestCities[0].slice(0, 1);
var otherChars = cleanestCities[0].slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var cappedCity = firstChar + otherChars;
console.log("first chr of city " + cleanestCities[0] + " " + firstChar);
console.log("other chrs of first city " + cleanestCities[0] + " " + otherChars);
console.log("Title case of "+ cleanestCities[0]+ " is "+ cappedCity);
var firstChar2 = cleanestCities[2].charAt(0).toUpperCase();
var lastChar2 = cleanestCities[2].charAt(cleanestCities[2].length-1);
console.log("first chr of 2nd city using charAt " + cleanestCities[2] + " " + "is " + firstChar2);
console.log("last chr of 2nd city using charAt " + cleanestCities[2] + " " + "is " + lastChar2);

console.log("Escape characters")
console.log("Hello\'World\' single quote"); // single quote
console.log("Hello\"World\" double quote"); // double quote
console.log("Hello\\World back slash"); // back slash
console.log("Hello\nWorld next line"); // next line
console.log("Hello\tWorld tab"); // tab 

console.log("String functions");
var a="To be or not to be Pakistan Zindabad";
console.log(a);
console.log("length of "+ a +" is "+ a.length);
console.log("indexOf() of first be " + a.indexOf("be"));
console.log("indexOf() of second be " + a.indexOf("be",6));
console.log("last indexOf() of last be " + a.lastIndexOf("be"));
console.log("last indexOf() of second last be " + a.lastIndexOf("be", 15));
var b = a.replace("be", "Hello")
console.log("replace \"be\" to \"Hello\" only first be is replace\n"+b);
var c = a.replace(/be/g, "Hello")
console.log("replace \"be\" to \"Hello\" all be replace\n"+c);
console.log("replacing \"to\" with case sensitve issue \n"+a.replace("to", "hello"));
console.log("replacing \"to\" without case sensitve issue \n"+a.replace(/to/i, "hello"));
console.log("replacing \"to\" without case sensitve issue globally  \n"+a.replace(/to/gi, "hello"));
console.log("using split to convert a string to Array. \n" + a.split(" "));

console.log("Other String functions");
a.charCodeAt()
a.concat()
a.endsWith()
a.includes()
a.match()
a.repeat()
a.search()
a.startsWith()
a.substr()
a.substring()
a.trim()
