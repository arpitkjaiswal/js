// const tinderUser = {}; an empty object created using object literal syntax



 const tinderUser = new Object(); //an empty object created using the Object constructor
tinderUser.id = "123abc";
tinderUser.name = "Arpit";
tinderUser.isLoggedIn = false;

console.log(tinderUser)

const regularUser = {
    email: "some@example.com",
    fullname: {
        userFullName: {
            firstName: "Arpit",
            lastName: "Jaiswal"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName) // Arpit


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = Object.assign({}, obj1, obj2) // merging two objects into a new object , 
// // {} is used to create a new object and assign the properties of obj1 and obj2 to it    
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj4 = {...obj1, ...obj2} // merging two objects into a new object using spread operator
// console.log(obj4) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const user = [
    {
        id: 1,
        email: "some@example.com"
    },
    {
        id: 2,
        email: "another@example.com"
    }
] // array of objects

// user[1].email just like we access the array elements using index,
// we can access the object properties using dot notation or bracket notation 
console.log(tinderUser)


// console.log(Object.keys(tinderUser)) // returns an array of keys of the object
// console.log(Object.values(tinderUser)) // returns an array of values of the object
// console.log(Object.entries(tinderUser)) // returns an array of key-value pairs of the object

// console.log(tinderUser.hasOwnProperty("name")) // returns true if the object has the property, false otherwise


const course = {
    courseName: "JavaScript",
    price: 299,
    courseInstructor: "Arpit Jaiswal"
}

const {courseInstructor : instructor

} = course // destructuring the object to get the value of courseInstructor property
console.log(instructor) // Arpit Jaiswal

// for (let key in course) {
//     console.log(key) // returns the keys of the object
//     console.log(course[key]) // returns the values of the object
// }


const navbar = ({company, location}) => { // destructuring the object passed as an argument to the function

}
navbar({company: "amazon", location: "india"}) // passing arguments to the function

// {
//     name: "Arpit",
//     age: 22,
//     isLoggedIn: false
//     coursename: "JavaScript",
//     price: 299,
//     courseInstructor: "Arpit Jaiswal"
// }


[
   {},
   {},
   {}
]