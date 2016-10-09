// basic pixel element as a div
var pixel = document.createElement('div');
pixel.setAttribute('class', 'pixel');

// this fills the site with pixel elements
function createPixels() {

   // counts the amount of pixels needed to fill the whole page
   var boxCount = (window.innerWidth * window.innerHeight) / 30;

   for(var i = 0; i < boxCount; i++)
      document.body.appendChild(pixel.cloneNode(true));
}

// this pics a random color from the color array
function randColor() {
   color = [
      '#001F3F',
      '#0074D9',
      '#7FDBFF',
      '#39CCCC',
      '#2ECC40',
      '#01FF70',
      '#FFDC00',
      '#FF851B',
      '#FF4136',
      '#F012BE'
   ]

   return color[Math.floor(Math.random() * (color.length - 1))]
}

createPixels();

// select all pixel elements
var divList = document.querySelectorAll('div.pixel');

// loop through the nodelist 'divlist' and add
// an event listener to every node
for(var i = 0; i < divList.length; i++) {
   divList[i].addEventListener('mouseenter', function() {
      //this.style.WebkitTransition = 'all ease-in 0 s';
      this.style.transitionDelay = '0s'
      this.style.background = randColor();
   });

   divList[i].addEventListener('mouseleave', function() {
      //this.style.WebkitTransition = 'all ease-in 1s';
      this.style.transitionDelay = '1s'
      this.style.transitionTimingFunction = 'ease-out';
      this.style.background = "none";
   });
}
