// A documentação oficial:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
// Um BigInt pode suportar números além da faixa padrão de Number, que é:
// (2^53-1) e (-2^53-1) ou  [-9007199254740991, 0, 9007199254740991]
//a notacão é pós-fixada com 'n' no final
const bigNr = 9007199254740992n; // se remover o 'n', verei o Erro: Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.

// cuidado com operações entre tipos number e bigint
const intNr = 255;
const result = bigNr + intNr; // TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(result);

// teria de converter de number para big int para poder trabalhar com outro BigInt
// const toBigInt = BigInt(intNr)
// const result = bigNr + toBigInt;
// console.log(result);