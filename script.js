// setInterval(() => {
//    let dytext = document.getElementById("dytext");
// let a=["Hi, I am Ashray","Hello, Ashray here","HI.......!","I can see you..","You Allright!"]
// let c=Math.floor(Math.random(a)*a.length)
// dytext.innerText=a[c]; 
// }, 5000);


// let txprint = () => {
// let a = ["h", "i", ",", "I", "a", "m", "A", "s", "h", "r", "a", "y"];
//     let c=Math.floor(Math.random(a)*a.length)
//     return a[c]
// };

// setInterval(() => {
//   document.getElementById("dytext").innerText=(txprint());
// }, 2000);

// trying to make the text letter by letter appearing effect by own
const words = ["Hi, I am Ashray.","Hello There!","Explore Me.","Here to build","Hey, it’s Ashray","Hands-on builder","Hack. Build. Ship.","Hello, world","Hi, meet Ashray","Hardwired to create","Hey, welcome in","High-impact code"];
const speed = 180;  // Speed of typing in milliseconds
const eraseSpeed = 100; // Speed of erasing in milliseconds
const delayBetweenWords = 2000; // Pause before erasing

let wordIndex = 0;
let charIndex = 0;
let isErasing = false;

function type() {
  const target = document.getElementById("dytext");
  const currentWord = words[wordIndex];

  if (!isErasing) {
    // Add next letter
    target.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isErasing = true;
      setTimeout(type, delayBetweenWords); // Pause at the end of the word
      return;
    }
  } else {
    // Remove last letter
    target.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 1) {
      isErasing = false;
      wordIndex = (wordIndex + 1) % words.length; // Move to next word (loops back)
    }
  }

  // Determine timing based on typing vs erasing
  setTimeout(type, isErasing ? eraseSpeed : speed);
}

// Start the animation when the page loads
document.addEventListener("DOMContentLoaded", type);

// this above code is written by ai for understanding