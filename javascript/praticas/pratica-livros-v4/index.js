const corpoTabelaBusca = document.getElementById("tblListagemBody"); // HTML elem

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
		id: Number(umId),
		titulo: umTítulo,
		ano: umAno,
	};

	return objetoLivro;
}

function incluirLivroTabelaResultadoBusca() {
	const novaLinha = criarNovaLinha();
	corpoTabelaBusca.appendChild(novaLinha);
}

function criarNovaLinha() {
	const novaLinha = document.createElement("tr");
	novaLinha.id = livro.id; // cada linha terá o id do livro, i.e., <tr id=livro.id> ...
	novaLinha.innerHTML = `
        <td>${livro.id}</td><td>${livro.titulo}</td><td>${livro.ano}</td>
        <td><button class="deleteButton" type="button" onclick="apagarLivroEventHandler(${livro.id})">Apagar</button></td>
    `;
	return novaLinha;
}

function apagarLivroEventHandler(livroId) {
	if (confirm("Deseja realmente apagar o livro da tabela?")) {
		apagarLivroDoArray(livroId);
		apagarLivroDaTabela(livroId);
	}
}

function apagarLivroDoArray(livroId) {
	const index = listaLivros.findIndex((l) => l.id === livroId);
	if (index > -1) {
		listaLivros.splice(index, 1);
	}
}

function apagarLivroDaTabela(livroId) {
	const linha = document.getElementById(String(livroId));
	linha.remove(); // remove a linha da tabela
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
	if (título)
		umLivro = listaLivros.find((cadaLivro) =>
			cadaLivro.titulo.toLowerCase().includes(título)
		);

	return umLivro;
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

// Em vez do atributo 'onClick=efetuarCadastroLivro()' no <button> do HTML
// posso vincular uma chamada de função a um botão de outra forma:
const btnCadastrar = document.getElementById("btnCadastrarLivro");
btnCadastrar.addEventListener("click", efetuarCadastroLivro);
