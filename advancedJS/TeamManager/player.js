/**
 * Created by hansel.tritama on 10/25/17.
 */
let inquirer = require("inquirer");
let gameScore = 0;

function Player(name, position, offence, defence){
    this.name = name;
    this.position = position;
    this.offence = offence;
    this.defence = defence;
}

Player.prototype.goodGame = function () {
    this.offence+=1;
    this.defence+=1;
};

Player.prototype.badGame = function () {
    this.offence+=1;
    this.defence+=1;
};

Player.prototype.printStats = function (number) {
    console.log("PLAYER " + parseFloat(number+1));
    console.log("Name: " + this.name);
    console.log("Position: " + this.position);
    console.log("Offence Point: " + this.offence);
    console.log("Defence Point: " + this.defence);
};

let play = 0;
let count = 0;
let mainPlayer = [];
let subPlayer = [];

let addPlayer = function() {
    if (count < 8) {
        console.log("New Player");
        inquirer.prompt([
            {
                name: "name",
                message: "What is your name?"
            }, {
                name: "position",
                message: "What is your current position?"
            }, {
                name: "offence",
                message: "Your offence skill (1 - 10)?",
                validate: function (value) {
                    if(isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }, {
                name: "defence",
                message: "Your defence skill (1 - 10)?"
            }
        ]).then(function(answers) {
            let newPlayer = new Player(
                answers.name,
                answers.position,
                answers.offence,
                answers.defence
            );
            if(count < 5)
            {
                mainPlayer.push(newPlayer);
            }
            else
            {
                subPlayer.push(newPlayer);
            }
            count++;
            addPlayer();
        });
    }
    else {
        console.log("MAIN PLAYERS");
        console.log("-=-=-=-=-=-=-");
        for (let x = 0; x < mainPlayer.length; x++) {
            mainPlayer[x].printStats(x);
        }
        console.log("SUB PLAYERS");
        console.log("-=-=-=-=-=-=-");
        for (let x = 0; x < subPlayer.length; x++) {
            subPlayer[x].printStats(x);
        }
        playGame();
    }
};

let addOffenceSkill = function (mainPlayerArr) {
    let offence_points = 0;
    for(let j = 0;j<mainPlayerArr.length;j++)
    {
        offence_points += mainPlayerArr[j].offence;
    }
    return offence_points;
};

let addDefenceSkill = function (mainPlayerArr) {
    let defence_points = 0;
    for(let k = 0;k<mainPlayerArr.length;k++)
    {
        defence_points += mainPlayerArr[k].defence;
    }
    return defence_points;
};

let swap = function (mainIndex, subIndex) {
    let temp = mainPlayer[mainIndex];
    mainPlayer[mainIndex] = subPlayer[subIndex];
    subPlayer[subIndex] = temp;
};

let chooseSub = function () {
    inquirer.prompt([
        {
            type: "list",
            name: "subPlayer",
            message: "Who do you want to pick from sub players?",
            choices: ["1. " + subPlayer[0].name, "2. " + subPlayer[1].name, "3. " + subPlayer[2].name]
        },
        {
            type: "list",
            name: "mainPlayer",
            message: "Who do you want to sub?",
            choices: ["1. " + mainPlayer[0].name, "2. " + mainPlayer[1].name, "3. " + mainPlayer[2].name, "4. " + mainPlayer[3].name , "5. " + mainPlayer[4].name]
        }
    ]).then(function(answer) {
        let mainPerson = answer.mainPlayer[0] - 1;//get mainPlayer index
        let subPerson = answer.subPlayer[0] - 1;//get subPlayer index
        console.log("mainPerson index = " + mainPerson);
        console.log("subPerson index = " + subPerson);
        swap(mainPerson, subPerson);
        play++;
        playGame();
    });
};

let askForSubtitution = function () {
    inquirer.prompt([
        {
            type: "list",
            name: "subtitute",
            message: "Want to subtitute a player?",
            choices: ["Yes", "No"]
        }
    ]).then(function(subs) {
        if(subs.subtitute === "Yes")
        {
            chooseSub();
        }
        else
        {
            play++;
            playGame();
        }
    });
};

let playAgain = function () {
    inquirer.prompt([
        {
            type: "list",
            name: "again",
            message: "Play again?",
            choices: ["Yes", "No"]
        }
    ]).then(function(answer) {
        if(answer.again === "Yes")
        {
            playGame();
        }
        else
        {
            console.log("Thank you for playing!");
        }
    });
};

let playGame = function () {
    if(play < 10)
    {
        console.log("MAIN PLAYERS");
        console.log("-=-=-=-=-=-=-");
        for (let x = 0; x < mainPlayer.length; x++) {
            mainPlayer[x].printStats(x);
        }
        let first_number = Math.floor(Math.random()*50) + 1;
        let second_number = Math.floor(Math.random()*50) + 1;
        console.log("1st Number = " + first_number);
        console.log("2nd Number = " + second_number);
        let total_offence_skill = addOffenceSkill(mainPlayer);
        let total_defence_skill = addDefenceSkill(mainPlayer);

        if(first_number<total_offence_skill)
        {
            gameScore++;
        }
        else if(second_number>total_defence_skill)
        {
            gameScore--;
        }

        askForSubtitution();
    }
    else
    {
        if(gameScore > 0)
        {
            for(let x = 0; x < mainPlayer.length; x++)
            {
                mainPlayer[x].goodGame();
            }
            console.log("CONGRATS! YOU GUYS WON!");
        }
        else if(gameScore < 0)
        {
            for(let x = 0; x < mainPlayer.length; x++)
            {
                mainPlayer[x].badGame();
            }
            console.log("NOOOOO! YOU GUYS LOST!");
        }
        playAgain();
    }
};

addPlayer();