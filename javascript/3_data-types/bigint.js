// A documentação oficial:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
// BigInt suporta inteiros de tamanho arbitrário, além da faixa segura de Number: ±(2^53-1)
// Acima desse limite, Number perde precisão —> inteiros diferentes podem virar o mesmo valor:
//   console.log(9007199254740991 + 1); // 9007199254740992
//   console.log(9007199254740991 + 2); // 9007199254740992 ← mesmo resultado! erro de precisão
// Casos de uso: criptografia, timestamps em microssegundos, IDs de 64 bits
// a notação é pós-fixada com 'n' no final
const bigNr = 9007199254740992n; // se remover o 'n': Erro —> número fora da faixa segura de Number, ou Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.

// cuidado com operações entre tipos number e bigint
const intNr = 255;
const result = bigNr + intNr; // TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(result);

// teria de converter de number para big int para poder trabalhar com outro BigInt
// const toBigInt = BigInt(intNr)
// const result = bigNr + toBigInt;
// console.log(result);
