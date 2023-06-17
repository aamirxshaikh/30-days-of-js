// 1. DOM(Document Object Model)-Day 2

// 1.1. Creating an Element

// To create an HTML element in JavaScript, use the document.createElement() method and pass in the tag name of the element you want to create.

let title = document.createElement('h1');
title.className = 'title';
title.style.fontSize = '24px';
title.textContent = 'Creating HTML element DOM Day 2';

console.log(title);

// 1.2. Creating elements

// To create multiple HTML elements, you can use a loop. A loop will allow you to create as many elements as you want. Once you have created the elements, you can assign values to their properties.

let title2;

for (let i = 0; i < 3; i++) {
  title2 = document.createElement('h1');
  title2.className = 'title';
  title2.style.fontSize = '24px';
  title2.textContent = i;

  console.log(title2);
}

// 1.3. Appending child to a parent element

// To see a created element on the HTML document, you need to append it to the parent element. You can access the HTML document body using the document.body property. The document.body property supports the appendChild() method, which you can use to append the element to the body.

let title3;

for (let i = 0; i < 3; i++) {
  title3 = document.createElement('h1');
  title3.className = 'title';
  title3.style.fontSize = '24px';
  title3.textContent = i;

  document.body.appendChild(title3);
}

// 1.4. Removing a child element from a parent node

// To remove an HTML element, you can use the removeChild() method. The removeChild() method takes one argument, which is the child element you want to remove.

// const ul = document.querySelector('ul');
// const lists = document.querySelectorAll('li');

// for (const list of lists) {
//   ul.removeChild(list);
// }

// The innerHTML property can be used to set or get the HTML content of an element. To eliminate all the inner HTML elements or the children of a parent element, you can set the innerHTML property to an empty string.

const ul = document.querySelector('ul');
ul.innerHTML = '';
