// Javascript Mathematician

/*
Description.

You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.
The function should contain at least 1 argument per set.

--------------------------------------------------------------------------

Examples.

calculate(1)(1) // should return 2
calculate(1,1)(1) // should return 3
calculate(1,1)(1,-1) // should return 2
calculate(2,4)(3,7,1) // should return 17

==========================================================================
*/

const calculate = (...arg1) => (...arg2) => [].concat(arg1, arg2).reduce((a, b) => a + b, 0);

function calculate(...arg1) {
    return function (...arg2) {
        return [...arg1, ...arg2].reduce((a, b) => a + b);
    };
}

function calculate() {
    var arg1 = 0;
    for(var i = 0 ; i < arguments.length; i+=1) {
        arg1 += arguments[i];
    }
    return function() {
    var arg2 = 0;
    for(var j = 0 ; j < arguments.length; j +=1) {
        arg2 += arguments[j];
    }
    return arg1 + arg2;
    }
}

console.log(calculate(1)(1)) // should return 2
console.log(calculate(1,1)(1)) // should return 3
console.log(calculate(1,1)(1,-1)) // should return 2
console.log(calculate(2,4)(3,7,1)) // should return 17