var fullName = "Rinaldi Rizqi Fauzi";
var age = 25;
var isMarried = false;
var statusMarried = (isMarried == false) ? "single" : "already married";
var hobbies;
var numberPhone;
var transmission;
(function (transmission) {
    transmission["gear"] = "gear";
    transmission["clutch"] = "clutch";
    transmission["automatic"] = "automatic";
})(transmission || (transmission = {}));
var myMotorCycle = {
    name: "Vario 125 CC",
    type: "Honda",
    motorbikePlate: "AB 2510 XYZ",
    color: "black and white",
    transmission: transmission.automatic
};
hobbies = ["ngoding", "playing games"];
numberPhone = ['My number phone', 6285763063891];
console.log("My name        : ".concat(fullName));
console.log("My age         : ".concat(age));
console.log("My hobbies     : ".concat(hobbies));
console.log(numberPhone[0] + ": " + numberPhone[1]);
console.log("Status married : ".concat(statusMarried));
console.log("========My Vehicle========");
console.log(myMotorCycle);
