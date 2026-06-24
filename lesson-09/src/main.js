console.log('Lesson 10 starter loaded');

// document.querySelector() returns Node
// document.getElementByClassName()/TagName() returns HTMLCollection

// ============== Propagation demo
// 1. Select required elements
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const button = document.getElementById('btn-propagate');
const log = document.getElementById('log');

// 2. Add event listeners
// 2.1 Outer div - using a named function
function outerClick() {
  log.textContent += 'The outer div is clicked|';
};

outer.addEventListener('click', outerClick);

// 2.2 Inner div - using an anonymous function
inner.addEventListener('click', function () {
  log.textContent += 'The inner div is clicked|';
});

// 2.3 Button - using an arrow function
button.addEventListener('click', (e) => {
  e.stopPropagation();
  log.textContent = 'The button is clicked|';
});

// ============== Gallery demo

// 1. Select required elements
const thumbnails = document.querySelector('.thumbnails');
const viewer = document.querySelector('.viewer');
const mainImg = document.getElementById('main-image');
const closeBtn = document.getElementById('close-viewer');

// 2. Add event listeners
// 2.1 Thumbnails container - using an arrow function
thumbnails.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    mainImg.src = e.target.src;
    viewer.classList.add('show');
  }
});

// 2.2 Close button - using an arrow function
closeBtn.addEventListener('click', () => {
  viewer.classList.remove('show');
});

// Student TODO: Add event listener to document, which closes
// the viewer when the Escape key is pressed
// document.addEventListener('keydown', (e) => {
// if (e == 'esc') {

// }
// });

// object/list destructuring
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

let colors = ['red', 'green', 'blue', 'black', 'white'];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

const [first, second, third, ...extraColors] = colors;
console.log(first);
console.log(second);
console.log(third);
console.log(extraColors);

const PERSON1 = {
  name: 'Mason',
  gender: 'M',
  age: 21,
};

const PERSON2 = {
  name: 'Spongebob',
  gender: 'F',
  age: 30,
};

const { name, age, gender } = PERSON2; // object destructuring

console.log(PERSON1.age);

function displayPerson(n, a, g) {
  console.log(n, a, g);
};

displayPerson(name, age, gender);
