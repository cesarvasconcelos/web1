Abaixo, segue um resumo dos principais métodos DOM em JavaScript para consultar elementos HTML em um documento Web:

### Métodos Principais do DOM para Consultar Elementos HTML

1. **`document.getElementById(id)`**
   - **Descrição**: Retorna o elemento que possui o `id` especificado.
   - **Uso**: Ideal para buscar um único elemento com um `id` exclusivo.
   - **Exemplo**:
     ```javascript
     const elemento = document.getElementById("meuId");
     ```

2. **`document.getElementsByClassName(className)`**
   - **Descrição**: Retorna uma coleção (HTMLCollection) de elementos com a classe especificada.
   - **Uso**: Para selecionar vários elementos que compartilham a mesma classe.
   - **Exemplo**:
     ```javascript
     const elementos = document.getElementsByClassName("minhaClasse");
     ```

3. **`document.getElementsByTagName(tagName)`**
   - **Descrição**: Retorna uma coleção (HTMLCollection) de elementos com a tag especificada (como `<div>`, `<p>`).
   - **Uso**: Útil para selecionar elementos por tipo de tag.
   - **Exemplo**:
     ```javascript
     const divs = document.getElementsByTagName("div");
     ```

4. **`document.querySelector(selector)`**
   - **Descrição**: Retorna o primeiro elemento que corresponde ao seletor CSS especificado.
   - **Uso**: Para selecionar um único elemento usando seletor CSS, como uma classe, `id` ou tipo.
   - **Exemplo**:
     ```javascript
     const elemento = document.querySelector(".minhaClasse");
     ```

5. **`document.querySelectorAll(selector)`**
   - **Descrição**: Retorna uma lista de todos os elementos que correspondem ao seletor CSS especificado.
   - **Uso**: Para selecionar múltiplos elementos que correspondem a um seletor CSS, como todos os elementos de uma classe.
   - **Exemplo**:
     ```javascript
     const elementos = document.querySelectorAll("div.minhaClasse");
     ```

6. **`document.getElementsByName(name)`**
   - **Descrição**: Retorna uma coleção (NodeList) de todos os elementos com o atributo `name` especificado.
   - **Uso**: Frequentemente usado para selecionar elementos de formulário, como `<input>` ou `<textarea>`.
   - **Exemplo**:
     ```javascript
     const elementos = document.getElementsByName("nomeDoCampo");
     ```

### Observações Importantes

- Você deve ter percebido que, enquanto alguns métodos acima retornam `HTMLCollection`, outros retornam `NodeList`. Qual é a diferença?
- **HTMLCollection vs. NodeList**: Métodos como `getElementsByClassName` e `getElementsByTagName` retornam um **HTMLCollection**, enquanto `querySelectorAll` retorna um **NodeList**. Ambos são semelhantes a arrays, mas com diferenças sutis:
   - **HTMLCollection** é atualizado automaticamente quando o DOM é alterado.
   - **NodeList** (de `querySelectorAll`) é estático, não reflete alterações no DOM automaticamente.


### Dica: Conversão para um Array
   - **`NodeList`** e **`HTMLCollection`** podem ser convertidos para um `Array` para uma melhor manipulação (varredura,
    inserção e remoção, por exemplo) via  métodos de `Array`. Basta fazer:
     ```javascript
     const items = ...; // HTMLCollection ou NodeList
     const itemsArray = Array.from(items); // funciona para NodeList e HTMLCollection
Guarde este resumo. Esses importantes métodos permitem acessar e manipular elementos HTML com base em `id`, classes, tags e seletores CSS complexos, oferecendo flexibilidade ao trabalhar com o DOM em JavaScript.