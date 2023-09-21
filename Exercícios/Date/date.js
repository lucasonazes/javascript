/* The hard way */
const h1 = document.querySelector(".container h1");
const date = new Date();

function getWeekDayString(weekDay) {
const weekDayString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
return weekDayString[weekDay];
}

function getMonthString(month) {
const monthString = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
return monthString[month];
}

function createDate(date) {
    const weekDay = date.getDay();
    const month = date.getMonth();

    const weekDayString = getWeekDayString(weekDay);
    const monthString = getMonthString(month);

    return (
        `${weekDayString}, ${monthString} ${date.getDay()}, ` +
        `${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    );
}

h1.innerHTML = createDate(date);


/* The Easy way */
const h1 = document.querySelector(".container h1");
const date = new Date();

h1.innerHTML = date.toLocaleDateString('pt-BR', { dateStyle: 'full'});
