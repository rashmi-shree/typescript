enum Arithmetic{
    Add,
    Sub,
    Div,
    Mul
}

function calculate(a:number, b:number, type:Arithmetic){
    console.log(type);
    
}
calculate(2, 3, Arithmetic.Add)


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
