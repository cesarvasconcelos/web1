// referência (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// além de var, tem-se let e const no JavaScript
// antes da ES6 (2015), JavaScript não tinha a ideia de block scope bem definida
// let e const foram introduzidas na ES6

// Comparando let/const com o antigo var:
// let e const ficam na TDZ (Temporal Dead Zone) até a linha da declaração —> var é elevada e vale undefined
//   (tecnicamente let/const são "hoisted", mas NÃO inicializadas (nem com undefined): logo, acessar antes da declaração = ReferenceError)
// let e const têm escopo de BLOCO        —> var tem escopo de função ou global (não de bloco)
// let e const NÃO podem ser redeclaradas —> var pode (mas é má prática)

// const é como let, mas a variável não pode ser REATRIBUÍDA após a declaração
// (isso não é o mesmo que "valor imutável": veja a seção 4)

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 1. let e const têm TDZ (Temporal Dead Zone) —> a ordem de declaração importa
// Tentar usar uma variável let/const antes de declará-la causa ReferenceError.
// Com var, isso seria permitido: a declaração seria elevada e o valor seria undefined.
// A diferença para var é que esta é inicializada com undefined já no hoisting e por isso não tem TDZ;
// a TDZ existe justamente para transformar esse undefined silencioso em erro explícito.
// console.log("c=" + c); // Descomente: ReferenceError: Cannot access 'c' before initialization
let c; // do início do escopo até esta linha, 'c' está na TDZ

// PROVA de que let é "hoisted" (só não é inicializada): o 'v' de dentro do bloco já
// "reserva" o nome desde a abertura do {, escondendo o 'v' de fora.
let v = 1;
{
	// console.log(v); // Descomente: ReferenceError (e NÃO 1!), pois este 'v' é o de baixo, ainda na TDZ
	let v = 2;
}

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 2. let e const têm ESCOPO DE BLOCO
// Um bloco é qualquer trecho de código entre { e }.
// Variáveis let/const declaradas dentro de um bloco não existem fora dele.
{
	let x = 2; // x só existe dentro deste bloco
}
// console.log(x) // Descomente e veja o ReferenceError: x is not defined

// Exemplo: dois escopos, dois "b" independentes —> o de dentro não afeta o de fora
let b = 10; // b no escopo externo
{
	let b = 2; // b diferente, existe apenas dentro deste bloco
}
console.log("b =" + b); // 10 —> o 'b' de fora não foi alterado pelo 'b' de dentro do bloco

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 3. let e const NÃO podem ser redeclaradas no mesmo escopo
let a = "uma vogal";
// let a = "uma consoante"; // Descomente e veja o SyntaxError: Identifier 'a' has already been declared

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 4. const é como let, mas a variável não pode ser reatribuída após a declaração
const k = "ABC";
// k = 99; // Descomente e veja o TypeError: Assignment to constant variable.
// const exige valor na declaração: const semValor; // SyntaxError: Missing initializer in const declaration

// ATENÇÃO: const impede REATRIBUIR a variável, mas não torna o valor imutável.
// Com objetos e arrays, o conteúdo ainda pode ser alterado:
const lista = [1, 2];
lista.push(3); // OK: [1, 2, 3]
// lista = [];  // TypeError: reatribuir a variável não pode

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LEMBRETE: como era com var (antes da ES6)? compare com let e const acima
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
// console.log(z); // Descomente e veja o ReferenceError: var dentro de função NÃO vaza para fora
// (var ignora o escopo de bloco, mas respeita o escopo de função)

// --- var TOLERA REDECLARAÇÕES ---
// ao contrário de let/const, var permite declarar a mesma variável mais de uma vez sem erro.
var nome = "Ana";
var nome = "Carlos"; // sem erro! A redeclaração é ignorada; a nova atribuição é que sobrescreve o valor.
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
//   - let e const, apesar de tecnicamente serem hoisted, não são inicializadas (nem mesmo com undefined)
//     até a execução chegar à linha da declaração; qualquer acesso antes disso lança ReferenceError (TDZ)
//   - No browser, var no topo de um <script> vira propriedade de window (var q = 1 -> window.q === 1);
//     let e const não. (No Node isso não acontece: cada arquivo é um módulo com escopo próprio.)
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LEMBRETE: por que let e const são "tecnicamente" hoisted?
//
// O "tecnicamente" aparece porque a palavra hoisting mistura duas coisas diferentes,
// e let/const só têm uma delas.
//
// O que o motor faz ao entrar em um escopo: antes de executar a primeira linha, ele percorre
// o escopo inteiro e registra todos os nomes declarados ali. Só depois começa a executar.
// Esse registro antecipado do nome é o hoisting, e acontece com var, let e const
// (var é registrada no escopo da função ou do script; let/const, no escopo do bloco).
//
// O que muda é o que fica guardado no nome registrado:
//
//                 | Nome registrado no início do escopo? | Valor nesse momento
//   --------------+--------------------------------------+--------------------------
//   var           | sim                                  | undefined
//   let / const   | sim                                  | nenhum (não inicializada)
//
// Daí as duas leituras da palavra:
//
//   - Hoisting como "o nome já existe desde o início do escopo": vale para let/const.
//     Esse é o sentido técnico.
//   - Hoisting como "posso usar a variável antes da declaração": NÃO vale para let/const,
//     porque o acesso dá ReferenceError. Esse é o sentido prático, e é como a maioria das
//     pessoas aprende o termo com var.
//
// Então "tecnicamente hoisted" quer dizer: o mecanismo interno acontece, mas você não consegue
// tirar proveito dele, e na prática o comportamento parece o de uma variável que não foi elevada.
//
// Como saber que o nome foi mesmo registrado, se não dá para usá-lo? Pelo exemplo da seção 1:
//
//   let v = 1;
//   {
//       console.log(v); // ReferenceError, e NÃO 1
//       let v = 2;
//   }
//
// Se o 'v' interno só passasse a existir na linha let v = 2, o console.log(v) acharia o 'v'
// de fora e imprimiria 1. Ele dá erro porque o 'v' interno já ocupa o nome desde o { e esconde
// o de fora, mesmo ainda sem valor. Esse é o único efeito visível do hoisting de let/const.
//
// A própria mensagem de erro confirma isso:
//   - variável que não existe: ReferenceError: x is not defined
//   - variável na TDZ:         ReferenceError: Cannot access 'v' before initialization
// ou seja, o motor sabe que ela existe e só não foi inicializada.
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
