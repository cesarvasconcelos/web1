//Passo 1: selecione a divAddLivroModal e divAreaBackground
const divAddLivroModal = document.getElementById("divAddLivroModal");
const divAreaBackground = document.getElementById("divAreaBackground");

// Passo 2: selecione o header e seu botão interno chamado "Adicionar Livro"
const headerPage = document.querySelector("header");
const btnShowAddLivroModal = headerPage.querySelector("button");

// Passo 3: selecione o botão cancelar dentro da divAddLivroModal
const btnCancelAddModal = divAddLivroModal.querySelector("#btnCancelar");

// Passo 4: crie uma função para ligar/desligar a classe "visível" em divAddLivroModal e
// divAreaBackground. Para isso, use a propriedade classList e a função toogle()
// Exemplo de sintaxe:  elemento.classList.toggle('uma-classe')
function mostrarJanelaAddLivroModal() {
	divAddLivroModal.classList.toggle("visivel"); // ligar/desligar a classe "visível"
	divAreaBackground.classList.toggle("visivel"); // ligar/desligar a classe "visível"
}

// Passo 5: associar/vincular a função aos seguintes eventos:
// no click do botão "Adicionar Livro"
// no click do botão "Cancelar" interno da divAddLivroModal
// no click na divAreaBackground que é a área de background mais escura
btnShowAddLivroModal.addEventListener("click", mostrarJanelaAddLivroModal); // não pode ter parenteses porque não quero invocar agora, só estou associando ela ao evento de click
btnCancelAddModal.addEventListener("click", mostrarJanelaAddLivroModal);
divAreaBackground.addEventListener("click", mostrarJanelaAddLivroModal);
