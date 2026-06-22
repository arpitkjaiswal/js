// for in loop All codes

const person = { name: "John", age: 30, city: "New York" };

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Output:
// name: John
// age: 30
// city: New York

const fruits = ["apple", "banana", "cherry"];

for (const index in fruits) {
    console.log(`Index: ${index}, Fruit: ${fruits[index]}`);
}       

// Output:      
// Index: 0, Fruit: apple
// Index: 1, Fruit: banana
// Index: 2, Fruit: cherry


// Arrays

const numbers = [1, 2, 3, 4, 5];

for (const index in numbers) {
    console.log(`Index: ${index}, Number: ${numbers[index]}`);
}

// Output:
// Index: 0, Number: 1
// Index: 1, Number: 2
// Index: 2, Number: 3
// Index: 3, Number: 4
// Index: 4, Number: 5      



