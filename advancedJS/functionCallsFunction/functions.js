/**
 * Created by hansel.tritama on 10/28/17.
 */
// const weather = require("weather-js");
//
// function callbackFunction()
// {
//     console.log("HAHAHAHA");
// }
//
// function displayString(myString, callbackFunction)
// {
//     if(myString === "hansel")
//     {
//         callbackFunction();
//     }
//     else
//     {
//         console.log("SORRY :(");
//     }
// }
//
// function findWeather(flag, callbackFunction)
// {
//     if(flag === false)
//     {
//         weather.find({ search: "Los Angeles", degreeType: "F" }, function(err, result) {
//             if (err) {
//                 console.log(err);
//             }
//             console.log("Current temperature: " + result[0].current.temperature + "F");
//             //console.log(JSON.stringify(result[0].current.temperature, null, 2));
//             flag = true;
//             findWeather(flag, callbackFunction);
//         });
//     }
//     else
//     {
//         callbackFunction();
//         flag = false;
//     }
// }
//
// // displayString(process.argv[2], callbackFunction);
// let flag = false;
// findWeather(flag, callbackFunction);

var fs = require("fs");

function logBefore(func, message){
    console.log(message);
    func();
}

// logBefore(blah, "meow");

function runIf(func, bool){
    if(bool){
        func();
    }
}

// runIf(someFunction, false);

function wrap(func, value){
    return function () {
        return func(value);
    }
}

// wrap(someFunc, "meow");

var writeFileCallback = function (err) {
    if(err)
    {
        console.log(err);
    }
    console.log("File Saved!")
};