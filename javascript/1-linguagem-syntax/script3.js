// arquivo referenciado por 3_script-tag-external-scripts-js.html

// COMPARE com 2_script-tag-end-of-body.html: mesmo estando em um arquivo separado,
// este script é executado no ponto onde a tag <script src="script3.js"> aparece no HTML.
// Como ela está no final do <body>, o <p id="paragrafo"> já está parseado no DOM
// e o getElementById encontra o elemento (se a tag estivesse no <head>, retornaria null).
const paragrafo = document.getElementById("paragrafo");

// textContent retorna o texto do parágrafo, incluindo o texto dentro de <code>
// Fonte: MDN, Node.textContent
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
console.log(paragrafo.textContent); // veja no Console (F12)

alert("Texto do parágrafo: " + paragrafo.textContent);
