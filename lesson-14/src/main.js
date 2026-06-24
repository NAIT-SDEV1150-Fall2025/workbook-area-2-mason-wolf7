import dayjs from 'dayjs';
import { greeting } from './utils'; // importing function from utils.js
import utils from './utils'; // imports the default name
// utils can be any name you like
const currentDate = dayjs().format('dddd, MMMM D, YYYY');
const name = prompt('Enter your name:');
document.querySelector('#greeting').textContent = greeting(name || utils.defaultName);
document.querySelector('#today').textContent = `Today is ${currentDate}`;
