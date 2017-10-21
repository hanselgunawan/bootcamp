/**
 * Created by hansel.tritama on 10/18/17.
 */
let fs = require("fs");
let option = process.argv[2];
let deposit_amount = 0;
let withdraw_amount = 0;

let total = 0;

function displayBalance()
{
    fs.readFile("bank.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        let dataArr = data.split(",");

        for(let i in dataArr)
        {
            total += parseFloat(dataArr[i]);
        }
        console.log("YOUR BALANCE: " + total.toFixed(2));
    });
}

function deposit() {
    deposit_amount = process.argv[3];
    fs.appendFile("bank.txt", "," + deposit_amount, function(err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Deposit!");
        }
    });
    displayBalance();
}

function withdraw(){
    withdraw_amount = process.argv[3]*-1;
    fs.appendFile("bank.txt", "," + withdraw_amount, function(err) {
        if (err) {
            console.log(err);
        }
        else
        {
            console.log("Withdraw!");
        }
    });
    displayBalance();
}

function lotto(){
    fs.appendFile("bank.txt", ", -0.25", function (err) {
        if(err)
        {
            return console.log(err);
        }
    });

    var chance = Math.floor((Math.random() + 10) + 1);

    if(chance === 1)
    {
        fs.appendFile("bank.txt", ", 2", function (err) {
           if(err)
           {
               return console.log(err);
           }
        });
        console.log("Congrats! You won the lottery!");
    }
    else
    {
        console.log("Too bad! Try again!");
    }

    displayBalance();
}

switch(option)
{
    case "deposit":
        deposit();
        break;
    case "withdraw":
        withdraw();
        break;
    case "lotto":
        lotto();
        break;
    case "balance":
        displayBalance();
        break;
}