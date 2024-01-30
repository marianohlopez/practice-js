//function without using the sort method

function bubbleSort(array) {

  let length = array.length
  const numbers = [];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < array.length; j++) {
      let minNumber = Math.min(...array);
      if (array[j] === minNumber) {
        numbers.push(array[j])
        array.splice(j, 1);
      }
    }
  }

  return numbers

}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));