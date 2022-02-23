"use strict";

//Print 'Hello world' in console
console.log('Welcome to JavaScript');

//dataTypes.
let numInteger= 10;
console.log(typeof(numInteger));

let strString = 'JavaScript';
console.log(typeof(strString));
document.write(`Hello, ${strString}!`);  // Hello JavaScript
document.write("<br>");

let isGratter = 4>1;        //boolean data type.
alert(isGratter); 

let age = prompt('What is your Age ?','')
if(age != null){
    document.write('My age is :'+age)
}

//undefined data type
let name;
name = undefined;
console.log(name);

