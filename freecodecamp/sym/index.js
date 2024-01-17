function sym(...args) {

  let newArgs = [];
  let result = [];

  args.forEach(element => {
    newArgs.push(Array.from(new Set(element)))
  });

  for (let i = 0; i < newArgs.length; i++) {
    for (let j = 0; j < newArgs[i].length; j++) {
      if (!result.includes(newArgs[i][j])) {
        result.push(newArgs[i][j])
      }
      else {
        result = result.filter(el => el != newArgs[i][j])
      }
    }
  }

  return result;
}
//[3, 4, 5]

console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));