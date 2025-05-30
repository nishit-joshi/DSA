const products = [
  { name: "Apple", category: "Fruit", price: 1 },
  { name: "Banana", category: "Fruit", price: 2 },
  { name: "Carrot", category: "Vegetable", price: 1.5 },
  { name: "Lettuce", category: "Vegetable", price: 2.5 },
  { name: "Orange", category: "Fruit", price: 3 },
]

const totalprice = products.reduce((acc, current) => {
  acc[current.category] = current.price
  return acc
}, {})
console.log("totalprice", totalprice)

const strings = ["apple", "banana", "grape", "strawberry"]

const longest = strings.reduce((acc, current) => {
  return current?.length > acc?.length ? current : acc
})

console.log("longest", longest)
