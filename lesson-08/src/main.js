console.log('Lesson 08 starter loaded');

// 1. load event (document ready) - NOTE this is unnecessary if using `defer` in the script tag or using module type
window.addEventListener('DOMContentLoaded', () => { // (type of event, ()=>{})
  console.log('DOM fully loaded');
  // add you DOM logic and event listeners here
});

// 2. Selecting elements
const btnToggle = document.querySelector('#btn-toggle');
const btnChangeMsg = document.querySelector('#btn-message');
const message = document.getElementById('message');
const card = document.getElementById('hover-card');
const status = document.getElementById('hover-status');
const keyOutput = document.getElementById('key-output');
const list = document.getElementById('list');
const selection = document.getElementById('selection');

btnToggle.addEventListener('click', () => {
  console.log('button is clicked');
});
btnToggle.addEventListener('click', () => {
  document.body.classList.toggle('highlight');
  const on = document.body.classList.contains('highlight');// contains checks if highlight is there as a class or not returns true/false based on highlight class being there or not.
  btnToggle.textContent = on ? 'Highlight is on' : 'highlight is off'; // tern
});

// 3. click: toggle a highlight class on the body

// 4. click: change message textContent (no HTML parsing)
btnChangeMsg.addEventListener('click', () => {
  const dt = new Date();
  const timeString = new Date().toLocaleTimeString();
  console.log(dt);
  console.log(timeString);
  message.textContent = `Message updated at ${timeString}`;
});

// 5. mouseover / mouseout: display hover status on the card
card.addEventListener('mouseover', () => {
  status.textContent = 'Status: hovering';
});

card.addEventListener('mouseout', () => {
  status.textContent = 'Status: none';
});

// 6. keydown: show last key pressed (global listener)
document.addEventListener('keydown', (e) => { // indication the use of event object
  let keyPressed = e.key;
  keyOutput.textContent = `Last key: ${keyPressed} (code: ${e.code})`;
  // e.code shows position on the keyboard and e.key shows what would display if you are typing
});
// 7. Event delegation: one listener on the <ul> for all <li> elements
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const activeLi = e.target.querySelector('li-active');
    // remove existing styles
    if (activeLi) {
      activeLi.classList.remove('active');
    }
    // add styles to event that is clicked
    e.target.classList.add('active');
    const id = e.target.getAttribute('data-id');
    selection.textContent = `Selected: Item ${id}`;
  }
});
