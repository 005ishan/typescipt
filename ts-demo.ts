let message: string = "Hello";
console.log(message);
//message = 0 // Error  
 //Primitivie type
let booleanVar: boolean = true;
let numberVAr: number = 42;
let symboVar: symbol = Symbol("unique");
let nullVar: null = null;
let undefinedVar: undefined = undefined;

let anyVar: any = "Could be anything";
anyVar = anyVar + 100; // No error

let unknownVar: unknown = "Could be anything too";
// unknownVar = unknownVar + 100; // Error
// unknown is type assertion

let scores: number[] = [90, 80, 70];
console.log(scores)

//tuples
let tupleVar: [string, number] = ["Alice", 30];
console.log(tupleVar)
//typleVar = [30, "Alice"] // Error 

//Union 
let id: string | number | boolean;
id = "Hello";
console.log(id);
id=123;
console.log(id);
//id = true // error

//functions
function add(num1: number, num2: number): string { 
    let sum: number = num1 + num2;
    return `Sum is ${sum}`;
}
let result: string = add(10, 20);
console.log(result);

const greet = (name: string = "Guest"): void =>{
    console.log(`Hello, ${name}`);
}
greet(); //name is optional if default value

//Object Defination
//1. Object Literal
let person: {name: string; age:number} = {
    name: "Bob",
    age: 25
    //isActive: true // error
}
console.log(person, person.name)

//2. Interface
interface Product{
    id: number;
    name: string;
    price: number;
    description?: string; //optional
}
const laptop: Product={
    id:1,
    name:"Laptop",
    price: 1500
};
console.log(laptop)

//3. type Alias
type Student = {
    id: number;
    name: string;
    grade: string;
    product?: Product;
}
let student1: Student = {
    id: 10,
    name: "Charlie",
    grade: "A+",
    product: laptop
};
console.log(student1);

//Generics 
function identity<T>(arg: T): T {
    return arg;
}
//Data type infected at call time
let output1: string = identity<string>("myString");
console.log(output1);
let output2: number = identity<number>(100);
console.log(output2);

//enum
//named cosntant
enum Role{
    Admin,
    user,
    Guest
}
let userRole: Role = Role.Admin;
console.log(userRole); //0
console.log(userRole == Role.Admin); //constant check

let userRoleName: string = "admin";
console.log(userRoleName == "Admin"); //case sensitive attack

//Generic Usercase
interface User {
    id:number;
    name:string;
    role:Role;
}
let optUSER: Partial<User> = {
    name:"Dave"
};
//every attribute is optional
console.log(optUSER);
let readonlyUser : Readonly<User> = {
    id:1,
    name:"Eve",
    role:Role.user
};
//readonlyUser.id = 2; //Error
console.log(readonlyUser);


//Tasks
enum carType{
    Sedan,
    SUV,
    Truck,
    Coupe
};
type carModel = {
    name:string;
    description:string;
}
let supra : carModel = {
    name:"Supra",
    description:"Car"
}
interface Car {
    make:string | number;
    model:carModel;
    year:number;
    type:carType;
    isElectric?:boolean | number | string;
}
let car : Car[]= [
    {
        make:"supra",
        model:supra,
        year:1998,
        type:carType.SUV

    },
    {
        make:"supra",
        model:supra,
        year:2090,
        type:carType.SUV

    }
];                                               
const carsolderthan2015: Car[] = car.filter((car) => car.year < 2015);
console.log(carsolderthan2015);