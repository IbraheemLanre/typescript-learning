// Type aliases
type NumberOrString = number|string;

let a : NumberOrString; 
let b : string ;
let c = 'true';

a = 'bye bye'; // initial value of a number => a : number
b = 'Hello world'; // initial value of a string => a : string

let getMessage = (first: NumberOrString, second: string, third: any): NumberOrString => { // initial value of a string => getMessage : string
    return `${first} ${second} ${third}`;
}

getMessage = (first: NumberOrString, second: string, third: any) => {
    return 2
}

let printMessage = (first: NumberOrString, second: string, third: any): void => { // initial value of a string => getMessage : string
    console.log(`${first} ${second} ${third}`);
}

console.log(getMessage(a, b, c));

type BooStrNum = (boolean|string|number);

let arr1 = [1, 2, 3, 4, 5, 6]; // array of numbers
let arr2 = ['hello', 'my', 'name', 'is'];
let arr3 = [true, false, true, false];
let arr4 = [true, 1];
let arr5 : string[] = []; 
let arr6 : BooStrNum[] = [];

arr6.push('Laura', 2, false, 'Hoang');

console.log(arr6)

arr4.push(25);
arr4.push(false);

console.log(arr4)
arr4[0] = 10
console.log(arr4)

arr1.push(10);
arr2.push('Hoang')
arr3.push(true); // pushing a variable of different datatype other than a number into an array of numbers
console.log(arr2);

let obj1 = {
    name: 'Hoang',
    age: 30,
    jump: true
}

obj1 = {
    name: 'Margit',
    age: 0,
    jump: false
}

let obj2 = {
    ...obj1, // spread notation in ES6
    lastName: 'Tennosaar'
}

console.log(obj2);

// obj1.lastName = 'Tennosaar'

const main = document.getElementById('mainContent');
main.innerHTML = `Hello ${obj2.name} ${obj2.lastName}`;
// console.log(main.value)
 
const firstName = document.getElementById('#firstName') as HTMLInputElement;
const inputs = document.querySelectorAll('.userInput') as NodeListOf<HTMLInputElement>;

console.log(inputs[0].value);

console.log(firstName.value);
