/**
 * Created by hansel.tritama on 10/21/17.
 */
let numArr = [];
let temp = 0;
let i = 2;

//-----------------------//
//GRAB ALL INPUT NUMBERS//
//---------------------//

//SOLUTION 1
// while(process.argv[i] !== undefined)
// {
//     numArr.push(process.argv[i]);
//     i++;
// }

//SOLUTION 2
let arrNode = process.argv;
for(let j=2;j<arrNode.length;j++)
{
    numArr.push(process.argv[j]);
}


//----------------------//
//BUBBLE SORT ALGORITHM//
//--------------------//

//SOLUTION 1
// let swapped;
// do {
//     swapped = false;
//     for (let i=0; i < numArr.length-1; i++) {
//         if (parseFloat(numArr[i]) > parseFloat(numArr[i+1])) {
//             temp = numArr[i];
//             numArr[i] = numArr[i+1];
//             numArr[i+1] = temp;
//             swapped = true;
//         }
//     }
// } while (swapped);

//SOLUTION 2
numArr.sort(function (a,b) {
    return a - b;//we have to use this
});


//--------------------------//
//OUTPUT THE SORTED NUMBERS//
//------------------------//

//SOLUTION 1
// console.log("Sorted numbers:");
// for(let k in numArr)
// {
//     process.stdout.write(numArr[k] + " ");
// }
// console.log("\n");

//SOLUTION 2
console.log("Sorted numbers:");
for(let k in numArr)
{
    process.stdout.write(numArr[k] + " ");
}
console.log("\n");