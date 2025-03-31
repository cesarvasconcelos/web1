// Strings: aspas simples, duplas e backticks (multilines & template literals)

let primeiroNome = 'Ana Maria'; // pode ser aspas simples
let últimoNome = "Pontes"; // ou duplas (mas, seja consistente)
let nomeCompleto = primeiroNome + " " + últimoNome; // concatenação

console.log(typeof primeiroNome); // string

let z = 'Z'; // atenção: as aspas simples formam a string e não 1 char (como Java)

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
// let slogan = "Um lugar legal é o Joe\'s Pizza"; // usar ESCAPE characters
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences

// ERRO: só não tente abrir com uma notação e tentar fechar com outra diferente
// console.log("Nome completo: ' + nomeCompleto);

let matrícula = 123; // asuma que é a matrícula de ana
// queria uma string com a mensagem "(123):Ana Maria Pontes"
// posso concatenar com '+', montando as strings com aspas simples ou duplas
let mensagem = '(' + matrícula + ')' + ':' + primeiroNome + ' ' + últimoNome;
// ou ainda let mensagem = "(" + matrícula + ")" + ":" + primeiroNome + " " + últimoNome;
console.log(mensagem);

// backtick é útil para criar template strings com string interpolation
// em vez de asplas simples ('), agora note os backtick (`) caracteres
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

mensagem = `(${matrícula}): ${primeiroNome} ${últimoNome}`;
console.log(mensagem);

// com exceção dos placeholders, o texto que estiver entre os backticks também será
// tratado como texto (da mesma forma que aspas simples/duplas)
mensagem = `(${matrícula}): "${primeiroNome} ${últimoNome}"`;
console.log(mensagem);

// Erro comum: ao invés de backticks, se tentar usar aspas simples ou duplas com
// placeholders ${}, o resultado pode não ser o desejado. Lembre-se de quem tem
// comportamento especial são backticks
mensagem = '(${matrícula}): ${primeiroNome} ${últimoNome}'; // resultado estranho
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

// Pode usar backslash \ para remover linebreaks \n de algumas linhas;
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
            ut labore et dolore magna aliqua.`
console.log(oops) // multilinhas respeitam a indentação

// 2a tentativa: também não vai adiantar, pois terei indentação agora na
// esquerda e continuo com vários linebreaks
oops = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.`;
console.log(oops); // com linebreaks inesperados

console.log()

// Por fim: para deixar organizado e sem linebreaks, posso quebrar a linha
// somente por questões de legibilidade dentro da IDE usando strings simples
let ok = 'Lorem ipsum dolor sit amet, ' +
    'consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ' +
    'ut labore et dolore magna aliqua.';
console.log(ok); // agora sim, o resultado será sem linebreaks