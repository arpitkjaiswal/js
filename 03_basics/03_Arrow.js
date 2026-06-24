const user = {
    username: "Luffy",
    price: 999,

    welcomeMessage: function() {
        console.log(`Welcome, ${this.username}!`);
    }
}

user.welcomeMessage(); // Welcome, Luffy!
user.username = "Zoro";
user.welcomeMessage(); // Welcome, Zoro!


// Arrow function 
// const tea = function(){
//      let username = "Nami";
//      console.log(`${this.username}!`);

// }

// tea(); // undefined! (because this refers to the global object, which does not have a username property)

// function tea(){
//     let username = "Nami";
//     console.log(`${this.username}!`);
// }

// tea(); // undefined! (because this refers to the global object, which does not have a username property)

// const tea = () => {
//     let username = "Nami";
//     console.log(`${this.username}!`);
// }

// tea(); // undefined! (because this refers to the global object, which does not have a username property)


// () => {}
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4)); // 7

// Shorter syntax for single expression
const addTwoShort = (num1, num2) => num1 + num2;
console.log(addTwoShort(5, 6)); // 11


const addTwoShorter = (num1, num2) => (num1 +num2);
console.log(addTwoShorter(7, 8)); // 15

