const abc = function () {
    console.log("Good Morning")
};
abc();
//////////////////////////////
const biodata = {
    name: "Salman",
    job: function () {
        console.log("Petromin");
    }
}
biodata.job();
biodata.name; // noting to display
//////////////////////////////////
const myName = () => {
    return "Hello";
}
const greeting = (sayHi, name) => {
    console.log(`${sayHi()} ${name}`);
}
greeting(myName, "Salman");
//       Call Back
const perA = (friend, callFriend) => {
    console.log(`hello ${friend} how are you`);
    callFriend();
}
const perB = () => {
    console.log("what are you doing")
    }
perA("Saloo Bhai", perB);
//////////////////////////////////
function a() {
    return function b() {
        console.log("funtion within function");
    }
}
a()// it will not work 
a()();  // calling of a function within function 
c = a(); // assigning function in a variable
c();
/////////////////////////////////
const funA = () => {
    setTimeout(function () {
        console.log("This is Function A");
        funB();
    }, 1000);
}
const funB = () => {
    console.log("This is Function B");
}
const funC = () => {
    console.log("This is Function C");
}
funA();
funC();

