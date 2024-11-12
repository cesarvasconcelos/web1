Abaixo, segue uma lista de exercícios para o estudante praticar o uso das propriedades e métodos DOM para percorrer
elementos em um documento HTML. Utilize cada uma das propriedades e métodos mostrados anteriormente pelo professor em
sala de aula.

---

### Lista de Exercícios: Manipulação de Elementos no DOM

Considere o seguinte documento HTML para os exercícios:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Exercícios de DOM</title>
</head>
<body>
    <div class="container">
        <header>
            <h1>Título Principal</h1>
        </header>
        <section class="conteudo">
            <article>
                <h2>Artigo 1</h2>
                <p>Este é o primeiro parágrafo do Artigo 1.</p>
                <p>Este é o segundo parágrafo do Artigo 1.</p>
            </article>
            <article>
                <h2>Artigo 2</h2>
                <p>Este é o primeiro parágrafo do Artigo 2.</p>
                <p>Este é o segundo parágrafo do Artigo 2.</p>
            </article>
        </section>
        <footer>
            <p>Rodapé da página</p>
        </footer>
    </div>
</body>
</html>
```

### Exercícios:

#### 1. parentNode
   - **Pergunta**: Usando a propriedade `parentNode`, selecione o segundo parágrafo do primeiro artigo e acesse o nó pai dele. Exiba o nó pai no console.
   - **Dica**: Comece selecionando o parágrafo com `document.querySelector`.

#### 2. parentElement
   - **Pergunta**: Usando a propriedade `parentElement`, selecione o título `h2` do segundo artigo e acesse o elemento pai dele. Exiba o elemento pai no console.
   - **Dica**: Observe que `parentElement` deve retornar um elemento, não um nó de texto.

#### 3. closest(selector)
   - **Pergunta**: Usando o método `closest`, selecione o primeiro parágrafo do Artigo 1 e encontre o ancestral mais próximo com a classe `conteudo`. Exiba o resultado no console.
   - **Dica**: Use o seletor de classe `.conteudo` no método `closest`.

#### 4. previousSibling
   - **Pergunta**: Usando a propriedade `previousSibling`, selecione o segundo parágrafo do Artigo 2 e acesse o nó irmão anterior. Exiba o nó no console.
   - **Dica**: Esse irmão anterior pode ser um nó de texto.

#### 5. previousElementSibling
   - **Pergunta**: Usando a propriedade `previousElementSibling`, selecione o segundo artigo e acesse o irmão anterior que é um elemento. Exiba o elemento irmão no console.
   - **Dica**: `previousElementSibling` só retornará um nó que seja um elemento.

#### 6. firstChild
   - **Pergunta**: Usando a propriedade `firstChild`, selecione a `<section class="conteudo">` e acesse o primeiro nó filho. Exiba o nó filho no console.
   - **Dica**: `firstChild` pode retornar um nó de texto ou um elemento.

#### 7. firstElementChild
   - **Pergunta**: Usando a propriedade `firstElementChild`, selecione a `<section class="conteudo">` e acesse o primeiro filho que é um elemento. Exiba o elemento no console.
   - **Dica**: Esse método ignora nós de texto e comentários.

#### 8. childNodes
   - **Pergunta**: Usando a propriedade `childNodes`, selecione o `<footer>` e exiba todos os nós filhos no console.
   - **Dica**: `childNodes` retorna uma lista com todos os tipos de nós, incluindo nós de texto.

#### 9. children
   - **Pergunta**: Usando a propriedade `children`, selecione o elemento `<div class="container">` e exiba apenas os elementos filhos no console.
   - **Dica**: `children` retornará apenas os elementos, ignorando nós de texto.

#### 10. lastChild
   - **Pergunta**: Usando a propriedade `lastChild`, selecione o elemento `<section class="conteudo">` e exiba o último nó filho no console.
   - **Dica**: O último nó pode ser um nó de texto ou elemento.

#### 11. lastElementChild
   - **Pergunta**: Usando a propriedade `lastElementChild`, selecione o elemento `<section class="conteudo">` e exiba o último filho que é um elemento no console.
   - **Dica**: Essa propriedade ignora nós de texto.

#### 12. nextSibling
   - **Pergunta**: Usando a propriedade `nextSibling`, selecione o primeiro parágrafo do Artigo 1 e exiba o próximo nó irmão no console.
   - **Dica**: O próximo nó irmão pode ser um nó de texto.

#### 13. nextElementSibling
   - **Pergunta**: Usando a propriedade `nextElementSibling`, selecione o primeiro artigo e exiba o próximo irmão que é um elemento no console.
   - **Dica**: Essa propriedade ignora nós de texto.

---

Esses exercícios cobrem métodos e todas as propriedades mostradas em sala, e cada um deles incentiva o aluno a explorar como navegar entre os elementos e nós do documento HTML usando o DOM em JavaScript.