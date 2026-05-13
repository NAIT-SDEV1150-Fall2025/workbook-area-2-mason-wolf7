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



// Student TODO: 
// Prompt the user for their name and age
// Log a greeting message using the provided name and age