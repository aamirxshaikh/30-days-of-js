// 1. Document Object Model (DOM) - Day 1

// HTML documents are made up of objects, and each object has properties that can be used to manipulate it. JavaScript can be used to get, create, append, or remove HTML elements. To select an HTML element, you can use its tag name, id, class name, or other attributes.

// 1.1. Getting Element

// We can use JavaScript to access HTML elements that have already been created. There are different methods that can be used to access elements.

// Here are some of the most common methods for accessing HTML elements:

// getElementById(): This method can be used to access an element by its ID.
// getElementsByTagName(): This method can be used to access all elements of a particular tag name.
// getElementsByClassName(): This method can be used to access all elements of a particular class name.
// querySelector(): This method can be used to access an element by a CSS selector.
// querySelectorAll(): This method can be used to access all elements that match a CSS selector.

// 1.1.1. Getting elements by tag name

// The getElementsByTagName() method takes a tag name as a string parameter and returns an HTMLCollection object. An HTMLCollection is an array-like object of HTML elements. The length property provides the size of the collection. To access the individual elements, you can use the index or loop through each item. An HTMLCollection does not support all array methods, so you should use a regular for loop instead of forEach.

const tagElements = document.getElementsByTagName('h1');

console.log(tagElements); // HTMLCollections
console.log(tagElements.length); // 4

for (let i = 0; i < tagElements.length; i++) {
  console.log(tagElements[i]); // prints each elements in the HTMLCollection
}

// 1.1.2. Getting elements by class name

// The getElementsByClassName() method returns an HTMLCollection object, which is an array-like list of HTML elements. The length property provides the size of the collection. You can loop through all the HTMLCollection elements using a for loop.

const classElements = document.getElementsByClassName('title');

console.log(classElements); //HTMLCollections
console.log(classElements.length); // 3

for (let i = 0; i < classElements.length; i++) {
  console.log(classElements[i]); // prints each elements in the HTMLCollection
}

// 1.1.3. Getting an element by id

// The getElementById() method targets a single HTML element by its ID. You pass the ID of the element as an argument to the method, without the # symbol.

const idElement = document.getElementById('first-title');
console.log(idElement); // <h1>First Title</h1>

// 1.1.4. Getting elements by using querySelector methods

// 1.1.4.1. document.querySelector()

// The document.querySelector() method can be used to select an HTML element by its tag name, ID, or class name. If the tag name is used, it will only select the first element that matches the selector.

let querySelectorTagElement = document.querySelector('h1'); // select the first available h1 element
let querySelectorIdElement = document.querySelector('#first-title'); // select id with first-title
let querySelectorClassElement = document.querySelector('.title'); // select the first available element with class title

console.log(
  querySelectorTagElement,
  querySelectorIdElement,
  querySelectorClassElement
);

// 1.1.4.2. document.querySelectorAll()

// The querySelectorAll() method can be used to select HTML elements by their tag name or class. It returns a NodeList object, which is an array-like object that supports array methods. You can use a for loop or forEach to loop through each NodeList element.

const querySelectorAllTagElements = document.querySelectorAll('h1'); // selects all the available h1 elements in the page

console.log(querySelectorAllTagElements.length); // 4

for (let i = 0; i < querySelectorAllTagElements.length; i++) {
  console.log(querySelectorAllTagElements[i]);
}

querySelectorAllTagElements.forEach((title) => console.log(title));

const querySelectorAllClassElements = document.querySelectorAll('.title'); // the same goes for selecting using class

console.log(querySelectorAllClassElements);

// 1.2. Adding attribute

// HTML attributes give extra information about HTML elements. Common attributes include id, class, src, style, href, disabled, title, and alt. To add id and class to the fourth title

const titles = document.querySelectorAll('h1');
titles[3].className = 'title';
titles[3].id = 'fourth-title';

console.log(titles);

// 1.2.1. Adding attribute using setAttribute

// The setAttribute() method sets the value of an HTML attribute. It takes two parameters: the name of the attribute and the value of the attribute.

titles[3].setAttribute('class', 'title');
titles[3].setAttribute('id', 'fourth-title');

// 1.2.2. Adding attribute without setAttribute

// We can set the value of an HTML attribute using the normal object setting method, but this does not work for all attributes. Some attributes are DOM object properties, and they can be set directly. For example, the id and class attributes can be set directly.

titles[3].className = 'title';
titles[3].id = 'fourth-title';

// 1.2.3. Adding class using classList

// The classList method is a good way to add new classes to an element. It does not replace any existing classes, but instead adds the new classes to the end of the list.

titles[3].classList.add('title', 'header-title');

// 1.2.4. Removing class using remove

// We can remove a class from an element just like we can add a class. We can remove a specific class from an element.

titles[3].classList.remove('title', 'header-title');

// 1.3. Adding Text to HTML element

// HTML elements are made up of three parts: an opening tag, a closing tag, and text content. We can add text content to an HTML element using the textContent property or the innerHTML property.

// The innerHTML property is a string that represents the HTML source code of an element.

// The textContent property is more efficient than the innerHTML property, as it does not require the browser to parse the HTML source code. However, the innerHTML property is more flexible, as it allows us to set the text content of an element using any valid HTML source code.

// 1.3.1. Adding Text content using textContent

// 1.3.2.1. Text Content

// The textContent property is used to add text to an HTML element.

titles[3].textContent = 'Fourth Title';

// 1.3.2. Adding Text Content using innerHTML

// 1.3.2.2. Inner HTML

// We can use the innerHTML property to replace the content of an element with new HTML. The value we assign to the innerHTML property is a string of HTML elements.

const ul = document.querySelector('ul');

const lists = `<li>30DaysOfPython Challenge Done</li>
  <li>30DaysOfJavaScript Challenge Ongoing</li>
  <li>30DaysOfReact Challenge Coming</li>
  <li>30DaysOfFullStack Challenge Coming</li>
  <li>30DaysOfDataAnalysis Challenge Coming</li>
  <li>30DaysOfReactNative Challenge Coming</li>
  <li>30DaysOfMachineLearning Challenge Coming</li>`;

ul.innerHTML = lists;

// We can use the innerHTML property to remove all the children of a parent element. It is faster than using removeChild().

ul.innerHTML = '';

// 1.4. Adding style

// 1.4.1. Adding Style Color

titles.forEach((title, i) => {
  title.style.fontSize = '24px';

  if (i % 2 === 0) {
    title.style.color = 'green';
  } else {
    title.style.color = 'red';
  }
});

// 1.4.2. Adding Style Background Color

titles.forEach((title, i) => {
  if (i % 2 === 0) {
    title.style.backgroundColor = 'red';
  } else {
    title.style.backgroundColor = 'green';
  }
});

// 1.4.3. Adding Style Font Size

titles.forEach((title, i) => {
  if (i % 2 === 0) {
    title.style.fontSize = '20px';
  } else {
    title.style.fontSize = '30px';
  }
});
