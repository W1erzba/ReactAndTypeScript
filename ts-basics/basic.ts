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
// let people: {
// 	name: string;
// 	age: Number;
// }[];

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
type Person = {
	name: string;
	age: 32;
};

// Now we can write like this
let people: Person[];
// with tells that our object will have a types like in our Person definiton

// Funcrtions & types

// We can add a variable type of function return by adding : type after function  parameters  (a..., b...): number
function add(a: number, b: number) {
	// '...): number'
	return a + b;
}

// Void - special return type when we don't use 'return' statment
function printResult(value: any) {
	console.log(value); // Here we will get void type
}

// Genrics

// Genrics letting us to convert a function to a Generic Function
// We converting it by adding a '<generic type>' before function parameters. Offen writed like this -  <T> and adding it to the parameters as well. Without this, TS will thinks about our array as any type and then it will not errrors us when we will try use eg. .split('') method on our value with includes numbers in a front of array - this is not aloved in JS.

function insertAtBegninning<T>(array: T[], value: T) {
	// Also when we write <T> and T as a value types, TS now knows that all values will be the same type as a single Value used in function. Without this TS will think that result of function will be any type, where our result will have number as a first value in array, with makes a using .split method forbiden.
	const newArray = [value, ...array];
	return newArray;
}

const demoArray = [1, 2, 3];

const updatedAray = insertAtBegninning(demoArray, -1); // [-1, 1, 2, 3] // without <T> id don't know that this is a array full of number

const stringArray = insertAtBegninning(['a', 'b', 'c'], 'd'); // know that is a array full of strings
// Without <T> we would not get error and we will get error after code compilation to the vanila js.
// updatedAray[0].split(''); // not allowed

/*

More complex explanation 

Generic Types ("Generics") can be tricky to wrap your head around.

But indeed, we are working with them all the time - one of the most prominent examples is an array.

Consider this example array:

    let numbers = [1, 2, 3];

Here, the type is inferred, but if we would assign it explicitly, we could do it like this:

    let numbers: number[] = [1, 2, 3];

number[] is the TypeScript notation for saying "this is an array of numbers".

But actually, number[] is just syntactic sugar!

The actual type is Array. ALL arrays are of the Array type.

BUT: Since an array type really only makes sense if we also describe the type of items in the array, Array actually is a generic type.

You could also write the above example liks this:

    let numbers: Array<number> = [1, 2, 3];

Here we have the angle brackets (<>) again! But this time NOT to create our own type (as we did it in the previous lecture) but instead to tell TypeScript which actual type should be used for the "generic type placeholder" (T in the previous lecture).

Just as shown in the last lecture, TypeScript would be able to infer this as well - we rely on that when we just write:

    let numbers = [1, 2, 3];

But if we want to explicitly set a type, we could do it like this:

    let numbers: Array<number> = [1, 2, 3];

Of course it can be a bit annoying to write this rather long and clunky type, that's why we have this alternative (syntactic sugar) for arrays:

    let numbers: number[] = [1, 2, 3];

If we take the example from the previous lecture, we could've also set the concrete type for our placeholder T explicitly:

    const stringArray = insertAtBeginning<string>(['a', 'b', 'c'], 'd');

So we can not just use the angle brackets to define a generic type but also to USE a generic type and explicitly set the placeholder type that should be used - sometimes this is required if TypeScript is not able to infer the (correct) type. We'll see this later in this course section!

*/
