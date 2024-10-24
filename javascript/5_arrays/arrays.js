// A documentação:
// Arrays in JavaScript are actually a special type of object. They work very
// much like regular objects (numerical properties can naturally be accessed
// only using [] syntax). Arrays are lists of values. These values can be of all
// data types and one array can even contain different data types.

// Como arrays são implementados internamente?
// A ECMAScript não define como as JS engines devem implementar.
// Mas, na V8, dependendo do uso do array -- como objetos/sparse-arrays -- usa-se
// hashtables; no uso tradicional de arrays, usa-se arrays simples.
// When an array is created and used in a way that resembles a traditional array (e.g., accessing and setting elements
// with numeric indices), the engine tries to store the elements in a contiguous block of memory, similar to how arrays
// are implemented in lower-level languages like C;
// However, if the array starts being used more like an object (e.g., adding properties that are not numeric indices or
// leaving large gaps between indices), the engine may transition the array into a "dictionary mode." In dictionary
// mode, the array behaves more like a hash map where the keys are no longer sequential indices, but rather arbitrary
// properties, and the values are stored in a hash table.

// Veja, e.g., o código-fonte da JS engine Google V8:
// https://github.com/v8/v8/blob/master/src/objects/js-array.h
// No código fonte da engine V8:
// 'The JSArray describes JavaScript Arrays
// Such an array can be in one of two modes:
//  - fast, backing storage is a FixedArray and length <= elements.length();
//          Please note: push and pop can be used to grow and shrink the array.
//  - slow, backing storage is a HashTable with numbers as keys.'

// Como criar arrays?
let v1 = new Array(); // pouco comum, mas pode usar keyword new; length = 0
let v2 = new Array(16); // é comum especificar o tamanho inicial; length = 16
let v3 = []; // é comum usar a notação []; length = 0

let v4 = [2, 3, 5]; // declarar e já inicializar com elementos
console.log(v4.length); // 3
console.log(v4[0]); // 2, é zero-indexed
console.log(v4[v4.length - 1]); // 5, o último elemento

// arrays podem guardar tipos distintos
let mix = [
	"JavaScript is awesome!",
	Number.MAX_SAFE_INTEGER,
	-1.23,
	58n,
	null,
	undefined,
	true,
];

// Em JavaScript, um array é um objeto dinâmico.
v4.push(16); // não tem tamanho fixo e pode crescer dinamicamente
// ou v4[v4.length] = 16;
console.log(v4.length); // 4
console.log(v4); // [2, 3, 5, 16]

// arrays em JavaScript podem ser 'sparse arrays'
// Um exemplo de um sparse array (na documentação):
let a = ["dog", "cat", "hen"];
console.log(a.length); // 3

// Agora fazendo o array 'a' anterior ser um sparse array:
// "A sparse array is one in which the elements do NOT have contiguous indexes
// starting at 0. Normally, the length property of an array specifies the number
// of elements in the array.
// If the array is sparse, however, the value of the length property is greater
// than the number of elements. In other words, in the case of an sparse Array, the
// length property returns the size of the internal storage area for indexed
// items of the array. The engine optimizes storage by not allocating memory for the empty slots.

a = ["dog", "cat", "hen"];
a[10] = "fox";
console.log(a.length); // 11 células internal storage e não mais length = 4 elementos
console.log(a); // [ 'dog', 'cat', 'hen', <7 empty items>, 'fox' ]

// Logo, em um sparse array, há "buracos/gaps" e o length não mais especifica a
// quantidade de elementos, mas as células na internal storage area.
// Outro exemplo:
let s = new Array(5); // Não há elementos e length = 5
s = []; // Não há elementos e length = 0
s[1000] = 32; // Adiciona 32 e modifica length = 1001
console.log(s.length); // 1001, pois é a quantidade de células da internal storage area
console.log(s); // [ <1000 empty items>, 32 ]

// Em Javascript, não há array-out-of-bounds exception
console.log(a[-1]); // undefined
console.log(typeof a[90]); // undefined

let produtos = ["Lápis", "Caneta", "Caderno"];
let cloneProdutos = produtos; // apenas um ponteiro aqui referenciando o array produtos
cloneProdutos.push("Borracha");
console.log(produtos); // prova de que há apenas dois ponteiros referenciando o mesmo objeto array

// mas, e se eu quisesse realmente copiar um objeto em outro
// pode usar spread operator: it splits an array into a comma separated lis of values which can be used
cloneProdutos = [...produtos]; // spread operator (aqui realmente será criado outro objeto)
cloneProdutos.splice(0, 2); // remover a partir do index 0, 2 elementos

console.log(cloneProdutos); // agora sim tenho uma cópia real do array
console.log(produtos); // produtos não foi alterado desta vez

// lembre-se de que um array é um objeto. apesar de não ser tão natural,
// posso usar um array como um objeto, definindo até mesmo propriedades.
// neste caso, o interpretador pode optar por transformar a implementação
// inicial do array em uma hashtable (at runtime)
let notas = [25, 35, 45];
console.log(typeof notas); // object
notas["aluno"] = "Ana Silva"; // uma propriedade no array!
let nome = notas["aluno"]; // acessando valor da propriedade
// ou ainda let nome = notas.aluno; // acessando valor da propriedade
console.log(notas); // [ 25, 35, 45, aluno: 'Ana Silva' ]
