// creates an element for the corresponding navbar elements
var resume = document.getElementById('resume')
// makes the code listen for when the user hovers over the corresponding text to the navbar
resume.addEventListener('mouseover', () => {
    //changes the color of the text to red
    resume.style.color = 'red';
    //makes the cursor pointer so the user knows they can click on it
    resume.style.cursor ='pointer';
});
// makes the code listen for when the user isn't hovering over the text anymore
resume.addEventListener('mouseout', () => {
    // changes the color of the text back to its normal color of white
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

// PROVIDED BY https://alvarotrigo.com/blog/progress-bar-css/
$(".animated-progress span").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress") + "%",
      },
      1000
    );
    $(this).text($(this).attr("data-progress") + "%");
  });




