//Problem: Given a string, find the first character that does not repeat.

const str = "abcabd"
let tempStr = []

for (let i = 0; i < str.length; i++) {
  let found = false
  for (obj of tempStr) {
    console.log("str[i]", str[i], obj)
    if (obj.value === str[i]) {
      obj.count++
      found = true
    }
  }

  if (!found) {
    tempStr.push({ count: 1, value: str[i] })
  }
}

console.log("tempStr", tempStr)

//using HashMap

// const resultMap = new Map()

// for (let i = 0;i < str.length;i++) {

// }
