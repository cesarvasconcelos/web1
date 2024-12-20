function cadastrarLivro() {
    const livro = criarLivro();
    inserirLivroTabela(livro);
    resetarCampos();
}

function criarLivro() {
    // Ler os valores dos dados do livro
    const livroID = document.getElementById('livroID').value; // String
    const livroTítulo = document.getElementById('livroTitulo').value; // String
    const livroAno = document.getElementById('livroAno').value; // String

    // criar objeto livro
    const livro = {
        id: livroID,
        titulo: livroTítulo,
        ano: livroAno
    };

    return livro;
}

function inserirLivroTabela(livro) {
    // obter uma referência ao elemento tbody da table de listagem
    const tblListagemBody = document.getElementById('tblListagemBody');
    const novaLinha = criarNovaLinhaComDados(livro);

    tblListagemBody.appendChild(novaLinha);
}

function criarNovaLinhaComDados(livro) {
    // Criar novos elementos HTML: nova linha e suas colunas de dados
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `<td>${livro.id}</td><td>${livro.titulo}</td><td>${livro.ano}</td>`;
    return novaLinha;
}

function resetarCampos() {
    // apagar os valores dos campos
    document.getElementById('livroID').value = '';
    document.getElementById('livroTitulo').value = '';
    document.getElementById('livroAno').value = '';
}

