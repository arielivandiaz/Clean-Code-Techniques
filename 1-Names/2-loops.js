
// Wrong
var i = 0;
var cars = 10;
var cars_max = 8;

for (let i = 1; i <= cars_max; i++) {
    console.log("Car #" + i + " are inside");
}
console.log(i + " cars inside");


// Solution
var CARS_MAX = 8; // Global Variable, like static

var count = 0,
    cars = 10;

for (let i = 0; i < CARS_MAX; i++) {
    console.log("Car #" + (i + 1) + " are inside");
    count += 1;
}
console.log(count + " cars inside");

