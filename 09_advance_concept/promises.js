 const promiseOne  = new Promise(function(resolve, reject) {
    // Do async task
    // DB calls, cryptography, network calls
    setTimeout(() => {
        resolve('Promise One Resolved');
    }, 1000);
})

promiseOne.then((message) => {
    console.log('Promise One then: ', message);
})

new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('Promise Two Resolved');
    }, 2000);
}).then((message) => {
    console.log('Promise Two then: ', message);
})


const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve({username: 'John', email: 'john@example.com'});
    }, 3000);
})

promiseThree.then((user) => {
    console.log('Promise Three then: ', user);
})  

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function () {
        let error = false;
        if(!error) {
            resolve({username: 'John', email: 'john@example.com'});
        } else {
            reject('Error: Something went wrong');
        }
    }, 4000);
})

promiseFour
.then((user) => {
    console.log('Promise Four then: ', user);
    return user.username;
})
.then((username) => {
    console.log('Promise Four second then: ', username);
})
.catch((error) => {
    console.log('Promise Four catch: ', error);
})  
.finally(() => {
    console.log('Promise Four finally: This will always run');
})  

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function () {
        let error = false;
        if(!error) {
            resolve({username: 'John', password: '123'});
        } else {
            reject('Error: Something went wrong');
        }
    }, 5000);
})

async function consumePromiseFive() {
    try {
        const user = await promiseFive;
        console.log('Promise Five then: ', user);
    } catch (error) {
        console.log('Promise Five catch: ', error);
    } finally {
        console.log('Promise Five finally: This will always run');
    }
}

consumePromiseFive();


async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log('All Users: ', data);
    } catch (error) {
        console.log('Error: ', error);
    }
}

getAllUsers();




fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log('All Users: ', data);
})
.catch((error) => {
    console.log('Error: ', error);
})
.finally(() => {
    console.log('This will always run');
})