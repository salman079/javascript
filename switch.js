// If else
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var dayOfWk1 = new Date().getDay();
var dayOfWk = dayNames[dayOfWk1];
if (dayOfWk ==="Sat" || dayOfWk === "Sun") {
    alert("Whoopee!");
    }
    else if (dayOfWk === "Fri") {
    alert("TGIF!");
    }
    else {
    alert("Shoot me now!");
    }
// switch function for the above if else
switch(dayOfWk) {
    case "Sat": console.log("Whoopee");
    break;
    case "Sun": console.log("Whoopee");
    break; 
    case "Fri": console.log("TGIF!");
    break;
    default: console.log("Shoot me now!");
    }
