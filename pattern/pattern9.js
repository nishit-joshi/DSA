let row = 5
let pattern = ""

for (let i = 0; i < row; i++) {
  for (j = 0; j < row - i - 1; j++) {
    pattern += " "
  }
  for (k = 0; k < 2 * i + 1; k++) {
    pattern += "*"
  }
  pattern += "\n"
}

for (let h = 0; h < row; h++) {
  // First loop: stars
  for (let m = 0; m < h; m++) {
    pattern += " "
  }
  // Second loop: spaces
  for (let n = 0; n < 2 * row - (2 * h + 1); n++) {
    pattern += "*" // Spaces added here
  }
  // Add newline
  pattern += "\n"
}

console.log(pattern)
