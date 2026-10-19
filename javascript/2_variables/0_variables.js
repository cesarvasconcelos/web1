// Fonte: https://javascript.info/variables
// Rode com: node 0_variables.js

/*
    GUIA RÁPIDO: VARIÁVEIS
    Variável = "caixa com etiqueta": um nome que guarda um valor.
    Declarar: let | const (modernos) | var (antigo, veja 1_hoisted... e 2*_...)

    REGRAS DE NOMES (o que o JavaScript EXIGE)
    1. Só letras, dígitos, $ e _
    2. Não pode começar com dígito
    3. Não pode ser palavra reservada (let, class, return, function...)
    4. Hífen e espaço não são permitidos
    5. É case sensitive: apple e APPLE são variáveis diferentes

    CONVENÇÕES (o que a comunidade ESPERA)
    - camelCase para nomes compostos: userName, shoppingCart
    - CONSTANTE_MAIUSCULA só para valores "hard-coded" conhecidos antes de rodar
    - nomes descritivos e em inglês (letras não-latinas/acentos funcionam, mas não são recomendados)
    - evite a, b, c, data, value — não dizem nada
*/

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 1. DECLARAR E ATRIBUIR
let message; // declaração (valor inicial: undefined)
message = "Hello"; // atribuição
let greeting = "Hi!"; // declaração + atribuição juntas

// O valor pode mudar quantas vezes quiser; o valor antigo é descartado
message = "World!";

// Copiar valor de uma variável para outra
let hello = "Hello world!";
let copy = hello; // agora as duas guardam "Hello world!"

console.log("message:", message);
console.log("copy:", copy);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 2. VÁRIAS VARIÁVEIS: uma por linha é mais legível
let user = "John";
let age = 25;
// let user2 = "John", age2 = 25; // funciona, mas NÃO é recomendado

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 3. NOMES VÁLIDOS (e algumas pegadinhas)
let idade = 18;
let nome = "Pedro"; // aspas simples ou duplas
let sobrenome = "Silva";
let éAlunoBolsista = false; // acentos funcionam (mas prefira inglês/sem acento)
let x; // válido, mas o nome não revela propósito (evite) -> valor: undefined
let salário = 123.45;

// $ e _ são letras comuns, sem significado especial na linguagem.
// Bibliotecas costumam usá-los (ex.: $ do jQuery, _ do Lodash), então evite no início.
let $valor = 99;
let _resultado = 34.99;
let _desconto$10 = 10; // estranho, mas ok

// NOMES INVÁLIDOS (descomente UM por vez: todos são SyntaxError, e um SyntaxError
// impede o arquivo INTEIRO de rodar, nem a primeira linha executa)
// let 123cheguei = true;           // começa com dígito
// let 8maçãs = 8;                  // começa com dígito
// let let = 2;                     // palavra reservada
// let return = 5;                  // palavra reservada
// let valor-final = 88.99;         // hífen é o operador de subtração
// let email principal = "a@b.com"; // espaço não é permitido

// CASE SENSITIVE: caractere e Caractere são DUAS variáveis diferentes
let caractere = "A";
// console.log(Caractere); // ReferenceError: Caractere is not defined (ler um nome que não existe)
// PEGADINHA: já ATRIBUIR com o nome errado NÃO dá erro sem "use strict":
//   Caractere = "B"; // cria silenciosamente OUTRA variável (global); caractere continua "A"
// É assim que um erro de digitação vira bug invisível. Veja a seção 6.

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 4. NÃO REDECLARE: declarar a mesma variável duas vezes com let é erro
let mensagem = "Isto";
// let mensagem = "Aquilo"; // SyntaxError: Identifier 'mensagem' has already been declared
mensagem = "Aquilo"; // correto: declare uma vez, depois só atribua

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 5. CONSTANTES (const): não podem ser reatribuídas
const myBirthday = "18.04.1982";
// myBirthday = "01.01.2001"; // TypeError: Assignment to constant variable.
// const garante e comunica que a variável não será reatribuída.
// Prática comum (não é regra da linguagem): use const por padrão e let só quando precisar reatribuir.
// Detalhes (const com objetos/arrays): veja 3_let-const.js

// 5a. MAIÚSCULAS: valores hard-coded, conhecidos antes da execução (apelidos fáceis de lembrar)
const COLOR_RED = "#F00";
const COLOR_ORANGE = "#FF7F00";
let color = COLOR_ORANGE; // mais fácil de lembrar e menos sujeito a erro de digitação que "#FF7F00"

// 5b. minúsculas (camelCase): constantes calculadas em tempo de execução
const birthday = "18.04.1982"; // hard-coded -> poderia ser BIRTHDAY
const pageLoadTime = Date.now(); // calculado ao rodar -> camelCase normal

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 6. ATRIBUIR SEM DECLARAR (NÃO FAÇA)
// Sem "use strict", cria uma variável global implícita (mantido por compatibilidade):
//   num = 5; // funciona e cria 'num'
// Com "use strict": ReferenceError: num is not defined. Veja https://javascript.info/strict-mode

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 7. BOAS PRÁTICAS DE NOMES
// - Use nomes legíveis: userName, shoppingCart
// - Use os mesmos termos em todo o código (currentUser, newUser; não currentVisitor)
// - Não reutilize uma variável para outra finalidade: criar outra é melhor (e barato)
// - Nomes ruins: a, b, data, value, x (a menos que o contexto deixe óbvio)

console.log("Idade:", idade);
console.log("Nome completo:", nome + " " + sobrenome); // concatenação de strings
console.log("Aluno é bolsista? ".concat(éAlunoBolsista)); // concatenação alternativa
console.log("x =", x); // undefined
console.log("Salário R$", salário);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 8. EXPRESSÕES BÁSICAS (preview dos próximos capítulos)
// JavaScript é dinamicamente tipada: o tipo pertence ao valor, não à variável.
let qualquer = 42; // number
qualquer = "agora sou texto"; // string: permitido (mas evite, veja seção 7)
let maiorIgual14 = idade >= 14;
let éNomeLoginAna = nome === "Ana";
let dezAnosMaisVelho = idade + 10;
let preçoFinal = 12 * 43.99;
let éCaro = preçoFinal > 0 && preçoFinal != 1.99;
let mensagemFinal = 100 + " dólares".toUpperCase(); // "100 DÓLARES" (toUpperCase só afeta a string)

console.log(
	maiorIgual14,
	éNomeLoginAna,
	dezAnosMaisVelho,
	preçoFinal,
	éCaro,
	mensagemFinal,
);
