"use strict";

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  //----------------------------------//
  //----------------------------------//
  //----------------------------------//

  getPotions() {
    for (let potion of this.potions) {
      return this.potions;
    }
  },

  //----------------------------------//
  //----------------------------------//
  //----------------------------------//

  addPotion(newPotion, price) {
    //if (this.potions.includes(newPotion)) {
    //1:52:00

    for (let potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion} is already in your inventory!`;
      }
    }
    this.potions.push({ name: newPotion, price: price });
  },

  //----------------------------------//
  //----------------------------------//
  //----------------------------------//
  removePotion(potionName) {
    for (let potion of this.potions) {
      //  const potionIndex = this.potions.indexOf(potionName);
      const potionIndex = this.potions.indexOf(potion);
      //  if (potionIndex === -1) {
      if (potion.name === potionName) {
        //console.log("Зілля є, воно в рядку", potion);
        this.potions.splice(potionIndex, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  //----------------------------------//
  //----------------------------------//
  //----------------------------------//
  updatePotionName(oldName, newName) {
    const { potions } = this; // зробили лок змінну, щоб не писати this.potions

    for (let potion of potions) {
      const potionIndex = potions.indexOf(potion);
      const { name } = potion; // деструктурували, щоб не писати potion.name

      if (name === oldName) {
        console.log("Зілля є, воно в рядку", name);
        potions.splice(potionIndex, 1, newName);
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
};

console.log(atTheOldToad.addPotion("Invisibility", 620));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.getPotions());
console.table(atTheOldToad.updatePotionName("Stone skin", "Stoooone skin"));
console.table(atTheOldToad.getPotions());

//-------

// Change code above this line
