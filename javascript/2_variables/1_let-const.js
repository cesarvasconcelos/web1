// documentação oficial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// além de var, tem-se let e const no JavaScript
// antes da ES6 (2015), JavaScript não tinha a idéia de block scope bem definida
// let e const foram introduzidas na ES6

// Comparando let/const com o antigo var:
// let e const NÃO são hoisted            —> var é (declaração elevada ao topo)
// let e const têm escopo de BLOCO        —> var tem escopo de função ou global
// let e const NÃO podem ser redeclaradas —> var pode (mas é má prática)
// let e const NÃO podem ser usadas antes de serem declaradas —> var pode (mas será undefined)

// const é como let, mas imutável: não pode ter seu valor reatribuído após a declaração

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 1. let e const NÃO são hoisted —> a ordem de declaração importa
// Tentar usar uma variável let/const antes de declará-la causa ReferenceError.
// Com var, isso seria permitido: a declaração seria elevada e o valor seria undefined.
console.log("c=" + c); // ReferenceError: Cannot access 'c' before initialization
let c; // declaração não é elevada, o que é diferente de var

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 2. let e const têm ESCOPO DE BLOCO
// Um bloco é qualquer trecho de código entre { e }.
// Variáveis let/const declaradas dentro de um bloco não existem fora dele.
{
	let x = 2; // x só existe dentro deste bloco
}
// console.log(x) // Descomente e veja o ReferenceError: x is not defined

// Exemplo: dois blocos, dois "b" independentes —> o de dentro não afeta o de fora
let b = 10; // b no escopo externo
{
	let b = 2; // b diferente, existe apenas dentro deste bloco
}
console.log("b =" + b); // 10 —> o b externo permanece intacto

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 3. let e const NÃO podem ser redeclaradas no mesmo escopo
let a = "uma vogal";
// let a = "uma consoante"; // Descomente e veja o SyntaxError: Identifier 'a' has already been declared

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 4. const é como let, mas o valor não pode ser reatribuído após a declaração
const k = "ABC";
// k = 99; // Descomente e veja o TypeError: Assignment to constant variable.

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LEMBRETE: como era com var (antes do ES6)? compare com let e const acima
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// --- var NÃO TEM ESCOPO DE BLOCO ---
// variáveis declaradas com var ou têm escopo de função ou escopo global.
// var ignora blocos de código ({ }, if, for, while) —> a variável "vaza" para fora do bloco.
{
	var y = 5;
}
console.log("y=" + y); // 5 —> acessível fora do bloco! (diferente de let/const)

// se o bloco de código estiver dentro de uma função, var respeita o escopo de função:
function exemploVarFuncao() {
	var z = "sou local da função";
	console.log(z); // "sou local da função"
}
exemploVarFuncao();
// console.log(z); // Descomente e veja o ReferenceError — var dentro de função NÃO vaza para fora
// (só porque é função, ou seja, ela respeita o escopo de função)

// --- var TOLERA REDECLARAÇÕES ---
// ao contrário de let/const, var permite declarar a mesma variável mais de uma vez sem erro.
var nome = "Ana";
var nome = "Carlos"; // sem erro! A segunda declaração sobrescreve a primeira.
console.log("nome=" + nome); // "Carlos"

// --- var PODE SER USADA ANTES DE SER DECLARADA (hoisting) ---
// todas as declarações var são "elevadas" (hoisted) ao topo da função ou script.
// apenas a DECLARAÇÃO é elevada; a ATRIBUIÇÃO permanece no lugar original.
// por isso, a variável existe antes da linha de atribuição, mas vale undefined.
console.log("d=" + d); // undefined — sem ReferenceError (diferente de let/const)
var d = "declarada depois";
console.log("d=" + d); // "declarada depois"

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// RESUMO — diferenças do var em relação a let e const:
//
//   - var não tem escopo de bloco: variável declarada dentro de {} vaza para fora
//   - Dentro de uma função, var tem escopo de função (não vaza para fora dela)
//   - var tolera redeclarações: declarar a mesma variável duas vezes não gera erro
//   - var é hoisted: a declaração é elevada ao topo, mas a atribuição não;
//     o valor é undefined até a linha onde a atribuição ocorre
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
