/**
 * Created by hansel.tritama on 10/18/17.
 */
let first_digit = process.argv[2];
let second_digit = process.argv[3];

if(first_digit % 7 === 0 && second_digit % 7 === 0) console.log("True");
else console.log("False");