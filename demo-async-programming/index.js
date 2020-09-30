console.log("01-Before Prepare food");
function prepareFood(callback){
    setTimeout(()=>{
        console.log("02-Prepare Food");
        callback("03-Food is Ready");
    },10);
}
function prepareFrenchToast(callback){
    setTimeout(()=>{
        console.log("05-Prepare Frensh Toast");
        callback("06-French Toast is Ready");
    },20);
}
function prepareCoffee(callback){
    setTimeout(()=>{
        console.log("08-Prepare Coffee");
        callback("09-Coffee is Ready");
    },30);
}
function mycallback(value){
    console.log("04-Food is Ready callback = ",value);
    prepareFrenchToast(frenchToastcallback);
}
function frenchToastcallback(value){
    console.log("07-French Toast is Ready callback = ",value);
    prepareCoffee(coffeecallback);
}
function coffeecallback(value){
    console.log("10-Coffee is Ready callback = ",value);
}
prepareFood(mycallback);

console.log("After Prepare food dinner is ready");