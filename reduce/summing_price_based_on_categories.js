const items = [
  { name: "Shirt", price: 20, category: "clothing" },
  { name: "Pants", price: 30, category: "clothing" },
  { name: "Mouse", price: 25, category: "electronics" },
  { name: "Keyboard", price: 40, category: "electronics" },
]

//{ category1 : 50,category2 : 100}

const sum = items.reduce((acc, current) => {
  if (acc[current.category]) {
    acc[current.category] += current.price
  } else {
    acc[current.category] = current.price
  }
  return acc
}, {})

// const SumOVerAll = items.reduce((acc, current) => {
//   if (!acc[current.category]) {
//     acc[current.category] = current.price
//   } else {
//     acc[current.category] = current.price + acc[current.category]
//   }
//   return acc
// }, {})

console.log("SumOVerAll==", sum)
