// export function greet(person:{
//     name:string;
//     age:number
// }):string{
//     return "hello"+person.name + "you are"+ person.age + "old"
// }

// console.log(greet({
//     name:"rashmi",
//     age:27
// }));


// --> better way to do is using interface
interface Person{
    name:string,
    age:number
}

export function greet(person: Person) :string{
    return "hello"+person.name + "you are"+ person.age + "old"
}

console.log(greet({
    name:"rashmi",
    age:27
}));
    