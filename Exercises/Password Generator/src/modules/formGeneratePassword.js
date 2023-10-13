import createPassword from './generators';

const createdPasswordInput = document.querySelector('.generated-password');
const charactersAmount = document.querySelector('.characters-amount');
const chkUppercase = document.querySelector('.chk-uppercase');
const chkLowercase = document.querySelector('.chk-lowercase');
const chkNumber = document.querySelector('.chk-number');
const chkSimbol = document.querySelector('.chk-simbol');
const createdPassword = document.querySelector('.generate');

export default () => {
    createdPassword.addEventListener('click', () => {
        createdPasswordInput.innerHTML = generate();
    });
}

function generate() {
    const password = createPassword(
        charactersAmount.value,
        chkUppercase.checked,
        chkLowercase.checked,
        chkNumber.checked,
        chkSimbol.checked
    );
    
    return password || 'Nothing Selected';
}