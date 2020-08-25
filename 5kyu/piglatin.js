// Simple Pig Latin
/*
Move the first letter of each word to the end of
it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.
 */

function pigIt(str){
    let newArr = str.split(' ')
    let ay = ['a','y']
    let tempArr = []
    newArr.forEach(word => {
      let temp = word.split('')
      temp.push(temp.shift())
      temp = temp.concat(ay).join('')
      console.log(temp)
      tempArr.push(temp)
    })
    
     return tempArr.join(' ')
  }

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !