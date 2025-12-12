let hello = () => {
    console.log("Hello! This is a simple arrow function.");
}

hello();


let multiply = (x, y) => x * y;

console.log(multiply(3, 4));


let cube = num => {
    console.log("The cube of the number is:", num);
    return num * num * num;
}

console.log(cube(3));


let noPara = () => {
    console.log("Arrow function with no parameters.");
}

noPara();


let onePara = color => {
    console.log("Your favorite color is:", color);
}

onePara("blue");
