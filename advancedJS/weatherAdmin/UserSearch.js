/**
 * Created by hansel.tritama on 10/28/17.
 */
// const inquirer = require("inquirer");
// const weather = require("weather-js");
// const CLI = require("./CLI.js");
// const fs = require("fs");
//
// function userSearch()
// {
//     this.findWeather = function () {
//         inquirer
//             .prompt([
//                 {
//                     message: "What's your name?",
//                     name: "name"
//                 },
//                 {
//                     message: "What city?",
//                     name: "city"
//                 }
//             ])
//             .then(function(answer) {
//                 weather.find({ search: answer.city, degreeType: "F" }, function(err, result) {
//                     if (err) {
//                         console.log(err);
//                     }
//                     console.log("Current temperature: " + result[0].current.temperature + "F");
//                     //console.log(JSON.stringify(result[0].current.temperature, null, 2));
//                 });
//                 let logStr = answer.name + "," + answer.city + "," + Date() + "\n";
//                 fs.appendFile("log.txt", logStr, function(err) {
//                     if (err) {
//                         return console.log(err);
//                     }
//                 });
//                 setTimeout(function() {
//                     let c = new CLI.mainMenu();
//                     c.askUser();
//                 }, 500);
//             });
//     };
// }
//
// module.exports.userSearch = userSearch;

const weather = require("weather-js");

let UserSearch = function (name, location) {
    this.name = name;
    this.location = location;
    this.date = Date.now();

    this.getWeather = function () {
        weather.find({ search: this.location, degreeType: "F" }, function(err, result) {
            if (err) {
                console.log(err);
            }
            console.log("Current temperature: " + result[0].current.temperature + "F");
            //console.log(JSON.stringify(result[0].current.temperature, null, 2));
        });

    };
};

module.exports = UserSearch;