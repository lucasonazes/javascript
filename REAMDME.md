/*-----------Basic----------------------*/

confirm: Create a block that returns true or false;

prompt: Return a value type string;

alert: Browser create an alert with a value;

${variable}: Concatenates the text without having close the string
ex: 
alert('The result is: &{result}') 
= The result is 10;


/*------------String---------------------*/

charAt[]: Gets the element in a especific position;

indexOf: Gets the index of the element (Where it is in the variable)
ex: 
variable = "A fish in the sea"
console.log(variable.indexOf("fish")) 
= 2;

lastIndexOf: Starts from the end

lenght: Gets the size of the variable
ex: 
variable = "text"
console.log(variable.lenght)
= 4;

toString: Convert number to string;


/*---------Number------------------------*/

Number: Convert from string to number;

isInteger: Checks wether the number is integer or not;

isNaN: Checks wether the number is NaN(Not a number) or not;

parseInt: Convert a number to an integer;

parseFloat: Convert a number to a float;


/*---------Formatting-------------------*/

toFixed: Only shows the determined number of decimal places;
ex:
n1 = 10.1542664
console.log(n1.toFixed(2))
= 10.15;


/*-----------Math---------------------*/
OBS: (Use the object Math before | ex: Math.round);

floor: Round down a number to the closest integer;

ceil: Round up a number to the closest integer;

round: Round a number to the closest integer;

random: Generates a random number;


/*-----------Array------------------*/

push: Add an element at the end of the array
ex:
variable = ['luis','thiago','lucas']
variable.push('otávio)
= ['luis','thiago','lucas','otavio'];

unshift: Add an element at the beginning of the array;

pop: Remove the element at the end of the array;

shift: Remove the element at the beginning of the array;

delete: Remove the element without change the index of the array;




