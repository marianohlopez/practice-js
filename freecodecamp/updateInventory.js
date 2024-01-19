function updateInventory(arr1, arr2) {

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.some(el => el[1] === arr2[i][1])) {
      arr1.find(el => el[1] === arr2[i][1])[0] += arr2[i][0]
    } else {
      arr1.push(arr2[i])
    }

  }

  return arr1.sort((a, b) => a[1].toLowerCase().localeCompare(b[1].toLowerCase()));

}


// Example inventory lists
const curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

const newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));