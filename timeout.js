setTimeout(() => {
  console.log("This message appears after 3 seconds");
}, 3000);


function greet() {
  console.log("Greetings from the timeout function!");
}

setTimeout(greet, 2000);


setTimeout(function() {
  console.log("This runs after a short delay!");
}, 1200);


for (let i = 1; i <= 3; i++) {
  console.log("Counting:", i);
}
