/*
Description.

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

--------------------------------------------------------------------------

Examples.

explode("312")
should return :
"333122"

explode("102269")
should return :
"12222666666999999999"

==========================================================================
*/

const nicknameGenerator = n => n.length < 4 ? "Error: Name too short" : n[2].match(/[AEIOUaeiou]/) ? n.slice(0, 4) : n.slice(0, 3);