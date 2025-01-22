Abaixo, segue uma lista de exercícios para o estudante praticar o uso de Flexbox em CSS com foco nas propriedades focadas em fazer o **posicionamento e alinhamento de elementos filhos** em um contêiner Flexbox usando a propriedade `justify-content` com seus diversos valores.

---

### **Lista de Exercícios: Flexbox (justify-content)**

#### **Exercício 1: Configuração inicial**
1. Crie um contêiner `<div>` com cinco elementos filhos, como mostrado abaixo:
   ```html
   <div class="container">
       <div class="item">1</div>
       <div class="item">2</div>
       <div class="item">3</div>
       <div class="item">4</div>
       <div class="item">5</div>
   </div>
   ```
2. Aplique ao contêiner o estilo base:
   ```css
   .container {
       display: flex;
       border: 2px solid #000;
       height: 100px;
   }
   .item {
       width: 50px;
       height: 50px;
       background-color: lightblue;
       text-align: center;
       line-height: 50px;
       border: 1px solid #333;
   }
   ```
3. Pergunta: Como os itens se comportam apenas com `display: flex;`?

---

#### **Exercício 2: Justify-content (Flex-Start)**
1. Adicione ao contêiner: `justify-content: flex-start;`.
2. Pergunta:
   - Onde os itens são posicionados no eixo principal?
   - Este é o valor **default** de `justify-content`?

---

#### **Exercício 3: Justify-content (Flex-End)**
1. Altere para `justify-content: flex-end;`.
2. Pergunta:
   - Onde os itens estão posicionados agora?
   - Em que casos esse alinhamento pode ser útil?

---

#### **Exercício 4: Justify-content (Center)**
1. Atualize para `justify-content: center;`.
2. Pergunta:
   - Como os itens estão organizados no eixo principal?
   - Em que tipos de layouts você usaria este alinhamento?

---

#### **Exercício 5: Justify-content (Space-Between)**
1. Configure o contêiner com `justify-content: space-between;`.
2. Pergunta:
   - Qual é a diferença visual entre `flex-start` e `space-between`?
   - Onde estão os espaços entre os itens?

---

#### **Exercício 6: Justify-content (Space-Around)**
1. Altere para `justify-content: space-around;`.
2. Pergunta:
   - Como o espaço entre os itens muda em comparação com `space-between`?
   - O espaço nos extremos do contêiner é maior, menor ou igual ao espaço entre os itens?

---

#### **Exercício 7: Justify-content (Space-Evenly)**
1. Mude para `justify-content: space-evenly;`.
2. Pergunta:
   - Qual é a diferença entre `space-evenly` e `space-around`?
   - O espaço entre os itens e os extremos do contêiner agora é o mesmo?

---

#### **Exercício 8: Alternando direções**
1. Combine `justify-content` com a propriedade `flex-direction`:
   - Altere para `flex-direction: column;`.
   - Experimente todos os valores de `justify-content` (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`).
2. Pergunta:
   - Como o alinhamento muda quando o eixo principal passa a ser vertical?
   - Existe alguma combinação que você prefere para layouts verticais?

---

#### **Exercício 9: Layout prático com justify-content**
1. Crie um layout simples com a seguinte estrutura:
   ```html
   <div class="container">
       <div class="item">Menu</div>
       <div class="item">Logo</div>
       <div class="item">Pesquisa</div>
   </div>
   ```
2. Use Flexbox para posicionar os itens:
   - Menu à esquerda, Logo no centro, Pesquisa à direita.
   - Dica: Combine `justify-content: space-between;` com alinhamento específico.
3. Pergunta:
   - Quais outras combinações de `justify-content` poderiam ser usadas para resolver esse layout?

---

#### **Exercício 10: Reflexão**
1. Explique com suas próprias palavras as diferenças práticas entre `flex-start`, `flex-end`, `center`, `space-between`, `space-around` e `space-evenly`.
2. Pergunta:
   - Qual valor de `justify-content` você acha mais útil para criar layouts responsivos? Por quê?

---
#### **Exercício 11: Painel central alinhado na horizontal e Barras laterais alinhadas na vertical**
Crie um layout simples com um cabeçalho, rodapé, e uma área central que deve ter um menu, uma área
central de conteúdo principal e um painel à direita com duas barras laterais. A ideia é que a área
central possa dispor os elementos-filhos na horizontal, da esquerda para a direita, com espaçamento
igual entre os elementos-filhos. Já o painel à direita deve ter suas duas barras laterais dispostas uma
acima da outra porém centralizadas na vertical. As largura e altura dos elementos-filhos devem ser
menores do que a largura ou altura do elemento-pai (para você poder visualizar o espaçamento e alinhamento). Utilize a seguinte
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
---

### **Dicas para os exercícios**
- Adicione bordas ao contêiner para visualizar os espaços em torno dos itens.
- Use diferentes tamanhos de tela ou inspecione os elementos para entender como os alinhamentos se comportam em diferentes resoluções.
- Experimente combinar `justify-content` com outras propriedades, como `align-items`, para layouts mais complexos.

Esses exercícios ajudam a fixar o entendimento e mostram aplicações práticas do `justify-content` no desenvolvimento de layouts flexíveis.