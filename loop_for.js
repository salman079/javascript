var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu","muscat"];
var numElements = cleanestCities.length;
var matchFound = false;
var cityToCheck = prompt("enter your city");
cityToCheck = cityToCheck.toLowerCase();
for (var i = 0; i < numElements; i++){
    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest cities");
        break;
    }
}
if (matchFound === false) {
alert(cityToCheck + " is not in the list");
}