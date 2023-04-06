// Primitives: numbers, string, boolean  || null, undefine
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12; // ok
// age = '12' not ok

let userName: string;
userName = 'Bartek'; // ok

let isSolider: boolean;
isSolider = true; // ok

// More complex types

let hobbies: string[]; // have arrays of strings
hobbies = ['Sports', 'Cooking']; // ok
// hobbies = ['Sports', 'Cooking', 12] //  not ok

// let person: any // we allow anything to be in this obiect || better not to use

// Here Object is assinged as a type assignment and with special object types
let person: {
	name: string; // accept string only
	age: number; // accept numbers only
};

person = {
	name: 'Max',
	age: 32,
};

// person = {
//    isEmployee: true // this is boolean and we didn't assign this type of values in our object.
// }

// Here we assign that this object have those types of values but here we will not store a single object but array of objects because we set a square brackets at the end of our configurtation
let people: {
	name: string;
	age: Number;
}[];

// Type inference - by defult TS will implement a type to your value if u don'y assign it, but if u write your value for first type, TS will look for it value and will assign it automatically for you, eg. below

// let course = 'React - The Complete Guide';
// instead of 'let curse = 'React - The Complete Guide': string

// here we can't change a course to number because Type inference set this as a string.
// course = 12341;

// Union Types - this is a type definition that allows a more than one type of values

let curse: string | number = 'React - The Complete Guide';
//Now  we can assign a number to our variable. This is a manualy value assignment when we don't wanna use Type Inference.
// So to do this we have to write this like above 'VARIABLE: typeA | typeB'
curse = 12341;

// Type Aliases - is used to set a type definition to avoid duplications in your code. We can define a base type instead of  name: string, age: number

// We write this like this:
// 'type Person = {
// name: string
// age: 32
//}

// Now we can write like this
// let people: Person[] // with tells that our object will have a types like in our Person definiton
