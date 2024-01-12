function extraLongFactorials(n) {

  let numbers = [];

  for (let i = n; i > 0; i--) {
    numbers.push(i)
  }

  const result = numbers.reduce((acc, el) => acc * el)
  console.log(BigInt(result.toLocaleString().replace(/\./g, '')));
}

extraLongFactorials(25)