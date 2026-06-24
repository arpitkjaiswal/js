const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
         event.preventDefault();
const weight = parseFloat(document.querySelector('#weight').value);
const height = parseFloat(document.querySelector('#height').value);
const result = document.querySelector('#results');

if (isNaN(weight) || isNaN(height)) {
    result.innerHTML = 'Please enter valid numbers for weight and height.';
    return; 
}else {
    const bmi = weight / ((height / 100) ** 2);
   

if (bmi < 18.6) {
    result.innerHTML = `Your BMI is ${bmi.toFixed(2)} (Underweight)`;
} else if (bmi <= 24.9) {
    result.innerHTML = `Your BMI is ${bmi.toFixed(2)} (Normal)`;
} else {
    result.innerHTML = `Your BMI is ${bmi.toFixed(2)} (Overweight)`;
}
    
}

        

 
})

