var a = "*"
var b = " ";
var n = 10;
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - i; j++) {
        b += " ";
    }
    c = b + a
    console.log(c);
    a += "**";
    b = " ";

}