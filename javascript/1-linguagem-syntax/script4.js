// arquivo referenciado por 4b_script-tag-external-script-prompt.html

// prompt() devolve:
//   - string com o texto digitado (sempre string, mesmo que seja "25")
//   - "" se o usuário clicar em OK sem digitar nada
//   - null se o usuário cancelar
// Fonte: MDN, Window.prompt() - https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
const idade = prompt("Qual é a sua idade?");

// Demonstração didática: o que Number() faz com cada retorno possível.
// Abra o console (F12) e teste cancelando, deixando vazio e digitando "25".
const idadeComoNumero = Number(idade);
console.log("valor bruto:", idade, "| tipo:", typeof idade);
console.log(
	"após Number():",
	idadeComoNumero,
	"| tipo:",
	typeof idadeComoNumero,
);
// Resultado de Number(idade):
//   - Cancelar (null), deixar vazio ("") ou digitar só espaços ("   ") resultam em 0 (parece uma idade válida, mas não é!)
//   - Texto como "abc" resulta em NaN (Not a Number)
//   - Digitar "25" resulta em 25

// Por isso a ordem das verificações importa:
//   1) null / "" (texto vazio ou só espaços) ANTES de usar o número, pois viram 0
//   2) NaN em seguida, usando a variável já convertida
// Use === (comparação estrita) para não depender de conversões automáticas de tipo.
// NaN nunca é igual a ele mesmo (NaN === NaN é false), então não dá para testar com ===:
// use Number.isNaN().
// Fonte: MDN, Number.isNaN() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
if (idade === null || idade.trim() === "") {
	alert("Você cancelou ou não digitou nada.");
} else if (Number.isNaN(idadeComoNumero)) {
	alert(`"${idade}" não é um número válido.`);
} else {
	alert(`Você disse que tem ${idadeComoNumero} anos!`);
}
