// 1. Modify the Set class so that the class stores its elements in sorted order. Write a program to test your implementation.



var Set = require('../class/set');

Set.prototype.addInOrder = function(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        this.dataStore.sort(function(a, b) {
            return a - b;
        });
        return true;
    } else {
        return false;
    }
}


var set = new Set();

set.addInOrder(4);
set.addInOrder(1);
set.addInOrder(2);
set.addInOrder(3);
set.addInOrder(9);


console.log(set.show());