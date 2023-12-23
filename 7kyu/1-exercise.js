// You will get an array of numbers.

// Every preceding number is smaller than the one following it.

// Some numbers will be missing, for instance:

// [-3,-2,1,5] //missing numbers are: -1,0,2,3,4
// Your task is to return an array of those missing numbers:

// [-1,0,2,3,4]

// ! Solution

function findMissingNumbers(arr) {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const sum = []
  for (let i = min; i <= max; i++) {
    sum.push(i)
  }
  return sum.filter((l) => !arr.includes(l))
}
