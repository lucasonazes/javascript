const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const createUppercase = () => String.fromCharCode(rand(65, 91));
const createLowercase = () => String.fromCharCode(rand(97, 123));
const createNumber = () => String.fromCharCode(rand(48, 58));
const simbol = ',.;~^[]{}!@#$&*()_+-';
const createSimbol = () => simbol[rand(0, simbol.length)];

export default function createPassword(amount, uppercase ,lowercase, number, simbol) {
    const passwordArray = [];
    amount = Number(amount);

    for(let i = 0; i < amount; i++) {
        uppercase && passwordArray.push(createUppercase());
        lowercase && passwordArray.push(createLowercase());
        number && passwordArray.push(createNumber());
        simbol && passwordArray.push(createSimbol());
    }

    return passwordArray.join('').slice(0, amount);
}