// for loop All codes

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Output:
// 0
// 1
// 2
// 3
// 4

for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

// Output:
// 0
// 2
// 4
// 6
// 8

for (let i = 5; i > 0; i--) {
    console.log(i);
}

// Output:
// 5
// 4
// 3
// 2
// 1

const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Output:
// apple
// banana
// cherry

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// Output:
// i: 0, j: 0
// i: 0, j: 1
// i: 1, j: 0
// i: 1, j: 1
// i: 2, j: 0
// i: 2, j: 1       

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue; // Skip the rest of the loop when i is 3
    }
    console.log(i);
}

// Output:
// 0
// 1
// 2
// 4

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Exit the loop when i is 3
    }
    console.log(i);
}

// Output:
// 0
// 1
// 2

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Exit the loop when i is 3
    }
    console.log(i);
}

// Output:
// 0
// 1
// 2

