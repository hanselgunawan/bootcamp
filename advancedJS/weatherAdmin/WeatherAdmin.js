/**
 * Created by hansel.tritama on 10/28/17.
 */
// const CLI = require("./CLI.js");
// const fs = require("fs");

// function showUser() {
//     this.showAdmin = function () {
//         fs.readFile("log.txt", "utf8", function(error, data) {
//             if (error) {
//                 return console.log(error);
//             }
//
//             let dataArr = data.split(",");
//             for(let i=0;i<dataArr.length;i++)
//             {
//                 console.log(dataArr[i]);
//             }
//
//             let c = new CLI.mainMenu();
//             c.askUser();
//         });
//     };
// }
//
// module.exports.showUser = showUser;

var fs = require("fs");
var UserSearch = require("./UserSearch");
var WeatherAdmin = function() {
    this.getData = function() {
        fs.readFile("log.txt", "utf8", function(error, data) {
            console.log(data);
        });
    };
    this.newUserSearch = function(name, location) {
        var newUserSearch = new UserSearch(name, location);
        var logTxt =
            "\nName: " + newUserSearch.name + " Location: " + newUserSearch.location + " Date: " + newUserSearch.date;
        fs.appendFile("log.txt", logTxt);
        newUserSearch.getWeather();
    };
};
module.exports = WeatherAdmin;