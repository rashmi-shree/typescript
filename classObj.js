"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return "hi" + this.name;
    }
}
const personObject = new Person("rashmi", 27);
// console.log(personObject);
console.log(personObject.greet());
