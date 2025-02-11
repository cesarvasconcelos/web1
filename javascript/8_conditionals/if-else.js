// if e if-else
let idade = 18;

if (idade > 12) {
    console.log(`idade: ${idade} > 12 `);
} // poderia omitir as chaves aqui

idade = 3;
if (idade > 12) {
    console.log(`idade: ${idade} > 12 `);
} else {
    console.log(`idade: ${idade} < 12 `);
}

// if-else aninhados
idade = 18;
let categoriaIngresso;
if (idade < 12) { // < 12 anos
    categoriaIngresso = 'infantil';
} else if (idade < 18) { // entre 12 e 17 anos
    categoriaIngresso = 'adolescente';
} else if (idade < 65) { // entre 18 e 64 anos
    categoriaIngresso = 'adulto';
} else { // 65 anos ou acima
    categoriaIngresso = 'idoso';
}

console.log(categoriaIngresso);