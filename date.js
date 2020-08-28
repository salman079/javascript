var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
console.log(nameOfToday);
console.log(Date()+"==="+ new Date().getDay());
console.log("Todays day is "+dayNames[new Date().getDay()]);
console.log("Todays Month is "+monthNames[new Date().getMonth()]);

console.log("Days to birthday "+ (new Date("August 21, 2021").getDate() - new Date().getDate()));
console.log(new Date("August 21, 2021").getDate());
console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getTime());
//setFullyear() and similar to set the date etc