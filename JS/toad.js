// debugger;
const atTheOldToad = {
	potions: [
		{ name: "Speed potion", price: 460 },
		{ name: "Dragon breath", price: 780 },
		{ name: "Stone skin", price: 520 },
	],

	getPotions() {
		return this.potions;
	},

	addPotion(newPotion) {
		for (const potion of this.potions) {
			if (potion.name === newPotion.name) {
				return `Error! Potion ${newPotion.name} is already in your inventory!`;
			}
		}
		this.potions.push(newPotion);
	},

	removePotion(potionName) {
		for (let i = 0; i < this.potions.length; i += 1) {
			const item = this.potions[i];
			if (potionName === item.name) {
				this.potions.splice(i, 1);
				return `Potion ${potionName} is not in inventory!`;
			}
		}
	},

	updatePotionName(oldName, newName) {
		for (const potion of this.potions) {
			if (potion.name === oldName) {
				potion.name = newName;
				return;
			}
		}
		return `Potion ${oldName} is not in inventory!`;
	},
};

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Speed potion");
atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// console.log(atTheOldToad);
