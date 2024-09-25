let listaLivros = [];

function cadastrarLivro() {
    const livro = criarLivro();
    listaLivros.push(livro);

    inserirLivroTabela(livro);
    resetarCampos();
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

function resetarCampos() {
    // apagar os valores dos campos
    document.getElementById('livroID').value = '';
    document.getElementById('livroTitulo').value = '';
    document.getElementById('livroAno').value = '';
}


function buscarLivroPorTitulo() {
    let divResultadoBusca = document.getElementById('divResultadoBusca');
    const tituloABuscar = document.getElementById('inputTitulo').value.toLowerCase(); // busca case-insensitive aqui

    const livroEncontrado = listaLivros.find(livro => livro.titulo.toLowerCase().includes(tituloABuscar));

    if (livroEncontrado != null) {
        divResultadoBusca.innerHTML =
            `<strong>Livro encontrado:</strong><br>\
            Livro ID: ${livroEncontrado.id}<br>\
            Título: ${livroEncontrado.titulo}<br>\
            Ano de Publicação: ${livroEncontrado.ano}`
            ;
    } else {
        divResultadoBusca.textContent = `Nenhum livro encontrado com o título "${tituloABuscar}".`;
    }

    // resetar elemento HTML input de busca de título
    document.getElementById('inputTitulo').value = '';
}


