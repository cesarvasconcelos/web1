// A documentação oficial:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

let categoriaBilhete = 'Infantil';
let preçoIngresso = 0;

switch (categoriaBilhete.toUpperCase()) {
    case 'ADULTO':
        preçoIngresso = 30.00;
        break;
    case 'ADOLESCENTE':
        preçoIngresso = 10.00;
        break;
    case 'INFANTIL':
        preçoIngresso = 6.00;
        break;
    case 'IDOSO':
        preçoIngresso = 6.00;
        break;
    case 'PROFESSOR':
        preçoIngresso = 10.00;
        break;
}
console.log('R$', preçoIngresso.toFixed(2)) // 6.00

// o default-case
categoriaBilhete = '';
switch (categoriaBilhete.toUpperCase()) {
    case 'ADULTO':
        preçoIngresso = 30.00;
        break;
    case 'ADOLESCENTE':
        preçoIngresso = 10.00;
        break;
    case 'INFANTIL':
        preçoIngresso = 6.00;
        break;
    case 'IDOSO':
        preçoIngresso = 6.00;
        break;
    case 'PROFESSOR':
        preçoIngresso = 10.00;
        break;
    default:
        console.error('Não foi possível determinar a categoria do bilhete')
}

// cuidado com o fall-through
categoriaBilhete = 'Adulto';
preçoIngresso = 0;
switch (categoriaBilhete.toUpperCase()) {
    case 'ADULTO':
        preçoIngresso = 30.00;
    // break;
    case 'ADOLESCENTE':
        preçoIngresso = 10.00;
        break;
    case 'INFANTIL':
        preçoIngresso = 6.00;
        break;
    case 'IDOSO':
        preçoIngresso = 6.00;
        break;
    case 'PROFESSOR':
        preçoIngresso = 10.00;
        break;
    default:
        console.error('Não foi possível determinar a categoria do bilhete')
}

console.log('R$', preçoIngresso.toFixed(2)) // 10.00 (Erro, adulto deveria ser R$30)

// tirando vantagem do fall-through
categoriaBilhete = 'Professor';
switch (categoriaBilhete.toUpperCase()) {
    case 'ADULTO':
        preçoIngresso = 30.00;
        break;
    case 'ADOLESCENTE':
    case 'PROFESSOR':
        preçoIngresso = 10.00;
        console.log('outra')
        break;
    case 'INFANTIL':
    case 'IDOSO':
        preçoIngresso = 6.00;
        break;
    default:
        console.error('Não foi possível determinar a categoria do bilhete')
}

console.log('R$', preçoIngresso.toFixed(2)) // 10.00