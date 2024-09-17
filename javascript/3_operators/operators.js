// + concatenação de strings e adição
// - subtração
let a = 9;
let b = 5;
let c = 4
console.log('a + b - c=', a + b - c);

let numberOfPages = 254;
let footer = 'This document has ' + String(numberOfPages) + ' page(s)';
console.log(footer); // concatenação

// * e / são multiplicação e divisão
console.log('a / b * c=', a / b * c); // 1.8 * 4 = 7.2

// ** exponenciação
console.log('2**3=', 2 ** 3); // 8

// % módulo
console.log('10 % 4=', 10 % 4); // 2

// unários
let k = 2;
k++;
console.log('k=', k); // 3

k--;
console.log('k=', k); // 2

console.log(k++); // pós-incremento 2
console.log('k=', k); // 3
console.log(--k); // pré-incremento 2

// desafio
let r1 = 4;
let r2 = 5;
let r3 = 2;
console.log(r1++ + ++r2 * r3++); // 4 + 6 * 2 = 16

// atribuição
let z = 2;

z += 2; // 4
z -= 1; // 3
z *= 2; // 6
z /= 3; // 2
z **= 4;// 16
z %= 3; // 1

console.log('z=', z); // 1

// comparação / igualdade
// são dois tipos (só igualdade de valor ou igualdade de valor e tipo
let c1 = 5;
let c2 = "5";
console.log('5 == "5"', c1 == c2); // true, 'loose equality' só irá checar conteúdo de valores iguais
console.log('5 === "5"', c1 === c2); // false, 'strict equality' irá chegar conteúdo e tipo

// comparação / diferença
console.log('5 != "5"', c1 != c2); // false, loose non-equality
console.log('5 !== "5"', c1 !== c2); // true, strict non-equality'

// <, >, <=, >=
c2 = 5;
console.log('5 < 5', c1 < c2); // false
console.log('5 > 5', c1 > c2); // false
console.log('5 >= 5', c1 >= c2); // true
console.log('5 <= 5', c1 <= c2); // true

// operadores lógicos
// && (logical and), || (logical or), and ! (logical not)
let fileExists = true;
let fileSizeBytes = 256;
console.log('Does file exist AND size > 128 bytes? ', fileExists && fileSizeBytes > 128); // true
console.log('Does file exist OR size < 128 bytes? ', fileExists || fileSizeBytes < 128); // true
console.log('File does NOT exist? ', !fileExists); // false