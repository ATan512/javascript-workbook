'use strict'


//this part is from the arrays practice but is needed for this loops practice
const cars = ["Ford", "Tesla", "Chevy", "Jeep"];
console.log(cars);

const moreCars = ["Nissan", "Audi", "Volkswagon", "Honda"];
console.log(moreCars.length);

const totalCars = cars.concat(moreCars);
console.log(totalCars.indexOf("Honda"));
console.log(totalCars.lastIndexOf("Ford"));

//commenting the two below out for now since totalCars is used twice
//const stringOfCars = totalCars.join();
//const totalCars = stringOfCars.split();

const carsInReverse = totalCars.reverse();

// use a for loop to console.log each item in the carsInReverse array
var i;
for (carsInReverse[i] = 0; carsInReverse[i] < carsInReverse.length - 1; i++) {
  console.log(carsInReverse[i]);
};


// create an object called persons with the data given on assignment and use a "for...in" loop to console log each key, then to console.log the value associated with the birthDate key
const persons = {
  firstName = "Jane",
  lastName = "Doe",
  birthDate = "Jan. 5, 1925",
  gender = "Female"
}

var x;
for (var key in persons) {
  console.log(x)
}


//use a For Loop to console.log the numbers 1 to 1000
var x = 0;
for (x = 0; x <= 1000; x++) {
  console.log(x);
}

//while Loop
// while (x < 1000) {
//   x++;
//   console.log(x);
// }

//Do...While loop
var x = 0;
do {
  x += 1;
  console.log(x);
} while (x < 1000);

//When is a For Loop better than a while loop?
//For Loops are good to use if the number of loops is known

//What's the difference between a For Loop and a For...In Loop?
//For Loops should iterate while incrementing or decrementing and For...In Loops enumerate

//What's the difference between a While Loop and a Do...While Loop?
//The While Loop test the condition before the code is run, and the Do...While Loop always runs the code and then checks the condition.
}