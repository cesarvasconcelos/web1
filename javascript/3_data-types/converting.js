// Convertendo data types (conversão de tipos)
// Fonte principal: https://javascript.info/type-conversions
// MDN: https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion
// Obs.: aqui tratamos só de tipos primitivos; a conversão de objetos é vista em
// https://javascript.info/object-toprimitive

// primeiro, note como é perigoso confiar em algumas conversões automáticas do JS
let n1 = 4;
let n2 = "6";

console.log(n1 * n2); // 24, mas bem que JavaScript poderia evitar isso :(
console.log(n1 + n2); // "46" ← com +, se um dos lados for string, o JS CONCATENA
console.log("6" / "2"); // 3, em operações matemáticas (/, *, -) as strings viram numbers

// Como se vê, algumas vezes o JavaScript realiza a conversão automática e
// outras não. Para não ter de se apoiar nessas conversões inesperadas,
// melhor usar funções built-in para converter data types

// Três built-in functions para conversão você deve lembrar:
// String(), Number() e Boolean()

// String(): recebe praticamente qualquer valor, incluindo undefined e null,
// e converte para string. A conversão para string acontece também automaticamente
// quando precisamos exibir um valor (e.g., console.log, alert).
// O resultado é geralmente "óbvio": false vira "false", null vira "null" etc.
let nrToStr = 66;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr); // 66 string

console.log(String(undefined), typeof String(undefined)); // undefined string
console.log(String(null), typeof String(null)); // null string
console.log(String(false), typeof String(false)); // false string
// Exceção: String(symbol) funciona, mas a conversão AUTOMÁTICA de um symbol para
// string (e.g., "texto" + symbol) lança TypeError (ver symbol.js)

// Number(): tenta converter para um data type number. Se não conseguir, retorna
// NaN. A conversão explícita é muito comum ao ler valores de fontes baseadas
// em texto, como campos de formulário HTML (tudo chega como string!)
let strToNr = "1234";
let pass = "1234***";
strToNr = Number(strToNr);
// strToNr = +strToNr; // uma dica de como converter de string -> number só colocando '+' na frente
// (o + unário faz a mesma conversão que Number())
pass = Number(pass);
console.log(strToNr, typeof strToNr); //1234 number
console.log(pass, typeof pass); //NaN number

// atenção para null e string vazia, que sempre resultam em 0
let emptyStr = "";
let nu = null;
emptyStr = Number(emptyStr);
nu = Number(nu);
console.log(emptyStr, typeof emptyStr); // 0 number
console.log(nu, typeof nu); // 0 number

// Regras de conversão para number (javascript.info):
//   undefined      → NaN   ← pegadinha: NÃO é 0!
//   null           → 0
//   true / false   → 1 / 0
//   string         → espaços em branco (espaços, \t, \n...) do início e do fim são
//                    removidos. Se sobrar string vazia → 0. Senão, o número é "lido"
//                    da string; se houver erro → NaN.
console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("   123   ")); // 123 (espaços do início e do fim são ignorados)
console.log(Number("123z")); // NaN (erro ao ler o "z")
console.log(Number(" \n\t ")); // 0 (só espaços em branco → string vazia → 0)

// Number() × parseInt() / parseFloat() (ver converting-parseFloat-vs-Number.png)
// Number() exige que a string INTEIRA seja um número válido; já parseInt/parseFloat
// leem o número do INÍCIO da string e param no primeiro caractere inválido.
// MDN: "parseFloat() is more lenient than Number() because it ignores trailing
// invalid characters, which would cause Number() to return NaN."
console.log(Number("3.14 is a pi value")); // NaN
console.log(parseFloat("3.14 is a pi value")); // 3.14
console.log(parseInt("3.14 is a pi value")); // 3 (parseInt só lê a parte inteira)
console.log(Number("12px"), parseInt("12px")); // NaN 12 (útil para valores como os de CSS)
console.log(Number(""), parseFloat("")); // 0 NaN ← diferença importante!
console.log(Number("1e3"), parseInt("1e3"), parseFloat("1e3")); // 1000 1 1000
// Dica: em parseInt, informe sempre a base (radix): parseInt("08", 10) → 8
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

// Boolean(): irá converter para boolean, retornando true para qualquer coisa que
// não seja false, null, undefined, 0, -0, 0n (BigInt zero), uma string vazia e NaN.
// Regra intuitiva: valores "vazios" viram false; todo o resto vira true.
// Acontece automaticamente em operações lógicas (if, ||, &&, !...)

// A documentação: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
// MDN: "all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN,
// and document.all." (document.all é um caso especial e legado dos navegadores)
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

console.log(Boolean("false")); // true, qualquer string não vazia será convertida para true, mesmo que com conteúdo false
console.log(Boolean("0")); // true ← pegadinha: a string "0" não é vazia (em PHP seria false)
console.log(Boolean(" ")); // true ← string só com espaço também não é vazia

// arrays e objects (serão vistos mais adiante)
// são tratados como true na coerção para Boolean
let arr1 = [10, 20];
let coordXY = { x: -5, y: 0 };

console.log(Boolean(arr1)); // true
console.log(Boolean(coordXY)); // true

// Abaixo, dois exemplos úteis (e comuns) de coerção automática feita pelo JavaScript

// ─── Macete: || e && não retornam true/false: retornam um dos operandos! ───
//
// || (OR) —> "Procuro a primeira ocorrência da verdade. Se encontrar truthy, para e entrega ela. Se não,
// desisto e entrego o último."
//   O OR quer encontrar um valor truthy. Ele percorre os operandos até achar um
//   truthy e retorna esse. Se não achar nenhum, retorna o último (desistiu).
//
//   false || 0 || "oi"  → "oi"   (achou o primeiro truthy)
//   false || 0 || ""    → ""     (não achou nenhum, desiste e entrega o último)
//   "oi"  || "tudo"     → "oi"   (achou no primeiro, nem olha o segundo)
//
//   Regra: retorna o primeiro truthy que encontrar; se não achar nenhum, desiste e retorna o último.
//
// && (AND) —> "Todos precisam ser verdadeiros. Se encontrar um falsy, para e entrega ele. Se não,
// desisto e entrego o último."
//   O AND quer garantir que tudo é truthy. Percorre esperando truthy e retorna o
//   último avaliado. Mas se encontrar um falsy, para ali e retorna esse falsy.
//
//   "oi" && "tudo" && "bem"  → "bem"  (todos truthy, retorna o último)
//   "oi" && 0      && "bem"  → 0      (corrente quebrou no 0, para aqui)
//   0    && "oi"             → 0      (já quebrou no primeiro 0, nem olha o segundo)
//
//   Regra: retorna o primeiro falsy que encontrar; se não achar, retorna o último.
//
// Resumo:
//   ||  está procurando truthy → para e retorna o primeiro truthy (ou o último)
//   &&  está procurando falsy  → para e retorna o primeiro falsy  (ou o último)
//   Ambos fazem short-circuit: param assim que já conseguem decidir o resultado.
// ─────────────────────────────────────────────────────────────────────────────

// Em short-circuit evaluation:

// OR (||) para no primeiro truthy, se não achar retorna o último (desiste)
// AND (&&) para no primeiro falsy, se não achar retorna o último (desiste)

// Se nenhum dos operandos acionar a parada, o último é retornado, porque o JS chegou ao fim sem
// conseguir decidir antes.

// Exemplo 1: quero imprimir ou a entrada válida digitada (e.g., em um HTML) ou uma frase default
// Com || (OR) está procurando truthy, quem for true/truthy, já será retornado ou o último se todos forem falsy
let entradaDigitada = ""; // falsy
console.log(entradaDigitada || "<< Entrada inválida >>"); // << Entrada inválida >>
entradaDigitada = null; // falsy
console.log(entradaDigitada || "<< Entrada inválida >>"); // << Entrada inválida >>
entradaDigitada = "Ana Silva"; // truthy
console.log(entradaDigitada || "<< Entrada inválida >>"); // Ana Silva
// Atenção: o "default" é o valor à direita do || (aqui, "<< Entrada inválida >>").
// Com ||, QUALQUER falsy à esquerda (false, 0, "", null, undefined, NaN) faz o JS usar o default.
// Só que às vezes 0 ou "" são valores VÁLIDOS (e.g., o usuário digitou quantidade 0), e não
// queremos trocá-los. Para trocar só null/undefined, existe o operador ?? (nullish coalescing):
// https://javascript.info/nullish-coalescing-operator
//
// Exemplo rápido (quantidade digitada = 0, que é um valor válido):
let quantidadeDigitada = 0;
console.log(quantidadeDigitada || 10); // 10 (0 é falsy, então foi trocado pelo default — indesejado)
console.log(quantidadeDigitada ?? 10); // 0  (0 não é null/undefined, então é mantido)
console.log(null ?? 10); // 10 (null → usa o default)
console.log(undefined ?? 10); // 10 (undefined → usa o default)
console.log("" ?? "vazio"); // "" (string vazia é mantida; com || viraria "vazio")

// Exemplo 2: imagine que você tem uma lista de materiais escolares para os alunos bolsistas, mas só
// quer entregar essa lista para quem tem um email cadastrado (ou seja, um email válido). Se o email
// for falsy, quero retornar false. Se for truthy, quero retornar a lista de materiais.
// quero uma função que retorne os materiais para os bolsistas ou false
// Com && (AND) está procurando falsy, quem for falsy, já será retornado ou o último se todos forem truthy
function getMateriaisEscolares(email) {
	let materiais = ["Caneta", "Livro"];
	return email && materiais; // retorna o primeiro falsy ou desiste e retorna o último, i.e., o email falsy ou a lista de materiais
}
// simulando
let emailAlunoBolsista = "pedro@gmail.com";
console.log(getMateriaisEscolares(emailAlunoBolsista)); // [ 'Caneta', 'Livro' ]
emailAlunoBolsista = null;
console.log(getMateriaisEscolares(emailAlunoBolsista)); // null (não false —> retorna o próprio valor falsy)

// Em Java, por exemplo, não há a ideia de truthy ou falsy.
// O exemplo acima resultaria em erro de compilação (em Java, && só aceita boolean)

// testando valores truthy/false com || e &&
console.log("" || null); // null → OR: nenhum truthy encontrado, desiste e retorna o último
console.log("ABC" || "DEF"); // ABC → OR: "ABC" já é truthy, para e retorna ele
console.log("ABC" && "DEF"); // DEF → AND: nenhum falsy encontrado, desiste e retorna o último
console.log("" && "DEF"); // (linha em branco: string vazia) → AND: "" é falsy, para e retorna ele
console.log("DEF" && 0); // 0 → AND: 0 é o primeiro falsy, para e retorna ele

// Resumo das pegadinhas mais comuns (javascript.info):
//   Number(undefined) → NaN (e não 0)
//   Number("")        → 0
//   Boolean("0")      → true
//   Boolean(" ")      → true
//   Boolean(NaN)      → false (NaN é number ≠ 0, mas é falsy)
//   parseFloat("")    → NaN (enquanto Number("") → 0)
// Mais sobre || e &&: https://javascript.info/logical-operators
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
