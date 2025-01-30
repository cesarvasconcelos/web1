### Listagem das casas no arquivo `list.html`

- Nesta versão, iremos implementar a listagem das informações das casas existentes no `array` dentro do arquivo `list.html`
- Primeiramente, observe que há um arquivo CSS `list.css` que já contém regras CSS para ajustar a aparência das
  casas que serão listadas em `list.html`.

- Faça com que o arquivo `list.html` referencie este arquivo CSS `list.css`

```html
        <link rel="stylesheet" href="css/list.css">
```
- Faça com que o arquivo `list.html` referencie o arquivo que contém as funções utilitárias de
  acesso aos dados das casas `houses-array.js`

```html
        <script src="scripts/houses-array.js" defer></script>
```
- Faça com que o arquivo `list.html` referencie o arquivo JavaScript `listing.js` que irá conter
  apenas as funções que dizem respeito à listagem das casas

```html
        <script src="scripts/listing.js" defer></script>
```

- No final, o arquivo `list.html` deve ficar assim:


```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/list.css">
        <title>House Listings</title>
        <script src="scripts/houses-array.js" defer></script>
        <script src="scripts/listing.js" defer></script>
    </head>

    <body>
        <h1>House Listings</h1>
        <hr>
        <div id="divHouseListings" class="house-listing">
            <!-- Uma nova <div> para cada uma das casas será inserida dinamicamente neste contêiner -->
        </div>

        <p><a href="index.html">Back to main page</a></p>

    </body>

</html>
```

### Funções do arquivo `listing.js`

- Agora, vamos implementar novas funções em `listing.js`

- Primeiro, apenas estude com atenção a função `function renderHousesDataHTMLPage()`. Note que,
  quando o evento de carga do arquivo `list.html` for lançado, o browser irá chamar uma outra função
  de alto nível, chamada `renderHouseListingsPage`.
  Esta última função irá orquestrar toda a renderização HTML da listagem das casas.

- Por isso, vamos logo implementar esta função  `renderHouseListingsPage`. Ela deve ler as informações de
  todas as casas do `array` de dados e incluir cada uma das casas no 'parent' contêiner da  página `list.html`:

```javascript
function renderHouseListingsPage() {
	const houses = getHousesData(); // esta função já existe em 'house-array.js'

	houses.forEach((house) => {
		addHouseToHTMLContainer(house); // (1) lógica `decomposta` em seções de funções menores (adere ao SRP)
	});
}
```

- Implemente a função (1) que deve _criar_ uma nova `div` HTML com os dados de uma
  casa recebida como argumento e _adicioná-la_ à página `list.html`:

```javascript
function addHouseToHTMLContainer(house) {
	const divHousesListingsContainer = getHouseListingsContainer(); // (2) a lógica está sendo `decomposta` em seções de funções menores
	const houseDiv = createHouseDataDiv(house); // (3) a lógica está sendo `decomposta` em seções de funções menores

	divHousesListingsContainer.appendChild(houseDiv);
}
```

- Implemente uma função (2) capaz de obter uma referência ao contêiner HTML que irá guardar
  todas as `<div>`'s que representam cada uma das casas:

```javascript
function getHouseListingsContainer() {
	return document.getElementById("divHouseListings");
}
```

- Implemente uma função (3) para _criar_ uma nova `div` HTML contendo os dados da casa recebida
  como argumento:

```javascript
function createHouseDataDiv(house) {

	const houseDiv = document.createElement("div"); // create a new HTML div element
	houseDiv.id = `houseDiv${house.id}`; // div.id == 'houseDiv1' e.g.,

	houseDiv.classList.add('house'); // apply CSS class 'house' to houseDiv

	houseDiv.innerHTML = createHouseDetailsHTMLText(house); // (4) a lógica está sendo `decomposta` em seções de funções menores
	return houseDiv;
}
```

- A função que cria o código HTML com os dados de uma casa é fornecida abaixo. Note que os
  eventos de clique dos botões (delete/edit) ainda não estarão prontos (pois estas
  funções serão implementadas nas próximas versões do projeto).

```javascript
function createHouseDetailsHTMLText(house) {
    return `
        <img src="${house.thumbnail}" alt="House Image">
        <h2>${house.address}</h2>
        <button id="btnDelete" onclick="---FALTA IMPLEMENTAR---">Delete</button>
        <button id="btnEdit" onclick="---FALTA IMPLEMENTAR---">Edit</button>
        <p><strong>Price:</strong> ${house.price}</p>
        <p><strong>Bedrooms:</strong> ${house.bedrooms}</p>
        <p><strong>Bathrooms:</strong> ${house.bathrooms}</p>
        <p><strong>Square Feet:</strong> ${house.squareFeet} sq ft</p>
        <p><strong>Description:</strong> ${house.description}</p>
    `;
}
```
- Por fim, chame a função que dispara a renderização das casas no arquivo `listing.js`:

```javascript
renderHousesDataHTMLPage();
```



