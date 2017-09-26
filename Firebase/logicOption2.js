// Initialize Firebase (YOUR OWN APP)
const config = {
    apiKey: "AIzaSyD-T-DUxI3Y12KcshCxgOOlgsq7ZrUtG7I",
    authDomain: "working-clicker.firebaseapp.com",
    databaseURL: "https://working-clicker.firebaseio.com",
    projectId: "working-clicker",
    storageBucket: "working-clicker.appspot.com",
    messagingSenderId: "891133531513"
};
firebase.initializeApp(config);

// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
let database = firebase.database();

// Print the initial data to the console.
console.log(initialValue);

// Change the html to reflect the initial value.
$("#click-value").html(initialValue);

// Change the clickCounter to match the data in the database

// Log the value of the clickCounter


// Change the HTML Value
$("#click-value").html(clickCounter);

// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {
    clickCounter--;
  // Reduce the clickCounter by 1
    database.ref().on("value", function(snapshot) {
        console.log(snapshot.val());
        $("#click-value").html(snapshot.val().clickCount);
    }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

  // Alert User and reset the counter
if(clickCounter === 0)
{
    alert("Phew!");
    clickCounter = initialValue;
}

  // Save new value to Firebase
    database.ref().set({
        clickCount: clickCounter
    });

  // Log the value of clickCounter
    console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
    clickCounter = initialValue;

  // Save new value to Firebase
    database.ref().set({
        clickCount: initialValue
    });

  // Log the value of clickCounter
    console.log(initialValue);

  // Change the HTML Values
    $("#click-value").html(clickCounter);
});
