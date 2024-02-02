function catAndMouse(x, y, z) {
  if (Math.abs(z - x) < Math.abs(z - y)) {
    return "Cat A"
  }
  else if (Math.abs(z - x) > Math.abs(z - y)) {
    return "Cat B"
  }
  else {
    return "Mouse C"
  }

}

console.log(catAndMouse(47, 29, 89));