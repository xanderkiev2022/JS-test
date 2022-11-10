"use strict";

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  //----------------------------------//

  getPotions() {
    const { potions } = this; // зробили лок змінну, щоб не писати this.potions
    for (let potion of potions) {
      return this.potions;
    }
  },

  //----------------------------------//

  addPotion(newPotion) {
    for (let potion of this.potions) {
    //    console.log(potion);
   // if (this.potion.includes(newPotion)) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`; // newPotion.name , бо в масиві є нзва і ціна
      }
    }
    this.potions.push(newPotion);  // розпилення тут не треба, бо передається вже масивом
  },

  //----------------------------------//

  removePotion(potionName) {    
    for (let potion of this.potions) {
    //  const potionIndex = this.potions.indexOf(potionName);
        const potionIndex = this.potions.indexOf(potion);
          if(Object.values(potion).includes(potionName)){
        //if(potionIndex === -1)
            this.potions.splice(potionIndex, 1);
        }
      }
      return `Potion ${potionName} is not in inventory!`;
    },

  //----------------------------------//

    updatePotionName(oldName, newName) {
      const { potions } = this;
  
      for (let potion of potions) {
     // const potionIndex = this.potions.indexOf(oldName);
        const potionIndex = potions.indexOf(potion);  
      // if(potionIndex === -1) {
         if(potion.name === oldName){
      //    this.potions.splice(potionIndex, 1, newName);
            potion.name = newName;
        }
      }
      return `Potion ${oldName} is not in inventory!`;
    },
  };
  



console.table(atTheOldToad.addPotion({ name: 'Invisible', price: 700 }));
console.table(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.getPotions());
// console.table(atTheOldToad.updatePotionName("Stone skin", "Stoooone skin"));
console.table(atTheOldToad.getPotions());
