const corpoTabelaBusca = document.getElementById("tblListagemBody"); // HTML elem

const id = document.getElementById("livroID"); // HTML elem
const título = document.getElementById("livroTitulo"); // HTML elem
const ano = document.getElementById("livroAno"); // HTML elem
const inputBuscarTitulo = document.getElementById("inputBuscarTitulo"); // HTML elem

let mensagemBusca = document.getElementById("parResultadoBusca");
let livro;
let listaLivros = []; // note a lista para armazenar os livros

let livroSendoEditado = false;
let linhaSendoEditada;

const livroForm = document.getElementById("livroForm");
livroForm.addEventListener("submit", function (event) {
	event.preventDefault();
	buttonCadastrarLivroHandler();
});

function buttonCadastrarLivroHandler() {
	if (livroSendoEditado) {
		editarDadosLivroExistente();
	} else {
		cadastrarNovoLivro();
	}
	apagarCamposHTMLDadosLivro();
}

function editarDadosLivroExistente() {
	linhaSendoEditada.cells[0].textContent = id.value;
	linhaSendoEditada.cells[1].textContent = título.value;
	linhaSendoEditada.cells[2].textContent = ano.value;

	apagarLivroDoArray(Number(id.value));

	livro = criarLivro(id.value, título.value, ano.value);
	listaLivros.push(livro);

	document.querySelector("#btnCadastrar").textContent = "Cadastrar";
	document.querySelector("#btnCadastrar").classList.toggle("saveButton");

	linhaSendoEditada = null;
	id.disabled = false;
}

function cadastrarNovoLivro() {
	livro = criarLivro(id.value, título.value, ano.value);
	listaLivros.push(livro);
	incluirLivroTabelaResultadoBusca();
}

function criarLivro(umId, umTítulo, umAno) {
	// criar objeto livro
	const objetoLivro = {
		id: Number(umId),
		título: umTítulo,
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
        <td>${livro.id}</td><td>${livro.título}</td><td>${livro.ano}</td>
        <td><button class="deleteButton" type="button" onclick="apagarLivroEventHandler(${livro.id})">Apagar</button></td>
        <td><button class="editButton" type="button" onclick="editarLivroHandler(${livro.id})">Editar</button></td>
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
	linha.parentNode.removeChild(linha);
}

function editarLivroHandler(livroId) {
	livro = buscarLivroPorId(livroId);
	linhaSendoEditada = document.getElementById(String(livroId));

	id.value = String(livro.id);
	título.value = livro.título;
	ano.value = livro.ano;

	id.disabled = true;

	document.querySelector("#btnCadastrar").textContent = "Gravar dados";
	document.querySelector("#btnCadastrar").classList.toggle("saveButton");

	livroSendoEditado = true;
}

function apagarCamposHTMLDadosLivro() {
	// apagar os valores dos campos
	id.value = "";
	título.value = "";
	ano.value = "";
}

function processarBuscaLivroPorTítulo() {
	const títuloDesejado = inputBuscarTitulo.value.toLowerCase(); // busca case-insensitive aqui
	const livroRetornado = buscarLivroPorTítulo(títuloDesejado);

	mostrarMensagemResultadoBusca(livroRetornado);
	apagarCampoHTMLBuscaTítulo();
}

function buscarLivroPorTítulo(título) {
	let umLivro = null;
	if (título)
		umLivro = listaLivros.find((cadaLivro) =>
			cadaLivro.título.toLowerCase().includes(título)
		);

	return umLivro;
}

function buscarLivroPorId(id) {
	let umLivro = null;
	if (id)
		umLivro = listaLivros.find((cadaLivro) => cadaLivro.id === Number(id));

	return umLivro;
}

function mostrarMensagemResultadoBusca(livro) {
	if (livro != null) {
		mensagemBusca.innerHTML = `<strong>Livro encontrado:</strong><br>\
            Livro ID: ${livro.id}<br>\
            Título: ${livro.título}<br>\
            Ano de Publicação: ${livro.ano}`;
	} else {
		mensagemBusca.textContent = `Nenhum livro encontrado.`;
	}
}

function apagarCampoHTMLBuscaTítulo() {
	// resetar elemento HTML input de busca de título
	inputBuscarTitulo.value = "";
}
