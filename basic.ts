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
