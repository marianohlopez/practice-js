function pairwise(arr, arg) {

  const usedIndex = [];

  if (arr.length === 0) { return 0 }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {

      if ((arr[i] + arr[j] === arg) && !usedIndex.includes(i) && !usedIndex.includes(j)
        && i !== j) {
        usedIndex.push(i, j)
      }
    }
  }

  return usedIndex.reduce((acc, el) => acc + el)
}

pairwise([7, 9, 11, 13, 15], 20);