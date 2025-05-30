//Problem:
//Given an array of integers number and an integer target,
//return the indices of the two numbers such that they add up to target.

//Input: number = [2, 7, 11, 15], target = 9
//Output: [0, 1]  // Because number[0] + number[1] == 9

const number = [2, 7, 11, 15]
const target = 18
let data = []

for (let i = 0; i < number.length; i++) {
  for (let j = i + 1; j < number.length; j++) {
    if (number[i] + number[j] === target) {
      data.push(number[i], number[j])
      break
    }
  }
}

console.log("data", data)
