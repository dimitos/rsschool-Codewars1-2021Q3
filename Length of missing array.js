/*
Description.

You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!
You have to write a method, that return the length of the missing array.

--------------------------------------------------------------------------

Examples.

[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

Notes

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

==========================================================================
*/

function getLengthOfMissingArray(arr) {

  const s = (arr || []).map(a => (a ? a.length : 0)).sort((a, b) => a - b);
  if (s.includes(0)) return 0;

  for (let i = 0; i < s.length - 1; i++) {
      if (s[i] + 1 !== s[i + 1])  return s[i] + 1;
  }

  return 0;
}


console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]));
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]));
console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ]));
console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]]));
console.log(getLengthOfMissingArray([ ]));

// Test.assertEquals(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 3);
//     Test.assertEquals(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 2);
//     Test.assertEquals(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ), 2);
//     Test.assertEquals(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ), 5);

//     Test.assertEquals(getLengthOfMissingArray([ ]), 0);