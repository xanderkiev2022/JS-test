// Вивести перші букви ключів об'єкта,
// Та створити функцію яка повертає об'єкт
// з кількістю повторення букв

const objValues = {
  first: "valueFirst",
  second: "valueSecond",
  third: "valueThird",
  fourth: "valueFourth",
  Fifth: "valueFifth",
  sixth: "valueSixth",
};

function counterFirstLetters(obj) {
  const FirstLettersObj = {};

  for (const key in obj) {
    if (FirstLettersObj.hasOwnProperty(key[0].toLowerCase())) {
      FirstLettersObj[key[0].toLowerCase()] += 1;
      continue;
    }

    FirstLettersObj[key[0].toLowerCase()] = 1;
  }

  return FirstLettersObj;
}

console.log(counterFirstLetters(objValues));
