// Resumo: Tipos de Dados em JavaScript
// ======================================
// Existem 8 tipos de dados básicos em JavaScript.

// 7 tipos primitivos:
// - number   → números inteiros ou de ponto flutuante; inteiros limitados a ±(2^53 - 1)
// - bigint   → inteiros de comprimento arbitrário
// - string   → sequência de zero ou mais caracteres; não existe tipo char separado
// - boolean  → true ou false
// - null     → tipo próprio com um único valor: null (representa ausência intencional de valor)
// - undefined → tipo próprio com um único valor: undefined (variável declarada sem valor atribuído)
// - symbol   → identificadores únicos e imutáveis

// 1 tipo não-primitivo:
// - object   → estruturas de dados mais complexas (arrays, objetos, funções...)

// Exemplos com typeof:

// Arrays são objects:
console.log(typeof Array.of("Ana", "Bruno")); // "object" ← arrays pertencem ao tipo object

// typeof null retorna "object" mas isso é um bug histórico do JavaScript:
// null deveria retornar "null", mas retorna "object" por um erro da implementação original,
// mantido por questões de compatibilidade retroativa até hoje.
let nulo = null;
console.log(typeof nulo); // "object" ← BUG histórico; null NÃO é um object

// typeof de uma função retorna "function", mas funções pertencem ao tipo object;
// o typeof as trata de forma especial por conveniência, mesmo *não* existindo tipo "function".
function saudacao() {}
console.log(typeof saudacao); // "function" ← conveniência; internamente é um object
