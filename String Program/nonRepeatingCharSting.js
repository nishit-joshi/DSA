const example = "nishishtt"

let temp = []
let found = false
for (let i = 0; i < example.length; i++) {
  found = false
  for (j = 0; j < temp.length; j++) {
    if (temp[j]?.digit === example[i]) {
      temp[j].count++
      found = true
      break
    }
  }
  if (!found) {
    temp.push({ digit: example[i], count: 1 })
  }
}

console.log("temp==", temp)
