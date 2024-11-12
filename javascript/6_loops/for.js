// A documentação oficial:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// Sintaxe;
// for ( initialization; loopContinuationCondition; increment )
//       statement

for (let i = 0; i < 10; i++)
    console.log(`i=${i}`);

// Outros exemplos para o aluno executar:
for (let i = 1; i <= 100; i++) { }
for (let i = 100; i >= 1; i--) { }
for (let i = 7; i <= 77; i += 7) { }
for (let i = 20; i >= 2; i -= 2) { }
for (let i = 2; i <= 20; i += 3) { }
for (let i = 2; i <= 20;) { i += 3; }
for (let i = 99; i >= 0; i -= 11) { }

let total = 0;
for (let number = 2; number <= 20; number += 2)
    total += number;

// a versão anterior, só que o incremento de total na própria área de incremento do for.
// nesse caso, como não há mais o statement (total+=number) no corpo do for,
///há um ponto e vírgula';' depois dos parênteses (JavaScript entende como um 'empty statement')
total = 0;
for (let number = 2;
    number <= 20;
    total += number, number += 2);

// usando múltiplas variáveis na inicialização
for (let a = 2, b = 3;
    a <= 10 || b <= 15;
    a += 2, b += 5)
    console.log(`a=${a} b=${b}`);