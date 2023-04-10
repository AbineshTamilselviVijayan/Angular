{
    console.log(a);
    var a = 10;
}
{
    console.log(x);
    var x = 5;
}

{
    var x;
    console.log(x);
    x = 5;
}

var mySymbol = Symbol("mySymbol");
console.log(mySymbol);

var a = 5;
var b = 3;
var c = a + b;
console.log(c);

var a1 = "abi";
var b1 = "leo";
var c1 = a1 + b1;
console.log(c1);

function Person(name, age) {
    this.name = name;
    this.age = age;
}

var john = new Person("Abi",23);

Person.prototype.greet = function () {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};

john.greet();

var num = 10;
var str = "20";
var result = num + str; // result is "1020"
console.log(result);

var map = new Map();
map.set(1,"leo");
map.set(2,"abi");

map.forEach(function (key,value){
    console.log(key,value);
    console.log("Key - "+key);
});

var array = [5,4,3,2,1];
console.log("for of loop");
for(let number of array){
    console.log(number);
}

console.log("normal for loop");
for(let i = 0; i<array.length;i++){
    console.log(array[i]);
}

console.log("for of loop");
const number = [1,2,3,4,5];
for(var array of number){
    console.log(array);
}

var employee = {
    empNo : "90100",
    age : 24
}
console.log(employee);

console.log("for in loop -> getting object's field");
for(let property in employee){
    console.log(`${property}: ${employee[property]}`);
}

const employeeJSON = JSON.stringify(employee);
console.log("After stringify -> "+employeeJSON);

"use strict"; //->for making the code errors unsuppressed and throw an exception for it.