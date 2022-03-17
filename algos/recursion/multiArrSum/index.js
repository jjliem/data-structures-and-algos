function multiDimSum(arr) {
  /*
  SUMMARY
    given an array or multidimensional array, add and return sum
  
  EXAMPLES
    [1,2,[3,4,[5]],6] -> 21

  ATTEMPT
    base case, return 0 if empty array

  TIME COMPLEXITY
  */
  if (arr.length === 0) {
    return 0;
  } else {
    console.log("***", arr);
    return arr[0] + multiDimSum(arr.slice(1));
  }
}

module.exports = multiDimSum;
