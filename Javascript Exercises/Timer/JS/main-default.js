// Fommating the hour
function setTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

// Selecting HTML elements
const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
// creating variables
let seconds = 0;
let timer;

// Creating Funtions
function startClock(){
    timer = setInterval(function() {
    seconds++;
    clock.innerHTML = setTimeFromSeconds(seconds);
    }, 1000);
}

// Tracking the events
document.addEventListener('click', function(e){
    el = e.target;

    if(el.classList.contains('start')) {
        clearInterval(timer);
        startClock();
        clock.classList.remove('stoped') 
    }
    if(el.classList.contains('pause')) {
        clearInterval(timer);
        clock.classList.add('stoped')
    }
    if(el.classList.contains('reset')) {
        clock.classList.remove('stoped')
        clearInterval(timer);
        clock.innerHTML = '00:00:00';
        seconds = 0;
    }
})