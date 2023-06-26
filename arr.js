'use scrict'

function isPangram(string){

  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
'o','p','q','r','s','t','u','v','w','x','y','z'];
  let arr = string.toLowerCase().split("");
  let index = 0;
  let result = [];

  nextPrime: for (index; index <= alphabet.length; index++) {

  for (let j = 0; j < arr.length; j++) {
    if (alphabet[index] === arr[j]) { 
      result.push(arr[j]);
      continue nextPrime;
    }
  }
}

  return alphabet.length == result.length;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true