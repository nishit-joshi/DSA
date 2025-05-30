const products = [
  { name: "Apple", category: "Fruit" },
  { name: "Banana", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Lettuce", category: "Vegetable" },
  { name: "Orange", category: "Fruit" },
]

const groupBYCategory = products.reduce((acc, current) => {
  if (acc[current.category]) {
    acc[current.category] += 1
  } else {
    acc[current.category] = 1
  }
  return acc
}, {})

// console.log("groupBYCategory", groupBYCategory)

//category vise

const Transformation = products.reduce((acc, current) => {
  if (!acc[current.category]) {
    acc[current.category] = []
  } else {
    acc[current.category].push(current.name)
  }
  return acc
}, {})

console.log("Transformation", Transformation)

// const words = ["apple", "banana", "orange", "apple", "banana", "apple"]

// const frequency = words.reduce((acc, current) => {
//   if (acc[current]) {
//     acc[current] += 1
//   } else {
//     acc[current] = 1
//   }
//   return acc
// }, {})

// console.log("frequency", frequency)

// const group = [
//   { name: "Apple", category: "Fruit", price: 1 },
//   { name: "Banana", category: "Fruit", price: 2 },
//   { name: "Carrot", category: "Vegetable", price: 1.5 },
//   { name: "Lettuce", category: "Vegetable", price: 2.5 },
//   { name: "Orange", category: "Fruit", price: 3 },
// ]

// const objects = group.reduce((acc, current) => {
//   const { category } = current
//   if (!acc[category]) {
//     acc[category] = []
//   }
//   acc[category].push(current)
//   return acc
// }, {})

// console.log("objec", objects)

const arr = [1, 2, 2, 3, 5, 5]

const newArr = arr.reduce((acc, current) => {
  if (!acc[current]) {
    acc[current] = 1
  } else {
    acc[current] += 1
  }
  return acc
}, {})

//count Names

const names = ["Apple", "Banana", "Apple", "Orange", "Banana", "Banana"]

const CountNames = names.reduce((acc, current) => {
  if (!acc[current]) {
    acc[current] = 1
  } else {
    acc[current] += 1
  }
  return acc
}, {})

//group user by age

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
]

const groupUserByAge = users.reduce((acc, current) => {
  if (!acc[current.age]) {
    acc[current.age] = []
    acc[current.age].push(current.name)
  } else {
    acc[current.age].push(current.name)
  }
  return acc
}, {})

console.log("groupUserByAge===", groupUserByAge)
