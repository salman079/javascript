const oldArr = ['salman', 'aman', 'saima', 'samina', 'zaki'];
document.write("Old Array <br>");
document.write(oldArr + '<br>');

const newArr = oldArr.map(function (newValue, p) {
    return p + 1 + ": " + newValue;
});
document.write("<h3>Array with map function </h3> <br>");
document.write(newArr);
console.log(newArr);
document.write("<hr>");

const studentdata = [
    { id: 1, name: "Tooba", class: "3b" },
    { id: 2, name: "Abdullah", class: "2a" },
    { id: 3, name: "Hassan", class: "kg" }
];
document.write("The class of " + studentdata[1].name + " is " + studentdata[1].class);
document.write("<hr>");

const stddata1 = studentdata.map(function (newValue) {
    return newValue.name;
}
);
document.write("calling name using function:" + stddata1);
document.write("<hr>");

const stddata2 = studentdata.map((newValue2) => {
    return newValue2.class;
}
);
document.write("calling class using => :" + stddata2);
document.write("<hr>");
document.write("Names of kids are " + stddata1 + " and study in class" + stddata2);
document.write("<hr>");

const stddata3 = studentdata.map((newValue3) => {
    return "Name of the kid is " + newValue3.name + " and study in class: " + newValue3.class + "<br>";
}
);
document.write(stddata3);
document.write("<hr>");

document.getElementById('getdata').innerHTML = stddata3;

const oldArr11 = ['1111salman', '1111aman', '11111saima', '111111samina', '11111zaki'];

oldArr11.map((data11) => {
    return data11;
});
document.write(oldArr11);
document.write("<hr>");

const oldArr1 = [
    {
        Name: 'salman1111',
        Id: "Ab11",
        Class: "2b"
    },
    {
        Name: 'Abdullah1111',
        Id: "Zx121",
        Class: "3A"
    },
    {
        Name: 'Hassan1111',
        Id: "pqr121",
        Class: "AA"
    }];
oldArr1.map((datas) => {
    nam = datas.Name;
    iid = datas.Id;
    cclass = datas.Class;

    document.write("name is <strong>" + nam + "</strong> and having ID # of <strong>" + iid + "</strong> and study in class <strong>" + cclass + "</strong>");
    document.write("<br>");
});

newArrays = ['a', 'b', 'c'];
newArrays2 = [...newArrays, 'x', 'y', 'z'];
document.write(` This is newArray2 ${newArrays2}`);
newArrays3 = [...newArrays2,'saloo',...newArrays,'amao'];
document.write(` This is newArray3 ${newArrays3}`);
