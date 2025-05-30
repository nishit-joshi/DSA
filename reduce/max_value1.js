const products = [
  { name: "A", price: 100 },
  { name: "B", price: 300 },
  { name: "C", price: 250 },
]

const MaxValue = products.reduce((acc, current) => {
  return current.price > acc ? current.price : acc
}, 0)

console.log("MaxValue", MaxValue)
