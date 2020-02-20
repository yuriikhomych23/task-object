//TASK 1 
let person = {};

person.firstName = 'Ivan';
person.secondName = 'Ivanov';

person.showData = function() {
    console.log(person);
}

person.showData();


let newPerson = Object.assign({}, person);

newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';

newPerson.showData = function() {
    console.log(newPerson);
}

newPerson.showData();


//TASK2

let myMath = {};

myMath.a = 5;
myMath.b = 2;

myMath.sum = function() {
    return this.a + this.b;
};
console.log(myMath.sum());


myMath.subtraction = function() {
    return this.a - this.b;
};
console.log(myMath.subtraction());


myMath.multiplication = function() {
    return this.a * this.b;
};
console.log(myMath.multiplication());


myMath.division = function() {
    return this.a / this.b;
};
console.log(myMath.division());
