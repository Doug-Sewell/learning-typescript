const character = 'luigi';
console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
    console.log(input);
});

//tsc stands for typescript compiler.
/* tsc sandbox.ts sandbox.js would sompile the sandbox.ts to 
JS in the sandbox.js file.

However, we can shorten the command more if we use a TS and JS
file with the same name. So the following command does the same thing:

tsc sandbox.ts

To have tsc watch for changes, use a -w flag:
tsc sandbox.ts -w


*/