Abaixo, segue uma lista de exercícios para o estudante praticar o uso dos principais métodos DOM em JavaScript para
consultar elementos HTML. Utilize cada um dos métodos mostrados anteriormente pelo professor em
sala de aula para selecionar elementos no DOM.

---

### Exercícios de Seleção de Elementos no DOM

#### Considere o seguinte documento HTML para os exercícios:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Exercícios DOM</title>
</head>
<body>
    <header>
        <h1>Bem-vindo ao Site de Exercícios DOM</h1>
        <nav>
            <ul>
                <li><a href="#home">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="sobre">
            <h2>Sobre Nós</h2>
            <p>Somos uma equipe dedicada a ensinar JavaScript.</p>
        </section>
        <section id="servicos" class="info">
            <h2>Serviços</h2>
            <p>Oferecemos cursos, tutoriais e apoio para iniciantes em programação.</p>
            <p>Nosso foco principal é JavaScript e desenvolvimento web.</p>
        </section>
        <section id="contato" class="info">
            <h2>Entre em Contato</h2>
            <form name="contatoForm">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email">
                <button type="submit">Enviar</button>
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 DOM Exercícios. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
```

### Exercícios:

#### 1. `document.getElementById(id)`
   - **Pergunta**: Use o método `getElementById` para selecionar o elemento com o `id` "sobre" e exibir seu conteúdo no console.
   - **Dica**: Utilize `console.log()` para exibir o elemento selecionado.
   - **Exemplo de Saída Esperada**: Conteúdo do elemento `<section id="sobre">`.

#### 2. `document.getElementsByClassName(className)`
   - **Pergunta**: Use o método `getElementsByClassName` para selecionar todos os elementos com a classe "info" e exibir a quantidade de elementos encontrados no console.
   - **Dica**: Você pode usar `length` para contar o número de elementos.
   - **Exemplo de Saída Esperada**: `2`

#### 3. `document.getElementsByTagName(tagName)`
   - **Pergunta**: Use o método `getElementsByTagName` para selecionar todos os elementos `<p>` no documento e exibir o conteúdo de cada um no console.
   - **Dica**: Você pode usar um loop para percorrer todos os elementos retornados.
   - **Exemplo de Saída Esperada**: O conteúdo de cada parágrafo.

#### 4. `document.querySelector(selector)`
   - **Pergunta**: Use o método `querySelector` para selecionar o primeiro link dentro do `<nav>` e exibir o valor do atributo `href` no console.
   - **Dica**: Use `elemento.getAttribute('href')` para obter o valor do atributo.
   - **Exemplo de Saída Esperada**: `#home`

#### 5. `document.querySelectorAll(selector)`
   - **Pergunta**: Use o método `querySelectorAll` para selecionar todos os links (`<a>`) dentro do `<nav>` e exibir o texto de cada link no console.
   - **Dica**: Você pode usar `forEach` para iterar pela lista retornada.
   - **Exemplo de Saída Esperada**: `Início`, `Sobre`, `Contato`

#### 6. `document.getElementsByName(name)`
   - **Pergunta**: Use o método `getElementsByName` para selecionar o campo de entrada do formulário com o atributo `name="nome"` e altere seu valor para "Estudante".
   - **Dica**: Defina o valor do campo usando `elemento.value`.
   - **Exemplo de Saída Esperada**: O campo de entrada do formulário com o nome definido como "Estudante".

---

### Exercícios Avançados

#### 7. Usando `querySelector` com seletores complexos
   - **Pergunta**: Use `querySelector` para selecionar o segundo parágrafo dentro da seção de "Serviços" e exibir seu conteúdo no console.
   - **Dica**: Combine seletores CSS para selecionar o segundo parágrafo específico.
   - **Exemplo de Saída Esperada**: Conteúdo do segundo parágrafo da seção de "Serviços".

#### 8. Alteração de conteúdo usando `getElementById`
   - **Pergunta**: Use `getElementById` para selecionar o elemento com `id="sobre"` e altere seu conteúdo para "Conteúdo atualizado sobre a equipe".
   - **Dica**: Altere o conteúdo de texto com `elemento.textContent` ou `elemento.innerHTML`.
   - **Exemplo de Saída Esperada**: O conteúdo da seção "Sobre" será alterado para o novo texto.

#### 9. Seleção de elementos com múltiplas classes usando `querySelectorAll`
   - **Pergunta**: Use `querySelectorAll` para selecionar todos os elementos com a classe "info" e exiba o `id` de cada um no console.
   - **Dica**: Combine `querySelectorAll` com `forEach` para iterar pelos elementos.
   - **Exemplo de Saída Esperada**: `servicos`, `contato`

#### 10. Contagem de elementos `<input>` usando `getElementsByTagName`
   - **Pergunta**: Use `getElementsByTagName` para contar o número de elementos `<input>` dentro do formulário e exibir o total no console.
   - **Dica**: Filtre os elementos de entrada especificamente dentro do formulário.
   - **Exemplo de Saída Esperada**: `2`

#### 11. Alteração de atributos usando `querySelector`
   - **Pergunta**: Use `querySelector` para selecionar o botão de envio do formulário e altere seu texto para "Enviar Agora".
   - **Dica**: Modifique o texto do botão usando `elemento.textContent`.
   - **Exemplo de Saída Esperada**: O texto do botão será atualizado para "Enviar Agora".

---

Esses exercícios cobrem os principais métodos do DOM em JavaScript para consultar elementos HTML, incentivando o aluno a experimentar cada método e entender suas diferenças e aplicações.