let coordinates = '{"x": "10", "y": "20"}'; // String type
let parsedCoordinates = JSON.parse(coordinates);
console.log(parsedCoordinates); // Return type any

// To solve the issue, we can specify the type of the parsed object
interface Coordinates {
  x: number;
  y: number;
}

// or using a class
class Coordinates {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

let typedCoordinates: Coordinates = JSON.parse(coordinates);  // Now typedCoordinates is of type Coordinates
console.log(typedCoordinates); // Now we can access x and y with type safety