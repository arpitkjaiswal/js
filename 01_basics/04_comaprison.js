console.log( null > 0);  //false
console.log( null == 0); //false
console.log( null >= 0); //true


console.log( undefined > 0);  //false
console.log( undefined == 0); //false
console.log( undefined >= 0); //false

// === so it strictly checks for the value Does not allow any data type conversion
// == it coverts the data type and then checks the valuee
 
console.log("3"==3) // true
console.log("3"===3) // false

