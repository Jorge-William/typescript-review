// every time you want to use a variable, you have to initialize it first 
// to have a inference of its type
// but sometimes you want to declare a variable without initializing it
// and then initialize it later, this is called delayed initialization
// in TypeScript, you can do this by using the 'let' keyword without assigning a value to it initially.
// This allows you to declare a variable that you will assign a value to later

let colors: string[] = ['gray', 'blue', 'green', 'red', 'yellow'];
let findedColor; // delayed initialization

for (let i = 0; i < colors.length; i++) {
    if (colors[i] === 'red') {
        findedColor = colors[i];
        break; // Exit the loop once the color is found
    }
}

console.log(findedColor); // Output: red type is inferred as 'any' since it was not initialized
