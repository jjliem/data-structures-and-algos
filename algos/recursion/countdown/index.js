function countdown(n) {
  /*
  SUMMARY
    write a recursive function that returns a string counting down from given number

  EXAMPLE
    3 -> "3, 2, 1, Liftoff!"
    1 -> "1, Liftoff!"

  ATTEMPT
    start with base case of 0 -> "Liftoff!"

  TIME COMPLEXITY
    O(n)
  */

  // base case
  if (n <= 0) {
    return "Liftoff!";
  } else {
    return `${n}, ${countdown(n - 1)}`;
  }
}

module.exports = countdown;
