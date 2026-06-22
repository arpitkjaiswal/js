// if

if (true){

}

const temperature = 30;

if (temperature > 25) {
    console.log("It's hot outside!");
} else {
    console.log("It's not too hot.");
}


const score = 85;
if (score > 90) {
    const Power = "fly"
    console.log("You have a superpower: " + Power);
} else if (score > 80) {
    const Power = "invisibility"
    console.log("You have a superpower: " + Power);
} else {
    const Power = "none"
    console.log("You have no superpowers.");
}
    
const balance = 1000;
// if (balance > 500) console.log("You have a healthy balance."),
// console.log("Keep saving!");

if (balance > 500) {
    console.log("You have a healthy balance.");
} else if (balance > 100) {
    console.log("You have a moderate balance.");
} else {
    console.log("Your balance is low.");
}

// && , ||
const age = 25;
if (age >= 18 && age <= 65) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

const isStudent = true;
const hasDiscount = false;

if (isStudent || hasDiscount) {
    console.log("You are eligible for a discount.");
} else {
    console.log("You are not eligible for a discount.");
}


