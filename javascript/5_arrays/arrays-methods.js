// =============================================================================
// os principais built-in methods de arrays
// Execute com: node 1_javascript-fundamentals/5_arrays/arrays-methods.js
//
// Consultar a documentação a seguir:
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//   https://javascript.info/array-methods
//
// 💡 A PERGUNTA MAIS IMPORTANTE sobre qualquer método de array:
//    "Ele MODIFICA (muta) o array original ou RETORNA um novo valor?"
//    MUTAM o original: push, pop, shift, unshift, splice, sort, reverse, fill, copyWithin
//    NÃO mutam:       slice, concat, map, filter, reduce, find, includes, join, flat,
//                     toSorted, toReversed, toSpliced, with ... (retornam algo novo)
// =============================================================================

// -----------------------------------------------------------------------------
// 1. ADICIONAR / REMOVER no início e no fim: push, pop, unshift, shift
// -----------------------------------------------------------------------------
console.log("\n=== 1. push / pop / unshift / shift ===");
// append (adicionar no FIM)
const matérias = ["biologia"];
let tamanho = matérias.push("matemática", "química", "história"); // append e return length = 4
console.log(matérias, "tamanho=", tamanho); // [ 'biologia', 'matemática', 'química', 'história' ] tamanho= 4
// ⚠️ Repare: push retorna o NOVO LENGTH, e não o array! Erro comum:
//    const novo = arr.push(x); // 'novo' é um número, não um array

// -----------------------------------------------------------------------------
// 2. splice: o "canivete suíço" (insere, remove e substitui pelo índice) — MUTA
// -----------------------------------------------------------------------------
console.log("\n=== 2. splice ===");
// protótipo: array.splice(start, deleteCount, item1, item2, ...)
// Abaixo:
// 2 é o [start index]
// 0 é o número de elementos que se deseja remover a partir do [start index]
// Os demais parâmetros são os elementos a serem inseridos
matérias.splice(2, 0, "geografia", "português");
console.log(matérias);
/*
[
  'biologia',
  'matemática',
  'geografia',
  'português',
  'química',
  'história'
] */
// Às vezes, o layout pode ser impresso 'na vertical', a depender do interpretador.
// 'This might depend on the interpreter you are using, but at some point, it
// will decide it is too long for a single line and apply an automatic format to
// the array to make it more readable. It doesn't change the value of the array;
// it is just a different representation of the same values were they to be on a
// single line.'

// Agora note o uso de splice() passando-se o argumento para remover (antes de inserir)
// splice RETORNA um array com os elementos REMOVIDOS:
let removidos = matérias.splice(3, 2, "física"); // remover 2 elementos a partir do index 3, antes de inserir 'física'
console.log(matérias); // [ 'biologia', 'matemática', 'geografia', 'física', 'história' ]
console.log(removidos); // [ 'português', 'química' ]
// usando splice agora para apenas remover sem inserir
matérias.splice(1, 3); // remove 3 elementos a partir do index 1
console.log(matérias); // [ 'biologia', 'história' ]
// usando splice para inserir pelo index (basta não remover ninguém antes de inserir)
// inserir no index 1, sem remover nada i.e., com deleteCount=0, a String Química
matérias.splice(1, 0, "química"); // [ 'biologia', 'química', 'história' ]
matérias.splice(1, 1); // remover 1 elemento a partir do index 1; // [ 'biologia', 'história' ]

// índices NEGATIVOS contam a partir do fim (-1 = último):
const nums = [1, 2, 5];
nums.splice(-1, 0, 3, 4); // a partir da posição do último elemento, remove 0 e insere 3 e 4
console.log(nums); // [ 1, 2, 3, 4, 5 ]

// um cuidado especial com splice(startIndex)
// se passar apenas o startIndex, sem informar o deleteCount, então splice irá remover todos os
// elementos a partir do startIndex
//matérias.splice(0); // remover todos os elementos do array a partir do index 0 (vai deletar todos)
//matérias.splice(1); // remover todos os elementos do array a partir do index 1

// insert at first position (shifting all elements to the right)
// 'This causes all other indices to be added by one' == slow operation (O(n))
let novoLength = matérias.unshift("redação", "inglês"); // return new length
console.log(matérias, novoLength); // [ 'redação', 'inglês', 'biologia', 'história' ] 4

// remover o último elemento — rápido (O(1)), não precisa renumerar ninguém
let removido = matérias.pop(); // return o elem removido
console.log(matérias, "removido=", removido); // [ 'redação', 'inglês', 'biologia' ] removido= história

// remover o primeiro elemento (shifting all elements to the left)
// 'This causes all other indices to be reduced by one' == slow operation (O(n))
removido = matérias.shift(); // return o elem removido
console.log(matérias, "removido=", removido); // [ 'inglês', 'biologia' ] removido= redação

// -----------------------------------------------------------------------------
// 3. O operador delete (e por que EVITÁ-LO em arrays)
// -----------------------------------------------------------------------------
console.log("\n=== 3. delete ===");
// remover, PORÉM, preservando o index (sem shifting)
// CORREÇÃO: o operador delete NÃO coloca o valor undefined na posição.
// Ele REMOVE a propriedade e deixa um BURACO ('empty slot'). O length NÃO muda.
let notas = [95, 70, 100];
delete notas[0]; // não é um método, mas um operador (feito para objetos)
console.log(notas); // [ <1 empty item>, 70, 100 ] // não houve shift para a esquerda
console.log(notas.length, notas[0], 0 in notas); // 3 undefined false (lê undefined, mas a posição NÃO existe)
notas[0] = 80; // ainda tenho o index preservado
console.log(notas); // [ 80, 70, 100 ]
// Para remover de verdade (e reorganizar os índices), use splice.

// -----------------------------------------------------------------------------
// 4. BUSCAR: find, findIndex, findLast, findLastIndex, indexOf, lastIndexOf, includes
// -----------------------------------------------------------------------------
console.log("\n=== 4. Buscar ===");
// encontrar um elemento no array
// abaixo, a function dentro de find é executada em cada
// elemento do array até encontrar um elemento que faça 'match' (retorne true).
// se não encontrar, undefined é retornado
//  a function aceita 'e', onde 'e' é cada elemento visitado
// protótipo: array.find(callback(element, idx, array), thisArg);
// index é o index do elemento sendo visitado, enquanto que array é o array onde find foi aplicada
notas = [20, 60, 70, 80];
let encontrado = notas.find(function (e) {
	return e === 60;
}); // 60 é retornado
let nãoEncontrado = notas.find((e) => e === 100); // outra forma mais curta de escrever o predicado
console.log(encontrado, nãoEncontrado); // 60 undefined
// se quiser ter acesso ao index, basta declarar que precisa dele dentro dos argumentos da callback
let maior65 = notas.find((cadaNota, idx, arrayNotas) => {
	console.log(arrayNotas); // tem acesso ao array, se precisar; [ 20, 60, 70, 80 ]
	console.log("Index=", idx); // tem acesso ao index, se precisar; 0, 1, 2 (para no 2, pois 70 > 65)
	return cadaNota > 65;
});
console.log("Nota > 65 = ", maior65); // 70
// find e findIndex são similares: enquanto uma retorna o elem, a outra retorna o index
// ambas dão acesso do index, caso você o declare dentro dos argumentos da callback function
// findIndex - posição da 1a ocorrência, ou -1 se elemento não for encontrado
console.log(notas.findIndex((cadaNota) => cadaNota === 70)); // 2
console.log(notas.findIndex((cadaNota) => cadaNota === 35)); // -1

// findLast / findLastIndex (ES2023): mesma ideia, mas buscando da DIREITA para a esquerda
console.log(notas.findLast((n) => n < 75)); // 70 (o último que satisfaz)
console.log(notas.findLastIndex((n) => n < 75)); // 2

// indexOf - posição da 1a ocorrência, ou -1 se elemento não for encontrado
// (compara com ===, ou seja, igualdade ESTRITA, sem conversão de tipo)
console.log(notas.indexOf(70)); // 2
console.log(notas.indexOf("70")); // -1 (string "70" !== número 70)
console.log(notas.indexOf(35)); // -1 not found
console.log(notas.indexOf(20, 2)); // -1, pois busca o elem 20 a partir do index 2 = not found

// última ocorrência, ou -1 se elemento não for encontrado
notas = [20, 60, 20, 80];
console.log(notas.lastIndexOf(20)); // 2
console.log(notas.lastIndexOf(100)); // -1

// includes
// Purpose: Checks if an array contains a specified element.
// Return Type: Boolean.
// Use Case: Determining existence of an element in an array.
// Example:
const myArray = [1, 2, 3];
console.log(myArray.includes(2)); // true
// Diferença sutil entre includes e indexOf: o NaN
console.log([NaN].indexOf(NaN)); // -1  (indexOf usa ===, e NaN === NaN é false)
console.log([NaN].includes(NaN)); // true (includes usa o algoritmo SameValueZero)

// Quando usar cada um?
//   - quero saber SE existe um valor exato ............ includes
//   - quero a POSIÇÃO de um valor exato ............... indexOf / lastIndexOf
//   - a busca depende de uma CONDIÇÃO (função) ........ find / findIndex / findLast / findLastIndex
//   - quero TODOS os que satisfazem a condição ........ filter
//   - quero saber se ALGUM / TODOS satisfazem ......... some / every

// -----------------------------------------------------------------------------
// 5. some / every: perguntas de "sim ou não"
// -----------------------------------------------------------------------------
console.log("\n=== 5. some / every ===");
const idades = [15, 22, 37, 17];
console.log(idades.some((idade) => idade >= 18)); // true  -> ALGUM é maior de idade?
console.log(idades.every((idade) => idade >= 18)); // false -> TODOS são maiores de idade?
// Ambos param assim que a resposta é conhecida (short-circuit).
// Curiosidade: em array vazio, some() -> false e every() -> true ("verdade vazia").
console.log([].some((n) => n > 0), [].every((n) => n > 0)); // false true

// -----------------------------------------------------------------------------
// 6. FILTRAR e TRANSFORMAR: filter, map, forEach, reduce (NÃO mutam)
// -----------------------------------------------------------------------------
console.log("\n=== 6. filter / map / forEach / reduce ===");
// filter
// Purpose: Returns a new array with elements that satisfy a condition.
// Return Type: Array (vazio [] se nenhum elemento passar no teste).
// Use Case: Filtering elements based on a condition.
const arr2 = [1, 2, 3, 4];
const filtered = arr2.filter((num) => num > 2);
console.log(filtered); // [3, 4]

// map: transforma CADA elemento e retorna um novo array de MESMO tamanho
const quadrados = arr2.map((num) => num ** 2);
console.log(quadrados); // [ 1, 4, 9, 16 ]
const nomesHeróis = ["Bilbo", "Gandalf", "Nazgul"];
console.log(nomesHeróis.map((nome) => nome.length)); // [ 5, 7, 6 ]
// ⚠️ cuidado ao retornar objetos com arrow function: use parênteses!
console.log(nomesHeróis.map((nome) => ({ nome }))); // [ { nome: 'Bilbo' }, ... ]

// forEach: apenas EXECUTA algo para cada elemento; retorna SEMPRE undefined
const retorno = arr2.forEach((num, idx) => console.log(`arr2[${idx}] = ${num}`));
console.log(retorno); // undefined -> se precisa de um array de resultado, use map
// Não é possível interromper um forEach com break; se precisar parar, use for...of ou some/find.

// reduce: "reduz" o array a UM único valor (veja 6_array-reduce.md)
const soma = arr2.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma); // 10
// ⚠️ sem valor inicial em array vazio => TypeError
try {
	[].reduce((a, b) => a + b);
} catch (erro) {
	console.log(erro.message); // Reduce of empty array with no initial value
}

// Encadeamento (chaining): como filter/map retornam arrays, dá pra encadear:
const somaDosQuadradosDosPares = [1, 2, 3, 4, 5, 6]
	.filter((n) => n % 2 === 0) // [2, 4, 6]
	.map((n) => n * n) // [4, 16, 36]
	.reduce((acc, n) => acc + n, 0); // 56
console.log(somaDosQuadradosDosPares); // 56

// -----------------------------------------------------------------------------
// 7. ORDENAR e INVERTER: reverse, sort (MUTAM!) e toReversed, toSorted (não mutam)
// -----------------------------------------------------------------------------
console.log("\n=== 7. reverse / sort ===");
// reverse
notas = [20, 60, 40, 80];
const mesmoArray = notas.reverse();
console.log(notas); // [80, 40, 60, 20]
console.log(mesmoArray === notas); // true -> reverse retorna o PRÓPRIO array (não uma cópia)

// sorting
// A documentação: 'Sorts an array in place. This method mutates the array and returns
// a reference to the same array. The default sort order is ascending, built upon converting the
// elements into strings, then comparing their sequences of UTF-16 code unit values.'
// ou seja, haverá a conversão para string para depois ordenar
let nomes = ["José", "Alberto", "Fátima", "Carla", "Bruno"];
nomes.sort();
console.log(nomes); // [ 'Alberto', 'Bruno', 'Carla', 'Fátima', 'José' ]

// ⚠️ Cuidado com acentos/maiúsculas: a comparação é por código UTF-16
nomes = ["José", "Álvaro", "bruno", "Carla"];
console.log([...nomes].sort()); // [ 'Carla', 'José', 'bruno', 'Álvaro' ] ERRADO para humanos!
// Solução: localeCompare, que compara respeitando as regras do idioma
console.log([...nomes].sort((a, b) => a.localeCompare(b, "pt-BR"))); // [ 'Álvaro', 'bruno', 'Carla', 'José' ]

// Cuidado com sort() e sua transformação para string
let pesos = Array.of(15.59, 3.25, 10.36, 5.6);
console.log(pesos.sort()); // [10.36, 15.59, 3.25, 5.6] ERRADO! ("10.36" < "15.59" < "3.25" < "5.6" como texto)
console.log([1, 2, 15].sort()); // [ 1, 15, 2 ] -> mesmo problema com inteiros!
// como resolver? basta passar a callback fn (compareFn) que comandará a ordenação
// A documentação https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// nos diz que a callback fn( (a,b)=>{}) deve ser implementada de tal forma que:
// A negative value indicates that a should come before b.
// A positive value indicates that a should come after b.
// Zero or NaN indicates that a and b are considered equal.
pesos.sort((a, b) => {
	if (a > b) return 1;
	if (a < b) return -1;
	return 0;
});
console.log(pesos); // [3.25, 5.6, 10.36, 15.59] agora sim :)

// Forma curta (e mais comum) para NÚMEROS:
pesos.sort((a, b) => a - b); // crescente: se a - b < 0, 'a' vem antes
console.log(pesos); // [ 3.25, 5.6, 10.36, 15.59 ]
pesos.sort((a, b) => b - a); // decrescente: basta inverter
console.log(pesos); // [ 15.59, 10.36, 5.6, 3.25 ]

// Ordenando ARRAY DE OBJETOS por uma propriedade:
const alunos = [
	{ nome: "Ana", nota: 8.5 },
	{ nome: "Caio", nota: 7 },
	{ nome: "Bia", nota: 9.2 },
];
alunos.sort((a, b) => b.nota - a.nota); // maior nota primeiro
console.log(alunos.map((aluno) => aluno.nome)); // [ 'Bia', 'Ana', 'Caio' ]
// Obs.: desde o ES2019, sort é ESTÁVEL: elementos "empatados" mantêm a ordem original.

// toSorted / toReversed (ES2023): mesma coisa, mas retornam um NOVO array (original intacto)
const original = [3, 1, 2];
const ordenado = original.toSorted((a, b) => a - b);
const invertido = original.toReversed();
console.log(original, ordenado, invertido); // [ 3, 1, 2 ] [ 1, 2, 3 ] [ 2, 1, 3 ]
// Antes do ES2023, o "jeito" era copiar primeiro: [...original].sort(...)

// -----------------------------------------------------------------------------
// 8. COMBINAR e COPIAR: concat, slice, spread
// -----------------------------------------------------------------------------
console.log("\n=== 8. concat / slice / spread ===");
// concat
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6); // cria um novo array como retorno da função concat()
console.log(arr7); // [ 1, 2, 3, 4, 5, 6 ]
// pode usar concat para inserir (mas é uma operação mais 'cara' do que push, pois cria um novo array)
arr7 = arr7.concat(7, 8, 9);
console.log(arr7); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// concat "abre" apenas UM nível de arrays:
console.log([1].concat([2, [3]])); // [ 1, 2, [ 3 ] ]

// sub-range com slice(start, end): do start ATÉ end, SEM incluir o end. NÃO muta.
const arr = [1, 2, 3, 4];
const range = arr.slice(1, 3);
console.log(range); // [2, 3]
console.log(arr.slice(-2)); // [ 3, 4 ] -> os dois últimos (índice negativo conta do fim)
// dica: pode usar slice() para copiar e retornar um novo array
// const newArray = arr.slice(); // sem argumentos um novo array/cópia do original será criado e retornado
// 🧠 Para não confundir: sLice = "Lê" um pedaço (não muta); sPlice = "Põe/tira" (muta).

// outra forma de combinar com spread operator
// spread operator: it splits an array into a comma separated list of values
let arr8 = [...arr5, ...arr6];
console.log(arr8); // [ 1, 2, 3, 4, 5, 6 ]
arr8 = [20, ...arr5, 30];
console.log(arr8); // [ 20, 1, 2, 3, 30 ]
// spread também serve para passar um array como argumentos de uma função:
console.log(Math.max(...arr8)); // 30

// -----------------------------------------------------------------------------
// 9. CONVERTER para/de string: join, split
// -----------------------------------------------------------------------------
console.log("\n=== 9. join / split ===");
const palavras = ["Olá", "mundo", "JS"];
console.log(palavras.join(" ")); // "Olá mundo JS"
console.log(palavras.join()); // "Olá,mundo,JS" (separador padrão é a vírgula)
console.log("a-b-c".split("-")); // [ 'a', 'b', 'c' ]  (split é método de STRING)
console.log("teste".split("")); // [ 't', 'e', 's', 't', 'e' ]
console.log("a,b,c,d".split(",", 2)); // [ 'a', 'b' ] (2º argumento limita o tamanho)

// -----------------------------------------------------------------------------
// 10. Outros métodos úteis: at, fill, flat, flatMap, with, toSpliced, Array.isArray, Object.groupBy
// -----------------------------------------------------------------------------
console.log("\n=== 10. Outros métodos ===");
const cores = ["vermelho", "verde", "azul"];
console.log(cores.at(-1)); // "azul" (último elemento)

console.log(new Array(4).fill("-")); // [ '-', '-', '-', '-' ]  (fill MUTA o array)

const aninhado = [1, [2, [3, [4]]]];
console.log(aninhado.flat()); // [ 1, 2, [ 3, [ 4 ] ] ] (profundidade padrão = 1)
console.log(aninhado.flat(Infinity)); // [ 1, 2, 3, 4 ] (achata tudo)
console.log(["a b", "c"].flatMap((s) => s.split(" "))); // [ 'a', 'b', 'c' ] (map + flat(1))

// with(index, valor) e toSpliced(...) (ES2023): versões que NÃO mutam de arr[i] = v e splice
console.log(cores.with(1, "amarelo")); // [ 'vermelho', 'amarelo', 'azul' ]
console.log(cores.toSpliced(0, 1)); // [ 'verde', 'azul' ]
console.log(cores); // [ 'vermelho', 'verde', 'azul' ] -> original intacto

console.log(Array.isArray(cores), typeof cores); // true object

// Object.groupBy (ES2024): agrupa elementos por uma chave calculada
const produtos = [
	{ nome: "maçã", tipo: "fruta" },
	{ nome: "alface", tipo: "verdura" },
	{ nome: "uva", tipo: "fruta" },
];
const porTipo = Object.groupBy(produtos, (p) => p.tipo);
console.log(porTipo.fruta.map((p) => p.nome)); // [ 'maçã', 'uva' ]
console.log(porTipo.verdura.map((p) => p.nome)); // [ 'alface' ]
