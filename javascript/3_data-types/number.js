// A documentação oficial:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// O tipo Number representa todos os números em JavaScript. Ao contrário de outras
// linguagens (e.g, Java) que possuem diferenças entre vários tipos de números,
// JavaScript possui um único tipo para todos eles: Number.


// Number, no JavaScript, é, na verdade, um 64bits float-point number.
// A documentação diz:
// The Number type is a double-precision 64-bit binary format IEEE 754 value. It
// is capable of storing positive floating-point numbers between 2^-1074
// (Number.MIN_VALUE) and 2^1023 × (2 - 2-52) (Number.MAX_VALUE) as well as
// negative floating-point numbers of the same magnitude, but it can only safely
// store integers in the range -(2^53 − 1) (Number.MIN_SAFE_INTEGER) to 2^53 − 1
// (Number.MAX_SAFE_INTEGER).

// Em inteiros, o limite é: (2^53-1) e (-2^53-1). Se precisar de um integer maior ou menor que
// isso, deve-se usar BigInt
// Number pode representar números inteiros, decimais, exponenciais, em octal,
// hexadecimal e números binários;

// Um número literal como 255 em JavaScript é um floating-point, não um inteiro

// Documentação diz: "A number literal like 37 in JavaScript code is a
// floating-point value, not an integer. There is no separate integer type in
// common everyday use. (JavaScript also has a BigInt type, but it's not
// designed to replace Number for everyday uses. 37 is still a number, not a
// BigInt.)"

// abaixo, portanto, todas as diferentes representações são, na verdade, de Number
let int255 = 255; // Number
let float255 = 255.0; // o mesmo Number
let hex255 = 0xff; // hexadecimal
let oct255 = 0o377; // octal
let bin255 = 0b11111111; // binário
let exp255 = 0.255e3; // exponencial


console.log(int255 === float255); // true
console.log(int255 === hex255); // true
console.log(int255 === oct255); // true
console.log(int255 === bin255); // true
console.log(int255 === exp255); // true