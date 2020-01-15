var Dictionary = require('../class/Dictionary');

var pnumbers = new HashTable();
var name, number;
for (vari = 0; i < 3; i++) {
    console.log("Enter a name (space to quit): ");
    name = readline();
    console.log("Enter a number: ");
    number = readline();
}
name = "";
console.log("Name for number (Enter quit to stop): ");
while (name != "quit") {
    name = readline();
    if (name == "quit") {
        break;
    }
    console.log(name + "'s number is " + pnumbers.get(name));
    console.log("Name for number (Enter quit to stop): ");
}