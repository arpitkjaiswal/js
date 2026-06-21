const name = "Arpit"
const repoCount = 50

console.log(`Hello I am ${name} and my repoCount is ${repoCount}`)


const gameName = new String('Arpit   Gaming')


console.log(gameName.length)
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(3));
console.log(gameName.indexOf("g"));

const newString = gameName.substring(0,6)
console.log(newString)

const anotherString = gameName.slice(-8,7)
console.log(anotherString);

const newStringOne = "    Arpit    "
console.log(newStringOne.trim())


const url="https://Arpit.com//webpage%20odin"

console.log(url.replace('%20','-'))

console.log(url.includes('Arpit'));

console.log(gameName.split(" "));


