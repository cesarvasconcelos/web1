const corpoTabelaListagem = document.getElementById("corpoTabelaListagem"); // HTML elem

const id = document.getElementById("livroID"); // HTML elem
const título = document.getElementById("livroTitulo"); // HTML elem
const ano = document.getElementById("livroAno"); // HTML elem
const inputBuscarTitulo = document.getElementById("inputBuscarTitulo"); // HTML elem

let mensagemBusca = document.getElementById("parResultadoBusca");
let livro;
let listaLivros = []; // note a lista para armazenar os livros

function efetuarCadastroLivro() {
	livro = criarLivro(id.value, título.value, ano.value);

	listaLivros.push(livro);
	incluirLivroTabelaResultadoBusca();
	apagarCamposHTMLDadosLivro();
}

function criarLivro(umId, umTítulo, umAno) {
	// criar objeto livro
	const objetoLivro = {
		id: umId,
		titulo: umTítulo,
		ano: umAno,
	};

	return objetoLivro;
}

function incluirLivroTabelaResultadoBusca() {
	const novaLinha = criarNovaLinhaComDadosLivro();
	corpoTabelaListagem.appendChild(novaLinha);
}

function criarNovaLinhaComDadosLivro() {
	const novaLinha = document.createElement("tr");
	novaLinha.innerHTML = `<td>${livro.id}</td><td>${livro.titulo}</td><td>${livro.ano}</td>`;
	return novaLinha;
}

function apagarCamposHTMLDadosLivro() {
	// apagar os valores dos campos
	id.value = "";
	título.value = "";
	ano.value = "";
}

function processarBuscaLivroPorTítulo() {
	const títuloDesejado = inputBuscarTitulo.value.toLowerCase(); // busca case-insensitive aqui
	const livroRetornado = buscarLivroNaListaPor(títuloDesejado);

	mostrarMensagemResultadoBusca(livroRetornado);
	apagarCampoHTMLBuscaTítulo();
}

function buscarLivroNaListaPor(título) {
	let umLivro = undefined;
	if (título) {
		umLivro = listaLivros.find((cadaLivro) =>
			cadaLivro.titulo.toLowerCase().includes(título)
		);
	}

	return umLivro; // ou retorna um livro encontrado ou undefined
}

function mostrarMensagemResultadoBusca(livro) {
	if (livro) {
		mensagemBusca.innerHTML = `<strong>Livro encontrado:</strong><br>\
            Livro ID: ${livro.id}<br>\
            Título: ${livro.titulo}<br>\
            Ano de Publicação: ${livro.ano}`;
	} else {
		mensagemBusca.textContent = `Nenhum livro encontrado.`;
	}
}

function apagarCampoHTMLBuscaTítulo() {
	// resetar elemento HTML input de busca de título
	inputBuscarTitulo.value = "";
}
