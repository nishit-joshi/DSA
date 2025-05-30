//Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14

const arr = [2, 1, 6, 8, 11, 5, 4]
const target = 12

let result = []
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      result.push(arr[i], arr[j])
      break
    }
  }
  if (result.length) {
    break
  }
}

// const result = []

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length - 1; j++) {
//     if (arr[i] + arr[j] === target) 
{
//       result.push(arr[i], arr[j])
//       break
//     }
//   }
// }

console.log("result==", result)

//selection -  select
//insertion  - insert
//Bubble -
