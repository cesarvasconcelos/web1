// documentação oficial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// além de var, tem-se let e const no JavaScript
// antes da ES6 (2015), JavaScript não tinha a ideia de block scope bem definida
// let and const foram introduzidas na ES6

// Abaixo, note que o comportamento é "o contrário" de var
// let e const NÃO PODEM SER DECLARADAS depois do uso
// let e const NÃO são hoisted
// let e const BLOCK scope
// let e const NÃO REDECLARADAS

// const é como let, mas como uma constante tradicional em programação

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let e const NÃO PODE SER DECLARADA depois do uso.
// let e const NÃO são hoisted, ou seja, a ordem de declaração importa
// (diferente de function onde a ordem da declaração não importa)
console.log("c=" + c) // em vez de hoisted+undefined como var, agora let acusa ReferenceError: Cannot access 'c' before initialization
let c; // declaração não é elevada.


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let e const BLOCK scope.
// note a diferença agora para a antiga var quanto ao escopo
{
    let x = 2;
}
// x não pode ser usada aqui (não tem global scope como var)
// console.log(x) // Descomente e veja o ReferenceError: x is not defined

let b = 10; // 10
{
    let b = 2; // 2, com escopo local apenas
}

console.log("b =" + b); // 10

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let e const NÃO REDECLARADAS
// agora, note a diferença para var quando a questão é a redeclaração
let a = "uma vogal";
// let a = 0; // Descomente e veja o erro SyntaxError: Identifier 'a' has already been declared 'a'

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// como const é como let só que constante, veja o erro TypeError: Assignment to constant variable.
const k = "ABC";
k = 99;