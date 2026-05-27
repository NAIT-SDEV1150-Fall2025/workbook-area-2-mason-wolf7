console.log('Lesson 05 starter loaded');

// 1. Selecting elements
const title = document.querySelector('#page-title');
const tagline = document.querySelector('.tagline');
//const tagLine = document.getElementByClassName('tagline');
const heroImg = document.querySelector('#hero-img');
const heroCaption = document.querySelector('#hero-caption');
const dynamicBox = document.querySelector('#dynamic-box');
const footerNote = document.getElementById('footer-note');
const tagName = document.getElementsByTagName('h1');
//only use # when using query selector

// 2. textContent vs innerHTML
// When you only need text (no markup), prefer textContent:
title.textContent = 'Here is your DOM working'
dynamicBox.innerHTML = `<p class = "desc"> This block was injected using <em> innerHTML </em>. It can include <strong> markup </strong>. </p>`;
heroCaption.textContent =  'This caption was updated using textContent.';

// 3. Attributes & styles
heroImg.setAttribute('alt', 'A replacable sample image'); // same thing as index.html 'alt = A replacable sample image'
heroImg.style.borderColor = `#0d6efd`;
console.warn('name');

// 4. Create small helper functions for reuse (updateText and updateHTML)
// OPTIONAL: more helpers for attributes and styles
function updateText(selector, text) {
    const el = document.querySelector(selector);
    if (!el) {
        return console.warn('No element found for', selector);
    } else {
        el.textContent = text;
    }
}

function injectInnerHTML(selector, text) {
     const el = document.querySelector(selector);
    if (!el) {
        return console.warn('No element found for', selector);
    } else {
        el.innerHTML = text;
    }
}

// 5. Use helpers to perform simple tasks
// OPTIONAL: use attribute and style helpers if defined
updateText('.tagline', 'Selecting, reading and modifying nodes with Javascript');
injectInnerHTML('#hero-caption', `<p class = 'desc'><strong>This</strong> text was injected using <em>updateInnerHTML</em> function</p>`);

// 6. Footer text tweak (demonstrate class toggle & style change)
footerNote.classList.add('footer-strong');
// Require innerHTML here to render the &copy; entity correctly
footerNote.innerHTML = '&copy; 2025 Front End Fundamentals'
