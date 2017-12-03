const fs = require('fs')

fs.readFile('./daytwoinput.txt', 'utf8', (err, input) => {
  const data = input.split('\n') // rows
              .filter(l => l.length > 0) // lastline
              .map(m => m.split('\t')) // columns

  console.log(sumOfDiffs(data))
  console.log(sumOfDivision(data))
});

function sumOfDiffs(input) {
  const diffs = input.map(row => {
    const sorted = row.sort((a,b) => a-b)
    return sorted[sorted.length-1]-sorted[0]
  })

  return diffs.reduce((a,b) => a+b)
}

function sumOfDivision(input) {
  const divisions = input.map(row => {
    const div = row.map(r => {
      for (let i = 0; i<row.length; i++) {
        const division = r/row[i]
        if (division % 1 == 0 && division !== 1) {
          return division
        }
      }
    })
    return div.filter(d => d>0)[0]
  })
  return divisions.reduce((a, b)=> a+b)
}
