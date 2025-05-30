const users1 = [
  { id: 1, name: "Nishit" },
  { id: 2, name: "Alex" },
]

//Transform array of object into single object
// { 1 : Nishit , 2 : Alex }

const transformedValues = users1.reduce((acc, current, index, array) => {
  console.log("current.name", current)
  acc[current.id] = current.name
  return acc
}, {})

console.log("transformedValues==", transformedValues)

const users2 = [
  { id: 1, name: "Nishit", role: "admin" },
  { id: 2, name: "Alex", role: "user" },
  { id: 3, name: "John", role: "admin" },
  { id: 4, name: "Sarah", role: "user" },
]

// {
//     role: [
//         {id :'1',name : 'nn'}
//     ],

// }

const groupBYRole = users2.reduce((acc, current) => {
  if (!acc[current.role]) {
    acc[current.role] = []
  }

  acc[current.role].push({ id: current.id, name: current.name })
  return acc
}, {})
console.log("groupBYRole==", groupBYRole)
