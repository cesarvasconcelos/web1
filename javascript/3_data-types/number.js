// Number
// Fonte principal: https://javascript.info/types#number
// Aprofundamento: https://javascript.info/number
// A documentação oficial (MDN):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// O tipo Number representa todos os números em JavaScript: inteiros e de ponto
// flutuante (decimais). Ao contrário de outras linguagens (e.g., Java, com int,
// long, float, double...), JavaScript possui um único tipo para todos eles: Number.
// Operações comuns: multiplicação *, divisão /, adição +, subtração - etc.

// Number, no JavaScript, é, na verdade, um número de ponto flutuante de 64 bits.
// A documentação diz:
// The Number type is a double-precision 64-bit binary format IEEE 754 value. It
// is capable of storing positive floating-point numbers between 2^-1074
// (Number.MIN_VALUE) and 2^1023 × (2 - 2^-52) (Number.MAX_VALUE) as well as
// negative floating-point numbers of the same magnitude, but it can only safely
// store integers in the range -(2^53 − 1) (Number.MIN_SAFE_INTEGER) to 2^53 − 1
// (Number.MAX_SAFE_INTEGER).

// Em inteiros, a faixa segura vai de -(2^53 - 1) até (2^53 - 1). Se precisar de
// um inteiro maior ou menor que isso, deve-se usar BigInt (ver bigint.js)
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991  → 2^53 - 1
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991 → -(2^53 - 1)
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 (maior Number possível, mas sem precisão de inteiro)

// Number pode representar números inteiros, decimais, exponenciais, em octal,
// hexadecimal e números binários;

// Um número literal como 255 em JavaScript é um floating-point, não um inteiro. O fato de ser
// "floating-point" não impede que JavaScript represente inteiros exatos na faixa segura.
// 255 === 255.0 // true, ambos são o mesmo Number, apesar de um parecer um inteiro e outro um float

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
let exp255 = 0.255e3; // exponencial (0.255 × 10^3)

console.log(int255 === float255); // true
console.log(int255 === hex255); // true
console.log(int255 === oct255); // true
console.log(int255 === bin255); // true
console.log(int255 === exp255); // true

// Valores numéricos especiais: Infinity, -Infinity e NaN.
// Eles pertencem formalmente ao tipo Number, mas não são "números" no sentido comum.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN

// Infinity representa o infinito matemático (∞): é maior que qualquer número.
console.log(1 / 0); // Infinity (divisão por zero NÃO gera erro em JS)
console.log(-1 / 0); // -Infinity
console.log(Infinity); // Infinity → também pode ser usado diretamente
console.log(Infinity > Number.MAX_VALUE); // true
console.log(typeof Infinity); // "number"

// NaN (Not a Number) representa um erro de cálculo: o resultado de uma
// operação matemática incorreta ou indefinida.
console.log("abc" / 2); // NaN —> operação matemática inválida
console.log(typeof NaN); // "number" ← curioso: "Not a Number" é do tipo number!

// NaN é "contagioso" (sticky): qualquer operação matemática com NaN resulta em NaN.
// Por isso, se aparecer um NaN em algum lugar de uma expressão, ele "contamina" o resultado inteiro.
console.log(NaN + 1); // NaN
console.log(3 * NaN); // NaN
console.log("abc" / 2 - 1); // NaN
console.log(NaN ** 0); // 1 —> única exceção: qualquer valor elevado a 0 é 1

// Matemática em JavaScript é "segura": podemos dividir por zero, tratar strings
// não numéricas como números etc. O script nunca morre com um erro fatal;
// no pior caso, o resultado é NaN.

// Para verificar se um valor é NaN, use Number.isNaN()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
// Não use === NaN: NaN é o ÚNICO valor de JS que não é igual a si mesmo!
console.log(NaN === NaN); // false ← por isso a comparação não funciona
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("abc" / 2)); // true
console.log(Number.isNaN(42)); // false

// Atenção a precisão de decimais (consequência do formato IEEE 754):
console.log(0.1 + 0.2); // 0.30000000000000004 (não é bug do JS; acontece em Java, Python...)
console.log((0.1 + 0.2).toFixed(2)); // "0.30" → arredonda (retorna string)
// Mais detalhes: https://javascript.info/number#imprecise-calculations
