function renderHousesDataHTMLPage() {
	// The DOMContentLoaded event fires when the HTML document has been completely parsed
	// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
	// https://www.w3schools.com/jsref/dom_obj_event.asp
	document.addEventListener("DOMContentLoaded", renderHouseListingsPage);
}
