function pairSum(arr, sum) {
  // Complete the function!
  /* 
  SUMMARY
    return true if any pairs in the given array add up to the given sum

  EXAMPLES
    arr = [1,2,3]
    sum = 3
    return true

  ATTEMPT
    create hash table
    loop through array
    if current number + existing number = sum, return true
    otherwise add number to the hash table

  TIME COMPLEXITY
    nested for loops are O(n^2)
    hash tables are O(n)
    this solution should be O(n)?
  */

  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (hash.hasOwnProperty(sum - num)) {
      // if sum-num exists in array, return true
      return true;
    } else {
      hash[num] = num; // otherwise add that number to hash table
    }
  }
  // if sum-num doesn't exist after looping through array, return false
  return false;
}

module.exports = pairSum;
