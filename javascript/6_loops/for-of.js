// documentação oficial: bom para usar com Arrays, Strings e algumas estruturas de dados
// mas não tente usar com objetos para, por exemplo, varrer suas propriedades e obter os valores)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// basicamente usado com Arrays, Strings e algumas estruturas de dados (Map e Set, e.g.,)
// for of: com Arrays
const myArray = [10, 20, 30];
for (const número of myArray) { // número irá visitar cada célula do array
    console.log(número);
}

// for of: com Strings
// no for tradicional, tem-se acesso ao index e elemento[index]
// aqui, não se tem acesso ao indice (só se você fizer o controle manualmente)
const nome = "David da Silva";
for (const letra of nome) {
    console.log(letra);
}
