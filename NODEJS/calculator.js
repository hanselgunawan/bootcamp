/**
 * Created by hansel.tritama on 10/16/17.
 */
function calculate(operand, a, b)
{
    switch(operand)
    {
        case "add":
            return parseFloat(a)+parseFloat(b);
            break;
        case "subtract":
            return a-b;
            break;
        case "multiply":
            return a*b;
            break;
        case "divide":
            return a/b;
            break;
        case "exp":
            return Math.pow(a,b);
            break;
        case "algebra":
            var firstNum = parseFloat(a.substring(0, a.indexOf("x")));
            var secondNum = parseFloat(a.indexOf("x")+2, a.indexOf("="));//change the plus logic!
            var equalNum = parseFloat(a.indexOf("=")+1, a.length);

            return secondNum;

    }
}

// console.log(calculate(process.argv[2], process.argv[3], process.argv[4]));
console.log(process.argv[3].substring(process.argv[3].indexOf("=")+1, process.argv[3].length));