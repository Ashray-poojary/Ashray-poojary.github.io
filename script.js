setInterval(() => {
   let dytext = document.getElementById("dytext");
let a=["Hi, I am Ashray","Hello, Ashray here","HI.......!","I can see you..","You Allright!"]
let c=Math.floor(Math.random(a)*a.length)
dytext.innerText=a[c]; 
}, 5000);


// let txprint = () => {
// let a = ["h", "i", ",", "I", "a", "m", "A", "s", "h", "r", "a", "y"];
//     let c=Math.floor(Math.random(a)*a.length)
//     return a[c]
// };

// setInterval(() => {
//   document.getElementById("dytext").innerText=(txprint());
// }, 2000);

// trying to make the text letter by letter appearing effect by own