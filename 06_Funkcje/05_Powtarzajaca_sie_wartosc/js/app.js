const numbers = [2, 8, 5, 2, 3, 5, 4, 2, 4];

/**
 * Write your code below!
 */

function indexOfRepeatedValue(array) {
  let firstIndex;
  for (let i = 0; i <= array.length; i++) {
    for (let j = i + 1; j <= array.length; j++) {
      if (array[i] == array[j]) {
        firstIndex = array[j];
        return firstIndex;
      }
    }
  }
}

console.log(indexOfRepeatedValue(numbers));
