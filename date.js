var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
console.log(nameOfToday);
console.log(Date()+"==="+ new Date().getDay());
console.log(dayNames[new Date().getDay()]);
console.log("Days to birthday "+ (new Date("August 21, 2021").getDate() - new Date().getDate()));
console.log(new Date("August 21, 2021").getDate());