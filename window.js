var whereWeAt = window.location.href;
var theDomain = window.location.hostname;
var thePath = window.location.pathname;
var theAnchor = window.location.hash;
console.log(whereWeAt);
console.log(theDomain);
console.log(thePath);
console.log(theAnchor);
// window.location.href = "http://www.me.com/1.html";
// window.location.reload(true);  // to reload from server
// window.location.reload(false); // to reload from cache
// window.location.reload();  // to reload from cache

function checkForPopBlocker() {
    var testPop = window.open("", "","width=100,height=100");
    if (testPop === null || typeof(testPop === "undefined"))
    {
        alert("Please disable your popup blocker.");
    }
    testPop.close();
}

function checkForLastName() {
    var targetField = document.getElementById("lastNameField");
    if (targetField.value.length === 0) {
        alert("Please enter your last name");
        targetField.focus();
        targetField.style.background = "yellow";
        return false;
    }
    targetField.style.background = "white";
}