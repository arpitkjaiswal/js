//while loop


while (true) {
    let input = prompt("Enter a number (or type 'exit' to quit):");
    
    if (input.toLowerCase() === 'exit') {
        console.log("Exiting the loop.");
        break; // Exit the loop if the user types 'exit'
    }
    
    let number = parseFloat(input);
    
    if (isNaN(number)) {
        console.log("That's not a valid number. Please try again.");
        continue; // Skip to the next iteration if the input is not a number
    }
    
    console.log(`You entered: ${number}`);
}

// Output will depend on user input 


// while loop Explanations:

const index = 0;
while (index < 5) {
    console.log(index);
    index++; // Increment the index to avoid an infinite loop
}

// Output:
// 0
// 1
// 2
// 3
// 4

// do...while loop

let count = 0;
do {
    console.log(count);
    count++;
} while (count < 5);

// Output:
// 0
// 1
// 2
// 3
// 4        


