
// Object literals:

person1 = {
    name: "Satyajit",
    print: function() {
        //console.log(this);
        console.log(`Hello my name is ${this.name}`);
    }
}
person2 = {
    name: "Samuel",
    print: function() {
        //console.log(this);
        console.log(`Hello my name is ${this.name}`);
    }
}
person3 = {
    name: "Neha",
    print: function() {
        //console.log(this);
        console.log(`Hello my name is ${this.name}`);
    }
}
person4 = {
    name: "Ruchitha",
    print: function() {
        //console.log(this);
        console.log(`Hello my name is ${this.name}`);
    }
}
person5 = {
    name: "Nihash",
    print: function() {
        //console.log(this);
        console.log(`Hello my name is ${this.name}`);
    }
}

person1.print();
person2.print();
person3.print();
person4.print();
person5.print();

// Pseudo Classes (ES5 classes):
//have to use prototype to create methods

function PersonParams(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}
// prototype methods
PersonParams.prototype.aboutMe = function() {
    console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
}

personA = new PersonParams("Satyajit", "Hyderabad", 21 );
personB = new PersonParams("Samuel", "Hyderabad", 20 );
personC = new PersonParams("Neha", "Hyderabad", 21 );
personD = new PersonParams("Nihash", "Hyderabad", 20 );
personE = new PersonParams("Ruchitha", "Hyderabad", 20 );
personA.aboutMe();
personB.aboutMe();
personC.aboutMe();
personD.aboutMe();
personE.aboutMe(); 

// using ES6 classes:

class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
        this.getDetails();
    }

    getDetails() {
        console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
    }
}

new Person("Satyajit", "Hyderabad", 21);
new Person("Samuel", "Hyderabad", 20);
new Person("Neha", "Hyderabad", 21);
new Person("Ruchitha", "Hyderabad", 20);
new Person("Nihash", "Hyderabad", 20 );
