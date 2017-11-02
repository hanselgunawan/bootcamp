/**
 * Created by hansel.tritama on 10/23/17.
 */
function Character(name, profession, gender, age, strength, health_point)
{
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.health_point = health_point;
    this.printStats = function () {
        console.log("CHARACTER INFORMATION");
        console.log("=====================");
        console.log("Name: " + this.name);
        console.log("Profession: " + this.profession);
        console.log("Gender: " + this.gender);
        console.log("Age: " + this.age);
        console.log("Strength: " + this.strength);
        console.log("HP: " + this.health_point);
    };
    this.IsAlive = function () {
        if(this.health_point>0) console.log("ALIVE");
        else console.log("DEATH");
    };
    this.Attack = function (other_player) {
        other_player.health_point -= this.strength;
    };
    this.LevelUp = function(){
        this.age += 1;
        this.strength += 5;
        this.health_point += 25;
    };
}

var player1 = new Character("Cloud", "Soldier", "Male", 10, 10, 100);
var player2 = new Character("Vivi", "Magician", "Male", 10, 25, 50);

// var player1 = new Character("Cloud", "Soldier", "Male", 10, Math.floor(Math.random() * 25) + 1, Math.floor(Math.random() * 100) + 1);
// var player2 = new Character("Vivi", "Magician", "Male", 10, Math.floor(Math.random() * 25) + 1, Math.floor(Math.random() * 100) + 1);