// Priority Queue

var Queue = require('../class/queue');

Queue.prototype.dequeue_ = function () {
    var position = 0;
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code > priority) {
            priority = this.dataStore[i].code;
            position = i;
        }
    }
    return this.dataStore.splice(position, 1);
}

Queue.prototype.toString_ = function () {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
    }
    return retStr;
}

function Patient(name, code) {
    this.name = name;
    this.code = code;
}

var p = new Patient("Smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(ed.toString_());
var seen = ed.dequeue_();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString_());
// another round
var seen = ed.dequeue_();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString_());
var seen = ed.dequeue_();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString_());