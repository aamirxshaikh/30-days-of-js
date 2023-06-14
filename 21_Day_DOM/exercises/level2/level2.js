// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach((p) => {
  p.style.fontFamily = 'Arial, sans-serif';
  p.style.fontSize = '22px';
  p.style.color = 'red';
  p.style.backgroundColor = 'black';
  p.style.border = '2px dashed blue';
});

// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

paragraphs.forEach((p, i) => {
  if (i % 2 === 0) {
    p.style.color = 'green';
  } else {
    p.style.color = 'red';
  }
});

// 3. Set text content, id and class to each paragraph

paragraphs.forEach((p, i) => {
  const ordinals = ['first', 'second', 'third', 'fourth'];
  const ordinal = ordinals[i];

  p.textContent = `${
    ordinal.charAt(0).toUpperCase() + ordinal.slice(1)
  } Paragraph`;

  p.setAttribute('class', 'paragraph');

  p.setAttribute('id', `${ordinal}-paragraph`);
});
