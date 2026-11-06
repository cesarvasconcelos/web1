// typeof: operador que retorna uma STRING com o nome do tipo de um valor
// Fonte principal: https://javascript.info/types#type-typeof
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// Útil para tratar valores de tipos diferentes de forma diferente, ou só para checar o tipo.

let str = "JavaScript";
let i = 7;
let bigNr = 9223372036854775807n;
let bool = true;
let sym = Symbol("unique");
let undef; // undefined
let unknown = null;

console.log("str", typeof str); // "string"
console.log("i", typeof i); // "number"
console.log("bigNr", typeof bigNr); // "bigint"
console.log("bool", typeof bool); // "boolean"
console.log("sym", typeof sym); // "symbol"
console.log("undef", typeof undef); // "undefined"
console.log("unknown", typeof unknown); // "object" ← bug histórico do JavaScript!

// typeof null retorna "object" —> isso é um erro oficialmente reconhecido da linguagem,
// mantido por compatibilidade. null NÃO é um object.
// (ver null.js para mais detalhes)

// Math é um objeto embutido (built-in) que fornece operações matemáticas:
console.log(typeof Math); // "object"
console.log(typeof { x: 1 }); // "object"
console.log(typeof [1, 2]); // "object" ← arrays são objects

// typeof de uma função retorna "function" —> mas não existe tipo "function" em JS;
// funções pertencem ao tipo object. O typeof só as trata de forma especial por conveniência
// (tecnicamente incorreto, mas prático no dia a dia).
// A documentação do JavaScript oficial diz que: 'It turns out that functions are themselves objects'
function greet() {}
console.log(typeof greet); // "function"

// O resultado de typeof é sempre uma string:
console.log(typeof typeof i); // "string" (typeof 7 → "number", e typeof "number" → "string")

// typeof de uma variável que nem foi declarada não dá erro: retorna "undefined"
console.log(typeof variavelQueNaoExiste); // "undefined"

// Sintaxe: typeof x  ou  typeof(x) —> ambas equivalentes.
// typeof é um OPERADOR, não uma função: os parênteses em typeof(x) são apenas de
// agrupamento (como em matemática), não de chamada de função. typeof x é mais comum.
// (Formatadores como o Prettier até removem esses parênteses desnecessários.)
// Os parênteses só fazem diferença quando queremos o tipo de uma expressão inteira:
console.log(typeof (1 + 2)); // "number"  → avalia 1 + 2 primeiro, depois typeof 3
console.log(typeof 1 + 2); // "number2" → typeof 1 é "number", depois "number" + 2
