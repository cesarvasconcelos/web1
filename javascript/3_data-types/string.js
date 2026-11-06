// Strings: aspas simples, duplas e backticks (multilines & template literals)
// Fonte principal: https://javascript.info/types#string
// Aprofundamento: https://javascript.info/string
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// Em JavaScript, uma string precisa estar cercada por aspas. Há 3 tipos:
// - aspas duplas: "Olá"
// - aspas simples: 'Olá'
// - backticks:    `Olá`
// Aspas duplas e simples são "simples": praticamente não há diferença entre elas.
// Backticks têm funcionalidade "estendida": permitem embutir variáveis e
// expressões com ${...} (template literals) e escrever strings em várias linhas.

let primeiroNome = 'Ana Maria'; // pode ser aspas simples
let últimoNome = "Pontes"; // ou duplas (mas, seja consistente)
let nomeCompleto = primeiroNome + " " + últimoNome; // concatenação

console.log(typeof primeiroNome); // string

let z = 'Z'; // atenção: as aspas simples formam uma string e não 1 char (como em Java)
// Em JavaScript NÃO existe o tipo char. Uma string pode ter zero, um ou vários caracteres:
console.log(typeof z); // "string"
let vazia = ''; // string vazia (zero caracteres) também é string
console.log(typeof vazia, vazia.length); // string 0

// Pode fazer mix de aspas simples e duplas? Sim. quando abrir/fechar seja aspas
// simples ou duplas, os caracteres entre elas serão tratados como texto; mesmo
// que sejam números e até outras aspas simples/duplas. Logo, a principal
// diferença entre montar strings com aspas simples ou duplas é que você poderá
// usar aspas simples tratados como TEXTO PURO DENTRO de aspas duplas e vice versa.
// Por exemplo: '"ABC"' ou "'ABC'" Veja:
console.log('"Nome completo": ' + nomeCompleto); // OK
// ou console.log("'Nome completo': " + nomeCompleto); // OK

// atenção: às vezes, com aspas simples, poderá haver erros chatos
// let slogan = 'Um lugar legal é o Joe's Pizza'; // ERRO (fechou cedo demais)
let slogan = "Um lugar legal é o Joe's Pizza"; // pode mixar aspas ou
// let slogan = 'Um lugar legal é o Joe\'s Pizza'; // ou usar ESCAPE characters (\' dentro de aspas simples)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences

// ERRO: só não tente abrir com uma notação e tentar fechar com outra diferente
// console.log("Nome completo: ' + nomeCompleto);

let matrícula = 123; // assuma que é a matrícula de Ana
// queria uma string com a mensagem "(123):Ana Maria Pontes"
// posso concatenar com '+', montando as strings com aspas simples ou duplas
let mensagem = '(' + matrícula + ')' + ':' + primeiroNome + ' ' + últimoNome;
// ou ainda let mensagem = "(" + matrícula + ")" + ":" + primeiroNome + " " + últimoNome;
console.log(mensagem);

// backtick é útil para criar template strings com string interpolation
// em vez de aspas simples ('), agora note os caracteres backtick (`)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

mensagem = `(${matrícula}): ${primeiroNome} ${últimoNome}`;
console.log(mensagem);

// Dentro de ${...} pode ir qualquer EXPRESSÃO, não só variáveis:
console.log(`o resultado é ${1 + 2}`); // o resultado é 3
console.log(`${primeiroNome} tem ${primeiroNome.length} caracteres`); // Ana Maria tem 9 caracteres

// com exceção dos placeholders, o texto que estiver entre os backticks também será
// tratado como texto (da mesma forma que aspas simples/duplas)
mensagem = `(${matrícula}): "${primeiroNome} ${últimoNome}"`;
console.log(mensagem);

// Erro comum: ao invés de backticks, se tentar usar aspas simples ou duplas com
// placeholders ${}, o resultado pode não ser o desejado. Lembre-se de que quem tem
// comportamento especial são os backticks: aspas simples/duplas não fazem nada com ${}
mensagem = '(${matrícula}): ${primeiroNome} ${últimoNome}'; // resultado estranho: imprime ${...} literalmente
// mensagem = "(${matrícula}): ${primeiroNome} ${últimoNome}"; equivalente
console.log(mensagem);

// Multilinhas: além das template strings, pode-se tirar vantagem de mais outros
// "poderes" especiais das strings de backticks
let linhas = `a) maçã
b) laranja
c) manga
d) abacaxi`;
console.log(linhas);

console.log();

// Pode usar backslash \ para remover as quebras de linha (\n) de algumas linhas;
// i.e., se terminar a linha com backslash (\), JavaScript irá interpretar a próxima
// linha como uma continuação da string corrente
linhas = `a) maçã \
b) laranja \
c) manga
d) abacaxi`;
console.log(linhas);

// multilinhas com backticks: atenção na hora de quebrar uma string de 1 linha
// longa na IDE só pra melhorar a legibilidade para você, pois, se usar
// backticks/multilinhas, a string irá ter linebreaks inesperados e indentação.
// Abaixo, veja que eu só queria uma string longa de 1 linha e quebrei para
// melhor legibilidade na IDE; mas acabou que tive vários linebreaks +
// indentação inesperada no final da impressão:
let oops = `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.`;
console.log(oops); // multilinhas respeitam a indentação

// 2a tentativa: tirei a indentação do código (que fica feio no editor),
// mas também não vai adiantar: continuo com vários linebreaks
oops = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.`;
console.log(oops); // com linebreaks inesperados

console.log();

// Por fim: para deixar organizado e sem linebreaks, posso quebrar a linha
// somente por questões de legibilidade dentro da IDE usando strings simples
let ok = 'Lorem ipsum dolor sit amet, ' +
    'consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ' +
    'ut labore et dolore magna aliqua.';
console.log(ok); // agora sim, o resultado será sem linebreaks
