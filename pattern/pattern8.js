let row = 5

let pattern = ""

//outer loop for rows
for (let i = 0; i < row; i++) {
  //inner loop columns for spaces
  for (let j = 0; j < i; j++) {
    pattern += " "
  }

  //inner loop columns for stars
  for (let k = 0; k < 2 * row - (2 * i + 1); k++) {
    pattern += "*"
  }

  //print new line
  pattern += "\n"
}

console.log(pattern)
