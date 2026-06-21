function sayMyName(name) {
    console.log(name)
}

//sayMyName("Arpit") // Arpit

function addTwoNumbers(num1, num2) {
    return num1 + num2
}

console.log(addTwoNumbers(2, 3)) // 5


function loginUserMessage(username ) { // default parameter value is "Guest"
    if(!username) {
        console.log("Please provide a username")
        return
    }
    return `${username} just logged in`
}


console.log(loginUserMessage()) // Please provide a username
console.log(loginUserMessage("Arpit")) // Arpit just logged in 

function calculateCartPrice(...prices) { // rest parameter is used to pass an indefinite 
// number of arguments to a function
    let total = 0
    for(let price of prices) {
        total += price
    }
    return total
}

console.log(calculateCartPrice(10, 20, 30, 40)) // 100

const user = {
    name: "Arpit",
    price: 299,
}

function HandleObject(anyObject)  { // destructuring the object passed as an argument to the function
       console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`) // Arpit and price is 299
}

HandleObject(user) // passing an object to the function 

const mynewArray = [1, 2, 3, 4, 5]

function HandleArray(getArray) { // destructuring the array passed as an argument to the function
    const [first, second, third] = getArray
    console.log(`First element is ${first}, second element is ${second} and third element is ${third}`) 
    // 1, 2, 3
    return getArray[0] + getArray[1] + getArray[2] + getArray[3] + getArray[4]
}

console.log(HandleArray(mynewArray)) // handling the array passed as an argument 
// to the function and returning the sum of all elements in the array