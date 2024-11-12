// A documentação oficial:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

// Aqui pode-se usar com objetos, varrendo-se suas propriedades enumeráveis
// Exemplo 1:
const person = { name: 'Ana', age: 2, salary: 3500.99 };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Exemplo 2:
let mercedes = {
    name: 'Mercedes Benz XYZ',
    isNew: true,
    year: 2024,
    price: 123456.99,
    categories: ['Luxo', 'Classic'], // arrays em objects

    // methods
    shortDescription: function () {
        console.log(`${this.name} ${this.year}`);
    },

    carToJsonString: function () {
        const json = JSON.stringify(this);
        return json;
    },
};

for (const objProp in mercedes) { // const não precisa ter nome key, pode ser qualquer outro nome
    console.log(`${objProp}: ${mercedes[objProp]}`);
}