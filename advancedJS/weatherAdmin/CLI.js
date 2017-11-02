/**
 * Created by hansel.tritama on 10/28/17.
 */
const weather = require("weather-js");
const inquirer = require("inquirer");
const UserSearch = require("./UserSearch");
const WeatherAdmin = require("./WeatherAdmin.js");
const fs = require("fs");

function mainMenu()
{
    this.askUser = function () {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "What would you like to do?",
                    name: "view_option",
                    choices: ["Add New User", "See Admin View", "Exit"]
                }
            ])
            .then(function(answer) {
                if(answer.view_option === "Add New User")
                {
                    //let addUser = new UserSearch.userSearch();
                    //UserSearch.findWeather();

                inquirer
                    .prompt([
                        {
                            message: "What's your name?",
                            name: "name"
                        },
                        {
                            message: "What city?",
                            name: "city"
                        }
                    ])
                    .then(function(answer) {
                        var newUserSearch = new UserSearch(answer.name, answer.city);
                        var logTxt =
                            "\nName: " + newUserSearch.name + " Location: " + newUserSearch.location + " Date: " + newUserSearch.date;
                        fs.appendFile("log.txt", logTxt);
                        newUserSearch.getWeather();
                    });
                }
                else if(answer.view_option === "See Admin View")
                {
                    let admin = new WeatherAdmin();
                    admin.getData();
                }
                else
                {
                    console.log("Thank you!");
                }
        });
    }
}

let askWeather = new mainMenu();
askWeather.askUser();

module.exports.mainMenu = mainMenu;