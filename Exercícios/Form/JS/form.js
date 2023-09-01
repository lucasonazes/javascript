//Scope created to avoid conflicts with global scope
function myScope(){
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    const people = [];

    function receiveEventForm(event) {
        event.preventDefault();

        const name = form.querySelector('.name');
        const lastName = form.querySelector('.lastName');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        people.push( {
            name: name.value,
            lastName: lastName.value,
            weight: weight.value,
            height: height.value
        });

        console.log(people);

        result.innerHTML += `<p>${name.value}, ${lastName.value}, ${weight.value}, ${height.value}</p>`
    }

    form.addEventListener('submit', receiveEventForm);
}
myScope();

//event.preventDefault(); - Prevent default actions from the browser
