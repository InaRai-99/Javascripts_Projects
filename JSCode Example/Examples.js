const myButton = document.getElementById('my-button');
myButton.addEventListener('click', () => {
    console.log('Button was clicked!');
});

const container = document.getElementById('container');
container.addEventListener('click', (event) => {
  console.log('Event target:', event.target); // Will be the <p> tag
  console.log('Listener element:', event.currentTarget); // Will be the <div> tag
});

const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submission prevented!');
});

const myInput = document.getElementById('my-input');
myInput.addEventListener('change', () => {
  console.log('Input value changed:', myInput.value);
});

const myButton = document.getElementById('my-button');
const myClickHandler = () => { console.log('Clicked!'); };
myButton.addEventListener('click', myClickHandler);
myButton.removeEventListener('click', myClickHandler);

const parent = document.getElementById('parent');
const child = document.getElementById('child');
parent.addEventListener('click', () => { console.log('Parent clicked'); });
child.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('Child clicked');
});

const textInput = document.getElementById('text-input');
textInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    console.log('Enter key was pressed!');
  }
});

const list = document.getElementById('list');
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log('You clicked on:', event.target.innerText);
  }
});

const toggleBtn = document.getElementById('toggle-btn');
const toggleText = document.getElementById('toggle-text');
toggleBtn.addEventListener('click', () => {
  toggleText.classList.toggle('hidden');
});

const myDiv = document.getElementById('my-div');
const showAlert = () => alert('Hello from an arrow function!');
myDiv.addEventListener('mouseover', showAlert);
