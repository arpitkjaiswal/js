// # Primitive


// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100


const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const andotherId = Symbol('123')

console.log(id === andotherId);

const bigNumber=456235234263488n

console.log(typeof bigNumber);


// Reference (Non primitive)

// Arrays, Objects, Functions


const heros = ["batman", "SuperHero", "Spiderman"]

let myObj={
    name: "Arpit",
    Age: 19,
}

const myFunction = function(){

    console.log("Hello world");
    
}





// +++++++++++++++++++++++++++++++++++++++++++++++++++


// stack (primitive) , Heap (Non-Primitive)

let myYoutubename = "Luffy"
let anotherName = myYoutubename
console.log(anotherName);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.email="Arpit@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);

 
 