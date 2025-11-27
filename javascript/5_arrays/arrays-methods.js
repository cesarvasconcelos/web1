// um resumo dos principais built-in methods de arrays
// Consultar a documentação a seguir:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// append
const matérias = ["biologia"];
let tamanho = matérias.push("matemática", "química", "história"); // append e return lenght = 4
console.log(matérias, "tamanho=", tamanho); // [ 'biologia', 'matemática', 'química', 'história' ]

// insert or remove (using indexes)
// Abaixo:
// 2 é o [start index]
// 0 é o número de elementos que se deseja remover a partir do [start index]
// Os demais parâmetros são os elementos que quero inserir
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
// Veja o que diz a documentação:
// 'This might depend on the interpreter you are using, but at some point, it
// will decide it is too long for a single line and apply an automatic format to
// the array to make it more readable. It doesn't change the value of the array;
// it is just a different representation of the same values were they to be on a
// single line.'

// Agora, note o uso de splice() passando-se o argumento para remover (antes de inserir)
matérias.splice(3, 2, "física"); // remover 2 elementos a partir do index 3, antes de inserir 'física'
console.log(matérias); // [ 'biologia', 'matemática', 'geografia', 'física', 'história' ]
// usando splice agora para apenas remover sem inserir
matérias.splice(1, 3); // remove 3 elementos a partir do index 1
console.log(matérias); // [ 'biologia', 'história' ]
// usando splice para inserir pelo index (basta não remover ninguém antes de inserir)
// inserir no index 1, sem remover nada i.e., com deleteCount=0, a String Química
matérias.splice(1, 0, "química"); // [ 'biologia', 'química', 'história' ]
matérias.splice(1, 1); // remover 1 elemento a partir do index 1; // [ 'biologia', 'história' ]

// um cuidado especial com splice(startIndex)
// se passar apenas o startIndex, sem informar o deleteCount, então splice irá remover todos os
// elementos a partir do startIndex
//matérias.splice(0); // remover todos os elementos do array a partir do index 0 (vai deletar todos)
//matérias.splice(1); // remover todos os elementos do array a partir do index 1

// insert at first position (shifting all elements to the right)
// 'This causes all other indices to be added by one' == slow operation
matérias.unshift("redação", "inglês"); // return new lenght
console.log(matérias); // [ 'redação', 'inglês', 'biologia', 'história' ]

// remover o último elemento
let removido = matérias.pop(); // return o elem removido
console.log(matérias, "removido=", removido); // [ 'redação', 'inglês', 'biologia' ] removido= história

// remover o primeiro elemento (shifting all elements to the left)
// 'This causes all other indices to be reduced by one' == slow operation
removido = matérias.shift(); // return o elem removido
console.log(matérias, "removido=", removido); // [ 'inglês', 'biologia' ] removido= redação

// remover, PORÉM, preservando o index (sem shifting)
// o delete operador irá mudar o valor da posição do array para undefined
let notas = [95, 70, 100];
delete notas[0]; // não é um método, mas um operador
console.log(notas); // [ <1 empty item>, 70, 100 ] // não houve shift para a esquerda
notas[0] = 80; // ainda tenho o index preservado
console.log(notas); // [ 80, 70, 100 ]

// encontrar um elemento no array
// abaixo, a function dentro de find é executada em cada
// elemento do array até encontrar um elemento que faça 'match'.
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
	console.log("Index=", idx); // tem acesso ao index, se precisar; 0, 1, 2, ...
	return cadaNota > 65;
});
console.log("Nota > 65 = ", maior65);
// find e findIndex são similares: enquanto uma retorna o elem, a outra retorna o index
// ambas dão acesso do index, caso você o declare dentro dos argumentos da callback function
// findIndex - posição da 1a ocorrência, ou -1 se elemento não for encontrado
console.log(notas.findIndex((cadaNota) => cadaNota === 70)); // 2
console.log(notas.findIndex((cadaNota) => cadaNota === 35)); // -1

// indexOf - posição da 1a ocorrência, ou -1 se elemento não for encontrado
console.log(notas.indexOf(70)); // 2
console.log(notas.indexOf(35)); // -1 not found
console.log(notas.indexOf(20, 2)); // -1, pois encontre elem 20 a partir do index 2 = not found

// última ocorrência, ou -1 se elemento não for encontrado
notas = [20, 60, 20, 80];
console.log(notas.lastIndexOf(20)); // 2
console.log(notas.lastIndexOf(100)); // -1

// reverse
notas = [20, 60, 40, 80];
notas.reverse();
console.log(notas); // [80, 40, 60, 20]

// sorting
// A documentação: 'Sorts an array in place. This method mutates the array and returns
// a reference to the same array. The default sort order is ascending, built upon converting the
// elements into strings, then comparing their sequences of UTF-16 code unit values.'
// ou seja, haverá a conversão para string para depois ordenar
let nomes = ["José", "Alberto", "Fátima", "Carla", "Bruno"];
nomes.sort();
console.log(nomes); // [ 'Alberto', 'Bruno', 'Carla', 'Fátima', 'José' ]

// Cuidado com sort() e sua transformação para string
let pesos = Array.of(15.59, 3.25, 10.36, 5.6);
console.log(pesos.sort()); // [10.36, 15.59, 3.25, 5.6] ERRADO!
// como resolver? basta passar a callback fn que comandará a ordenação
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

// concat
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6); // cria um novo array como retorno da função concat()
console.log(arr7); // [ 1, 2, 3, 4, 5, 6 ]
// pode usar concat para inserir (mas é uma operação mais 'cara' do que push)
arr7 = arr7.concat(7, 8, 9);
console.log(arr7); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// sub-range
const arr = [1, 2, 3, 4];
const range = arr.slice(1, 3); // retorna um novo array com os elementos do index 1 até o index 3 (não inclusivo)
console.log(range); // [2, 3]
// dica: pode usar slice() para copiar e retornar um novo array
// const newArray = arr.slice(); // sem argumentos um novo array/cópia do original será criado e retornado

// outra forma de combinar com spread operator
// spread operator: it splits an array into a comma separated lis of values which can be used
let arr8 = [...arr5, ...arr6];
console.log(arr8); // [ 1, 2, 3, 4, 5, 6 ]
arr8 = [20, ...arr5, 30];
console.log(arr8); // [ 20, 1, 2, 3, 30 ]

// includes
// Purpose: Checks if an array contains a specified element.
// Return Type: Boolean.
// Use Case: Determining existence of an element in an array.
// Example:
const myArray = [1, 2, 3];
console.log(myArray.includes(2)); // true

// filter
// Purpose: Returns a new array with elements that satisfy a condition.
// Return Type: Array.
// Use Case: Filtering elements based on a condition.
const arr2 = [1, 2, 3, 4];
const filtered = arr2.filter((num) => num > 2);
console.log(filtered); // [3, 4]
