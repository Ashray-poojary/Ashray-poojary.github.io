setInterval(() => {
   let dytext = document.getElementById("dytext");
let a=["hi,I am  Ashray","hello, I am Ashray","HI","I can see you","You allright"]
let c=Math.floor(Math.random(a)*a.length)
dytext.innerText=a[c]; 
}, 4000);


// let txprint = () => {
// let a = ["h", "i", ",", "I", "a", "m", "A", "s", "h", "r", "a", "y"];
//     let c=Math.floor(Math.random(a)*a.length)
//     return a[c]
// };

// setInterval(() => {
//   document.getElementById("dytext").innerText=(txprint());
// }, 2000);

// trying to make the text letter by letter appearing effect by own