const paragraphs = document.querySelector('.paragraphs');
const allParagraphs = document.querySelectorAll('p');

const bodyStyle = getComputedStyle(document.body);
const bodyBackgroundColor = bodyStyle.backgroundColor;

for (let p of allParagraphs) {
    p.style.backgroundColor = bodyBackgroundColor;
    p.style.color = '#ffffff';
}