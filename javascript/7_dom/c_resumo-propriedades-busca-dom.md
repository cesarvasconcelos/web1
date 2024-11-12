Abaixo, segue um resumo indicando quais itens são **propriedades** e quais são **métodos** para percorrer elementos HTML em um documento web usando JavaScript.

### 1. **`parentNode`** (Propriedade)
   - **Propósito**: Retorna o nó pai (qualquer tipo de nó) do nó especificado.
   - **Uso**: `const parent = element.parentNode;`
   - **Retorna**: O nó pai ou `null` se não houver pai.
   - **Caso de Uso**: Quando você precisa acessar ou modificar o pai de qualquer tipo de nó.

---

### 2. **`parentElement`** (Propriedade)
   - **Propósito**: Retorna o elemento pai do nó especificado, ignorando pais que não são elementos.
   - **Uso**: `const parentEl = element.parentElement;`
   - **Retorna**: O elemento pai ou `null` se não houver pai do tipo elemento.
   - **Caso de Uso**: Quando você só precisa do pai **elemento** e deseja ignorar pais que não sejam elementos.

---

### 3. **`closest(selector)`** (Método)
   - **Propósito**: Encontra o ancestral mais próximo (ou o próprio elemento) que corresponda ao seletor CSS.
   - **Uso**: `const closestMatch = element.closest(".className");`
   - **Retorna**: O elemento correspondente mais próximo ou `null` se nenhum for encontrado.
   - **Caso de Uso**: Quando você precisa do ancestral mais próximo que corresponda a um seletor CSS específico.

---

### 4. **`previousSibling`** (Propriedade)
   - **Propósito**: Retorna o nó irmão anterior (de qualquer tipo).
   - **Uso**: `const prevSibling = element.previousSibling;`
   - **Retorna**: O nó irmão anterior ou `null` se não houver nenhum.
   - **Caso de Uso**: Quando você precisa do nó anterior, independentemente do seu tipo (por exemplo, nós de texto ou comentário).

---

### 5. **`previousElementSibling`** (Propriedade)
   - **Propósito**: Retorna o irmão anterior que é um elemento, ignorando nós irmãos que não são elementos.
   - **Uso**: `const prevElSibling = element.previousElementSibling;`
   - **Retorna**: O elemento irmão anterior ou `null` se não existir.
   - **Caso de Uso**: Quando você precisa do irmão anterior, mas apenas se for um elemento.

---

### 6. **`firstChild`** (Propriedade)
   - **Propósito**: Retorna o primeiro nó filho (de qualquer tipo).
   - **Uso**: `const firstChildNode = element.firstChild;`
   - **Retorna**: O primeiro nó filho ou `null` se não houver filhos.
   - **Caso de Uso**: Quando você precisa do primeiro filho, independentemente do seu tipo (por exemplo, nós de texto ou comentário).

---

### 7. **`firstElementChild`** (Propriedade)
   - **Propósito**: Retorna o primeiro filho que é um elemento.
   - **Uso**: `const firstElChild = element.firstElementChild;`
   - **Retorna**: O primeiro filho que é um elemento ou `null` se não houver elementos filhos.
   - **Caso de Uso**: Quando você precisa do primeiro filho, mas apenas se for um elemento.

---

### 8. **`childNodes`** (Propriedade)
   - **Propósito**: Retorna todos os nós filhos do nó especificado (de qualquer tipo).
   - **Uso**: `const childNodes = element.childNodes;`
   - **Retorna**: Um `NodeList` de todos os nós filhos.
   - **Caso de Uso**: Quando você precisa de todos os nós filhos, incluindo nós de texto ou comentário.

---

### 9. **`children`** (Propriedade)
   - **Propósito**: Retorna todos os elementos filhos do nó especificado.
   - **Uso**: `const children = element.children;`
   - **Retorna**: Um `HTMLCollection` de elementos filhos.
   - **Caso de Uso**: Quando você precisa apenas dos elementos filhos de um nó.

---

### 10. **`lastChild`** (Propriedade)
   - **Propósito**: Retorna o último nó filho (de qualquer tipo).
   - **Uso**: `const lastChildNode = element.lastChild;`
   - **Retorna**: O último nó filho ou `null` se não houver filhos.
   - **Caso de Uso**: Quando você precisa do último filho, independentemente do seu tipo (por exemplo, nós de texto ou comentário).

---

### 11. **`lastElementChild`** (Propriedade)
   - **Propósito**: Retorna o último filho que é um elemento.
   - **Uso**: `const lastElChild = element.lastElementChild;`
   - **Retorna**: O último filho que é um elemento ou `null` se não houver elementos filhos.
   - **Caso de Uso**: Quando você precisa do último filho, mas apenas se for um elemento.

---

### 12. **`nextSibling`** (Propriedade)
   - **Propósito**: Retorna o próximo nó irmão (de qualquer tipo).
   - **Uso**: `const nextSibling = element.nextSibling;`
   - **Retorna**: O próximo nó irmão ou `null` se não houver nenhum.
   - **Caso de Uso**: Quando você precisa do próximo nó, independentemente do seu tipo (por exemplo, nós de texto ou comentário).

---

### 13. **`nextElementSibling`** (Propriedade)
   - **Propósito**: Retorna o próximo irmão que é um elemento.
   - **Uso**: `const nextElSibling = element.nextElementSibling;`
   - **Retorna**: O próximo irmão que é um elemento ou `null` se não houver nenhum.
   - **Caso de Uso**: Quando você precisa do próximo irmão, mas apenas se for um elemento.

---

### Tabela Resumida com Tipo de Propriedade/Método

| Propriedade / Método       | Tipo       | Propósito                                 | Retorno               | Tipo de Nó Incluído              |
|----------------------------|------------|-------------------------------------------|-----------------------|----------------------------------|
| **`parentNode`**           | Propriedade| Obtém o nó pai                            | Nó ou `null`          | Qualquer tipo de nó              |
| **`parentElement`**        | Propriedade| Obtém o elemento pai                      | Elemento ou `null`    | Apenas nós do tipo elemento      |
| **`closest(selector)`**    | Método     | Encontra o ancestral mais próximo         | Elemento ou `null`    | Apenas nós do tipo elemento      |
| **`previousSibling`**      | Propriedade| Obtém o irmão anterior                    | Nó ou `null`          | Qualquer tipo de nó              |
| **`previousElementSibling`** | Propriedade | Obtém o irmão anterior que é um elemento | Elemento ou `null`    | Apenas nós do tipo elemento      |
| **`firstChild`**           | Propriedade| Obtém o primeiro filho                    | Nó ou `null`          | Qualquer tipo de nó              |
| **`firstElementChild`**    | Propriedade| Obtém o primeiro filho que é um elemento  | Elemento ou `null`    | Apenas nós do tipo elemento      |
| **`childNodes`**           | Propriedade| Obtém todos os nós filhos                 | NodeList              | Qualquer tipo de nó              |
| **`children`**             | Propriedade| Obtém todos os elementos filhos           | HTMLCollection        | Apenas nós do tipo elemento      |
| **`lastChild`**            | Propriedade| Obtém o último filho                      | Nó ou `null`          | Qualquer tipo de nó              |
| **`lastElementChild`**     | Propriedade| Obtém o último filho que é um elemento    | Elemento ou `null`    | Apenas nós do tipo elemento      |
| **`nextSibling`**          | Propriedade| Obtém o próximo irmão                     | Nó ou `null`          | Qualquer tipo de nó              |
| **`nextElementSibling`**   | Propriedade| Obtém o próximo irmão que é um elemento   | Elemento ou `null`    | Apenas nós do tipo elemento      |

Guarde este resumo. Ele destaca quais são **propriedades** (acessadas diretamente) e qual é o **método** (e.g.,
`closest(selector)`), para ajudar a entender como usar cada item no código e como eles interagem com a árvore DOM.