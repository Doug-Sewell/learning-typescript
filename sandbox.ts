/*
const character = 'luigi';
console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
    console.log(input);
});
*/

//tsc stands for typescript compiler.
/* tsc sandbox.ts sandbox.js would sompile the sandbox.ts to 
JS in the sandbox.js file.

However, we can shorten the command more if we use a TS and JS
file with the same name. So the following command does the same thing:

tsc sandbox.ts

To have tsc watch for changes, use a -w flag:
tsc sandbox.ts -w


*/

let character = 'mario';
let age = 30;
let isBlackBelt = false;

//character = 20; wouldn't work
character = 'luigi';

//age = 'yoshi'; wouldn't work
age = 40;

//isBlackBelt = 'yes'; wouldn't work 
isBlackBelt = true;

//We can require specific data types as shown below.
const circ = (diameter: number) => diameter*Math.PI;

//console.log(circ('hello')); wouldn't work as it's not being passed a number.

console.log(circ(7.5));








