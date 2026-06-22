const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.map(num => num * 2);

console.log(newNums);

// Output:
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

//Using for each loop to achieve the same result

const doubledNumbers = [];
myNumbers.forEach(num => {
    doubledNumbers.push(num * 2);
});

console.log(doubledNumbers);

// Output:
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const newNumbers = myNumbers.map(num => num*10)
                            .map(num => num + 5); // Chaining map methods to first multiply by 10 and then add 5

console.log(newNumbers);

// Output:
// [15, 25, 35, 45, 55, 65, 75, 85, 95, 105]