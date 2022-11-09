const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],

    // getPotions() {
    //   return this.potions;
    // },

addPotion(newPotion) {

    for (let potion of this.potions) {
        if (potion.name === newPotion.name) {
            return `Error! Potion ${newPotion} is already in your inventory!`;
        }
        const newPotions = {
            ...newPotion,
        };


        this.potion.push(newPotion);
    }
},

};

console.log(atTheOldToad.addPotion("Dragon breath"));

//  for (let potion of this.potions) {
//  for (let value of Object.values(potions)){
//    if (value.name === productName){
//    if (potion.name === newPotion) {
//    if (potion.name.includes(newPotion)) {
//    if (this.potions.includes(newPotion)) {
//    if (Object.keys(potion).includes(newPotion)) {


//   Оригінал
//   addPotion(newPotion) {
//    if (this.potions.includes(newPotion)) {
//      return `Error! Potion ${newPotion} is already in your inventory!`;
//    }

//    this.potions.push(newPotion);
//  },

//-------

//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
  // Change code above this line
