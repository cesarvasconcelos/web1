// Global e Local scopes:
// variáveis let e const declaradas dentro de um bloco { } (função, if, while, for...) só existem nele
// (var respeita apenas o escopo de função)
let c = 99;

// Note que functions têm acesso irrestrito ao que está "dentro" e ao redor dela.
// mas o que você declarar dentro da function, será local apenas a function
function doSomething() {
	const k = ++c; // 100, k tem local scope
	console.log("k = ", k); // OK, pode acessar k
	c += 100; // OK, pois c está no escopo externo (aqui, o do arquivo)
}

// console.log('k = ', k); // ReferenceError: k is not defined! pois variable k tem local scope

doSomething(); // agora a chamada da função

console.log("c = ", c); // OK, pois c está no escopo externo
