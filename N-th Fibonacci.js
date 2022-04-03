/*
Description.

I love Fibonacci numbers in general, but I must admit I love some more than others.
I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

--------------------------------------------------------------------------

Examples.

nthFibo(4) == 2

Notes.
Because 2 is the 4th number in the Fibonacci Sequence.
For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

==========================================================================
*/

function nthFibo(n) {
  if (n == 0 || n == 1) return 0;
  if (n == 2) return 1;

  let n1 = 0;
  let n2 = 1;
  let f;

  for (let i = 3; i <= n; i++) {
      f = n1 + n2;
      n1 = n2;
      n2 =f;
  }

  return f;
}

console.log(nthFibo(0)); // 0,"1-st Fibo"
console.log(nthFibo(1)); // 0,"1-st Fibo"
console.log(nthFibo(2)); // 1,"2-nd Fibo"
console.log(nthFibo(3)); // 1,"3-rd Fibo"
console.log(nthFibo(4)); // 2,"4-th Fibo"
console.log(nthFibo(5)); // 3,"5-th Fibo"
console.log(nthFibo(6)); // 5,"6-th Fibo"
console.log(nthFibo(7)); // 8,"7-th Fibo"
console.log(nthFibo(8)); // 13,"8-th Fibo"

// 1  2  3  4  5  6  7  8
// 0  1  1  2  3  5  8 13