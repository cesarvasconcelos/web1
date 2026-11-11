// null
// Fonte principal: https://javascript.info/types#the-null-value
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null

// null forma um tipo próprio (o tipo Null), com um único valor: null.
// A diferença para undefined é a INTENÇÃO:
// - null: é atribuído DE PROPÓSITO pelo programador para dizer "nada", "vazio" ou
//   "valor desconhecido". É útil quando se deseja 'apagar' ou 'resetar' uma variável.
// - undefined: é o valor que o próprio JavaScript usa quando algo ainda não recebeu
//   valor (ver undefined.js).
// null também é usado em variáveis que vão guardar um objeto mais tarde: começamos
// com null e, depois, checamos se ela já referencia um objeto de fato (em vez de
// deixá-la como undefined, que significaria "nunca recebeu valor").

// A documentação (MDN):
// JavaScript distinguishes between null, which indicates a deliberate non-value
// (and is only accessible through the null keyword), and undefined, which
// indicates absence of value.

// em outras palavras, null é a atribuição de um 'valor', ainda que seja uma
// representação do 'vazio'; já undefined indica ausência de valor (e.g., uma
// variável declarada que nunca recebeu valor, uma propriedade inexistente...)
let nullVar = null; // com null estou atribuindo o valor 'vazio' (apagando qualquer valor)
console.log(nullVar); // null → é um valor e também um tipo de dado (o tipo Null)
console.log(typeof nullVar); // "object" ← BUG histórico!

// Sobre typeof null retornar "object", o javascript.info explica:
// "That's an officially recognized error in typeof, coming from very early days
// of JavaScript and kept for compatibility. Definitely, null is not an object."
// Ou seja: null NÃO é um object; é um valor PRIMITIVO com um tipo só seu (Null).
// Por isso, para testar se algo é null, use === null (e não typeof):
console.log(nullVar === null); // true

// Diferença importante na conversão para number:
console.log(Number(null)); // 0 (já undefined viraria NaN, ver undefined.js)
