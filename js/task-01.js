const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}.\n`);

const categoriesArray = [...totalCategories]
	.map(
		(categories) => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
	)
	.join("\n");
console.log(categoriesArray);