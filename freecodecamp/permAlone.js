function permAlone(str) {

  let regex = /(.)\1+/;
  let newArray = [];
  let array = str.split("");

  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  function heapPermutation(n, A) {
    if (n === 1) {
      newArray.push(A.join(""));
    } else {
      for (let i = 0; i < n; i++) {
        heapPermutation(n - 1, A);
        if (n % 2 === 0) {
          [A[i], A[n - 1]] = [A[n - 1], A[i]];
        } else {
          [A[0], A[n - 1]] = [A[n - 1], A[0]];
        }
      }
    }
  }

  heapPermutation(array.length, array);

  const result = newArray.filter(el => !el.match(regex))

  return result.length;
}

console.log(permAlone('aab'));