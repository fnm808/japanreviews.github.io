// Your tier list data - customize this!
// const tierData = {
// 	A: [
// 		{ name: "Black Thunder \n(Original)", image: "bto.jpg", description: "Price: 3 for 100 yen \nCrunchy chocolate cookie covered in milk chocolate. Its crunch is more pronounced than a Nestle Crunch's and less airy than a Kit Kat's." },
// 		{ name: "Black Thunder \n(Kaki no Tane)", image: "btknt.jpg", description: "Essential fuel for productivity. The aroma alone is worth it, but the taste and energy boost make it S-tier." }
// 	],
// 	B: [
// 		{ name: "Black Thunder \n(Kinako)", image: "btk.jpg", description: "Incredibly versatile and always satisfying. Easy to customize and perfect for any occasion." },
// 		{ name: "Jagarico \n(Salad)", image: "jagarico.jpg", description: "Fresh, artistic, and delicious. A culinary experience that's both healthy and indulgent." },
// 		{ name: "Burgers", image: "burgers.jpg", description: "Classic comfort food done right. When made well, few things are more satisfying." }
// 	],
// 	C: [
// 		{ name: "Pasta", image: "pasta.jpg", description: "Reliable and comforting. Endless varieties keep it interesting, though it can be hit or miss." },
// 		{ name: "Sandwiches", image: "sandwiches.jpg", description: "Convenient and practical. Great for lunch but lacks the excitement of higher tiers." },
// 		{ name: "Salads", image: "salads.jpg", description: "Healthy and refreshing, but often needs other elements to truly shine." }
// 	],
// 	D: [
// 		{ name: "Hot Dogs", image: "hotdogs.jpg", description: "Fun at events but not something you crave regularly. Does the job but rarely impresses." },
// 		{ name: "Cereal", image: "cereal.jpg", description: "Quick and easy breakfast option, but gets old fast and not very nutritious." }
// 	],
// };

const tierData = [
		{ tier: "A", name: "Black Thunder \n(Original)", image: "bto.jpg", 
         description: "Price: 3 for 100 yen (Daiso), ~40 yen (convenience stores) \nCrunchy chocolate cookie covered in milk chocolate." },
		{ tier: "A", name: "Black Thunder \n(Kaki no Tane)", image: "btknt.jpg", 
         description: "Price: 3 for 100 yen (Daiso), ~40 yen (convenience stores) \nBlack Thunder with small rice crackers. Crunchier and saltier than the original." },
		{ tier: "B", name: "Black Thunder \n(Kinako)", image: "btk.jpg", 
         description: "Price: 3 for 100 yen (Daiso), ~40 yen (convenience stores) \nBlack Thunder with roasted soybean powder, which imparts a toasty, nutty flavor." },
		// { tier: "B", name: "Jagarico \n(Salad)", image: "jagarico.jpg", 
      //    description: "Fresh, artistic, and delicious. A culinary experience that's both healthy and indulgent." },
		// { tier: "B", name: "Burgers", image: "burgers.jpg", 
      //    description: "Classic comfort food done right. When made well, few things are more satisfying." },
		// { tier: "C", name: "Pasta", image: "pasta.jpg", 
      //    description: "Reliable and comforting. Endless varieties keep it interesting, though it can be hit or miss." },
		// { tier: "C", name: "Sandwiches", image: "sandwiches.jpg", 
      //    description: "Convenient and practical. Great for lunch but lacks the excitement of higher tiers." },
		// { tier: "C", name: "Salads", image: "salads.jpg", 
      //    description: "Healthy and refreshing, but often needs other elements to truly shine." },
		// { tier: "D", name: "Hot Dogs", image: "hotdogs.jpg", 
      //    description: "Fun at events but not something you crave regularly. Does the job but rarely impresses." },
		// { tier: "D", name: "Cereal", image: "cereal.jpg", 
      //    description: "Quick and easy breakfast option, but gets old fast and not very nutritious." }
   ];

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
   item.onclick = () => selectItem(item, itemData, tier);
   return item;
}

function selectItem(element, itemData, tier) {
   // Remove previous selection
   if (selectedItem) {
         selectedItem.classList.remove('selected');
   }

   // Hide all description panels
   document.querySelectorAll('.description-panel').forEach(panel => {
         panel.style.display = 'none';
   });

   // Select new item
   element.classList.add('selected');
   selectedItem = element;

   // // Show description in the correct tier panel
   // const descPanelId = `description-${tier}`;
   // const descPanel = document.getElementById(descPanelId);
   
   // if (descPanel) {
   //       descPanel.style.display = 'flex';
   //       descPanel.innerHTML = `
   //          <h2>${itemData.name}</h2>
   //          <p>${itemData.description}</p>
   //       `;
   // } else {
   //       console.error(`Description panel not found: ${descPanelId}`);
   // }
}

// Initialize the tier list
function initializeTierList() {
   for (const item of tierData) {
      tier = item.tier;
      // console.log(item);
		const tierContainer = document.getElementById(`tier-${tier.toLowerCase()}`);
		tierContainer.appendChild(createItem(item, tier));

	}
}


initializeTierList();