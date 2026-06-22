// switch (expression) {
//     case value1:
//         // code to be executed if expression equals value1
//         break;
//     case value2:
//         // code to be executed if expression equals value2
//         break;
//     default:
//         // code to be executed if expression doesn't match any case
// }   // Syntax of switch statement in JavaScript

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Output: Wednesday
