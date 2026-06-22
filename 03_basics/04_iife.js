// Immediately Invoked Function Expression (IIFE)
// A function that is defined and immediately called
(function test() {
    // named IIFE
    console.log("DB Connected");
})(); // This will log "DB Connected" immediately when the code runs
// ()() Syntax

// IIFEs can also be used to create a new scope and avoid polluting the global namespace

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ("MySQL"); // This will log "DB CONNECTED TWO MySQL" immediately when the code runs

(function() {
    console.log("This is an IIFE");
})();

// IIFEs are often used to create a new scope and avoid polluting the global namespace
(function() {
    var message = "Hello, I am an IIFE!";
    console.log(message);
})();
