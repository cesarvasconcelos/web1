// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

let páginas = 1;
const mensagem = `A prova tem ${páginas} página` + String(páginas > 1 ? 's' : ' apenas');

console.log(mensagem);

// Outro exemplo:
let idade = 22;
// menos comum é usar o operador ternário como um statement, em vez de uma expressão (com retorno)
idade < 18 ?
    console.log('Idade menor que 18 anos') :
    console.log('Idade *não* é menor que 18 anos');