const corpoTabelaListagem = document.getElementById("corpoTabelaListagem"); // HTML elem

const inputId = document.getElementById("inputLivroId"); // HTML elem
const inputTitulo = document.getElementById("inputLivroTitulo"); // HTML elem
const inputAno = document.getElementById("inputLivroAno"); // HTML elem
const inputBuscarTitulo = document.getElementById("inputBuscarTitulo"); // HTML elem

let mensagemBusca = document.getElementById("mensagemResultadoBusca");
let livro;
let listaLivros = []; // note a lista para armazenar os livros

function cadastrarLivro() {
	livro = criarLivro(inputId.value, inputTitulo.value, inputAno.value);

	listaLivros.push(livro);
	adicionarLivroNaTabela();
	limparCamposLivro();
}

function criarLivro(umId, umTitulo, umAno) {
	// criar objeto livro
	const objetoLivro = {
		id: umId,
		titulo: umTitulo,
		ano: umAno,
	};

	return objetoLivro;
}

function adicionarLivroNaTabela() {
	const novaLinha = criarLinhaLivro();
	corpoTabelaListagem.appendChild(novaLinha);
}

function criarLinhaLivro() {
	const novaLinha = document.createElement("tr");
	novaLinha.innerHTML = `<td>${livro.id}</td><td>${livro.titulo}</td><td>${livro.ano}</td>`;
	return novaLinha;
}

function limparCamposLivro() {
	// limpar os valores dos campos
	inputId.value = "";
	inputTitulo.value = "";
	inputAno.value = "";
}

function onBuscarLivro() {
	const tituloBuscado = inputBuscarTitulo.value.toLowerCase(); // busca case-insensitive aqui
	const livroRetornado = buscarLivroNaListaPor(tituloBuscado);

	mostrarMensagemResultadoBusca(livroRetornado);
	limparCampoBusca();
}

function buscarLivroNaListaPor(titulo) {
	let umLivro = undefined;
	if (titulo) {
		umLivro = listaLivros.find((cadaLivro) =>
			cadaLivro.titulo.toLowerCase().includes(titulo)
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

function limparCampoBusca() {
	// limpar elemento HTML input de busca de título
	inputBuscarTitulo.value = "";
}
