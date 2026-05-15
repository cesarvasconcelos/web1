function onCadastrarLivro() {
    // obter uma referência ao elemento tbody da table de listagem
    const corpoTabela = document.getElementById('corpoTabelaListagem');

    // Ler os valores dos dados do livro
    const livroId = document.getElementById('inputLivroId').value; // String
    const titulo = document.getElementById('inputLivroTitulo').value; // String
    const ano = document.getElementById('inputLivroAno').value; // String

    // Criar novos elementos HTML: nova linha e suas células de dados
    const novaLinha = document.createElement('tr');
    const celulaId = document.createElement('td');
    const celulaTitulo = document.createElement('td');
    const celulaAno = document.createElement('td');

    // Injetar os valores lidos nas células recém-criadas
    celulaId.textContent = livroId;
    celulaTitulo.textContent = titulo;
    celulaAno.textContent = ano;

    // fazer o 'append' da célula dentro da linha
    novaLinha.appendChild(celulaId);
    novaLinha.appendChild(celulaTitulo);
    novaLinha.appendChild(celulaAno);

    // fazer um 'append' da linha na tabela
    corpoTabela.appendChild(novaLinha);

    // limpar os valores dos campos
    document.getElementById('inputLivroId').value = '';
    document.getElementById('inputLivroTitulo').value = '';
    document.getElementById('inputLivroAno').value = '';
}
