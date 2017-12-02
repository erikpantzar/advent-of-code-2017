const fs = require('fs')

function cleanRows(row) {
  for(let i = 16;0<i; i--) {
    row.replace('\t', '')
  }

  return row
}

fs.readFile('./input.txt', 'utf8', (err, input) => {
  /* tried fixing the input, resulted in manual replace
  *  input.split('\n') for rows
  *  also replacing '\t' with spaces, didnt really compute :/
  *  node v8
  */
  // console.log(input)

  const rows = input.split('\n');
  rows.pop(rows.length)

  const diffrenses = rows.map((row) => {
    const arr = row.split(' ')
    const max = arr.reduce((a,b) => Math.max(a,b))
    const min = arr.reduce((a,b) => Math.min(a,b))

    return max - min
  })

  // sum of diffrenses
  const sumOfDiffrences = diffrenses.reduce((a,b) => a+b)
  console.log(sumOfDiffrences)
});
