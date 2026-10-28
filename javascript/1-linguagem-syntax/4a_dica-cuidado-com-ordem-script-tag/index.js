// document é fornecido pelo navegador (Web API), não faz parte da linguagem JavaScript
const elemParagrafo = document.getElementById("paragrafo");
// console.log(elemParagrafo); // null, se a script tag estiver no head sem defer

const nome = "César";
const mensagem = `Bem-vindo de volta, ${nome}!`;

// textContent é a forma mais simples de trocar o texto de um elemento
// Fonte: MDN, Node.textContent - https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
elemParagrafo.textContent = mensagem;
