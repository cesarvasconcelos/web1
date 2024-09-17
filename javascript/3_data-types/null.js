// JavaScript possui o null data type.
// a diferença para undefined é a intenção:
// a ideia é atribuir o valor null, vazio ou (empty)
// é útil quando se deseja 'apagar ou resetar' uma variável;
// Também é usado quando se deseja referenciar o objetos com a variável
//  e depois poder fazer checagens se ela realmente referencia um objeto
// (em vez de deixá-la como undefined que significa que não foi atribuído um valor

// A documentação:
// JavaScript distinguishes between null, which indicates a deliberate non-value
// (and is only accessible through the null keyword),
// and undefined, which indicates absence of any value.

// em outras palavras, null é a atribuição de um 'valor', ainda que
// uma representação do 'vazio';
// já undefined significa que uma variável foi declarada mas não foi
// atribuido ainda nenhum valor a ela
let nullVar = null; // com null estou atribuindo o valor 'vazio' (apagando qualquer valor)
console.log(nullVar); // null é um valor e um data type
console.log(typeof nullVar); // object (BUG)

// Sobre o typeof null retornar object, veja o que diz a referência: "This is a
// bug that has been there since forever and now cannot be removed due to
// backward compatibility problems."
// Null não é um object porque não podemos adicionar propriedades e membros a null.