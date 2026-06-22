const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = myNums.filter(num => {
    return num % 2 === 0;
});

console.log(evenNumbers);

// Output:
// [2, 4, 6, 8, 10]

const oddNumbers = myNums.filter(num => num % 2 !== 0);

console.log(oddNumbers);

// Output:
// [1, 3, 5, 7, 9]

const newNums = []
myNums.forEach(num => {
    if (num > 5) {
        newNums.push(num); // Add numbers greater than 5 to the newNums array
    }
});

console.log(newNums);

// Output:
// [6, 7, 8, 9, 10]



const books=[
    { title: "Book 1", author: "Author A", year: 2020 },
    { title: "Book 2", author: "Author B", year: 2018 },
    { title: "Book 3", author: "Author C", year: 2021 },
    { title: "Book 4", author: "Author D", year: 2019 }
];

const recentBooks = books.filter(book => book.year >= 2020);

console.log(recentBooks);

// Output:
// [
//   { title: 'Book 1', author: 'Author A', year: 2020 },
//   { title: 'Book 3', author: 'Author C', year: 2021 }
// ]            


// Ussing return statement in filter method

const userBooks = books.filter(book => {
    if (book.year >= 2020) {
        return true; // Include books published in or after 2020
    }
    return false; // Exclude books published before 2020
});

console.log(userBooks);

// Output:
// [
//   { title: 'Book 1', author: 'Author A', year: 2020 },
//   { title: 'Book 3', author: 'Author C', year: 2021 }
// ]    