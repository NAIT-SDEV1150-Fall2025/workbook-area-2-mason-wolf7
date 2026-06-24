console.log('Lesson 10 starter loaded');

// 1. Select required elements
const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');
console.log(form.elements)
// 2. Function to gather and structure form data
function serializeForm(formEl) {
  // get the name, email and bio
  const {fullName, email, bio} = formEl.elements; // object destructuring
  // get the plan values 
  const plan = formEl.elements.plan.value; // returns node list
  // get the topics values
  const topics = Array.from(formEl.querySelectorAll('input[name="topics"]:checked')).map(cb => cb.value);
  return {
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    plan,
    topics,
    bio: bio.value.trim(),
    date: new Date().toLocaleDateString
  };
}
  
  
  
  // Instructor TODO: return the fullName within an object literal
  // Student TODO: add the remaining fields

// 3. Handle form submission
// Use 'submit' event on the form, not 'click' on the button
// // Prevent default behavior (navigation/reload) using event.preventDefault()
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = serializeForm(form);
  result.textContent = `
    ${data.fullName}
    ${data.email}
    ${data.plan}
    ${data.topics}
    ${data.bio}
    ${data.date}
  `;
});
  // Instructor TODO: display the fullName value

  // Student TODO: display the remaining values
  
// 4. Handle form reset - reset the result area text when the form is reset
form.addEventListener('reset', (e) => {
  result.textContent = 'Awating submission...';
});
