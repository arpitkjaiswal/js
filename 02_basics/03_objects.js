// singeleton
// object.create

// Object literal

const mySym = Symbol("key1")

const JsUser ={
    name: "Arpit",
    "full name": "Arpit Jaiswal",
    [mySym]: "myValue1", // computed property name
    age: 30,
    location: "Bangalore",
    email: "arpit@example.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "arpit@newemail.com" 
// console.log(JsUser.email)
// Object.freeze(JsUser) // freeze the object
// JsUser.email = "arpit@oldemail.com" // this will not change the email as the object is frozen
// console.log(JsUser)


// functions

JsUser.greetUser = function() {
    console.log(`Hello JsUser, welcome back!`);
}

JsUser.greetUser()

JsUser.greetUser2 = function() {
    console.log(`Hello ${this.name}, welcome back!`); // this keyword refers to the object itself
}

JsUser.greetUser2()