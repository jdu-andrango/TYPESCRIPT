// Null y undefined

let myVar = null; // Tipo Any
let otherVar = undefined; // Tipo Any u object
console.log('type of otherVar', typeof otherVar, 'type of myVar', typeof myVar);


let myNull: null = null; // Tipo null
let myUndefined: undefined = undefined; // Tipo undefined
console.log('type of myNull',typeof myNull,'type of myUndefined',typeof myUndefined);

let myNumber: number | null = null;
console.log('type of myNumber', typeof myNumber);
console.log('myNumber', myNumber);

myNumber = 60;
console.log('type of myNumber', typeof myNumber);
console.log('myNumber', myNumber);


let myString: string | undefined = undefined;
console.log('type of myString', typeof myString);
console.log("myString",myString);

myString = 'hola TS';
console.log('type of myString', typeof myString);
console.log("myString",myString);
