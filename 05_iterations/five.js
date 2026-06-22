// For each loop

const colors = ["red", "green", "blue"];

colors.forEach(function (color) {
    console.log(color);
});

// Output:
// red
// green
// blue


const coding = ["JavaScript", "Python", "Java"];
coding.forEach((language, index, array) => {
    console.log(`${index}: ${language}` + ` (Array: ${array.join(", ")})`);
});

// Output:
// 0: JavaScript (Array: JavaScript, Python, Java)
// 1: Python (Array: JavaScript, Python, Java)
// 2: Java (Array: JavaScript, Python, Java)

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number * 2);
});

// Output:
// 2
// 4
// 6
// 8
// 10
 
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
]; // An array of objects representing people

people.forEach((person) => {
    console.log(`${person.name} is ${person.age} years old.`);
});

// Output:
// Alice is 25 years old.
// Bob is 30 years old.
// Charlie is 35 years old.
