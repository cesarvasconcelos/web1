function cadastrarLivro() {
	const livro = criarObjetoLivro();
	inserirLivroTabelaHtml(livro);
	resetarCamposFormulárioHtml();
}

function criarObjetoLivro() {
	// Ler os valores dos dados do livro
	const livroID = document.getElementById("livroID").value; // String
	const livroTítulo = document.getElementById("livroTitulo").value; // String
	const livroAno = document.getElementById("livroAno").value; // String

	// criar objeto livro
	const livro = {
		id: livroID,
		titulo: livroTítulo,
		ano: livroAno,
	};

	return livro;
}

function inserirLivroTabelaHtml(umLivro) {
	// obter uma referência ao elemento tbody da table de listagem
	const tblListagemBody = document.getElementById("tblListagemBody");
	const novaLinha = criarLinhaTabelaComDados(umLivro);

	tblListagemBody.innerHTML += novaLinha;
}

function criarLinhaTabelaComDados(umLivro) {
	// Criar novos elementos HTML: nova linha e suas colunas de dados usando template string
	const novaLinha = `<tr>
        <td>${umLivro.id}</td><td>${umLivro.titulo}</td><td>${umLivro.ano}</td>
    </tr>`;
	return novaLinha;
}

function resetarCamposFormulárioHtml() {
	// apagar os valores dos campos
	document.getElementById("livroID").value = "";
	document.getElementById("livroTitulo").value = "";
	document.getElementById("livroAno").value = "";
}
