// Pair of gloves

/*
Description.

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.
Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

--------------------------------------------------------------------------

Examples.

input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)

==========================================================================
*/

function numberOfPairs(gloves) {
    let s = gloves.map(el=>el.toLowerCase()).sort();
    let cnt = 0;

    for (let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1]) { cnt++; i++; }
    }

    return cnt;
}

console.log(numberOfPairs(['red','red']));  //1
console.log(numberOfPairs(['red','green','blue']));  //0
console.log(numberOfPairs(['red', 'blue', 'green','Blue']));  //1
console.log(numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black']));  //3