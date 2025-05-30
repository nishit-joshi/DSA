const array = [10, 20, 50, 40, 8, 80, 9, 4]

const MaxiMumValue = array.reduce((acc, current, index, array) => {
  return acc > current ? acc : current
}, 0)

console.log("MaxiMumValue", MaxiMumValue)
