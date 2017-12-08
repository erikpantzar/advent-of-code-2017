const fs = require('fs')

fs.readFile('./day4input.txt', 'utf8', (err, input) => {
  input = input.split('\n')
  console.log(noValidPhrases(
    input
    ))

  console.log(noNotAnagramValid(
    input
    ))
})

const validPassphrase = (phrase = ['ab ca ab']) => {
  phrase = phrase.split(' ')
  let clone = [...phrase]
  let double = 0
  
  // remove all words from phrase
  phrase.forEach((word, index) => {
    if(clone.indexOf(word) !== -1) {
      clone.splice(clone.indexOf(word), 1)
      if(clone.indexOf(word) !== -1) {
        double++
      } 
    }
  })
  return double === 0
}

const noValidPhrases = (phrases = ['pas fra', 'fra pa']) => {
  const validPhrases = phrases.filter(phrase => {
    if(validPassphrase(phrase)) {
      return phrase
    }
  })
  return `There are #${validPhrases.length} of valid passphrases`
}

// PART 2 
const noNotAnagramValid = (phrases) => {
  const anagramProofPhrases = (phrase) => {
    phrase = phrase.split(' ')
    let ana = 0  
    const sw = (word) => word.split("").sort().join("")
    const sorted = phrase.map(word => sw(word))
    
    // remove all words from phrase
    phrase.forEach((word, index) => {
      if(sorted.indexOf(sw(word)) !== -1) {
        sorted.splice(sorted.indexOf(sw(word)), 1)
        if(sorted.indexOf(sw(word)) !== -1) {
          ana++
        } 
      }
    })
    return ana === 0
  }
  const validPhrases = phrases.filter(phrase => {
    if(anagramProofPhrases(phrase)) {
      return phrase
    }
  })
  return `There are #${validPhrases.length} of valid non-anagram passphrases`
}

