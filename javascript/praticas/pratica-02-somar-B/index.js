// VERSÃO B: este é o mesmo código da versão A, agora em um arquivo externo.
// Foi carregado pelo <script src="index.js" defer> do index.html (veja os comentários lá sobre
// bloqueio do parse, execução adiada e defer).
//
// Com defer, este arquivo é baixado enquanto o HTML ainda é lido e só é EXECUTADO depois
// que todo o HTML foi processado (antes de DOMContentLoaded).
// Quando ele executa, só acontece uma coisa: a função somar() é DECLARADA.
// Nenhum elemento da página é acessado nesse momento.
// O corpo de somar() só roda mais tarde, quando o usuário clica no botão (onclick="somar()").
// (Mesmo sem defer, no <head>, este código funcionaria pelo mesmo motivo: nada é acessado
// durante a declaração. O defer apenas evita pausar a leitura do HTML.)
function somar() {
    let somatorio = 0;

    // .value é SEMPRE uma string, inclusive em <input type="number">!
    // O type="number" só restringe o que o usuário consegue digitar; não muda o tipo de .value.
    // Então a conversão string → número continua sendo necessária.
    // Fonte: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/value
    //
    // Se o campo estiver vazio (ou com algo que o navegador considere inválido), .value é "".
    // Observação: type="number" não é uma garantia total; alguns navegadores ainda deixam
    // digitar caracteres como "e", "+" e "-", e o JavaScript deve estar pronto para isso.
    // Decimais: o step padrão é 1, então "3.14" é considerado inválido pelo formulário
    // (mas .value ainda devolve "3.14"). Para aceitar decimais, use step="any" no input.
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    // console.log("tipo de n1:", typeof n1); // "string" (confira no Console: F12)

    // Experimente sem converter: somatorio = n1 + n2;  →  2 e 3 resultam em "23", não em 5
    // O + entre strings CONCATENA (junta os textos).

    // Aqui usamos parseFloat (na versão A era Number). Os dois convertem string para número:
    //   parseFloat("3.14 é PI") → 3.14   (lê até encontrar um caractere inválido)
    //   Number("3.14 é PI")     → NaN    (rejeita o texto inteiro se houver algo inválido)
    // Com campo vazio, eles diferem:
    //   parseFloat("") → NaN  (o resultado mostrado na página será NaN)
    //   Number("")     → 0    (o resultado fica 0 + o outro número)
    // Fontes:
    //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
    //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    //
    // Curiosidade: o input number também tem .valueAsNumber, que já devolve um número.
    // Fonte: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/valueAsNumber
    somatorio = parseFloat(n1) + parseFloat(n2);

    document.getElementById("resultado").textContent = somatorio;
}
