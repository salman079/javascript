console.log("Synchoronus");
console.log("01-Synchoronus-line 1");
func1 = () => {
    console.log("02-Synchoronus-func 1 starts");
    func2();
    for (var i = 0; i < 3000; i++) {
        console.log("04-Synchoronus-func 1 ends");
    }
    func3();
}
func2 = () => {
    for (var i = 0; i < 3000; i++) {
        console.log("03-Synchoronus-func 2 starts");
    }
}
func3 = () => {
    console.log("05-Synchoronus-func3 starts");
}
func1();
console.log("06-Synchoronus-last line");
