/**
 * Created by hansel.tritama on 10/25/17.
 */
function Programmer(name, job_title, age, fav_prog_lang){
    this.name = name;
    this.job_title = job_title;
    this.age = age;
    this.fav_prog_language = fav_prog_lang;
    // this.printStats = function () {
    //     console.log("PROGRAMMER INFORMATION");
    //     console.log("======================");
    //     console.log("Name: " + this.name);
    //     console.log("Job Title: " + this.job_title);
    //     console.log("Age: " + this.age);
    //     console.log("Favorite Programming Language: " + this.fav_prog_language + "\n");
    // };
}

//Prototype / Inheritance
Programmer.prototype.printStats = function () {
    console.log("PROGRAMMER INFORMATION");
    console.log("======================");
    console.log("Name: " + this.name);
    console.log("Job Title: " + this.job_title);
    console.log("Age: " + this.age);
    console.log("Favorite Programming Language: " + this.fav_prog_language + "\n");
};

var programmer1 = new Programmer("Hansel", "QA Engineer", 22, "C++");
programmer1.printStats();