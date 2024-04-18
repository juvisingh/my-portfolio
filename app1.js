const imageContainer = document.querySelector(".image-container");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let x = 0;

prev.addEventListener("click", () => {
  x = x + 45;
  rotate();
});

next.addEventListener("click", () => {
  x = x - 45;
  rotate();
});

function rotate() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

var resume = document.getElementById('resume')
resume.addEventListener('mouseover', () => {
    resume.style.color = 'red';
    resume.style.cursor ='pointer';
});
resume.addEventListener('mouseout', () => {
    resume.style.color = 'white';
});
var gallery = document.getElementById('gallery')
gallery.addEventListener('mouseover', () => {
    gallery.style.color = 'red';
    gallery.style.cursor ='pointer';
});
gallery.addEventListener('mouseout', () => {
    gallery.style.color = 'white';
});
var about = document.getElementById('about')
about.addEventListener('mouseover', () => {
    about.style.color = 'red';
    about.style.cursor ='pointer';
});
about.addEventListener('mouseout', () => {
    about.style.color = 'white';
});
var contact = document.getElementById('contact')
contact.addEventListener('mouseover', () => {
    contact.style.color = 'red';
    contact.style.cursor ='pointer';
});
contact.addEventListener('mouseout', () => {
    contact.style.color = 'white';
});