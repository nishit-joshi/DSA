const arr1 = [
  { id: 1, name: "Nishit" },
  { id: 2, name: "Alex" },
  { id: 3, name: "exclude" },
]

const arr2 = [
  { id: 1, age: 25 },
  { id: 2, age: 30 },
  { id: 5, name: "agee" },
]

const mergedObject = arr1.concat(arr2)

console.log("mergedObject", mergedObject)

let temp = []

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i].id === arr2[j].id) {
      temp.push({
        id: arr1[i].id,
        name: arr1[i].name,
        age: arr2[j].age,
      })
      break
    }
  }
}

console.log("tempo===", temp)
