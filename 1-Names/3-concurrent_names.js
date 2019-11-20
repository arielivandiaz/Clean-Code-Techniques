//Wrong
var day1 = 'monday';
var day_5 = "FRI";
var week = [day1, 'tuesday', 'Wednesday', 'Thursday', day_5, 'SATURDAY', 'sunday'];

for (let day = 0; day < 7; day++) console.log(week[day]);

function search(value) {
    for (let day = 1; day <= 7; day++) if (week[day] == value) console.log("HAPPY DAY = ", day);
}

search(day_5);

console.log('*********************************************************'); // I'm a separator!! =)

//Solution #1
const WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; //Is global, and is static

var happy_day = WEEK[4];

for (day in WEEK) console.log(WEEK[day]);

let searchHappyDay = (value) => {
    for (day in WEEK)
        if (WEEK[day] == value) {
            console.log("HAPPY DAY = ", day);
            return true;
        }
    return false;
}

searchHappyDay(happy_day);

console.log('*********************************************************'); // I'm a separator!! =)

//Solution #2
//const WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; //Is global, and is static

var happy_day = WEEK[4];

WEEK.forEach(day => console.log(day));

//console.log(WEEK.find(day => day == happy_day));
console.log("HAPPY DAY = ",WEEK.findIndex(day => day == happy_day));



