// Boolean (tipo lógico): possui apenas dois valores: true e false
// Representa condições sim/não, ligado/desligado, verdadeiro/falso
// Fonte principal: https://javascript.info/types#boolean-logical-type
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

let isFileOpen = true; // sim, o arquivo está aberto
isFileOpen = false; // não, o arquivo está fechado

let nameFieldChecked = true; // sim, campo nome preenchido
let ageFieldChecked = false; // não, campo idade não preenchido
console.log(typeof nameFieldChecked); // "boolean"

// Booleans também surgem naturalmente como resultado de comparações:
let isGreater = 4 > 1;
console.log(isGreater); // true (o resultado da comparação é "sim")

let isEqual = 5 === "5"; // comparação estrita (===) verifica valor e tipo
console.log(isEqual); // false (tipos diferentes com ===)

// Qualquer valor pode ser convertido para Boolean (coerção):
// Falsy (→ false): false, 0, "", null, undefined, NaN (valores intuitivamente "vazios")
// Truthy (→ true): todo o resto (qualquer string não vazia, qualquer número ≠ 0, arrays, objetos)
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean("abc")); // true
console.log(Boolean(42)); // true

// Pegadinhas comuns: strings NÃO vazias são sempre true, mesmo que pareçam "falsas"
console.log(Boolean("0")); // true ← (em PHP seria false, em JS não!)
console.log(Boolean(" ")); // true ← string com espaço não é vazia
console.log(Boolean("false")); // true

// ver mais sobre coerção em: converting.js
