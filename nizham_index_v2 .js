// Duplikasi method .find
// Duplikasi method .indexOf

// Conditions (indexOf)
// 1. Mencari index dari sebuah item dalam array
// 2. Akan return sebuah number (index)

const fruits = ["LOTR", "Harry Potter", "Naruto", "Boruto"];

const duplicateIndexOf = (arr, input) => {
  let indexResult;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === input) {
      indexResult = i;
      break;
    }
  }
  return indexResult;
};

const indexOf = duplicateIndexOf(fruits, "Naruto");

console.log(indexOf);

// // Conditions (find)
// // 1. Mencari sebuah value (item) dalam array yang
// //    memenuhi condition yang kita berikan
// // 2. Callback function kita harus return boolean
// // 3. Ketika callback function return true, loop akan berhenti
// //    lalu function find akan return item dari array.

const ages = [2, 10, 15, 20, 25, 30];

const duplicateFind = (arr, callback) => {
  let value;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      value = arr[i];
      break;
    }
  }
  return value;
};

const find = duplicateFind(ages, (val) => {
  return val > 15;
});

console.log(find);


