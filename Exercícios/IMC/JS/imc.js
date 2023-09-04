// Capture form submit event
const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputWeight = e.target.querySelector('#weight');
    const inputHeight = e.target.querySelector('#height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    // Verify the values
    if (!weight) {
        setResult('Weight is invalid', false);
        return;
    }
    if (!height) {
        setResult('Height is invalid', false);
        return;
    }

    // Calculate the BMI
    getBMI(weight,height);

    console.log(bmi.toFixed(2));
});

// Calculate the BMI
function getBMI(weight,height){
    bmi = weight/height ** 2;
    return bmi.toFixed(2);
}
// Create p
function createP(){
    const p = document.createElement('p');
    return p;
}

// Add the result
function setResult(msg, isValid){
    const result = document.querySelector('#result');
    result.innerHTML = ``;

    const p = createP();
    p.innerHTML = msg;
    result.appendChild(p);
}
