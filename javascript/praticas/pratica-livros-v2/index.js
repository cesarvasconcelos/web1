function onCadastrarLivro() {
	const livro = criarLivroDoFormulario();
	adicionarLivroNaTabela(livro);
	limparFormulario();
}

function criarLivroDoFormulario() {
	// Ler os valores dos dados do livro
	const livroId = document.getElementById("inputLivroId").value; // String
	const livroTitulo = document.getElementById("inputLivroTitulo").value; // String
	const livroAno = document.getElementById("inputLivroAno").value; // String

	// criar objeto livro
	const livro = {
		id: livroId,
		titulo: livroTitulo,
		ano: livroAno,
	};

	return livro;
}

function adicionarLivroNaTabela(livro) {
	// obter uma referência ao elemento tbody da table de listagem
	const corpoTabelaListagem = document.getElementById("corpoTabelaListagem");
	const novaLinha = criarLinhaLivro(livro);

	corpoTabelaListagem.innerHTML += novaLinha;
}

function criarLinhaLivro(livro) {
	// Criar nova linha e suas células usando template string
	const novaLinha = `<tr>
        <td>${livro.id}</td><td>${livro.titulo}</td><td>${livro.ano}</td>
    </tr>`;
	return novaLinha;
}

function limparFormulario() {
	// limpar os valores dos campos
	document.getElementById("inputLivroId").value = "";
	document.getElementById("inputLivroTitulo").value = "";
	document.getElementById("inputLivroAno").value = "";
}
