"use strict";

function changeEven(numbers, value) {
    // Change code below this line
  const newNumbers = [];
    numbers.forEach(number => {
       if (number % 2 === 0) {
        newNumbers.push(number + value);}
    else {
        newNumbers.push(number);
    }
    });
    return newNumbers;
    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] % 2 === 0) {
    //     numbers[i] = numbers[i] + value;
    //   }
    // }
    // Change code above this line
  }
  

  const pureMultiply = (array, value) => {
    const newArray = [];
  
    array.forEach(element => {
      newArray.push(element * value);
    });
  
    return newArray;
  };
  
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = pureMultiply(numbers, 2);
  
  // Не произошло мутации исходных данных
  console.log(numbers); // [1, 2, 3, 4, 5]
  // Функция вернула новый массив с изменёнными данными
  console.log(doubledNumbers); // [2, 4, 6, 8, 10]


  console.log(changeEven([44, 13, 81, 92, 36, 54], 100))