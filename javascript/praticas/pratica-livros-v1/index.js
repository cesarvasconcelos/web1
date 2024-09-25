function cadastrarLivro() {
    // obter uma referência ao elemento tbody da table de listagem
    const tblListagemBody = document.getElementById('tblListagemBody');

    // Ler os valores dos dados do livro
    const livroID = document.getElementById('livroID').value; // String
    const título = document.getElementById('livroTitulo').value; // String
    const ano = document.getElementById('livroAno').value; // String

    // Criar novos elementos HTML: nova linha e suas colunas de dados
    const novaLinha = document.createElement('tr');
    const colunaID = document.createElement('td');
    const colunaTitulo = document.createElement('td');
    const colunaAno = document.createElement('td');

    // Injetar os valores lidos nas células recém-criadas
    colunaID.textContent = livroID;
    colunaTitulo.textContent = título;
    colunaAno.textContent = ano;

    // fazer o 'append' da coluna dentro da linha
    novaLinha.appendChild(colunaID);
    novaLinha.appendChild(colunaTitulo);
    novaLinha.appendChild(colunaAno);

    // fazer um 'append' da linha na tabela
    tblListagemBody.appendChild(novaLinha);

    // apagar os valores dos campos
    document.getElementById('livroID').value = '';
    document.getElementById('livroTitulo').value = '';
    document.getElementById('livroAno').value = '';
}