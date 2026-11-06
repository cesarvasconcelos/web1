// undefined
// Fonte principal: https://javascript.info/types#the-undefined-value
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined

// undefined também forma um tipo próprio, assim como null, com um único valor: undefined.
// Significado: "nenhum valor foi atribuído".
// É o valor que o JavaScript dá automaticamente a uma variável declarada,
// mas não inicializada.

// A documentação:
// JavaScript distinguishes between null, which indicates a deliberate non-value
// (and is only accessible through the null keyword), and undefined, which
// indicates absence of value.

let declaredOnly; // declarada, mas sem valor: o JavaScript atribui undefined sozinho
console.log(declaredOnly); // undefined → é um valor e também um tipo de dado
console.log(typeof declaredOnly); // "undefined"

// É possível atribuir undefined explicitamente a uma variável, mas NÃO é recomendado
// usar isso para tentar "apagar" a variável deixando-a sem valor
let corDoCabelo = "marrom";
corDoCabelo = undefined; // bad practice
console.log(corDoCabelo); // undefined

// Por que é uma bad practice?
// Imagine o resultado inesperado abaixo: não dá mais para saber se a variável
// foi esvaziada de propósito ou se simplesmente nunca recebeu valor
let cpf; // undefined (nunca recebeu valor)
console.log(corDoCabelo === cpf); // oops, true!

// null: é melhor 'apagar/resetar' a variável com null, pois null em si é um valor (empty)
// Recomendação (javascript.info): use null para atribuir um valor "vazio" ou
// "desconhecido"; deixe undefined como o valor inicial padrão de coisas não atribuídas.
corDoCabelo = null;
// Quote from JavaScript Beginner to Professional book:
// 'This is one of the reasons it is better to assign null to a variable
//  when you want to say it is empty and unknown at first'
console.log(corDoCabelo === cpf); // false :)

// Diferença importante na conversão para number:
console.log(Number(undefined)); // NaN  (null viraria 0)
console.log(undefined + 1); // NaN
