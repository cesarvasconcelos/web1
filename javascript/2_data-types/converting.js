// Convertendo data types

// primeiro, note como é perigoso confiar em algumas conversões automáticas do JS
let n1 = 4;
let n2 = "6";

console.log(n1 * n2); // 24, mas bem que JavaScript poderia evitar isso :(
console.log(n1 + n2); // "46"

// Como se vê, algumas vezes o JavaScript realiza a conversão automática e
// outras não. Para não ter de se apoiar nessas conversões inesperadas,
// melhor usar funções built-in para converter data types

// Três built-in functions para conversão você deve lembrar:
// String(), Number() e Boolean()

// String(): praticamente qualquer valor, incluindo undefined e null,
// e tenta converter pra string
let nrToStr = 66;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr); // 66 string

console.log(typeof String(undefined)); // string
console.log(typeof String(null)); // string

// Number(): tenta converter para um data type number. Se não conseguir, retorna
// NaN
let strToNr = "1234";
let pass = "1234***";
strToNr = Number(strToNr);
pass = Number(pass);
console.log(strToNr, typeof strToNr); //1234 number
console.log(pass, typeof pass); //NaN number

// atenção para null e string vazia, que sempre resulta em 0
let emptyStr = '';
let nu = null;
emptyStr = Number(emptyStr);
nu = Number(nu);
console.log(emptyStr, typeof emptyStr); // 0 number
console.log(nu, typeof nu); // 0 number


// Boolean(): irá converter para boolean, retornando true para qualquer coisa que
// não seja false, null, undefined, 0 (number), uma string vazia e NaN.

// A documentação:
// Any value can be converted to a boolean according to the following rules:
// false, 0, empty strings(""), NaN, null, and undefined all become false.
// All other values become true.
// Lembrar que operadores abaixo podem ser usados com booleans
// && (logical and), || (logical or), and ! (logical not)
console.log(Boolean(true)); // true
console.log(Boolean(false)); // false
console.log(Boolean(null));// false
console.log(Boolean(undefined));// false
console.log(Boolean(0));// false
console.log(Boolean(''));// false
console.log(Boolean(NaN));// false

console.log(Boolean("false")) // true, qualquer string será convertida para true, mesmo que com conteúdo false
