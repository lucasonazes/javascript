const h1 = document.querySelector(".container h1");
const date = new Date();

function getWeekDayString(weekDay) {
    let weekDayString;

    switch(weekDay) {
        case 0:
            weekDayString = 'Sunday'
            return weekDayString;
        case 1:
            weekDayString = 'Monday'
            return weekDayString;
        case 2:
            weekDayString = 'Tuesday'
            return weekDayString;
        case 3:
            weekDayString = 'Wednesday'
            return weekDayString;
        case 4:
            weekDayString = 'Thursday'
            return weekDayString;
        case 4:
            weekDayString = 'Friday'
            return weekDayString;
        case 4:
            weekDayString = 'Saturday'
            return weekDayString;
        default:
            weekDayString = ''
            return weekDayString;
    }
}
function getMonthString(month) {
    let monthString;

    switch(month) {
        case 0:
            monthString = 'January'
            return monthString;
        case 1:
            monthString = 'February'
            return monthString;
        case 2:
            monthString = 'March'
            return monthString;
        case 3:
            monthString = 'April'
            return monthString;
        case 4:
            monthString = 'May'
            return monthString;
        case 5:
            monthString = 'June'
            return monthString;
        case 6:
            monthString = 'July'
            return monthString;
        case 7:
            monthString = 'August'
            return monthString;
        case 8:
            monthString = 'September'
            return monthString;
        case 9:
            monthString = 'October'
            return monthString;
        case 10:
            monthString = 'November'
            return monthString;
        case 11:
            monthString = 'December'
            return monthString;
    }
}

function createDate(date) {
    const weekDay = date.getDay();
    const month = date.getMonth();

    const weekDayString = getWeekDayString(weekDay);
    const monthString = getMonthString(month);

    console.log(weekDayString, monthString);
}

h1.innerHTML = createDate(date);

