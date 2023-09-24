const unSortArr = [4, -1, 34, 9, -9, 103];

// let n;
//assending order
const sortAsenArr = (inputArr) => {
  for (let i = 0; i < inputArr.length - 1; i++) {
    let flag = 0;
    for (let j = 0; j < inputArr.length - 1 - i; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let temp = inputArr[j];

        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = temp;
        flag = 1;
      }
    }
    if (flag == 0) {
      break;
    }
  }
};

sortAsenArr(unSortArr); // Call the sorting function on unSortArr
console.log(unSortArr); // Log the sorted array output -[ -9, -1, 4, 9, 34, 103 ]

//node bubble-sort.js
//assending order
const sortDesenArr = (inputArr) => {
  for (let i = 0; i < inputArr.length - 1; i++) {
    let flag = 0;
    for (let j = 0; j < inputArr.length - 1 - i; j++) {
      if (inputArr[j] < inputArr[j + 1]) {
        let temp = inputArr[j];

        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = temp;
        flag = 1;
      }
    }
    if (flag == 0) {
      break;
    }
  }
};

sortDesenArr(unSortArr);
console.log(unSortArr);
