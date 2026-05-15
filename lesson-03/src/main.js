console.log('Lesson 03 starter loaded'); //semicolons indicate the end of the line in js

console.log('Hello World!');
console.log('This is a console message');
console.log('The console is used for output');
console.log('JS makes a webpage interactive');

// 1. Declare variables using var, let, const
const greeting = 'Hello World!'; //const variables cannot be redeclared once initialized
let count = 3; //let variables can be reassigned, variable is declared in the line where it is placed
var bool = true; //var variables can be reassigned, variable is hoisted: declared at the beginning of the code

console.log(v);
var v;
v = 1;
console.log(v);

//console.log(l); error occurs when line is run
let l = 1;
console.log(l);

console.log(greeting, count, bool); //displays variables in the console

// 2. Log their types with console.log(typeof …)
console.log('Type of greeting:', typeof greeting); //displays variable type

// 3. Try built-in functions: alert(), prompt(), parseInt(), toString()
//alert('Welcome to the demo'); //creates an alert when page is loaded

//const userName = prompt('Enter your name:');

//const continueDemo = confirm(`Hi ${userName}, would you like to continue the demo?`);
//console.log('User chose to confirm', continueDemo)

const strNumber = '42';
const parsedNumber = parseInt(strNumber, 10);
console.log(`Parsed "${strNumber}" type: ${typeof strNumber}, to ${parsedNumber} type: ${typeof parsedNumber}`);
const actualString = parsedNumber.toString();
console.log(actualString);

// 4. Manipulate values and observe results in the console
let x = 10;
let y = 5;
console.log(`${x} + ${y} =`, x + y);
console.log(`${x} - ${y} =`, x - y);
console.log(`${x} * ${y} =`, x * y);
console.log(`${x} / ${y} =`, x / y);

x = x + 1; //add one and assign it back
console.log(x);
x += 1; //same thing as above
console.log(x);
x++; //same as above
console.log(x);
x = x - 1; //subtract one and assign it back
console.log(x);
x -= 1; //same as above
console.log(x);
x *= 2; //multiply x by two and assign it back
console.log(x);

10 % 3; //1 (remainder) modulo

//increment decrement
let c = 5; c++; //6
let d = 5; d--; //4

//assignment operators
let a = 10;
a += 5; //15
a -= 3; //12
a *= 2; //24
a /= 4; //6
a %= 4; //2

//composite data types
//array
const fruits = ["apple", "banana", "cherry"];
const numbers = [1,2,3];
const mix = [1, "name", true];
console.log(fruits, numbers, mix);
//object
//comprises of key value pairs
//can have any data type in keys/values
//keys do not need quotes for string
const person = {1: "name", 2: "age", 3: "height"}; //curly brackets are indentifying an object 
//1:"name" 1 is the key and "name" is the value

const mason = "Mason";
const PERSON = {
    name: mason,
    age: 21,
    height: `5'6"`,
    weight: "85kg"
};
console.log(person, PERSON);

const human = {
    name: "Mason",
    age: 21
};
console.log(human);

// Student TODO: 
// Prompt the user for their name and age
//const name = prompt('Enter your name:');
//const age = prompt('Enter your age');
// Log a greeting message using the provided name and age
//const greeting = alert(`Welcome to the webpage, ${name}. You are ${age} years old.`)