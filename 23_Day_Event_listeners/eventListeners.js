// 1. DOM(Document Object Model)-Day 3

// 1.1. Event Listeners

// HTML events allow you to respond to user actions. You can use the addEventListener() method to add event listeners to any DOM object. The addEventListener() method takes two arguments: an event listener and a callback function.

// Here are some common HTML events:

// onclick - When the user clicks an element
// onchange - When the user changes the value of an element
// onmouseover - When the user moves the mouse over an element
// onmouseout - When the user moves the mouse out of an element
// onkeydown - When the user presses a key
// onkeyup - When the user releases a key
// onload - When an element is loaded
// Here is an example of how to use the addEventListener

// 1.1.1. Click

const button = document.querySelector('button');

button.addEventListener('click', (e) => {
  console.log('e gives the event listener object:', e);
  console.log('e.target gives the selected element: ', e.target);
  console.log(
    'e.target.textContent gives content of selected element: ',
    e.target.textContent
  );
});

// An event can be also attached directly to the HTML element as inline script.

const clickMe = () => {
  alert('We can attach event on HTML element');
};

// 1.1.2. Double Click

const dblClick = document.querySelector('.dblClick');

dblClick.addEventListener('dblclick', (e) => {
  console.log('e gives the event listener object:', e);
  console.log('e.target gives the selected element: ', e.target);
  console.log(
    'e.target.textContent gives content of selected element: ',
    e.target.textContent
  );
});

// 1.1.3. Mouse enter

const mouseEnter = document.querySelector('.mouseEnter');

mouseEnter.addEventListener('mouseenter', (e) => {
  console.log('e gives the event listener object:', e);
  console.log('e.target gives the selected element: ', e.target);
  console.log(
    'e.target.textContent gives content of selected element: ',
    e.target.textContent
  );
});

// TODO:

// mouseleave - when the mouse pointer leave the element

function handleMouseLeave() {
  alert('Mouse left the element!');
}

// mousemove - when the mouse pointer move on the element

function handleMouseMove() {
  alert('Mouse is moving on the element!');
}

// mouseover - when the mouse pointer move on the element

function handleMouseOver() {
  alert('Mouse is over the element!');
}

// mouseout -when the mouse pointer out from the element

function handleMouseOut() {
  alert('Mouse left the element!');
}

// input - when value enter to input field

function handleOnInput() {
  const input = document.getElementById('on-input');
  console.log('Input value: ' + input.value);
}

// change - when value change on input field

function handleOnChange() {
  const input = document.getElementById('on-change');
  console.log('Input value changed: ' + input.value);
}

// blur - when the element is not focused

function handleInputBlur() {
  const input = document.getElementById('on-blur');
  console.log('Input blurred: ' + input.value);
}

// keydown - when a key is down

function handleKeyDown() {
  console.log('Key down event occurred!');
}

// keyup - when a key is up

function handleKeyUp() {
  console.log('Key up event occurred!');
}

// keypress - when we press any key

function handleKeyPress() {
  console.log('Key press event occurred!');
}

// onload - when the browser has finished loading a page

// function handlePageLoad() {
//   alert('Page loaded!');
// }

// 1.2. Getting value from an input element

// We usually fill forms and forms accept data. Form fields are created using input HTML element. Let us build a small application which allow us to calculate body mas index of a person using two input fields, one button and one p tag.

// 1.3. input value

const mass = document.querySelector('#mass');
const height = document.querySelector('#height');
const bmiButton = document.querySelector('#bmi');

let bmi;
bmiButton.addEventListener('click', () => {
  bmi = mass.value / height.value ** 2;
  alert(`your bmi is ${bmi.toFixed(2)}`);
  console.log(bmi);
});

// 1.3.1. input event and change

const saySomething = document.querySelector('#say-something');
const p = document.querySelector('p');

saySomething.addEventListener('input', (e) => {
  p.textContent = e.target.value;
});

// 1.3.2. blur event

saySomething.addEventListener('blur', () => {
  p.textContent = 'Field is required';
  p.style.color = 'red';
});

// 1.3.3. keypress

// document.body.addEventListener('keypress', (e) => {
//   alert(e.keyCode);
// });
