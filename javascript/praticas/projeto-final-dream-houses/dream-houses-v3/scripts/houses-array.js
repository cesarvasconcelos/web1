// House objects array
const houses = [
	{
		id: 1,
		thumbnail: "https://i.ibb.co/NVjxzps/h4.jpg",
		address: "123 Main St, Springfield, USA",
		price: "$500,000",
		bedrooms: 4,
		bathrooms: 3,
		squareFeet: 2500,
		description:
			"A beautiful family home with spacious living areas and a lovely garden.",
	},
	{
		id: 2,
		thumbnail: "https://i.ibb.co/7CkQBMn/425.png",
		address: "456 Oak St, Metropolis, USA",
		price: "$650,000",
		bedrooms: 5,
		bathrooms: 4,
		squareFeet: 3000,
		description:
			"Modern home with a great location near downtown, perfect for entertaining.",
	},
	{
		id: 3,
		thumbnail: "https://i.ibb.co/WFYPyrR/property.jpg",
		address: "789 Maple St, Gotham, USA",
		price: "$750,000",
		bedrooms: 6,
		bathrooms: 4.5,
		squareFeet: 3500,
		description:
			"Large home with high ceilings and luxurious finishes throughout.",
	},
	{
		id: 4,
		thumbnail: "https://i.ibb.co/CmmFBPc/424.png",
		address: "101 Cedar St, Star City, USA",
		price: "$400,000",
		bedrooms: 3,
		bathrooms: 2,
		squareFeet: 1800,
		description: "Charming home with a cozy interior and a large backyard.",
	},
	{
		id: 5,
		thumbnail: "https://i.ibb.co/ZJwHZtr/home-3.jpg?text=House+5",
		address: "202 Birch St, Central City, USA",
		price: "$550,000",
		bedrooms: 4,
		bathrooms: 3,
		squareFeet: 2600,
		description:
			"A perfect family home with a modern kitchen and plenty of space for kids.",
	},
	{
		id: 6,
		thumbnail: "https://i.ibb.co/F77zspv/427.png",
		address: "785 Harvey St, Newark City, USA",
		price: "$412,000",
		bedrooms: 5,
		bathrooms: 2,
		squareFeet: 3200,
		description:
			"A lovely home with a awesome garden and a very big garage.",
	},
];

// https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
// Session storage object let you store key/value pairs in the browser.
// The sessionStorage object stores data for only one session.
// (The data is deleted when the browser is closed).

// Methods:
// sessionStorage.setItem("key", "value"); // write
// let lastname = sessionStorage.getItem("key"); // read
// sessionStorage.removeItem("key"); // remove
// sessionStorage.clear(); // clear

// Another option would be LocalStorage:
// The localStorage Object which stores data with no expiration date.
// (The data is not deleted when the browser is closed, and are available in future sessions).
// 'save' the houses array in sessionStorage browser area using JSON format

const START_HOUSE_ID_SEQUENCE = 50;

function loadSessionStorageWithHousesIfEmpty() {
	if (!sessionStorage.getItem("houses"))
		sessionStorage.setItem("houses", JSON.stringify(houses));
}

function loadSessionStorageWithHouseIdsStartSequence() {
	if (!sessionStorage.getItem("nextHouseId"))
		sessionStorage.setItem("nextHouseId", START_HOUSE_ID_SEQUENCE);
}

function getAndIncrementHouseId() {
	let houseId = sessionStorage.getItem("nextHouseId");
	sessionStorage.setItem("nextHouseId", ++houseId);

	return houseId; // or truthy []
}

function deleteHouseDataBy(houseId) {
	// Filter out the house from the array
	const houses = getHousesData().filter((h) => h.id !== houseId);
	updateHouseData(houses);
}

function getHousesData() {
	// Get the houses array from sessionStorage area;
	// return null, if key is not found at sessionStorage
	return JSON.parse(sessionStorage.getItem("houses")) || []; // or truthy []
}

function addHouseData(house) {
	const houses = getHousesData();
	houses.push(house);

	updateHouseData(houses);
}

function updateHouseData(houses) {
	// Update the houses array in sessionStorage
	sessionStorage.setItem("houses", JSON.stringify(houses));
}

loadSessionStorageWithHousesIfEmpty();
loadSessionStorageWithHouseIdsStartSequence();
