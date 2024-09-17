// JavaScript possui um data type especial para uma variável que foi declarada,
// mas não foi inicializada: undefined

// A documentação:
// JavaScript distinguishes between null, which indicates a deliberate non -
// value(and is only accessible through the null keyword), and undefined, which
// indicates absence of value.

let declaredOnly; // undefined é 'unknown' porque JavaScript avisa que ainda não foi atribuído nada à variável
console.log(declaredOnly); // undefined é um data type
console.log(typeof declaredOnly); // undefined

// não deve-se atribuir undefined a uma variável
// para tentar apagar a variável deixando-a sem valor
let corDoCabelo = 'marrom';
corDoCabelo = undefined; // bad practice

// Por que é uma bad practice?
// Imagine o resultdo inesperado abaixo
let cpf; // undefined
console.log(corDoCabelo === cpf); // oops, true!

// null: é melhor 'apagar/resetar' a variável com null, pois null em si é um valor (empty)
corDoCabelo = null;
// Quote from JavaScript Beginner to Professional book:
// 'This is one of the reasons it is better to assign null to a variable
//  when you want to say it is empty and unknown at first'
console.log(corDoCabelo === cpf); // false :)