const userEmail = "user@example.com"

if (userEmail) {
    console.log("Email is defined")
} else {
    console.log("Email is not defined")
}

// In JavaScript, the following values are considered "falsy":
// false , 0, -0, 0n, "", null, undefined, NaN

// In JavaScript, the following values are considered "truthy":
// true, {}, [], 1, -1, "0", "false", new Date(), function() {}, /regex/, Infinity, -Infinity

if (userEmail.length > 0) {
    console.log("Email is not empty")
} else {
    console.log("Email is empty")
}

if (Object.keys(userEmail).length > 0) {
    console.log("Email object has properties")
}   

// Nullish coalescing operator (??) - returns the right-hand operand when the 
// left-hand operand is null or undefined, otherwise returns the left-hand operand.
const userName = null;
const defaultName = "Guest";
const displayName = userName ?? defaultName;
console.log(displayName); // Output: Guest

const userAge = undefined;
const defaultAge = 18;
const displayAge = userAge ?? defaultAge;
console.log(displayAge); // Output: 18

const userCity = "New York";
const defaultCity = "Unknown";
const displayCity = userCity ?? defaultCity;
console.log(displayCity); // Output: New York   

// Optional chaining operator (?.) - allows you to access properties of an object without
// having to check if the object is null or undefined first.
const user = {
    name: "John",
    address: {
        city: "New York",
        zip: "10001"
    }
};

const userZip = user.address?.zip;
console.log(userZip); // Output: 10001

const userCountry = user.address?.country;
console.log(userCountry); // Output: undefined  

// Ternary operator (condition ? exprIfTrue : exprIfFalse) - 
// allows you to write a concise if-else statement in a single line.
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Output: Welcome back!
