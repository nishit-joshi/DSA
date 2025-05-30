let arr = [1, 41, 54, 26, 31, 78, 12]

//by loop

for (let i = 0; i < arr.length; i++) {
  let min = i
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
      min = j
    }
  }
  if (min !== i) {
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
}

console.log(arr[arr.length - 1])

//by while loop

//largest digit in Number

digit = 584945

let MaxNUmber = 0
while (digit > 0) {
  let lastDigit = digit % 10
  MaxNUmber = lastDigit > MaxNUmber ? lastDigit : MaxNUmber
  digit = Math.floor(digit / 10)
}

console.log("maxnumber==", MaxNUmber)
