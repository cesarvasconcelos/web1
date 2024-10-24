// arrays multidimensionais
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let multiArray = [arr1, arr2, arr3];
console.log(multiArray);

// sintaxe mais simples para criar o array anterior:
multiArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

// acessando elementos em arrays multidimensionais
// o primeiro index irá 'pegar' o array, e, a partir deste array,
// o segundo index irá acessar o seu elemento
console.log("multiArray[0][1]= ", multiArray[0][1]); // primeiro array, depois elem no index 1
console.log("multiArray[1][0]= ", multiArray[1][0]); // segundo array, depois elem no index 0

// outra sintaxe comum para criar matrizes (3x4)
let matriz3por4 = [new Array(3), new Array(4)];
matriz3por4[0][0] = 1;
matriz3por4[0][1] = 2;
matriz3por4[0][2] = 3;

matriz3por4[1][0] = 4;
matriz3por4[1][1] = 5;
matriz3por4[1][2] = 6;
matriz3por4[1][3] = 7;

console.log(matriz3por4);

// a criação permite arrays de tamanhos variados
let multiArray2 = [[10, 20], [-35, 50, -12], [7]];
console.log(multiArray2);

// JavaScript não limita os níveis na 'montagem de arrays'
let multiMultiArray = [multiArray, multiArray, multiArray];
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
console.log("multiMultiArray[1][2][0]= ", multiMultiArray[1][2][0]);
