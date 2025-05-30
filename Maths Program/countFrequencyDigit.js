//count the number of frequency in digit

let digit = 122554488
let tempDigit = 10
let temp = []

while (digit > 0) {
  let lastDigit = digit % 10
  let found = false
  for (let i = 0; i < 50; i++) {
    if (temp[i]?.digit === lastDigit) {
      temp[i].count += 1
      found = true
      break
    }
  }
  if (!found) {
    temp.push({ digit: lastDigit, count: 1 })
  }

  digit = Math.floor(digit / 10)
}

// console.log("digit---", temp)

//count the number of frequency in array

let array = [1, 10, 2, 6, 10, 2, 4, 4, 5, 5, 1, 2, 10]

let finalObject = []

for (let i = 0; i < array.length; i++) {
  let found = false
  for (let j = 0; j < finalObject.length; j++) {
    if (finalObject[j]?.digit === array[i]) {
      finalObject[j].count += 1
      found = true
      break
    }
  }

  if (!found) {
    finalObject.push({ digit: array[i], count: 1 })
  }
}

console.log("data", finalObject)
