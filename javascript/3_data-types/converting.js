// Convertendo data types

// primeiro, note como é perigoso confiar em algumas conversões automáticas do JS
let n1 = 4;
let n2 = "6";

console.log(n1 * n2); // 24, mas bem que JavaScript poderia evitar isso :(
console.log(n1 + n2); // "46"

// Como se vê, algumas vezes o JavaScript realiza a conversão automática e
// outras não. Para não ter de se apoiar nessas conversões inesperadas,
// melhor usar funções built-in para converter data types

// Três built-in functions para conversão você deve lembrar:
// String(), Number() e Boolean()

// String(): praticamente qualquer valor, incluindo undefined e null,
// e tenta converter pra string
let nrToStr = 66;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr); // 66 string

console.log(typeof String(undefined)); // string
console.log(typeof String(null)); // string

// Number(): tenta converter para um data type number. Se não conseguir, retorna
// NaN
let strToNr = "1234";
let pass = "1234***";
strToNr = Number(strToNr);
// strToNr = +strToNr; // uma dica de como converter de string -> number só colocando '+' na frente
pass = Number(pass);
console.log(strToNr, typeof strToNr); //1234 number
console.log(pass, typeof pass); //NaN number

// atenção para null e string vazia, que sempre resulta em 0
let emptyStr = "";
let nu = null;
emptyStr = Number(emptyStr);
nu = Number(nu);
console.log(emptyStr, typeof emptyStr); // 0 number
console.log(nu, typeof nu); // 0 number

// Boolean(): irá converter para boolean, retornando true para qualquer coisa que
// não seja false, null, undefined, 0 (number), uma string vazia e NaN.

// A documentação: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
// Any value can be converted to a boolean according to the following rules:
// false, 0, empty strings(""), NaN, null, and undefined all become false.
// All other values become true.
// Lembrar que operadores abaixo podem ser usados com booleans
// && (logical and), || (logical or), and ! (logical not)
// So remember: Javascript tries to coerce values to a Boolean if a Boolean is required.
// coerção, aqui, significa que o Javascript tentará interpretar o valor como Boolean
console.log(Boolean(true)); // true
console.log(Boolean(false)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(NaN)); // false

console.log(Boolean("false")); // true, qualquer string será convertida para true, mesmo que com conteúdo false

// arrays e objects (serão vistos mais adiante)
// são tratados como true na coerção para Boolean
let arr1 = [10, 20];
let coordXY = { x: -5, y: 0 };

console.log(Boolean(arr1)); // true
console.log(Boolean(coordXY)); // true

// Abaixo, dois exemplos úteis (e comuns) de coerção automática feita pelo JavaScript

// ─── Macete: || e && não retornam true/false — retornam um dos operandos ───
//
// || (OR) —> "Procuro alguém que dê conta do recado"
//   O OR quer encontrar um valor truthy. Ele percorre os operandos até achar um
//   truthy e retorna esse. Se não achar nenhum, retorna o último (desistiu).
//
//   false || 0 || "oi"  → "oi"   (achou o primeiro truthy)
//   false || 0 || ""    → ""     (não achou nenhum, desiste e entrega o último)
//   "oi"  || "tudo"     → "oi"   (achou no primeiro, nem olha o segundo)
//
//   Regra: retorna o primeiro truthy que encontrar; se não achar, desiste e retorna o último.
//
// && (AND) —> "Todos precisam dar conta do recado"
//   O AND quer garantir que tudo é truthy. Percorre esperando truthy e retorna o
//   último avaliado. Mas se encontrar um falsy, para ali e retorna esse falsy.
//
//   "oi" && "tudo" && "bem"  → "bem"  (todos truthy, retorna o último)
//   "oi" && 0      && "bem"  → 0      (corrente quebrou no 0, para aqui)
//   0    && "oi"             → 0      (já quebrou no primeiro)
//
//   Regra: retorna o primeiro falsy que encontrar; se não achar, retorna o último.
//
// Resumo:
//   ||  está procurando truthy → para e retorna o primeiro truthy (ou o último)
//   &&  está procurando falsy  → para e retorna o primeiro falsy  (ou o último)
//   Ambos fazem short-circuit: param assim que já conseguem decidir o resultado.
// ─────────────────────────────────────────────────────────────────────────────

// Em short-circuit evaluation:

// OR (||) para no primeiro truthy (já decidiu que o resultado é "verdadeiro o suficiente")
// AND (&&) para no primeiro falsy (já decidiu que a cadeia quebrou)

// Se nenhum dos operandos acionar a parada, o último é retornado — porque o JS chegou ao fim sem conseguir decidir antes.

// Exemplo: quero imprimir ou a entrada válida digitada (e.g., em um HTML) ou uma frase default
// Com OR, quem for true/truthy, já será retornado. But, If the first value is falsy,
// then the second value will be returned - even if that operand is also falsy
let entradaDigitada = ""; // falsy
console.log(entradaDigitada || "<< Entrada inválida >>");
entradaDigitada = null; // falsy
console.log(entradaDigitada || "<< Entrada inválida >>");
entradaDigitada = "Ana Silva"; // truthy
console.log(entradaDigitada || "<< Entrada inválida >>");

// Exemplo 3:
// quero uma função que retorne os materiais para os bolsistas ou false
// Com && (AND), quem conseguir decidir o resultado da expressão será retornado;
// If the first value if truthy, the && operator ALWAYS returns the second operand),
// even if that operand it's falsy.
function getMateriaisEscolares(email) {
	let materiais = ["Caneta", "Livro"];
	return email && materiais; // ou retorna o email falsy ou a lista de materiais
}
// simulando
let emailAlunoBolsista = "pedro@gmail.com";
console.log(getMateriaisEscolares(emailAlunoBolsista)); // [Caneta,Livro]
emailAlunoBolsista = null;
console.log(getMateriaisEscolares(emailAlunoBolsista)); // null (não false —> retorna o próprio valor falsy)

// Em Java, por exemplo, não há a ideia de truthy ou falsy.
// O exemplo acima resultaria em erro

// testando valores truthy/false com || e &&
console.log("" || null); // null, If the first value is falsy, then the second will be returned - even if that operand is also falsy
console.log("ABC" || "DEF"); // ABC, quem for true/truthy, já será retornado. Se todos fossem falsy, seria o último
console.log("ABC" && "DEF"); // DEF, usando && (AND), quem conseguir decidir o resultado da expressão será retornado;
console.log("" && "DEF"); // '', usando && (AND), quem conseguir decidir o resultado da expressão será retornado;
console.log("DEF" && 0); // 0, usando && (AND), quem conseguir decidir o resultado da expressão será retornado;
