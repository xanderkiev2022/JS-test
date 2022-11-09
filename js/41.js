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
    for (let potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion} is already in your inventory!`;
      }
      //    this.potions.push(newPotion);
      this.potions.push({ name: newPotion, price: price });
      return this.potions;
    }
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
};

// console.log(atTheOldToad.addPotion("Invisibility", 620));
console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.getPotions());

//-------
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
// Change code above this line
