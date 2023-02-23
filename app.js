// calculator
const calculator = {
    add: function(a,b){
        console.log(a+b);
    },
    minus: function(a,b){
        console.log(a-b);
    },
    mul: function(a,b){
        console.log(a*b);
    },
    div: function(a,b){
        console.log(a/b);
    },
    power: function(a,b){
        console.log(a**b);
    },
};

// calculator.add(100,50);
// calculator.minus(100,50);
// calculator.mul(100,50);
// calculator.div(100,50);
// calculator.power(100,2);


// const age = 20;
// function calKorAge(age) {
// 	return age + 2;
// }

// const korAge = calKorAge(age);
// console.log(korAge);


const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0){
    console.log("Enter the age plz.");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age < 70) {
    console.log("Enjoy your drink!");
} else if (age >= 70) {
    console.log("It's okay, but let's exercise!");
}
