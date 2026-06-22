// for of All codes

// [1, 2, 3, 4, 5] is an array of numbers

// [{}, {}, {}, {}, {}] is an array of objects

const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}

// Output:
// 1
// 2
// 3
// 4
// 5

const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
    console.log(fruit);
}

// Output:
// apple
// banana
// cherry

const greeting = "Hello";

for (const greet of greeting) {
    console.log(greet);
}

// Output:
// H
// e
// l
// l
// o

const person = { name: "John", age: 30, city: "New York" };

for (const key of Object.keys(person)) {
    console.log(`${key}: ${person[key]}`);
}

// Output:
// name: John
// age: 30
// city: New York



// Maps

const map = new Map();
map.set("name", "Alice");
map.set("age", 25);
map.set("city", "Los Angeles");

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// Output:
// name: Alice
// age: 25
// city: Los Angeles    



const myObject = {
    game1: "Chess",
    game2: "Checkers",
    game3: "Go"
};

for (const key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
}
