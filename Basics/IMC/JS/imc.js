// Capture form submit event
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
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
    const bmi = getBMI(weight, height);

    const condition = getCondition(bmi);

    //create message
    const msg = `Your BMI is ${bmi} - ${condition}`;

    // Show the message
    setResult(msg, true);
});

// Calculate the BMI
function getBMI(weight, height) {
    bmi = weight / height ** 2;
    return bmi.toFixed(2);
}

// Define the condition
function getCondition(bmi) {
    const condition = ['Under weight', 'Normal weight', 'Overweight', 'Obesety I', 'Obesety II (severe)', 'Obesery III (morbid)'];

    if (bmi >= 39.9) return condition[5];
    if (bmi >= 34.9) return condition[4];
    if (bmi >= 29.9) return condition[3];
    if (bmi >= 24.9) return condition[2];
    if (bmi >= 18.5) return condition[1];
    if (bmi < 18.5) return condition[0];
}

// Create p
function createP() {
    const p = document.createElement('p');
    return p;
}

// Add the result
function setResult(msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = ``;

    const p = createP('p-result');
    p.innerHTML = msg;

    if (isValid){
        p.classList.add('p-result');
    }
    else {
        p.classList.add('bad-result');
    }

    result.appendChild(p);

    return result;
}