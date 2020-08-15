// working on list  to change the day
// var liElements = document.getElementById("o_list").getElementsByTagName("li");
var liElements = document.getElementById("o_list").childNodes;
// var liElements = document.getElementById("o_list").attributes;
var howManyLi = liElements.length;
console.log(howManyLi);
// var update = prompt("which day you want to change");
// update = titleCase(update);
// var update2 = prompt("updated day");
// update2 = titleCase(update2);
// for (var i = 0; i < howManyLi; i++) {
// if (liElements[i].innerHTML === update) {
//     liElements[i].innerHTML = update2;
//     }
// }
var ii = false;
while (ii == false) {
    var update = prompt("which day you want to change");
    update = titleCase(update);
    var update2 = prompt("updated day");
    update2 = titleCase(update2);
    for (var i = 0; i < howManyLi; i++) {
        if (liElements[i].innerHTML === update) {
            liElements[i].innerHTML = update2;
            ii = true;
        }
    }
}
function monthupdate(old_month,new_month){
    var liElements = document.getElementById("u_list").getElementsByTagName("li");
    var howManyLi = liElements.length;
    // console.log(howManyLi);
    var old_month_value = document.getElementById(old_month).value;
    // console.log(old_month_value);
    var new_month_value = document.getElementById(new_month).value; 
    // console.log(new_month_value);
    old_month_value = titleCase(old_month_value);
    new_month_value = titleCase(new_month_value);
    for (var i = 0; i < howManyLi; i++) {
    if (liElements[i].innerHTML === old_month_value) {
        liElements[i].innerHTML = new_month_value;
        }
    }   
}
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
}