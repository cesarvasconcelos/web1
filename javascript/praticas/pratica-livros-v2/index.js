function cadastrarLivro() {
	const livro = criarLivroComDadosFormulário();
	adicionarLivroNaTabela(livro);
	limparCamposFormulário();
}

function criarLivroComDadosFormulário() {
	// Ler os valores dos dados do livro
	const livroId = document.getElementById("livroID").value; // String
	const livroTitulo = document.getElementById("livroTitulo").value; // String
	const livroAno = document.getElementById("livroAno").value; // String

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
	const corpoTabelaListagem = document.getElementById("tblListagemBody");
	const novaLinhaTabela = criarLinhaTabelaLivro(livro);

	corpoTabelaListagem.innerHTML += novaLinhaTabela;
}

function criarLinhaTabelaLivro(livro) {
	// Criar novos elementos HTML: nova linha e suas colunas de dados usando template string
	const novaLinha = `<tr>
        <td>${livro.id}</td><td>${livro.titulo}</td><td>${livro.ano}</td>
    </tr>`;
	return novaLinha;
}

function limparCamposFormulário() {
	// apagar os valores dos campos
	document.getElementById("livroID").value = "";
	document.getElementById("livroTitulo").value = "";
	document.getElementById("livroAno").value = "";
}
