const button = document.querySelector('.button');
const body = document.querySelector('body');

// Add an event listener to the 
// button for the 'click' event , an event listener is a function 
// that will be called when the event occurs

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
button.addEventListener('click' , (item) => {  
    if(item.target.id === 'grey'){
        body.style.backgroundColor = 'grey';
    }
    if(item.target.id === 'white'){
        body.style.backgroundColor = 'white';
    }
    if(item.target.id === 'blue'){
        body.style.backgroundColor = 'blue';
    }
    if(item.target.id === 'yellow'){
        body.style.backgroundColor = 'yellow';
    }

  })
})
