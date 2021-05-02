// Create a function that reverses a string
// 'Hi My Name Is Val' should be:
// 'laV sI emaN yM iH'

function reverse(str) {
//  check the input
if(!str || str.length < 2 || typeof str !== 'string') {
  return 'hmm thats not good'
}


// this implementation turns our string to array while turning it backwards
const backwards = [];
const totalItems = str.length -1;
for (let i = totalItems; i >= 0; i--) {
  backwards.push(str[i])
}
console.log(backwards)


// this will return the array back to a final result which is a turned string
return backwards.join('')
}


// we can use a built in method
function reverse2(str) {
  return str.split('').reverse().join('')
}

// More mothern cleaner way to do input
const reverse3 = str => str.split('').reverse().join('')

// If you want to get more fancy, you can even destructure
const reverse3 = str => [...str].reverse().join('')



reverse3(`Hi My Name Is Val`)

