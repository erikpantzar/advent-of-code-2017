const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, input) => {
  /* tried fixing the input, resulted in manual replace
  *  input.split('\n') for rows
  *  also replacing '\t' with spaces, didnt really compute :/
  *  node v8
  */
  const rows = input.split('\n');
  rows.pop(rows.length)

  const diffrenses = rows.map(row => {
    const arr = row.split(' ')
    const max = arr.reduce((a,b) => Math.max(a,b))
    const min = arr.reduce((a,b) => Math.min(a,b))

    return max - min
  })

  const sumOfDiffrences = diffrenses.reduce((a,b) => a+b)
  // PART 1 solution console.log(sumOfDiffrences)


  // PART 2
  const divides = rows.map(row => {
    let dii = []

    const les = rows.map(row => row.split(' '))
    les.forEach(le => {
      le.forEach(entry => {
         for(let i=0; i<le.length; i++) {
           if(entry!==le[i]) {
              if(entry/le[i]%1==0) {
                dii.push(entry/le[i])
                return entry/le[i]
              }
           }
        }
      })
    })
    return dii
  })
  const sumOfDivides = divides[0].reduce((a, b) => a+b)
  console.log(sumOfDivides)
});
