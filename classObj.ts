interface PersonInterface {
    name:string;
    age:number;
    greet():string;
}

class Person implements PersonInterface{
    name:string;
    age:number;

    constructor(name: string, age:number){
        this.name= name;
        this.age = age;
    }

    greet(){
        return "hi"+this.name;
    }
}

const personObject = new Person("rashmi", 27);
// console.log(personObject);
console.log(personObject.greet());
