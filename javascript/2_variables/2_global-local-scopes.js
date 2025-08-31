// Global e Local scopes:
// não pode usar variáveis ou const's (declaradas dentro do bloco) fora do bloco em si
// o bloco scope vale para funções, ifs, whiles, etc.
let c = 99;

// Note que functions têm acesso irrestrito ao que está "dentro" e ao redor dela.
// mas o que você declarar dentro da function, será local apenas a function
function doSomething() {
    const k = ++c; // 100, k tem local scope
    console.log('k = ', k); // OK, pode acessar k
    c += 100; // OK, pois c tem global scope
}

// console.log('k = ', k); // ReferenceError: k is not defined! pois variable k tem local scope

doSomething(); // agora a chamada da função

console.log('c = ', c); // OK, pois c é global