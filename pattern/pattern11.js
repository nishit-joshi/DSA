let row = 5
let pattern = ""

for (i = 0; i < row; i++) {
  for (j = 0; j <= i; j++) {
    if ((i + j) % 2 == 0) {
      pattern += "0"
    } else {
      pattern += "1"
    }
  }
  pattern += "\n"
}

console.log(pattern)
