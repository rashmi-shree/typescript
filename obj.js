"use strict";
// export function greet(person:{
//     name:string;
//     age:number
// }):string{
//     return "hello"+person.name + "you are"+ person.age + "old"
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet(person) {
    return "hello" + person.name + "you are" + person.age + "old";
}
exports.greet = greet;
console.log(greet({
    name: "rashmi",
    age: 27
}));
