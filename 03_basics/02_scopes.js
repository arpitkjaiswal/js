function test() {
    var x = 10;
    // console.log(x);
}

test();
// console.log(x); // Error


function one(){
    const username = "John";

    function two(){
        const website = "example.com";
        // console.log(username);
        // console.log(website);
    }
    two();
}
one();

// if (true) {
//     const username = "Alice";
//     if(username === "Alice") {
//         const message = "Hello, Alice!";
//         console.log(message);
//     }
//     // console.log(message); // Error
// }
// // console.log(username); // Error


//+++++++++++++++++++++++++ Interesting example +++++++++++++++++++++++++

function addone(value){
    return value + 1;
}
addone(5); // 6


const addtwo = function(value){
    return value + 2;
}
addtwo(5); // 7