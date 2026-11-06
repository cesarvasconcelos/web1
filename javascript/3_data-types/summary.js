// Resumo: Tipos de Dados em JavaScript
// ======================================
// Fonte principal: https://javascript.info/types
// MDN (estruturas e tipos de dados):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
//
// Todo valor em JavaScript tem um tipo. Existem 8 tipos de dados básicos.

// JavaScript é uma linguagem de TIPAGEM DINÂMICA: a variável não fica "presa" a um tipo.
// A mesma variável pode guardar uma string e, depois, um number, sem erro.
// (Em Java, por exemplo, isso daria erro de compilação.)
let message = "hello"; // agora message guarda uma string
console.log(typeof message); // "string"
message = 123456; // nenhum erro: agora guarda um number
console.log(typeof message); // "number"

// 7 tipos primitivos (guardam um único valor "simples"):
// - number    → inteiros ou ponto flutuante; inteiros seguros limitados a ±(2^53 - 1)  (ver number.js)
// - bigint    → inteiros de comprimento arbitrário                                    (ver bigint.js)
// - string    → zero ou mais caracteres; NÃO existe tipo char separado                (ver string.js)
// - boolean   → true ou false                                                         (ver boolean.js)
// - null      → tipo próprio, único valor: null ("nada", "vazio", "valor desconhecido") (ver null.js)
// - undefined → tipo próprio, único valor: undefined ("valor não atribuído")          (ver undefined.js)
// - symbol    → identificadores únicos (usados principalmente como chaves de objetos)
//               https://javascript.info/symbol

// 1 tipo não-primitivo:
// - object    → coleções de dados e estruturas mais complexas (arrays, objetos, funções...)
//               https://javascript.info/object

// O operador typeof retorna uma string com o nome do tipo (ver typeof.js)

// Arrays são objects:
console.log(typeof Array.of("Ana", "Bruno")); // "object" ← arrays pertencem ao tipo object

// typeof null retorna "object", mas isso é um bug histórico do JavaScript:
// é um erro reconhecido oficialmente, vindo das primeiras versões da linguagem,
// e mantido por compatibilidade. null NÃO é um object: ele tem seu próprio tipo.
let nulo = null;
console.log(typeof nulo); // "object" ← BUG histórico; null NÃO é um object

// typeof de uma função retorna "function", mas funções pertencem ao tipo object;
// o typeof as trata de forma especial por conveniência, mesmo *não* existindo tipo "function".
function saudacao() {}
console.log(typeof saudacao); // "function" ← conveniência; internamente é um object

// Exercício (javascript.info): qual é a saída? Pense antes de executar!
let name = "Ilya";
console.log(`hello ${1}`); // hello 1     → a expressão é o number 1
console.log(`hello ${"name"}`); // hello name  → a expressão é a string "name" (não a variável!)
console.log(`hello ${name}`); // hello Ilya  → a expressão é a variável name
