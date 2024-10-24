const array = [];

for (let i = 0; i < 10; i++) {
  const row = [];
  for (let j = 0; j < 10; j++) {
    const randomNumber = Math.floor(Math.random() * 201) - 100;
    row.push(randomNumber);
  }
  array.push(row);
}

let minNumber = array[0][0];
let minRowIndex = 0;

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (array[i][j] < minNumber) {
      minNumber = array[i][j];
      minRowIndex = i;
    }
  }
}

console.log("Массив:");

for (let i = 0; i < array.length; i++) {
  let rowString = array[i].map(num => num.toString().padStart(4, ' ')).join(' ');
  if (i === minRowIndex) {
    rowString = '* ' + rowString;
  } else {
    rowString = '  ' + rowString;
  }
  console.log(rowString);
}

console.log("\nНаименьшие положительные числа в каждой строке:");

for (let i = 0; i < array.length; i++) {
  let minPositive = null;
  for (let j = 0; j < array[i].length; j++) {
    if (array[i][j] > 0) {
      if (minPositive === null || array[i][j] < minPositive) {
        minPositive = array[i][j];
      }
    }
  }
  if (minPositive !== null) {
    console.log(`Строка ${i + 1}: ${minPositive}`);
  } else {
    console.log(`Строка ${i + 1}: Нет положительных чисел`);
  }
}

console.log("\nМинимальное количество замен в каждой строке:");

for (let i = 0; i < array.length; i++) {
  let replacements = 0;
  let count = 1;

  for (let j = 1; j < array[i].length; j++) {
    if ((array[i][j] > 0 && array[i][j - 1] > 0) || (array[i][j] < 0 && array[i][j - 1] < 0)) {
      count++;
      if (count === 3) {
        replacements++;
        count = 1;
      }
    } else {
      count = 1;
    }
  }
  console.log(`Строка ${i + 1}: ${replacements}`);
}