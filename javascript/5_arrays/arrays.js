// =============================================================================
// ARRAYS EM JAVASCRIPT — fundamentos
// Execute com: node 1_javascript-fundamentals/5_arrays/arrays.js
//
// Referências:
//   https://javascript.info/array
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
// =============================================================================

// A documentação:
// Arrays in JavaScript are actually a special type of object. They work very
// much like regular objects (numerical properties can naturally be accessed
// only using [] syntax). Arrays are lists of values. These values can be of all
// data types and one array can even contain different data types.
//
// Em outras palavras: um array é uma COLEÇÃO ORDENADA de valores, acessados por
// um índice numérico que começa em 0 (zero-indexed).

// Como arrays são implementados internamente?
// A ECMAScript (a especificação) NÃO define como as JS engines devem implementar.
// Mas, na V8 (Chrome/Node.js), dependendo do uso do array -- como objetos/sparse-arrays -- usa-se
// hashtables; no uso tradicional de arrays, usa-se um bloco contíguo de memória.
// When an array is created and used in a way that resembles a traditional array (e.g., accessing and setting elements
// with numeric indices), the engine tries to store the elements in a contiguous block of memory, similar to how arrays
// are implemented in lower-level languages like C;
// However, if the array starts being used more like an object (e.g., adding properties that are not numeric indices OR
// leaving large gaps between indices), the engine may transition the array into a "dictionary mode." In dictionary
// mode, the array behaves more like a hash map where the keys are no longer sequential indices, but rather arbitrary
// properties, and the values are stored in a hash table.
//
// O javascript.info resume as formas de "estragar" essas otimizações:
//   - adicionar uma propriedade não numérica: arr.test = 5
//   - criar buracos: arr[0] = 1; arr[1000] = 2
//   - preencher em ordem reversa: arr[1000], arr[999], ...
// Moral: use arrays para dados ORDENADOS; para chave->valor arbitrário, use objetos ou Map.

// Veja, e.g., o código-fonte da JS engine Google V8:
// https://github.com/v8/v8/blob/master/src/objects/js-array.h
// No código fonte da engine V8:
// 'The JSArray describes JavaScript Arrays
// Such an array can be in one of two modes:
//  - fast, backing storage is a FixedArray and length <= elements.length();
//          Please note: push and pop can be used to grow and shrink the array.
//  - slow, backing storage is a HashTable with numbers as keys.'

// -----------------------------------------------------------------------------
// 1. Como criar arrays?
// -----------------------------------------------------------------------------
console.log("\n=== 1. Criando arrays ===");
let va = [10, 20, 30]; // a forma tradicional 'padrão' de declarar e já inicializar com elementos (array literal)
let vb = new Array(); // == []; pouco comum, mas pode usar keyword new; length = 0
let vc = []; // é mais comum usar a notação []; length = 0
let vd = new Array("JavaScript", "C++"); // length = 2
let ve = new Array(16); // array SEM elementos (16 'empty slots'), mas com length = 16
let vf = Array(16); // pode omitir a keyword 'new'; length = 16
let vg = Array.of("JavaScript", "C++"); // também é possível via factory method 'of'
let vh = Array.of(); // == []; pouco comum, mas pode; length = 0
console.log(va, vb, vc, vd, ve.length, vf.length, vg, vh);

// ⚠️ ARMADILHA de new Array(...) / Array(...):
// com UM único argumento numérico, ele vira o LENGTH (e não um elemento!)
console.log(new Array(3)); // [ <3 empty items> ]  -> length 3, nenhum elemento
console.log(new Array(3, 4)); // [ 3, 4 ]            -> dois argumentos = dois elementos
console.log(Array.of(3)); // [ 3 ]                   -> Array.of NÃO tem essa armadilha
// Por isso a recomendação (javascript.info / MDN) é preferir o literal [].

// Criando arrays já preenchidos:
console.log(new Array(3).fill(0)); // [ 0, 0, 0 ]
console.log(Array.from({ length: 5 }, (_, i) => i * 10)); // [ 0, 10, 20, 30, 40 ]
// Array.from(arrayLike, mapFn): o 2º argumento é uma função aplicada a cada posição

// -----------------------------------------------------------------------------
// 2. Acessando elementos: índice, length e at()
// -----------------------------------------------------------------------------
console.log("\n=== 2. Acessando elementos ===");
let v4 = [2, 3, 5]; // a forma tradicional 'padrão' de declarar e já inicializar com elementos
console.log(v4.length); // 3
console.log(v4[0]); // 2, é zero-indexed
console.log(v4[v4.length - 1]); // 5, o último elemento (forma "clássica")
console.log(v4.at(-1)); // 5, o último elemento (forma moderna, ES2022)
console.log(v4.at(-2)); // 3, o penúltimo
// Por que at()? Porque v4[-1] NÃO funciona como em Python:
console.log(v4[-1]); // undefined  ("-1" é tratado como nome de propriedade, que não existe)

// Modificando um elemento pelo índice:
v4[0] = 200;
console.log(v4); // [ 200, 3, 5 ]
v4[0] = 2; // desfazendo

// arrays podem guardar tipos distintos
let mix = [
	"JavaScript is awesome!",
	Number.MAX_SAFE_INTEGER,
	-1.23,
	58n,
	null,
	undefined,
	true,
	{ nome: "objeto" }, // objetos
	[1, 2], // outros arrays (veja multidimensional-arrays.js)
	function () {}, // e até funções
];
console.log(mix.length); // 10

// -----------------------------------------------------------------------------
// 3. Arrays são dinâmicos e o 'length' é especial
// -----------------------------------------------------------------------------
console.log("\n=== 3. length ===");
// Em JavaScript, um array é um objeto dinâmico.
v4.push(16); // não tem tamanho fixo e pode crescer dinamicamente
// ou v4[v4.length] = 16;
console.log(v4.length); // 4
console.log(v4); // [2, 3, 5, 16]

// O 'length' NÃO é a "quantidade de elementos": é o MAIOR ÍNDICE + 1.
// Além disso, 'length' é GRAVÁVEL (writable):
let letras = ["a", "b", "c", "d", "e"];
letras.length = 2; // diminuir o length TRUNCA o array (os elementos se perdem!)
console.log(letras); // [ 'a', 'b' ]
letras.length = 4; // aumentar o length NÃO recupera nada; cria 'empty slots'
console.log(letras); // [ 'a', 'b', <2 empty items> ]
letras.length = 0; // forma simples de ESVAZIAR um array
console.log(letras); // []

// -----------------------------------------------------------------------------
// 4. Sparse arrays (arrays esparsos, com "buracos")
// -----------------------------------------------------------------------------
console.log("\n=== 4. Sparse arrays ===");
// arrays em JavaScript podem ser 'sparse arrays'
// Um exemplo de um array "denso" (sem buracos):
let a = ["dog", "cat", "hen"];
console.log(a.length); // 3

// Agora fazendo o array 'a' anterior ser um sparse array:
// "A sparse array is one in which the elements do NOT have contiguous indexes
// starting at 0. Normally, the length property of an array specifies the number
// of elements in the array.
// If the array is sparse, however, the value of the length property is greater
// than the number of elements."
a = ["dog", "cat", "hen"];
a[10] = "fox";
console.log(a.length); // 11 (= maior índice 10 + 1), embora existam apenas 4 elementos
console.log(a); // [ 'dog', 'cat', 'hen', <7 empty items>, 'fox' ]

// CORREÇÃO IMPORTANTE: 'length' NÃO mede memória alocada nem "células de armazenamento".
// Ele é simplesmente (maior índice + 1). Como a engine guarda os dados internamente
// (bloco contíguo com buracos ou hashtable) é um detalhe de implementação.
// Logo, em um sparse array, há "buracos/gaps" e o length não especifica a quantidade de elementos.

// Outro exemplo:
let s = new Array(5); // Não há elementos e length = 5
s = []; // Não há elementos e length = 0
s[1000] = 32; // Adiciona 32 e modifica length = 1001
console.log(s.length); // 1001 (maior índice 1000 + 1)
console.log(s); // [ <1000 empty items>, 32 ]

// Um "empty slot" é diferente de uma posição que contém o valor undefined:
let comBuraco = [1, , 3]; // índice 1 é um buraco (empty slot)
let comUndefined = [1, undefined, 3]; // índice 1 existe e vale undefined
console.log(comBuraco[1], comUndefined[1]); // undefined undefined  (lendo, parecem iguais...)
console.log(1 in comBuraco, 1 in comUndefined); // false true  (...mas não são!)
// Alguns métodos (forEach, map, filter, reduce...) PULAM buracos; for...of e find() NÃO pulam.

// Em JavaScript, não há array-out-of-bounds exception
console.log(a[-1]); // undefined
console.log(typeof a[90]); // undefined

// -----------------------------------------------------------------------------
// 5. Referência x Cópia (MUITO importante!)
// -----------------------------------------------------------------------------
console.log("\n=== 5. Referência x Cópia ===");
let produtos = ["Lápis", "Caneta", "Caderno"];
let cloneProdutos = produtos; // NÃO copia: apenas uma segunda REFERÊNCIA para o mesmo array
cloneProdutos.push("Borracha");
console.log(produtos); // [ 'Lápis', 'Caneta', 'Caderno', 'Borracha' ] -> prova de que é o mesmo objeto
console.log(produtos === cloneProdutos); // true (mesma referência)

// mas, e se eu quisesse realmente copiar um array em outro?
// pode usar spread operator: it splits an array into a comma separated list of values
cloneProdutos = [...produtos]; // spread operator (aqui realmente será criado outro objeto)
// ou poderia usar slice para copiar o array
// cloneProdutos = produtos.slice(); // copiar todos os elementos do array original em cloneProdutos
// ou ainda: Array.from(produtos)
//  vide https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
cloneProdutos.splice(0, 2); // remover a partir do index 0, 2 elementos

console.log(cloneProdutos); // [ 'Caderno', 'Borracha' ] -> a cópia foi alterada
console.log(produtos); // produtos não foi alterado desta vez

// ⚠️ ATENÇÃO: spread, slice() e Array.from() fazem cópia RASA (shallow copy).
// Se o array guarda OBJETOS, a cópia guarda as MESMAS referências para esses objetos!
// (veja a imagem 10_arrays-of-objects-deep-copy.png)
const persons = [
	{ name: "Max", age: 30 },
	{ name: "Manuel", age: 31 },
];
const shallow = [...persons];
shallow[0].age = 99; // altera o objeto que é COMPARTILHADO pelos dois arrays
console.log(persons[0].age); // 99 (!!) o original também mudou
persons[0].age = 30; // desfazendo

// Soluções para cópia PROFUNDA (deep copy):
// a) map criando novos objetos (como na imagem 10). Obs.: map JÁ retorna um array novo,
//    então o [... ] em volta do map, visto na imagem, é redundante.
const copiedPersons = persons.map((person) => ({ ...person }));
// b) structuredClone (nativo, copia qualquer profundidade) — a forma moderna recomendada
const deepCopy = structuredClone(persons);
copiedPersons[0].age = 50;
deepCopy[1].age = 60;
console.log(persons); // [ { name: 'Max', age: 30 }, { name: 'Manuel', age: 31 } ] -> intacto

// Comparar arrays com == ou === compara REFERÊNCIAS, e não o conteúdo:
console.log([1, 2] === [1, 2]); // false (dois objetos diferentes na memória)
const ref = [1, 2];
console.log(ref === ref); // true (mesma referência)
// Para comparar conteúdo, compare elemento a elemento (ex.: com every):
const iguais = (x, y) => x.length === y.length && x.every((v, i) => v === y[i]);
console.log(iguais([1, 2], [1, 2])); // true
// E nunca use == entre arrays e primitivos: [] == 0 é true, 0 == "0" é true, mas [] == "0" é false!

// -----------------------------------------------------------------------------
// 6. Arrays são objetos
// -----------------------------------------------------------------------------
console.log("\n=== 6. Arrays são objetos ===");
// lembre-se de que um array é um objeto. apesar de não ser tão natural,
// posso usar um array como um objeto, definindo até mesmo propriedades.
// neste caso, o interpretador pode optar por transformar a implementação
// inicial do array em uma hashtable (at runtime)
let notas = [25, 35, 45];
console.log(typeof notas); // object  -> typeof não distingue array de objeto!
console.log(Array.isArray(notas)); // true -> use Array.isArray() para saber se é array
console.log(Array.isArray({ length: 0 })); // false
notas["aluno"] = "Ana Silva"; // uma propriedade no array! (NÃO é recomendado)
let nome = notas["aluno"]; // acessando valor da propriedade
// ou ainda let nome = notas.aluno; // acessando valor da propriedade
console.log(nome); // Ana Silva
console.log(notas); // [ 25, 35, 45, aluno: 'Ana Silva' ]
console.log(notas.length); // 3 -> propriedades não numéricas NÃO contam no length

// toString(): arrays viram string com os elementos separados por vírgula
console.log(String([1, 2, 3])); // "1,2,3"
console.log([1, 2] + 1); // "1,21"  (o array vira "1,2" e depois concatena com 1)

// -----------------------------------------------------------------------------
// 7. Percorrendo (iterando) arrays
// -----------------------------------------------------------------------------
console.log("\n=== 7. Percorrendo arrays ===");
const frutas = ["Maçã", "Laranja", "Uva"];

// a) for clássico: útil quando você precisa do índice ou de controle (pular, voltar...)
for (let i = 0; i < frutas.length; i++) {
	console.log(i, frutas[i]);
}

// b) for...of: o mais legível quando só os VALORES importam
for (const fruta of frutas) {
	console.log(fruta);
}

// c) for...of + entries(): valores E índices
for (const [i, fruta] of frutas.entries()) {
	console.log(`${i}: ${fruta}`);
}

// d) forEach: executa uma função para cada elemento (não dá pra usar break!)
frutas.forEach((fruta, i) => console.log(i, fruta));

// e) ⚠️ EVITE for...in em arrays (javascript.info):
//    - itera sobre TODAS as chaves, inclusive propriedades extras (como 'aluno' acima)
//    - as chaves são STRINGS ("0", "1", ...) e não números
//    - é otimizado para objetos genéricos, sendo bem mais lento em arrays
for (const chave in notas) {
	console.log(chave, typeof chave); // "0" string, "1" string, "2" string, "aluno" string
}

// -----------------------------------------------------------------------------
// 8. Desestruturação de arrays (destructuring)  — imagens 8 e 9 desta pasta
// -----------------------------------------------------------------------------
console.log("\n=== 8. Destructuring ===");
const nameData = ["Max", "Schwarz", "Mr", 30];
// Em vez de:
//   const firstName = nameData[0];
//   const lastName = nameData[1];
const [firstName, lastName] = nameData; // atribui POR POSIÇÃO
console.log(firstName, lastName); // Max Schwarz

// Rest element (...): junta "o resto" em um NOVO array. Deve ser o ÚLTIMO item.
const [first, , ...otherInformation] = nameData; // a vírgula sozinha PULA o 2º elemento
console.log(first, otherInformation); // Max [ 'Mr', 30 ]

// Valores padrão (default) são usados quando a posição é undefined:
const [x = 1, y = 2, z = 3] = [10, undefined];
console.log(x, y, z); // 10 2 3

// Truque clássico: trocar (swap) valores de duas variáveis sem variável auxiliar
let p = "primeiro";
let q = "segundo";
[p, q] = [q, p];
console.log(p, q); // segundo primeiro

// -----------------------------------------------------------------------------
// 9. Iterables x Arrays x Array-like objects (veja 1_iterables-vs-array-like.md)
// -----------------------------------------------------------------------------
console.log("\n=== 9. Iterables x Array-like ===");
// Arrays são 'Iterables', ou seja, podem ser usados com for...of e spread (...)
// mas, nem todo Iterable é um Array (e.g., String, Map, Set, NodeList, etc.)
// 'Array-like' é outra coisa: um objeto com índices numéricos e 'length'.
//   - String:   é iterable E array-like (tem length e índices)
//   - NodeList: é iterable E array-like
//   - Map/Set:  são iterables, mas NÃO são array-like (não têm length nem índices)
//   - { 0: "a", length: 1 }: é array-like, mas NÃO é iterable
// Nenhum deles é um 'Array' de verdade (Array.isArray(...) === false).
// E aí vem a pergunta: dá pra converter um 'Iterable' ou um 'array-like' para um Array de verdade?
// Sim. Use Array.from() — ele aceita os DOIS tipos.
let umaString = "IFPB"; // uma String é Iterable e array-like, mas não é um array
console.log(umaString[umaString.length - 1]); // B
console.log(Array.isArray(umaString)); // false

let vi = Array.from(umaString);
console.log(vi); // converte string para um array = [ 'I', 'F', 'P', 'B' ]
console.log([...umaString]); // o spread também funciona, pois String é iterable

let set = new Set();
set.add(2);
set.add(2); // Set ignora duplicatas
set.add(4);
let vj = Array.from(set); // set é um 'Iterable'
console.log(vj); // [ 2, 4 ]

const arrayLike = { 0: "a", 1: "b", length: 2 }; // array-like, mas NÃO iterable
console.log(Array.from(arrayLike)); // [ 'a', 'b' ] -> Array.from funciona
try {
	console.log([...arrayLike]); // spread exige um iterable...
} catch (erro) {
	console.log(erro.constructor.name, "-", erro.message); // TypeError - arrayLike is not iterable
}
