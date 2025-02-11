// muitas vezes, é útil consultar o data type de uma variável com typeof:

let str = "JavaScript";
let i = 7;
let bigNr = 9223372036854775807n;
let bool = true;
let sym = Symbol("unique");
let undef; // undefined;
let unknown = null;

console.log("str", typeof str);
console.log("i", typeof i);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);
