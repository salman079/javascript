function popup(message){
    console.log(message);
    alert(message);
    }
function checkAddress(fieldId) {
    if (document.getElementById(fieldId).value === "") {
    alert("Email address required.");
    }
    }
function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
    case "60608" : cityName = "Chicago";
    break;
    case "68114" : cityName = "Omaha";
    break;
    case "53212" : cityName = "Milwaukee";
    }
    document.getElementById("city").value = cityName;
    }
function checkForSelection(selecID) {
    var target = document.getElementById(selecID);
    if (target.selectedIndex === 0) {
        alert("Please select a state.");
        return false;
    }
}
function validateRadios(ename) {
    var radios = document.getElementsByName(ename);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return true;
        }
    }
    alert("Please check one.");
    return false;
}
function expandLoris() {
    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of        distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
    }
function validateZIP() {
    var numChars = document.getElementById("zip").value.length;
    if (numChars < 5) {
        alert("Please enter a 5-digit code.");
    return false;
    }
}
function validateZIP() {
    var valueEntered = document.getElementById("zip").value;
    var numChars = valueEntered.length;
    if (numChars < 5) {
        alert("Please enter a 5-digit code.");
        return false;
    }
    for (var i = 0; i <= 4; i++) {
        var thisChar = parseInt(valueEntered[i]);
        if (isNaN(thisChar)) {
            alert("Please enter only numbers.");
            return false;
        }
    }
}
function validateEmail() {
    var addressIsLegal = true;
    var eEntered = document.getElementById("address").value;
    if (eEntered.indexOf(" ") !== -1) {
        addressIsLegal = false;
    }
    if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
        addressIsLegal = false;
    }
    if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2 ||
        eEntered.indexOf(".") > eEntered.length - 3) {
        addressIsLegal = false;
    }
    if (addressIsLegal === false) {
        alert("Please correct email address");
        return false;
    }
}
function makeInvisible() {
    document.getElementById("ugly").className = "hidden";
    }
function swapPic(eId, newPic) {
    document.getElementById(eId).src = newPic;
    }