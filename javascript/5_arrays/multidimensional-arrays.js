// =============================================================================
// arrays multidimensionais (arrays de arrays)
// Execute com: node 1_javascript-fundamentals/5_arrays/multidimensional-arrays.js
//
// JavaScript NÃO tem um tipo "matriz" nativo: uma matriz é simplesmente um
// array cujos elementos também são arrays.
// Ref.: https://javascript.info/array (seção "Multidimensional arrays")
// =============================================================================

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let multiArray = [arr1, arr2, arr3];
console.log(multiArray); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

// sintaxe mais simples para criar o array anterior:
multiArray = [
	[1, 2, 3], // linha 0
	[4, 5, 6], // linha 1
	[7, 8, 9], // linha 2
];

// acessando elementos em arrays multidimensionais: matriz[linha][coluna]
// o primeiro index irá 'pegar' o array (a linha), e, a partir deste array,
// o segundo index irá acessar o seu elemento (a coluna)
console.log("multiArray[0][1]= ", multiArray[0][1]); // 2 -> primeiro array, depois elem no index 1
console.log("multiArray[1][0]= ", multiArray[1][0]); // 4 -> segundo array, depois elem no index 0
console.log("multiArray[1][1]= ", multiArray[1][1]); // 5 -> o elemento central

// número de linhas e de colunas
console.log("linhas =", multiArray.length); // 3
console.log("colunas =", multiArray[0].length); // 3

// -----------------------------------------------------------------------------
// Criando matrizes com tamanho definido
// -----------------------------------------------------------------------------
// CORREÇÃO: [new Array(3), new Array(4)] NÃO é uma matriz 3x4!
// É um array com 2 linhas: a 1ª com 3 posições e a 2ª com 4 posições (uma matriz "irregular").
let duasLinhas = [new Array(3), new Array(4)];
duasLinhas[0][0] = 1; duasLinhas[0][1] = 2; duasLinhas[0][2] = 3;

duasLinhas[1][0] = 4; duasLinhas[1][1] = 5;
duasLinhas[1][2] = 6; duasLinhas[1][3] = 7;

console.log(duasLinhas); // [ [ 1, 2, 3 ], [ 4, 5, 6, 7 ] ]

// Uma matriz 3x4 de verdade (3 linhas x 4 colunas), preenchida com zeros:
const LINHAS = 3;
const COLUNAS = 4;
let matriz3por4 = Array.from({ length: LINHAS }, () => new Array(COLUNAS).fill(0));
matriz3por4[1][2] = 9; // linha 1, coluna 2
console.log(matriz3por4);
// [ [ 0, 0, 0, 0 ], [ 0, 0, 9, 0 ], [ 0, 0, 0, 0 ] ]

// ⚠️ ARMADILHA CLÁSSICA: fill() com um array coloca a MESMA referência em todas as linhas!
let matrizErrada = new Array(3).fill(new Array(4).fill(0));
matrizErrada[1][2] = 9; // a intenção era mudar só a linha 1...
console.log(matrizErrada);
// [ [ 0, 0, 9, 0 ], [ 0, 0, 9, 0 ], [ 0, 0, 9, 0 ] ] -> mudou em TODAS, pois é o mesmo array 3x!
// Por isso usamos Array.from com uma FUNÇÃO, que cria um array NOVO para cada linha.

// a criação permite arrays de tamanhos variados (matrizes irregulares / "jagged arrays")
let multiArray2 = [[10, 20], [-35, 50, -12], [7]];
console.log(multiArray2);

// -----------------------------------------------------------------------------
// Percorrendo matrizes
// -----------------------------------------------------------------------------
// a) for aninhado (útil quando precisamos dos índices i e j)
for (let i = 0; i < multiArray.length; i++) {
	let linhaTexto = "";
	for (let j = 0; j < multiArray[i].length; j++) {
		linhaTexto += multiArray[i][j] + " ";
	}
	console.log(`linha ${i}: ${linhaTexto}`);
}

// b) for...of aninhado (mais legível quando só os valores importam)
let soma = 0;
for (const linha of multiArray) {
	for (const valor of linha) {
		soma += valor;
	}
}
console.log("soma de todos os elementos =", soma); // 45

// c) métodos de array: flat() "achata" a matriz em um único array
console.log(multiArray.flat()); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(multiArray.flat().reduce((acc, v) => acc + v, 0)); // 45

// d) map aninhado: transforma cada elemento mantendo o formato da matriz
const dobro = multiArray.map((linha) => linha.map((valor) => valor * 2));
console.log(dobro); // [ [ 2, 4, 6 ], [ 8, 10, 12 ], [ 14, 16, 18 ] ]

// e) transposta (linhas viram colunas)
const transposta = multiArray[0].map((_, j) => multiArray.map((linha) => linha[j]));
console.log(transposta); // [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]

// f) console.table exibe a matriz em formato de tabela (ótimo para estudar!)
console.table(multiArray);

// -----------------------------------------------------------------------------
// Mais de 2 dimensões
// -----------------------------------------------------------------------------
// JavaScript não limita os níveis na 'montagem de arrays'
let multiMultiArray = [
	multiArray,
	multiArray,
	multiArray,
];
/*
[
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
]
*/
// imprimindo
console.log(multiMultiArray);
// segundo array, depois terceiro array, depois elemento no index=0
console.log("multiMultiArray[1][2][0]= ", multiMultiArray[1][2][0]); // 7

// ⚠️ Atenção: as 3 "camadas" acima são a MESMA referência (multiArray)!
// Alterar uma camada altera todas:
console.log(multiMultiArray[0] === multiMultiArray[2]); // true
// Para ter camadas independentes, faça uma cópia profunda de cada uma:
let camadasIndependentes = [structuredClone(multiArray), structuredClone(multiArray)];
camadasIndependentes[0][0][0] = 100;
console.log(camadasIndependentes[1][0][0]); // 1 -> a outra camada não foi afetada
