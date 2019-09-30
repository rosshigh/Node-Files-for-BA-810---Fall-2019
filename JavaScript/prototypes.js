// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
// }

// Person.prototype.nationality = "English";

// Person.prototype.name = function () {
//     return this.firstName + " " + this.lastName;
// };


// let person = new Person('Bob','Small',32,'hazel');

// console.log(person.nationality);
// console.log(person.name());


// let boo = [5, 56 , 9, 48];
// Array.prototype.average = function(){
//     let total = 0;
//     this.forEach(item => {
//         total += item;
//     });
//     return total/this.length;
// }

// console.log(boo.average());

// define the Person Class
function Person() { }
Person.prototype.walk = function () {
    console.log('I am walking!');
};

let person = new Person();
person.walk();

// // // define the Student class
function Student() {
    // Call the parent constructor
    Person.call(this);
}

// // inherit Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.walk = function () {
    console.log('I am walking to class!');
};


let student = new Student();


student.walk();