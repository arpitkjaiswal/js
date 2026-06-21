const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];

const dcHeroes = ["Superman", "Batman", "Flash", "Wonder woman", "Aquaman"];

// Accessing elements
console.log(marvelHeroes[0]); //

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes)

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)


const all_new_heroes = [...marvelHeroes, ...dcHeroes] // spread operator
console.log(all_new_heroes)

const another_array = [1, 2, 3, [4, 5, [6, 7]]];
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray(marvelHeroes)) // true
console.log(Array.from("Hello")) // ['H', 'e', 'l', 'l', 'o']

console.log(Array.from({name : "John "})) // [undefined]


let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3))    // [100, 200, 300]