const corpoTabelaListagem = document.getElementById("corpoTabelaListagem"); // HTML elem

const inputId = document.getElementById("inputLivroId"); // HTML elem
const inputTitulo = document.getElementById("inputLivroTitulo"); // HTML elem
const inputAno = document.getElementById("inputLivroAno"); // HTML elem

const inputBuscarTitulo = document.getElementById("inputBuscarTitulo"); // HTML elem
const mensagemBusca = document.getElementById("mensagemResultadoBusca");

let livro;
let arrayLivros = [];

let livroSendoEditado = false;
let linhaSendoEditada;

const livroForm = document.getElementById("livroForm");
livroForm.addEventListener("submit", function (event) {
	event.preventDefault(); // evitar criar uma HTTP request
	onSubmitFormulario();
});

function onSubmitFormulario() {
	if (livroSendoEditado) {
		salvarEdicaoLivro();
	} else {
		cadastrarNovoLivro();
	}
	limparFormulario();
}

function salvarEdicaoLivro() {
	linhaSendoEditada.cells[0].textContent = inputId.value;
	linhaSendoEditada.cells[1].textContent = inputTitulo.value;
	linhaSendoEditada.cells[2].textContent = inputAno.value;

	removerLivroDoArray(Number(inputId.value));
	adicionarLivroNoArray();

	document.querySelector("#btnSubmit").textContent = "Cadastrar";
	document.querySelector("#btnSubmit").classList.toggle("saveButton");

	linhaSendoEditada = null;
	livroSendoEditado = false;
	inputId.disabled = false;
}

function adicionarLivroNoArray() {
	livro = criarLivro(inputId.value, inputTitulo.value, inputAno.value);
	arrayLivros.push(livro);
}

function cadastrarNovoLivro() {
	adicionarLivroNoArray();
	adicionarLivroNaTabela();
}

function criarLivro(umId, umTitulo, umAno) {
	// criar objeto livro
	const objetoLivro = {
		id: Number(umId),
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
	novaLinha.id = livro.id; // cada linha terá o id do livro, i.e., <tr id=livro.id> ...
	novaLinha.innerHTML = `
        <td>${livro.id}</td><td>${livro.titulo}</td><td>${livro.ano}</td>
        <td><button class="deleteButton" type="button" onclick="onApagarLivro(${livro.id})">Apagar</button></td>
        <td><button class="editButton" type="button" onclick="onEditarLivro(${livro.id})">Editar</button></td>
    `;
	return novaLinha;
}

function onApagarLivro(livroId) {
	if (confirm("Deseja realmente apagar o livro da tabela?")) {
		removerLivroDoArray(livroId);
		removerLinhaLivro(livroId);
	}
}

function removerLivroDoArray(livroId) {
	const index = arrayLivros.findIndex((l) => l.id === livroId);
	if (index > -1) {
		arrayLivros.splice(index, 1);
	}
}

function removerLinhaLivro(livroId) {
	const linha = buscarLinhaPorId(livroId);
	linha.parentNode.removeChild(linha);
}

function buscarLinhaPorId(id) {
	return document.getElementById(String(id));
}

function onEditarLivro(livroId) {
	livro = buscarLivroNoArrayPorId(livroId);
	linhaSendoEditada = buscarLinhaPorId(livroId);

	inputId.value = String(livro.id);
	inputTitulo.value = livro.titulo;
	inputAno.value = livro.ano;

	inputId.disabled = true;

	document.querySelector("#btnSubmit").textContent = "Gravar dados";
	document.querySelector("#btnSubmit").classList.toggle("saveButton");

	livroSendoEditado = true;
}

function limparFormulario() {
	// limpar os valores dos campos
	inputId.value = "";
	inputTitulo.value = "";
	inputAno.value = "";
}

function onBuscarLivro() {
	const tituloBuscado = inputBuscarTitulo.value.toLowerCase(); // busca case-insensitive aqui
	const livroRetornado = buscarLivroNoArrayPorTitulo(tituloBuscado);

	mostrarMensagemResultadoBusca(livroRetornado);
	limparCampoBusca();
}

function buscarLivroNoArrayPorTitulo(titulo) {
	let umLivro = undefined;
	if (titulo)
		umLivro = arrayLivros.find((cadaLivro) =>
			cadaLivro.titulo.toLowerCase().includes(titulo)
		);

	return umLivro;
}

function buscarLivroNoArrayPorId(id) {
	let umLivro = null;
	if (id)
		umLivro = arrayLivros.find((cadaLivro) => cadaLivro.id === Number(id));

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

function limparCampoBusca() {
	// limpar elemento HTML input de busca de título
	inputBuscarTitulo.value = "";
}
