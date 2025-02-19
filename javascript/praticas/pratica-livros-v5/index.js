const tabelaListagemLivros = document.getElementById("tabelaListagemLivros"); // HTML elem

const inputId = document.getElementById("inputLivroId"); // HTML elem
const inputTítulo = document.getElementById("inputLivroTítulo"); // HTML elem
const inputAno = document.getElementById("inputLivroAno"); // HTML elem

const inputBuscarTítulo = document.getElementById("inputBuscarTítulo"); // HTML elem
const mensagemBusca = document.getElementById("mensagemResultadoBusca");

let livro;
let arrayLivros = [];

let livroSendoEditado = false;
let linhaSendoEditada;

const livroForm = document.getElementById("livroForm");
livroForm.addEventListener("submit", function (event) {
	event.preventDefault(); // evitar criar uma HTTP request
	botãoSubmitEventHandler();
});

function botãoSubmitEventHandler() {
	if (livroSendoEditado) {
		editarDadosLivroExistente();
	} else {
		cadastrarNovoLivro();
	}
	apagarCamposFormulárioHTML();
}

function editarDadosLivroExistente() {
	linhaSendoEditada.cells[0].textContent = inputId.value;
	linhaSendoEditada.cells[1].textContent = inputTítulo.value;
	linhaSendoEditada.cells[2].textContent = inputAno.value;

	excluirLivroDoArray(Number(inputId.value));
	adicionarLivroNoArray();

	document.querySelector("#botãoSubmit").textContent = "Cadastrar";
	document.querySelector("#botãoSubmit").classList.toggle("saveButton");

	linhaSendoEditada = null;
	livroSendoEditado = false;
	inputId.disabled = false;
}

function adicionarLivroNoArray() {
	livro = criarObjetoLivro(inputId.value, inputTítulo.value, inputAno.value);
	arrayLivros.push(livro);
}

function cadastrarNovoLivro() {
	adicionarLivroNoArray();
	adicionarLivroNaTabelaHTML();
}

function criarObjetoLivro(umId, umTítulo, umAno) {
	// criar objeto livro
	const objetoLivro = {
		id: Number(umId),
		título: umTítulo,
		ano: umAno,
	};

	return objetoLivro;
}

function adicionarLivroNaTabelaHTML() {
	const novaLinha = criarNovaLinhaNaTabelaHTML();
	tabelaListagemLivros.appendChild(novaLinha);
}

function criarNovaLinhaNaTabelaHTML() {
	const novaLinha = document.createElement("tr");
	novaLinha.id = livro.id; // cada linha terá o id do livro, i.e., <tr id=livro.id> ...
	novaLinha.innerHTML = `
        <td>${livro.id}</td><td>${livro.título}</td><td>${livro.ano}</td>
        <td><button class="deleteButton" type="button" onclick="botãoApagarLivroEventHandler(${livro.id})">Apagar</button></td>
        <td><button class="editButton" type="button" onclick="botãoEditarLivroEventHandler(${livro.id})">Editar</button></td>
    `;
	return novaLinha;
}

function botãoApagarLivroEventHandler(livroId) {
	if (confirm("Deseja realmente apagar o livro da tabela?")) {
		excluirLivroDoArray(livroId);
		excluirLivroDaTabelaHTML(livroId);
	}
}

function excluirLivroDoArray(livroId) {
	const index = arrayLivros.findIndex((l) => l.id === livroId);
	if (index > -1) {
		arrayLivros.splice(index, 1);
	}
}

function excluirLivroDaTabelaHTML(livroId) {
	const linha = buscarLinhaNaTabelaHTMLPeloId(livroId);
	linha.parentNode.removeChild(linha);
}

function buscarLinhaNaTabelaHTMLPeloId(id) {
	return document.getElementById(String(id));
}

function botãoEditarLivroEventHandler(livroId) {
	livro = buscarLivroNoArrayPorId(livroId);
	linhaSendoEditada = buscarLinhaNaTabelaHTMLPeloId(livroId);

	inputId.value = String(livro.id);
	inputTítulo.value = livro.título;
	inputAno.value = livro.ano;

	inputId.disabled = true;

	document.querySelector("#botãoSubmit").textContent = "Gravar dados";
	document.querySelector("#botãoSubmit").classList.toggle("saveButton");

	livroSendoEditado = true;
}

function apagarCamposFormulárioHTML() {
	// apagar os valores dos campos
	inputId.value = "";
	inputTítulo.value = "";
	inputAno.value = "";
}

function botãoBuscarLivroPorTítuloEventHandler() {
	const títuloDesejado = inputBuscarTítulo.value.toLowerCase(); // busca case-insensitive aqui
	const livroRetornado = buscarLivroNoArrayPorTítulo(títuloDesejado);

	mostrarMensagemResultadoBusca(livroRetornado);
	apagarCampoHTMLBuscarTítulo();
}

function buscarLivroNoArrayPorTítulo(título) {
	let umLivro = null;
	if (título)
		umLivro = arrayLivros.find((cadaLivro) =>
			cadaLivro.título.toLowerCase().includes(título)
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
	if (livro != null) {
		mensagemBusca.innerHTML = `<strong>Livro encontrado:</strong><br>\
            Livro ID: ${livro.id}<br>\
            Título: ${livro.título}<br>\
            Ano de Publicação: ${livro.ano}`;
	} else {
		mensagemBusca.textContent = `Nenhum livro encontrado.`;
	}
}

function apagarCampoHTMLBuscarTítulo() {
	// resetar elemento HTML input de busca de título
	inputBuscarTítulo.value = "";
}
