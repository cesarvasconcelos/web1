// Boolean: tipo lógico com apenas dois valores: true e false
// Representa condições sim/não, ligado/desligado, verdadeiro/falso
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

let isFileOpen = true; // sim, o arquivo está aberto
isFileOpen = false; // não, o arquivo está fechado

let nameFieldChecked = true; // campo nome preenchido
let ageFieldChecked = false; // campo idade não preenchido

// Booleans surgem naturalmente de comparações:
let isGreater = 4 > 1;
console.log(isGreater); // true

let isEqual = 5 === "5";
console.log(isEqual); // false (tipos diferentes com ===)

// Qualquer valor pode ser convertido para Boolean (coerção):
// Falsy (→ false): false, 0, "", null, undefined, NaN
// Truthy (→ true): todo o resto (qualquer string não vazia, qualquer número ≠ 0, arrays, objetos)
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean("abc")); // true
console.log(Boolean(42)); // true

// ver mais sobre coerção em: converting.js
