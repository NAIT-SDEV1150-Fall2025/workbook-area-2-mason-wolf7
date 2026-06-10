console.log('Lesson 06 starter loaded');

// Selecting elements
const titleEl = document.querySelector('#page-title'); // when using query selector, use a # in front to denote an id
const taglineEl = document.querySelector('.tagline'); // when using query selector, use a . in front to denote a class
const heroImg = document.querySelector('#hero-img');
const heroCaption = document.querySelector('#hero-caption');
const dynamicBox = document.querySelector('#dynamic-box');
const footerNote = document.querySelector('#footer-note');

const featureList = document.getElementById('feature-list'); // when NOT using query selector, does not need any symbol in front

// 1. Create a new variable for the feature list element
const liEl = document.createElement('li'); // <li></li>
liEl.className = 'feature'; // <li class="feature"></li>
liEl.textContent = 'Flexible'; // <li class="feature">Flexible</li>
featureList.appendChild(liEl); // this adds the child "liEl" to the html document

// 2. Add feature list to the displayed elements below
console.log('Selected elements:', {
  titleEl, taglineEl, heroImg, heroCaption, dynamicBox, footerNote,
});

// Modify list content
// 4. Add a new item dynamically

// 5. Retreive all list items (querySelectorAll) and update their text
const features = document.querySelectorAll('.feature');

features.forEach((liEl, idx) => {
  liEl.textContent = `${idx + 1}. ${liEl.textContent}`;
},
);
// () => {} arrow functions are not named and usually limited to a paticular block of code

// 6. Removing the first item from the list using DOM relationships to find it
// .removechild removes the element from the children of the parent node
featureList.removeChild(featureList.firstElementChild);

// 7. Update the second item using nextElementSibling
featureList.firstElementChild.nextElementSibling.textContent += `(updated)`;

// 8. Move the last item to the front of the list
const lastEl = featureList.removeChild(featureList.lastChild);
// insertBefore(element to be inserted, the location you want to insert it)
featureList.insertBefore(lastEl, featureList.firstChild);

// 9. Use a timer to add a new item after 3 seconds have passed
setTimeout(() => {
  const timeEl = document.createElement('li');
  timeEl.className = 'feature';
  timeEl.textContent = 'added with timeout';
  featureList.appendChild(timeEl);
}, 3000); // = 3 seconds

// **** THE FOLLOWING IS EXISTING CODE FROM LESSON 05

// textContent vs innerHTML
titleEl.textContent = 'DOM: Your JavaScript Window into Page Structure';

dynamicBox.innerHTML = `
  <p class="desc">
    This block was injected with <em>innerHTML</em>. It can include <strong>markup</strong>.
  </p>
`;

// When you only need text (no markup), prefer textContent:
heroCaption.textContent = 'This caption was updated using textContent.';

// Attributes & styles
heroImg.setAttribute('alt', 'A replaceable sample image');
heroImg.style.borderColor = '#0d6efd'; // inline style to illustrate visual change

// Create small helper functions for reuse
function updateText(selector, text) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.textContent = text;
}

function updateHTML(selector, html) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.innerHTML = html;
}

function setAttr(selector, name, value) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.setAttribute(name, value);
}

function setStyle(selector, styleObj = {}) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  Object.entries(styleObj).forEach(([k, v]) => {
    el.style[k] = v;
  });
}

// Use helpers to perform simple tasks
updateText('.tagline', 'Selecting, reading, and modifying nodes with JavaScript.');
updateHTML('#dynamic-box', `
  <p class="desc">
    Replaced again via <code>updateHTML()</code>. Notice how we can inject different markup here.
  </p>
`);

setAttr('#hero-img', 'title', 'Hover title set from JS');
setStyle('#hero-img', { borderColor: 'navy' });

// Footer text tweak (demonstrate class toggle & style change)
footerNote.classList.add('footer-strong');
// Require innerHTML here to render the &copy; entity correctly
footerNote.innerHTML = '&copy; 2025 Front End Fundamentals';

// Null-safety tip: check selections before using them
const missing = document.querySelector('#does-not-exist');
if (!missing) {
  console.warn('Selector #does-not-exist did not match any element.');
}
