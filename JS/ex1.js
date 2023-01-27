var array = [1, 2, 3, 4, 5];

function sayHello (x,y) {
    return "Number " + x + " " + y + "!";
}

for (var i = 0; i < 3; i++) {
    console.log(sayHello(array[i], array[i+1]));
}

const array2 = [
    {
        firstName: "Marry",
        lastName: "Brown",
        weight: 54,
        height: 169,
    }, 
    {
        firstName: "Jane",
        lastName: "Gray",
        weight: 78,
        height: 180,
    },
    {
        firstName: "Sam",
        lastName: "Ghadry",
        weight: 63,
        height: 183,
    },
    {
        firstName: "Luigi",
        lastName: "Stark",
        weight: 100,
        height: 193,
    },
]

function sayHello (x, y) {
    return "Hello, " + x + ", " + "hi " + y + "!";
}

function weight(z) {
    return "Your weight is " + z + "kg!"
}

function BMI(c, d) {
    return (c / (d * d)) * 10000; 
}

for (var i = 0; i < 4; i++) {
    console.log(sayHello(array2[i].firstName, array2[i].lastName));
    console.log(weight(array2[i].weight));
    console.log("Your BMI is " + BMI(array2[i].weight, array2[i].height));
}

var array3 = [1, -1, 0, -1, 1];

function lessThanOrEqualToZero (numbers) {
    return numbers <=0 ? "true" : "false";
}
for (var i = 0; i < 6; i++) {
    console.log(lessThanOrEqualToZero(array3[i]));
}
function lessThanOrEqualToZero (numbers) {
    return numbers <=0 ? true : false;
}