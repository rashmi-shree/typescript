"use strict";
var Arithmetic;
(function (Arithmetic) {
    Arithmetic[Arithmetic["Add"] = 0] = "Add";
    Arithmetic[Arithmetic["Sub"] = 1] = "Sub";
    Arithmetic[Arithmetic["Div"] = 2] = "Div";
    Arithmetic[Arithmetic["Mul"] = 3] = "Mul";
})(Arithmetic || (Arithmetic = {}));
function calculate(a, b, type) {
    console.log(type);
}
calculate(2, 3, Arithmetic.Add);
// interface PersonGenderProperties{
//     gender:string;
//     orientation:string;
//     pronouns:string;
// }
// interface PersonInterface{
//     name:string;
//     age:number;
//     genderProps:PersonGenderProperties
// }
// //do same thing with extends
// interface PersonInterface extends PersonGenderProperties{
//     name:string;
//     age:number;
// }
// function greet(person:PersonInterface){
// }
// console.log(greet({
//     name:"John Doe", 
//     age:30,  
//     genderProps:{
//         gender:"Male",
//         orientation:"Straight",
//         pronouns:"He/Him"
//     }
// }));
