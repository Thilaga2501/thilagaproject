//Variables defined Let Keyword cannot be redeclared

let x= 2; 
// let x= 10;
document.getElementById("let").innerHTML=x;

//Variables defined var Keyword can be redeclared

var y= 2; 
var y= 10;
document.getElementById("var").innerHTML=y;

//Variables defined const Keyword can be redeclared

const food ={type: "non-veg", incredient: "chicken", By:"dhamu" }
food.incredient="mutton"; //You can change the property
food.hotel="5-star Hotel"; //You can Add the property
document.getElementById("const").innerHTML= "This food is from " + food.hotel;

//Arrow functions using const keyword

const arrow= (x,y)=> x * y;
document.getElementById("arrow").innerHTML=arrow(10,10);

//Map functions

const marks= new Map ([
    ["Maths", 100],
    ["physics", 80],
    ["English", 50]
]);
document.getElementById("map").innerHTML = marks.get("physics"); //The get() method gets the value of a key in a Map
 
//Javascript class

class places
{
    constructor(name,city)
    {
        this.name =name;
        this.city = city;
    }
}
const myPlaces = new places("Marina","Chennai");
document.getElementById("class").innerHTML = myPlaces.name + " " + myPlaces.city;

//Javascript Promises

const javascript = new Promise (function(add,remove)
{
    setTimeout( function() {add("I love javascript"); },3000);
});
javascript.then(function(value)
{
    document.getElementById("promise").innerHTML= value;
});

//Javascript Symbol

const person = {
    userName: "Thilaga",
    age: 22,
    native: "chennai"
};

let id = Symbol('id');
person[id] = "A1+ve";
document.getElementById("symbol").innerHTML= person.userName+ " " +  person[id];

//Default Parameter

function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
  }
  document.getElementById("parameter").innerHTML = myFunction(40);

//Rest Parameter

function sum (...args)
{
    let sum=0;
    for( let arg of args) sum+= arg;
    return sum;
}
let a = sum(4,4);
document.getElementById("rest").innerHTML= a;

//String Search in sentence

let text ="I wish you all very happy morning!";
document.getElementById("string").innerHTML= text.includes("happy"); //Case sensitive 

//String startswith() method finds the word starting word

let word= "I wish you all very happy morning";
document.getElementById("starts").innerHTML= text.startsWith("I");  //Case sensitive 

//String endswith() method finds the word ending word

let letter = "I wish you all very happy morning";
document.getElementById("ends").innerHTML = text.endsWith("morning"); //DOUBT

// Array.from() method returns string to array

const array = Array.from ("DIVYA");
document.getElementById("from").innerHTML = array;

// Array.key() method returns keys of an array

const value = ["maths","physics"];
const keys = value.keys();

let arr = ""; 
for (let x of keys) {
    arr += x + "<br>";
}
document.getElementById("key").innerHTML = arr;

//Array.find() finds the value

const num =[2,4,6,8,10,12]
let first = num.find(myFunction);
document.getElementById("find").innerHTML = "First number over 8 is " + first;
function myFunction (value,index,array)
{
    return value > 8;
}

//Array.index() finds the index of the value

const number =[2,4,6,8,10,12]

document.getElementById("index").innerHTML = "First number over 8 is " + number.findIndex(myFunction);
function myFunction (value,index,array)
{
    return value > 8;
}

//Math.trunc returns the int part of float value

document.getElementById("trunc").innerHTML = Math.trunc(10.67);

//Math.sign negative, null or positive:

document.getElementById("sign").innerHTML = Math.sign(-9);

//Math.cbrt returns the cube root value

document.getElementById("cbrt").innerHTML = Math.cbrt(512);

//Number function isInteger()

document.getElementById("int").innerHTML = Number.isInteger(8) + "<br>" + Number.isInteger(8.5);

//Number function safeInteger()

document.getElementById("safe").innerHTML = Number.isSafeInteger(200000) + "<br>" + Number.isSafeInteger(12345678902345678);

//Number function isFinite()

document.getElementById("finite").innerHTML = Number.isFinite(8/0) + "<br>" + Number.isFinite(8/2);

//Number function isNaN()

document.getElementById("nan").innerHTML = Number.isNaN("abcdefghijklmnopqrstuvwxyz") + "<br>" + Number.isNaN(823456782);

//Number function entries() 

const company = ["IBM", "CTS", "TCS", "WIPRO"];
const c = company.entries();

for (let x of c) {
  document.getElementById("entries").innerHTML += x + "<br>";
}

//Javascript module

// import { name, age } from "./person.js";
// let sentence = "My name is " + name + ", I am " + age + ".";
// document.getElementById("module").innerHTML = sentence;

//for off loop

let language = "Angular";
let z = " ";
for (let x of language)
{
    z += x + "<br>";
}
document.getElementById("loop").innerHTML= z;


// let language = "JavaScript";

// let text = "";
// for (let x of language) {
//   text += x + "<br>";
// }

// document.getElementById("demo").innerHTML = text;