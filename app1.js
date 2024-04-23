// PROVIDED BY https://www.youtube.com/watch?v=7VjQcGJO1Ew
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

//declares values to help the computer know what slide/image the user is on
var startNum = 8;
var secondNum;
function colorChangeNext() {
    // gets the element of the text the user was previously on and hides it
    var old = document.getElementById(startNum)
    old.style.visibility = 'hidden'
    //adds a 1 to the id to help it match with the text (check HTML for clarification)
    var neww = startNum + "1"
    //gets the element of where the two linkable logos are and hides it
    var old1 = document.getElementById(neww)
    old1.style.visibility = 'hidden'
    //check if the slide is on its last image or not
    if (startNum == 8) {
        //sets the slide count back to the beginning if its at the end
        startNum = 1;
        //gets the text of the current slide and makes it visible
        var current = document.getElementById(startNum)
        current.style.visibility = "visible";
        //gets the linkable logos of the current slide and makes it visible
        var gitCurrent = document.getElementById(startNum + "1")
        gitCurrent.style.visibility = "visible";
    }
    else {
        // increases the slide count by 1
        startNum += 1
        //gets the text of the current slide and makes it visible
        var current = document.getElementById(startNum)
        current.style.visibility = "visible";
        //gets the linkable logos of the current slide and makes it visible
        var gitCurrent = document.getElementById(startNum + "1")
        gitCurrent.style.visibility = "visible";
    }
}
function colorChangePrev() {
    //same process as the next button function, but rather just decreases the startNum instead of increase because the slideshow is technically going backwards
    var old = document.getElementById(startNum)
    old.style.visibility = 'hidden'
    var newww = startNum + "1"
    var old2 = document.getElementById(newww)
    old2.style.visibility = 'hidden'
    if (startNum == 1) {
        startNum = 8;
        var current = document.getElementById(startNum)
        current.style.visibility = "visible";
        var gitCurrent = document.getElementById(startNum + "1")
        gitCurrent.style.visibility = "visible";
    }
    else {
        startNum -= 1
        var current = document.getElementById(startNum)
        current.style.visibility = "visible";
        var gitCurrent = document.getElementById(startNum + "1")
        gitCurrent.style.visibility = "visible";
    }
}