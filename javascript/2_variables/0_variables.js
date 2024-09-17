/*
    Criando variáveis (diferenças entre var, let e const depois)
    1 Inicie suas variáveis com uma letra, underscore ou dollar sign $ (evitar
    esses últimos)
    2 Depois, use quantas letras, digitos numéricos, underscores e $ que quiser
    3 JavaScript é case sensitive e fracamente tipada
    4 Keywords da linguagem, espaços em branco ou caracteres especiais como hifens não são permitidos
 */
let idade = 18;
let nome = "Pedro"; // pode ser aspas simples também
let sobrenome = "Silva";
let éAlunoBolsista = false; // pode usar acentuação
let x; /* não foi inicializada e nome de variável não revela sua intenção e propósito */
let salário = 123.45;

// evite variáveis com $ ou _ no início de variáveis, apesar de JavaScript aceitar.
// estas são geralmente usadas por JavaScript Libraries. Por isso, só use com um motivo forte.
let $valor = 99;
let _resultado = 34.99;
let _desconto$10 = 10; // estranho, mas ok


// let 123cheguei = true; // erro
// let let = 2; // keyword erro
// let 8maçãs = 8; // erro
// let valor-final = 88.99; // erro
// let email principal = "jose@gmail.com"; // erro
// let caractere = 'A';
// Caractere = 'B'; // erro, é case sensitive

console.log("Idade:", idade);
console.log("Nome completo:", nome + " " + sobrenome); // concatenação de Strings
console.log("Aluno é bolsista? ", éAlunoBolsista);
console.log("x=", x);
console.log("Salário R$ ", salário);

// algumas expressões básicas iniciais
let maiorIgual14 = idade >= 14;
let éNomeLoginAna = nome === "Ana";
let dezAnosMaisVelho = idade + 10;
let preçoFinal = 12 * 43.99;
let éCaro = (preçoFinal > 0) && (preçoFinal != 1.99);
let mensagem_final = 100 + " dólares".toUpperCase(); // podia usar camelCase, mas ok