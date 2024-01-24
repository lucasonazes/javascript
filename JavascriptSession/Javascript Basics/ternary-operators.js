// ternary operators ? 'Valor para verdadeiro' : 'Valor para falso'


// Ternary Operation
const userScore = 500;
let userLevel = userScore >= 1000 ? 'VIP' : 'Default';


// Default Operation
if(userScore >= 1000) {
    userLevel = 'VIP';
}
else {
    userLevel = 'Default';
}

// Using OR 
userColor = null;
defaultColor = userColor || 'Black';