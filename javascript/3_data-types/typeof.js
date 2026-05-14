// typeof: operador que retorna uma string com o nome do tipo de um valor
// Sintaxe: typeof x  ou  typeof(x) —> ambas equivalentes; typeof é operador, não função

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

// typeof null retorna "object" —> isso é um erro reconhecido da linguagem,
// mantido por compatibilidade. Null NÃO é um object.
// (ver null.js para mais detalhes)

// typeof de uma função retorna "function" —> mas não existe tipo "function" em JS;
// funções pertencem ao tipo object. O typeof só as trata de forma especial por conveniência.
function greet() {}
console.log(typeof greet); // "function"

// typeof(x) com parênteses também é válido (os parênteses são de agrupamento, não de chamada de função)
console.log(typeof str); // "string" —> idêntico a typeof str
