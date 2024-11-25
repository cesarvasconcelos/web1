Abaixo, segue uma lista de exercícios para o estudante praticar o uso de métodos para adicionar e
posicionar um elemento na árvore de objetos DOM em um documento HTML. Utilize a tabela comparativa
de métodos mostrada em sala de aula para resolver este exercício.

---

### **Exemplo: To-Do :: Uma lista de tarefas**

```html
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <title>To-Do:::Lista de tarefas</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    .todo-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
    button {
      margin: 5px 0;
    }
  </style>
</head>
<body>
  <h1>To-Do: Gerenciador de Tarefas</h1>
  <div>
    <input id="todoInput" type="text" placeholder="Digite uma tarefa">
    <button id="addTask">Adicionar tarefa</button>
  </div>
  <ul id="todoList">
    <!-- O usuário deverá incluir um item de lista, i.e., um elemento <li>
         que representa uma linha com o texto e os botões de ação da tarefa. -->
    <!-- Cada tarefa (task) deve ter a seguinte estrutura -->
    <!--
        <li class="todo-item">
            <span>Estudar Matemática</span>
            <button>Alterar</button>
            <button>Excluir</button>
        </li>
        ...
        <li class="todo-item">
            <span>Fazer caminhada</span>
            <button>Alterar</button>
            <button>Excluir</button>
        </li>
    -->
  </ul>

</body>
</html>
```

---

### **Detalhes do exercício:**

1. **Sobre a página HTML**:
   - A página HTML possui um campo de entrada de texto e um botão para adicionar novas tarefas.
   - As tarefas serão adicionadas em uma lista não-ordenada (`ul`).

2. **Sobre a implementação**:
   - **Adicionar tarefa**: Cria uma nova tarefa (`li`) e adiciona no final da lista não-ordenada (`ul`). Cada tarefa
     deve ter:
     - Um elemento `span` contendo o texto da tarefa.
     - Um elemento `button` para **Editar** o texto da tarefa.
     - Um elemento `button` para **Excluir** a tarefa (`li`).
   - **Editar**: O texto da tarefa deve ser recebido via função `prompt`.
   - **Excluir**: Remove a tarefa usando o método `remove()`.

3. **Os métodos para manipular a árvore DOM deste exercício**:
   - `createElement()`: Para criar os elementos `li`, `span` e `button`.
   - `appendChild()`: Para inserir no final os elementos (e.g, `span` e `button`s) dentro da tarefa
     (`li`).
   - `remove()`: Para remover o elemento HTML que representa a tarefa (`li`).
   - Para alterar o texto da tarefa, recomenda-se usar a propriedade `textContent`.
   - Para incluir a tarefa na classe, recomenda-se usar as propriedades `className` ou `classList`

---

### **Como iniciar o exercício**:
1. Copie e código em um novo arquivo HTML (e.g., `todo-list.html`).
2. Abra o arquivo HTML no seu navegador.
3. Usando a linguagem JavaScript, faça com que o campo de texto de entrada possa cadastrar tarefas.
   Além disso, o usuário poderá usar os botões para editar e excluir uma tarefa interativamente.

---
Esse exercício cobre os principais métodos para adicionar elementos dinâmica e interativamente usando
métodos para manipular a árvore de objetos DOM em uma documento HTML. A ideia é incentivar o aluno a explorar
como adicionar, alterar e ainda posicionar elementos e nós no documento HTML usando a linguagem JavaScript.