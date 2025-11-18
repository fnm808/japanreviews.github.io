
// Your tier list data - customize this!
const tierData = {
	S: [
		{ name: "Black Thunder \n(Original)", image: "bto.jpg", description: "Price: 3 for 100 yen \nCrunchy chocolate cookie covered in milk chocolate. Its crunch is more pronounced than a Nestle Crunch's and less airy than a Kit Kat's." },
		{ name: "Black Thunder \n(Kaki no Tane)", image: "btknt.jpg", description: "Essential fuel for productivity. The aroma alone is worth it, but the taste and energy boost make it S-tier." }
	],
	A: [
		{ name: "Black Thunder \n(Kinako)", image: "btk.jpg", description: "Incredibly versatile and always satisfying. Easy to customize and perfect for any occasion." },
		{ name: "Sushi", image: "sushi.jpg", description: "Fresh, artistic, and delicious. A culinary experience that's both healthy and indulgent." },
		{ name: "Burgers", image: "burgers.jpg", description: "Classic comfort food done right. When made well, few things are more satisfying." }
	],
	B: [
		{ name: "Pasta", image: "pasta.jpg", description: "Reliable and comforting. Endless varieties keep it interesting, though it can be hit or miss." },
		{ name: "Sandwiches", image: "sandwiches.jpg", description: "Convenient and practical. Great for lunch but lacks the excitement of higher tiers." },
		{ name: "Salads", image: "salads.jpg", description: "Healthy and refreshing, but often needs other elements to truly shine." }
	],
	C: [
		{ name: "Hot Dogs", image: "hotdogs.jpg", description: "Fun at events but not something you crave regularly. Does the job but rarely impresses." },
		{ name: "Cereal", image: "cereal.jpg", description: "Quick and easy breakfast option, but gets old fast and not very nutritious." }
	],
	D: [
		{ name: "Oatmeal", image: "oatmeal.jpg", description: "Healthy but boring. Needs lots of additions to be enjoyable." },
		{ name: "Plain Rice", image: "rice.jpg", description: "A blank canvas that needs help. On its own, it's pretty forgettable." }
	]
};

let selectedItem = null;

function createItem(itemData, tier) {
	const item = document.createElement('div');
	item.className = 'item';
	
	const img = document.createElement('img');
	img.className = 'item-image';
	img.src = itemData.image;
	img.alt = itemData.name;
	
	const name = document.createElement('div');
	name.className = 'item-name';
	name.textContent = itemData.name;
	
	item.appendChild(img);
	item.appendChild(name);
	item.onclick = () => selectItem(item, itemData);
	return item;
}

function selectItem(element, itemData) {
	// Remove previous selection
	if (selectedItem) {
		selectedItem.classList.remove('selected');
	}

	// Select new item
	element.classList.add('selected');
	selectedItem = element;

	// Update description
	const descContent = document.getElementById('description-content');
	descContent.innerHTML = `
		<h2>${itemData.name}</h2>
		<p>${itemData.description}</p>
	`;
}

// Initialize the tier list
function initializeTierList() {
	for (const [tier, items] of Object.entries(tierData)) {
		const tierContainer = document.getElementById(`tier-${tier.toLowerCase()}`);
		items.forEach(itemData => {
			tierContainer.appendChild(createItem(itemData, tier));
		});
	}
}

initializeTierList();