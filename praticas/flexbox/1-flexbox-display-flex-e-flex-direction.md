Abaixo, segue uma lista de exercícios para o estudante praticar o uso de **Flexbox em CSS** com foco
nas propriedades `display: flex` e `flex-direction`. O objetivo é ensinar os fundamentos iniciais de
FlexBox layout e praticar algumas da propriedades iniciais básicas.

---

### **Lista de Exercícios: Flexbox (display: flex e flex-direction)**

#### **Exercício 1: Configuração básica do Flexbox**
1. Crie um contêiner `<div>` com três elementos filhos `<div>`. Atribua uma classe ao contêiner chamada `.container`.
2. Aplique `display: flex;` no `.container` e observe o comportamento dos itens filhos.
3. Pergunta: Qual é a principal mudança no layout quando você define `display: flex;` no contêiner?

---

#### **Exercício 2: Flex-direction (Row)**
1. Usando o mesmo contêiner do exercício anterior:
   - Adicione a propriedade `flex-direction: row;`.
2. Pergunta: O que acontece com a disposição dos itens?
3. Dica: Este é o valor **default** de `flex-direction`.

---

#### **Exercício 3: Flex-direction (Row-Reverse)**
1. Modifique a propriedade para `flex-direction: row-reverse;`.
2. Pergunta:
   - O que muda em relação ao layout com `row-reverse`?
   - O que acontece com a ordem visual dos itens?

---

#### **Exercício 4: Flex-direction (Column)**
1. Altere a propriedade para `flex-direction: column;`.
2. Pergunta:
   - Como os itens se organizam agora?
   - Em que situações você utilizaria `flex-direction: column`?

---

#### **Exercício 5: Flex-direction (Column-Reverse)**
1. Modifique a propriedade para `flex-direction: column-reverse;`.
2. Pergunta:
   - Qual é a diferença entre `column` e `column-reverse`?
   - O que acontece com a ordem visual e com o eixo principal?

---

#### **Exercício 6: Reflexão sobre o valor padrão de flex-direction**
1. Remova a propriedade `flex-direction` do `.container`.
2. Pergunta:
   - Qual é o valor padrão de `flex-direction`?
   - Por que você acha que `row` é o padrão?

---

#### **Exercício 7: Layout prático**
1. Crie um layout simples com um cabeçalho, rodapé, e uma área central que deve ter um menu, uma área central
   de
   conteúdo principal e uma barra lateral à direita. A ideia é que a área central possa dispor os elementos-filhos na
   horizontal, da esquerda para a direita. Utilize a seguinte estrutura HTML:
   ```html
   <div class="area-central">
     <div class="menu">Menu</div>
     <div class="painel-centro">Conteúdo principal</div>
     <div class="barra-lateral">Barra lateral</div>
   </div>
   ```

2. Crie um layout simples com um cabeçalho, rodapé, e uma área central que deve ter um menu, uma área central
   de
   conteúdo principal e um painel à direita com duas barras laterais. A ideia é que a área central
   possa dispor os elementos-filhos na horizontal, da esquerda para a direita. Já o painel à direita deve
   ter suas duas barras laterais dispostas uma acima da outra. Utilize a seguinte
   estrutura HTML:
   ```html
   <div class="area-central">
     <div class="menu">Menu</div>
     <div class="painel-centro">Conteúdo principal</div>
     <div class="painel-direita">
        <div class="barra-superior">Barra superior</div>
        <div class="barra-inferior">Barra inferior</div>
     </div>
   </div>
   ```
3. Use Flexbox para:
   - Organizar os itens no eixo horizontal usando `flex-direction: row;`.
   - Alterar a direção para `flex-direction: column;`.
   - Experimentar com `row-reverse` e `column-reverse`.

---

### **Dicas para os exercícios**
- Utilize bordas ou cores diferentes nos itens para facilitar a visualização do layout.
- Adicione margens e padding nos itens para entender como eles interagem com o espaço.
- Consulte a documentação do CSS Flexbox, se necessário.

Esses exercícios fornecem prática prática e também incentivam a reflexão sobre o uso e os efeitos de `display: flex;` e `flex-direction`.