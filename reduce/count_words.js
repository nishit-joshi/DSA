//Count Occurrences of Words in a Sentence

const sentence = "hello world hello"

const arrayWords = sentence.split(" ")

console.log("arrayWords", arrayWords)

const wordCheck = arrayWords.reduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1
  } else {
    acc[current] = 1
  }
  return acc
}, {})

console.log("wordCheck", wordCheck)
