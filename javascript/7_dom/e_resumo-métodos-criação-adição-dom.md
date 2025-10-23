Abaixo, segue um resumo indicando quais são os principais **métodos** para adicionar, remover e manipular elementos HTML em um documento web usando JavaScript.

---

### 1. **`appendChild()`**

- **Propósito**: Adiciona um nó (elemento ou texto) ao final dos filhos de um nó pai especificado.
- **Retorno**: O nó filho adicionado.
- **Caso de Uso**: Útil quando você precisa garantir que o nó seja adicionado como o último filho de um pai.
- **Exemplo de Código**:
  ```javascript
  const parent = document.getElementById("container");
  const newElement = document.createElement("p");
  newElement.textContent = "Este é um novo parágrafo.";
  parent.appendChild(newElement); // Adiciona o novo parágrafo ao final de 'container'
  ```

---

### 2. **`append()`**

- **Propósito**: Adiciona um ou mais nós ou strings ao final dos filhos de um nó pai especificado.
- **Retorno**: Nada (`undefined`).
- **Caso de Uso**: Permite adicionar múltiplos elementos e strings; suporta texto diretamente.
- **Exemplo de Código**:
  ```javascript
  const parent = document.getElementById("container");
  parent.append("Olá, ", document.createElement("strong"));
  ```

---

### 3. **`prepend()`**

- **Propósito**: Adiciona um ou mais nós ou strings ao início dos filhos de um nó pai especificado.
- **Retorno**: Nada (`undefined`).
- **Caso de Uso**: Insere elementos ou texto no início de um contêiner pai.
- **Exemplo de Código**:
  ```javascript
  const parent = document.getElementById("container");
  parent.prepend("Bem-vindo! ", document.createElement("hr"));
  ```

---

### 4. **`after()`**

- **Propósito**: Insere um ou mais nós ou strings imediatamente após o elemento especificado.
- **Retorno**: Nada (`undefined`).
- **Caso de Uso**: Adiciona elementos logo após um elemento existente.
- **Exemplo de Código**:
  ```javascript
  const element = document.getElementById("header");
  element.after("Subtítulo: ", document.createElement("h2"));
  ```

---

### 5. **`before()`**

- **Propósito**: Insere um ou mais nós ou strings imediatamente antes do elemento especificado.
- **Retorno**: Nada (`undefined`).
- **Caso de Uso**: Adiciona elementos logo antes de um elemento existente.
- **Exemplo de Código**:
  ```javascript
  const element = document.getElementById("header");
  element.before("Nota: ", document.createElement("small"));
  ```

---

### 6. **`insertBefore()`**

- **Propósito**: Insere um nó antes de outro nó filho de um nó pai.
- **Retorno**: O nó inserido.
- **Caso de Uso**: Controla a posição exata de um elemento em relação aos seus irmãos.
- **Exemplo de Código**:
  ```javascript
  const parent = document.getElementById("container");
  const newElement = document.createElement("div");
  const referenceNode = document.getElementById("reference");
  parent.insertBefore(newElement, referenceNode);
  ```

---

### 7. **`replaceChild()`**

- **Propósito**: Substitui um nó filho dentro de um pai por outro nó.
- **Retorno**: O nó filho substituído.
- **Caso de Uso**: Substitui elementos existentes por novos.
- **Exemplo de Código**:
  ```javascript
  const parent = document.getElementById("container");
  const newElement = document.createElement("span");
  const oldElement = document.getElementById("oldChild");
  parent.replaceChild(newElement, oldElement);
  ```

---

### 8. **`insertAdjacentHTML()`**

- **Propósito**: Analisa uma string de HTML e a insere no DOM em uma posição especificada em relação a um elemento.
- **Retorno**: Nada (`undefined`).
- **Caso de Uso**: Adiciona rapidamente múltiplos elementos ou estruturas HTML complexas como strings.
- **Exemplo de Código**:
  ```javascript
  const element = document.getElementById("container");
  element.insertAdjacentHTML("beforeend", "<p>Este é adicionado ao final.</p>");
  ```
  - **Posições**:
    - `"beforebegin"`: Antes do próprio elemento.
    - `"afterbegin"`: Como o primeiro filho do elemento.
    - `"beforeend"`: Como o último filho do elemento.
    - `"afterend"`: Após o próprio elemento.

  - Você pode visualizar as possíveis posições do elemento a ser inserido a seguir:

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

---

### 9. **`replaceWith()`**

- **Propósito**: Substitui o elemento atual por um ou mais nós ou strings.
- **Retorno**: Nada (`undefined`).
- **Caso de Uso**: Substitui diretamente um elemento sem precisar do nó pai.
- **Exemplo de Código**:
  ```javascript
  const element = document.getElementById("oldElement");
  element.replaceWith("Novo conteúdo", document.createElement("strong"));
  ```

---

### 10. **`removeChild()`**

- **Propósito**: Remove um nó filho específico de um elemento pai.
- **Retorno**: O nó filho removido (que ainda pode ser usado).
- **Caso de Uso**: Remove elementos do DOM mantendo uma referência para possível reutilização.
- **Exemplo de Código**:
  ```javascript
  const parent = document.getElementById("container");
  const childToRemove = document.getElementById("elementToRemove");
  const removedChild = parent.removeChild(childToRemove);
  // O elemento removido ainda pode ser usado posteriormente
  ```

---

### 11. **`remove()`**

- **Propósito**: Remove o próprio elemento do DOM.
- **Retorno**: Nada (`undefined`).
- **Caso de Uso**: Remove elementos diretamente sem precisar referenciar o nó pai.
- **Exemplo de Código**:
  ```javascript
  const element = document.getElementById("elementToRemove");
  element.remove(); // Remove o elemento diretamente
  ```

---

### Tabela Comparativa:

| **Método**             | **Adiciona, Remove ou Substitui?** | **Posição**           | **Suporta Strings?** | **Precisa de Pai?** |
|-------------------------|---------------------------|-----------------------|----------------------|---------------------|
| `appendChild()`         | Adiciona                 | Final dos filhos      | Não                  | Sim                 |
| `append()`              | Adiciona                 | Final dos filhos      | Sim                  | Sim                 |
| `prepend()`             | Adiciona                 | Início dos filhos     | Sim                  | Sim                 |
| `after()`               | Adiciona                 | Após o elemento       | Sim                  | Não                 |
| `before()`              | Adiciona                 | Antes do elemento     | Sim                  | Não                 |
| `insertBefore()`        | Adiciona                 | Antes de um filho específico | Não               | Sim                 |
| `replaceChild()`        | Substitui                | Substitui um filho    | Não                  | Sim                 |
| `insertAdjacentHTML()`  | Adiciona                 | Relativo ao elemento  | Sim (strings HTML)   | Não                 |
| `replaceWith()`         | Substitui                | Substitui o elemento  | Sim                  | Não                 |
| `removeChild()`         | Remove                   | Remove um filho       | Não                  | Sim                 |
| `remove()`              | Remove                   | Remove o próprio elemento | Não               | Não                 |

Guarde este resumo. Ele destaca quais são os principais **métodos** (funções) para adicionar, remover e manipular
elementos na árvore DOM. Em particular, os métodos oferecem flexibilidade para adicionar, posicionar,
substituir e remover elementos ou conteúdo dinamicamente no DOM.