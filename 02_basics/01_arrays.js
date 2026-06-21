// array

const myArr=[0,1,2,3,4]

const myArr2= new Array(1,2,3,4)

console.log(myArr[1]);


//Arrays Method

myArr.push(6)
console.log(myArr);
myArr.pop()

console.log(myArr.includes(8));
console.log(myArr.indexOf(45));

const newArr = myArr.join()

console.log(myArr)
console.log(typeof newArr)

//slice , splice


const arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 4));


arr.splice(1, 2);

console.log(arr);
