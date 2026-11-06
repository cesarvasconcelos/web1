// null
// Fonte principal: https://javascript.info/types#the-null-value
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null

// JavaScript possui o tipo null. Ele não pertence a nenhum dos tipos anteriores:
// forma um tipo próprio, que contém um único valor: null.

// A diferença para undefined é a intenção:
// null é um valor atribuído DE PROPÓSITO pelo programador para dizer
// "nada", "vazio" ou "valor desconhecido".
// É útil quando se deseja 'apagar ou resetar' uma variável;
// Também é usado quando uma variável vai referenciar um objeto mais tarde:
// começa com null e depois podemos checar se ela realmente já referencia um objeto
// (em vez de deixá-la como undefined, que significa que não foi atribuído um valor).

// Atenção (vindo de Java/C): em JavaScript, null NÃO é uma "referência para um
// objeto inexistente" nem um "null pointer" como em outras linguagens.
// É apenas um valor especial que representa "nada"/"vazio"/"desconhecido".

// A documentação:
// JavaScript distinguishes between null, which indicates a deliberate non-value
// (and is only accessible through the null keyword),
// and undefined, which indicates absence of any value.

// em outras palavras, null é a atribuição de um 'valor', ainda que
// uma representação do 'vazio';
// já undefined significa que uma variável foi declarada mas não foi
// atribuído ainda nenhum valor a ela
let age = null; // diz que a idade é desconhecida (por enquanto)
console.log(age); // null → é um valor e também um tipo de dado

let nullVar = null; // com null estou atribuindo o valor 'vazio' (apagando qualquer valor)
console.log(typeof nullVar); // "object" ← bug histórico do JavaScript!

// Sobre o typeof null retornar "object": é um erro oficialmente reconhecido,
// vindo das primeiras versões do JavaScript e mantido por compatibilidade
// (mudar isso quebraria códigos antigos). null NÃO é um object: ele tem seu próprio tipo.
// Prova: não podemos adicionar propriedades a null, como fazemos com objetos.
// Para testar se algo é null, compare diretamente:
console.log(nullVar === null); // true ← forma correta de verificar null

// Na conversão para number, null vira 0 (diferente de undefined, que vira NaN):
console.log(Number(null)); // 0
console.log(null + 1); // 1 (null foi convertido para 0)
