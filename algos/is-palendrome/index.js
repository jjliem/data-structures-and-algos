function isPalendrome(str) {
  // Complete the function!
  /* 
  SUMMARY
    return true if given string is a palendrome, case sensitive
  
  EXAMPLES
    dog = false
    peep = true

  ATTEMPT
    convert str to array, reverse, and compare

  TIME COMPLEXITY
    possibly O(n+k)
  */

  if (str === str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

function isPermutationPalendrome(str) {
  // Complete the function!
  /* 
  SUMMARY
    return true if any combo of given str is a palendrome
  
  EXAMPLES
    dog = false
    [d:1, o:1, g:1] odd=3
    eepp = true
    [e:2, p: 2] odd=0
    racecar = true
    [r:2, a:2, c:2, e: 1] odd=1
    rraacce = true
    [r:2, a:2, c:2, e: 1] odd=1


  ATTEMPT
    if str length is even, no odds
    if str length is odd, no odds above 1
  */
  let counts = {}; // creates hash table
  let odds = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (counts.hasOwnProperty(char)) {
      // if char exists, add to it
      counts[char] += 1;
    } else {
      counts[char] = 1; // otherwise create char
    }
  }

  for (let key in counts) {
    if (counts[key] % 2 != 0) {
      // if any odd numbers in count
      odds++; // increase counter
    }
  }

  return odds <= 1; // return true if odd count 0 or 1
}

module.exports = { isPalendrome, isPermutationPalendrome };
