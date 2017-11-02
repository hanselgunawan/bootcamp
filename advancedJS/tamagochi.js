/**
 * Created by hansel.tritama on 10/23/17.
 */
function DigitalPal()
{
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.feed = function () {
        if(this.hungry === true)
        {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleep = true;
        }
        else
        {
            console.log("No Thanks! My tummy is full!");
        }
    };

    this.increaseAge = function () {
        this.age += 1;
        console.log("Happy Birthday to me! I am " + this.age + " old!");
    };

    this.sleep = function () {
        if(this.sleepy === true)
        {
            console.log("Zzzzzz!");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }
        else
        {
            console.log("No Way! I'm not even tired!");
        }
    };

    this.play = function () {
        if(this.bored === true)
        {
            console.log("Yay! Let's play!");
            this.hungry = true;
            this.bored = false;
        }
        else
        {
            console.log("Not right now... Later?");
        }
    };
};
//
// var dog = new DigitalPal();
// dog.outside = false;
// dog.Bark = function () {
//     console.log("Woof! Woof!");
// };
// dog.goOutside = function () {
//     if(dog.outside === false)
//     {
//         console.log("Yay! I love the outdoors!");
//         dog.outside = true;
//         dog.Bark();
//     }
// };

function Dog(){
    DigitalPal.call(this);//we use "CALL" to inherit from parent
    this.outside = false;
    this.bark = function(){
        console.log("Woof! Woof!");
    };
    this.goOutside = function () {
        if(this.outside === false)
        {
            console.log("Yay! I love the outdoors!");
            this.outside = true;
            this.bark();
        }
        else
        {
            console.log("We’re already outside though...");
        }
    };
    this.goInside = function () {
        if(this.outside === true)
        {
            console.log("Awwww... Do I have to?");
            this.outside = false;
        }
        else
        {
            console.log("We’re already inside though...");
        }
    };
}

function Cat(){
    DigitalPal.call(this);//we use "CALL" to inherit from parent
    this.houseQuality = 100;
    this.meow = function(){
        console.log("Meow! Meow!");
    };
    this.destroyFurniture = function () {
        if(this.houseQuality - 10 > 0)
        {
            this.houseQuality -= 10;
            this.bored = false;
            this.sleepy = true;
            console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        }
        else
        {
            console.log("I've already destroyed it all!");
        }
    };

    this.butNewFurniture = function () {
        this.houseQuality += 50;
        console.log("Are you sure that's a good idea?");
    }
}

var animal = process.argv[2];
var action = process.argv[3];

var animals = {marley: new Dog(), grumpy: new Cat()};

animals[animal][action]();