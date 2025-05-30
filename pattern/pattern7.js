let row = 5

let pattern = ""

//outer loop for rows
for (let i = 0; i < row; i++) {
  //inner loop columns for spaces
  for (let j = 0; j < row - i - 1; j++) {
    pattern += " "
  }

  //inner loop columns for stars
  for (let k = 0; k < 2 * i + 1; k++) {
    pattern += "*"
  }

  //print new
  pattern += "\n"
}

console.log(pattern)
