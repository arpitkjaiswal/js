const myNums = [1, 2, 3, 4, 5];

const myTotal = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// The reduce method takes a callback function and an initial value (0 in this case).
// The callback function takes two parameters: the accumulator 
// (which accumulates the result) and the currentValue (the current element being processed).
// The reduce method iterates through each element in the myNums array, adding it to the accumulator,
//  and returns the final total.              

console.log(myTotal);

// Output:
// 15

const shoppingCart = [
    { item: "Book", price: 10 },
    { item: "Pen", price: 2 },
    { item: "Notebook", price: 5 }
];

const totalPrice = shoppingCart.reduce((total, product) => total + product.price, 0);

console.log(totalPrice);

// Output:
// 17

const numbers = [1, 2, 3, 4, 5];

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(product);

// Output:
// 120

const words = ["Hello", "World", "JavaScript"];

const sentence = words.reduce((accumulator, currentValue) => accumulator + " " + currentValue);

console.log(sentence);

// Output:
// Hello World JavaScript

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const totalAge = people.reduce((total, person) => total + person.age, 0);

console.log(totalAge);

// Output:
// 90           