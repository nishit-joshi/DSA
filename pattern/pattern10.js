let row = 5
let pattern = ""

for (i = 1; i < row + 1; i++) {
  for (j = 0; j < i; j++) {
    pattern += "*"
  }

  pattern += "\n"
}

for (k = 0; k < row - 1; k++) {
  for (m = 0; m < row - 1 - k - 1; m++) {
    pattern += "*"
  }
  pattern += "\n"
}

console.log(pattern)
