### Prática DreamHouses - v1.0
- Observe que os botões da página principal não estão funcionando.

- Crie os arquivos HTML5 `add.html` e `list.html` que serão associados aos botões da página principal
    - Inicialmente, coloque apenas um texto simples, e.g., <code>Página add.html</code> para ser
      exibido no HTML de cada um dos
      arquivos.

- Faça com que os arquivos `add.html` e `list.html` possam invocar o script que possui os dados das casas:
  ```html
  <script src="scripts/houses-array.js" defer></script>
  ```

- No arquivo `index.js` , observe as funções que fazem o redirecionamento da página principal para os novos
  arquivos `add.html` e `list.html`.

    - Confira se as funções de redirecionamento estão prontas no arquivo `index.js`. Caso contrário,
  implemente algum código que está faltando.
    - Use o objeto global `location` criado automaticamente pelo JavaScript no browser.

- Na página principal `index.html`, faça que cada um dos botões agora chamem as funções de
  redirecionamento do arquivo `index.js` no evento de clique do botão.

- Teste a página principal e verifique se as páginas `add.html` e `list.html` estão sendo chamadas normalmente.

- Faça agora com que os dados iniciais das casas estejam disponíveis nas páginas páginas `add.html`
  e `list.html`.
- Acompanhe a explicação do professor quanto às funções utilitárias iniciais existentes em
  `houses-arrays.js`.

- Agora, implemente duas novas funções utilitárias no arquivo `house-arrays.js`:
    - A primeira deve receber um novo array de casas e atualizar o objeto `sessionStorage` com este
      array, substituindo o anterior completamente

    ```javascript
    function updateHouseData(newArrayOfHouses) {
        // Atualizar o array de casas de `sessionStorage`
        // com um novo array recebido como parâmetro
        sessionStorage.setItem('houses', JSON.stringify(newArrayOfHouses));
    }
    ```

    - A segunda função deve adicionar um novo objeto casa diretamente no `sessionStorage`

    ```javascript
    function addHouseData(house) {
        const housesArray = getHousesData(); // retorna o array de `sessionStorage`

        // adicione o objeto casa recebido como parâmetro no array de `sessionStorage`

        // passe este novo array de casas para a função que sabe atualizar `sessionStorage`
    }
    ```

   - Teste a função `addHouseData()` passando como argumento um novo objeto casa e
     verifique se `sessionStorage` contém os dados dessa nova casa inserida.

#### Dever de casa:

- Você deve implementar uma função capaz de apagar uma casa do array de `sessionStorage` a partir do `houseId` da casa:

  - O protótipo deve ser o seguinte:

  ```javascript
    function deleteHouseDataBy(houseId) {
        // apagar um objeto casa do array de `sessionStorage`
        // mediante o id da casa recebido como parâmetro.
        // se o houseId não existir no array de `sessionStorage`,
        // `sessionStorage` deve continuar com os mesmos objetos casa
        // que tinha antes (ou seja, nada deve acontecer com os dados anteriores das casas)
    }
  ```