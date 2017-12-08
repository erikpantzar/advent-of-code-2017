// Learned solution from 
// https://github.com/martinrohart/AdventOfCode2017/blob/master/day1.js
const fs = require('fs')

fs.readFile('./day1input.txt', 'utf8', (err, input) => {
  input = input.split('').map(l => parseInt(l))
   
  console.log(
    doTheThing(input)
    )

  console.log(
    doTheThing(input, input.length/2))
})

// added offset for part2
const doTheThing = (input, offset = 1) => {
  let sum = 0


  for(let i = 0; i < input.length; i++) {
    let index = i+offset

    // maxed out
    if(index >= input.length) {
      index -= input.length
    }

    if (input[i] === input[index]) {
      sum += input[i]
    }
  }

  return sum
}