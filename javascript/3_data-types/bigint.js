// BigInt
// Fonte principal: https://javascript.info/types#bigint-type
// Aprofundamento: https://javascript.info/bigint
// A documentação oficial (MDN):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

// O tipo Number não consegue representar com segurança inteiros fora da faixa ±(2^53-1),
// ou seja, maiores que 9007199254740991 (ou menores que -9007199254740991).
// Number até guarda valores bem maiores (até ~1.7976931348623157 × 10^308), mas fora da
// faixa segura há PERDA DE PRECISÃO: inteiros diferentes podem virar o mesmo valor:
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992 ← mesmo resultado! erro de precisão
// (inteiros ímpares acima de 2^53-1 simplesmente não podem ser guardados em um Number)

// BigInt suporta inteiros de tamanho arbitrário (tão grandes quanto se queira).
// Casos de uso: criptografia, timestamps com precisão de microssegundos, IDs de 64 bits.
// Na maior parte do tempo, Number é suficiente; BigInt é para casos específicos.

// A notação é pós-fixada com 'n' no final do inteiro.
// O 'n' no final avisa ao JavaScript que é BigInt
const bigNr = 9007199254740992n;
// Se remover o 'n', NÃO há erro: vira um Number comum (2^53 ainda é representável).
// Porém, a partir de 2^53 o Number já não é confiável para inteiros; ferramentas como
// TypeScript/ESLint avisam: "Numeric literals with absolute values equal to 2^53 or
// greater are too large to be represented accurately as integers."
console.log(bigNr, typeof bigNr); // 9007199254740992n bigint

// outro exemplo:
const bigInt = 1234567890123456789012345678901234567890n; // ok, nenhuma perda de precisão
console.log(bigInt); // 1234567890123456789012345678901234567890n

// Com BigInt, a soma que perdeu precisão acima agora fica correta:
console.log(9007199254740991n + 2n); // 9007199254740993n ✔

// Divisão entre BigInts descarta a parte decimal (BigInt só guarda inteiros):
console.log(5n / 2n); // 2n (e não 2.5)

// Cuidado com operações entre tipos number e bigint: não se pode misturá-los!
// Isso lança um TypeError. Aqui usamos try/catch só para o script continuar executando
// e você ver a mensagem de erro (try/catch será visto mais adiante).
const intNr = 255;
try {
	const result = bigNr + intNr; // TypeError: Cannot mix BigInt and other types, use explicit conversions
	console.log(result);
} catch (erro) {
	console.log("Erro:", erro.message);
}

// Teria de converter de number para BigInt para poder trabalhar com outro BigInt:
const toBigInt = BigInt(intNr); // 255n
console.log(bigNr + toBigInt); // 9007199254741247n

// Comparações entre number e bigint funcionam normalmente:
console.log(1n < 2); // true
// == (igualdade "frouxa") e === (igualdade estrita) tratam tipos diferentes de formas diferentes:
// - ===: se os tipos são diferentes, já responde false, sem olhar o valor.
// - ==: aceita tipos diferentes e compara os VALORES. Entre bigint e number, o JS
//   compara o valor matemático dos dois: 1n e 1 representam o mesmo inteiro 1 → true.
//   (O tipo de cada um continua o mesmo: bigint e number. O == só ignora essa diferença.)
// MDN: "A BigInt value is not strictly equal to a Number value, but it is loosely so."
console.log(1n == 1); // true  → mesmo valor matemático (o == não exige o mesmo tipo)
console.log(1n === 1); // false → tipos diferentes (bigint ≠ number), o === para aqui
console.log(typeof 1n, typeof 1); // bigint number → por isso o === dá false
console.log(2n == 1); // false → valores diferentes, então o == também dá false
// Recomendação: prefira sempre ===, pois o == tem regras de conversão que podem surpreender.
// https://javascript.info/comparison#strict-equality
