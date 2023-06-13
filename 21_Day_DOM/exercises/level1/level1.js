// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname)

const firstTag = document.querySelector('p');
console.log(firstTag);

// 2. Get each of the the paragraph using document.querySelector('#id')

const firstId = document.querySelector('#first-paragraph');
const secondId = document.querySelector('#second-paragraph');
const thirdId = document.querySelector('#third-paragraph');
const fourthId = document.querySelector('#fourth-paragraph');

console.log(firstId, secondId, thirdId, fourthId);

// 3. Get all the p as nodeList using document.querySelectorAll(tagname)

const allTags = document.querySelectorAll('p');
console.log(allTags);

// 4. Loop through the nodeList and get the text content of each paragraph

allTags.forEach((tag) => console.log(tag.textContent));

// 5. Set a text content to fourth paragraph as "Fourth Paragraph"

allTags[3].textContent = 'Fourth Paragraph';

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods

allTags[3].className = 'paragraph';
allTags[3].id = 'fourth-paragraph';

allTags[3].setAttribute('class', 'paragraph');
allTags[3].setAttribute('id', 'active');

allTags[0].classList.add('paragraph', 'focus');
allTags[1].classList.add('paragraph', 'focus');
allTags[2].classList.add('paragraph', 'focus');
allTags[3].classList.add('focus');

allTags[3].classList.remove('focus');

// 7. Write a function that selects the first <p> element and changes its text content to "Hello, World!".

firstTag.textContent = 'Hello, World!';

// 8. Implement a function that selects all the <a> elements with a class of "external-link" and adds the attribute target="_blank" to them.

function setExternalLinksTargetBlank() {
  const links = document.querySelectorAll('a.external-link');
  links.forEach((link) => {
    link.setAttribute('target', '_blank');
  });
}

setExternalLinksTargetBlank();
