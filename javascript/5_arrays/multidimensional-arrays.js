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

let array34 = [new Array(3), new Array(4)];
array34[0][0] = 1;
array34[0][1] = 2;
array34[0][2] = 3;

array34[1][0] = 4;
array34[1][1] = 5;
array34[1][2] = 6;
array34[1][3] = 7;

console.log(array34);

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
