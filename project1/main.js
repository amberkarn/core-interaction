console.log("hello!");
let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);

const numberThree = document.querySelector('.numberThree');


numberThree.addEventListener('mouseover', function() {
    
    this.classList.add('unblur');
});


numberThree.addEventListener('mouseout', function() {
   
    this.classList.remove('unblur');
});




document.documentElement.style.cursor = 'url(/project1/imgs/blackcursor.png), auto';

const slider = document.getElementById("slider");
const text = document.getElementById("text");

slider.addEventListener("input", function() {
  // Calculate font size based on slider value (0 to 3em)
  const fontSize = (this.value / 100) * 3;
  // Set the font size of the text
  text.style.fontSize = fontSize + "em";
})



