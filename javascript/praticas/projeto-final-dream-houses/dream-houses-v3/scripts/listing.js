function renderHousesDataHTMLPage() {
    // The DOMContentLoaded event fires when the HTML document has been completely parsed
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
    // https://www.w3schools.com/jsref/dom_obj_event.asp
    document.addEventListener('DOMContentLoaded', renderHouseListingsPage);
}

function renderHouseListingsPage() {
    const houses = getHousesData();

    houses.forEach(house => {
        addHouseToHTMLContainer(house);
    });
}

function addHouseToHTMLContainer(house) {
    const divHousesListingsContainer = getHouseListingsContainer();
    const houseDiv = createHouseDataDiv(house);

    divHousesListingsContainer.appendChild(houseDiv);
}

function getHouseListingsContainer() {
    return document.getElementById('divHouseListings');
}

function createHouseDataDiv(house) {
    // create a new HTML div element
    const houseDiv = document.createElement('div');
    houseDiv.id = `houseDiv${house.id}`;

    applyCSSToHouseDataDiv(houseDiv);

    houseDiv.innerHTML = createHouseDetailsHTMLText(house);
    return houseDiv;
}

function applyCSSToHouseDataDiv(houseDiv) {
    // include this new div into a class
    houseDiv.classList.add('house');
}

function createHouseDetailsHTMLText(house) {
    return `
        <img src="${house.thumbnail}" alt="House Image">
        <h2>${house.address}</h2>
        <button id="btnDelete" onclick="deleteHouseEventHandler(${house.id})">Delete</button>
        <button id="btnEdit" onclick="editHouse(this)">Edit</button>
        <p><strong>Price:</strong> ${house.price}</p>
        <p><strong>Bedrooms:</strong> ${house.bedrooms}</p>
        <p><strong>Bathrooms:</strong> ${house.bathrooms}</p>
        <p><strong>Square Feet:</strong> ${house.squareFeet} sq ft</p>
        <p><strong>Description:</strong> ${house.description}</p>
    `;
}

function deleteHouseEventHandler(houseId) {

    if (confirm("Are you sure you want to delete this house?")) {
        deleteHouseDataBy(houseId);
        deleteHouseFromHTMLContainer(houseId);

        location.reload(true);
    }
}

function deleteHouseFromHTMLContainer(houseId) {
    const divHousesListingsContainer = getHouseListingsContainer();
    const houseDiv = getHouseDivBy(houseId);
    divHousesListingsContainer.removeChild(houseDiv);
}

function getHouseDivBy(houseId) {
    // get House HTML div element
    return document.getElementById(`houseDiv${houseId}`);
}


renderHousesDataHTMLPage();