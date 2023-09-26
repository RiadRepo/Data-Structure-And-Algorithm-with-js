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

/////Bubble sort: bubble sort is a sorting algorithm that sorts ascending and descending orders easily through swapping and comparing values.
//first loop - here condition in loop (Total Number length - 1) which is how many iterations are done in the bubble sort process
// second Loop - here condition in this loop is (Total Number length - 1 - i) which is inside one iteration how much swapping deal happening.
// lastly set a swapping condition .
