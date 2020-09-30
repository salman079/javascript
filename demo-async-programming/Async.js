console.log("Asynchoronus");
console.log("01-Asynchoronus-line 1");
func1 = () => {
    console.log("02-Asynchoronus-func 1 starts");
    func2();
    setTimeout(function() {
        console.log("04-Asynchoronus-func 1 ends");
    }, 1000);
    func3();
}
func2 = () => {
    setTimeout(() => {
        console.log("03-Asynchoronus-func 2 starts");
    }, 3000);
}
func3 = () => {
    console.log("05-Asynchoronus-func3 starts");
}
func1();
console.log("06-Asynchoronus-last line");
