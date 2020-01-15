// Modify the Queue class to create a Deque class.
// A deque is a queue-like structure that allows elements to be added and removed from both the front and the back of the list.
// Test your class in a program.

var Queue = require('../class/queue');

Queue.prototype.enque = function (element) {
    this.dataStore.push(element);
    this.dataStore.unshift(element);
}

Queue.prototype.deque = function () {
    return {
        front: this.dataStore.shift(),
        rear: this.dataStore.pop()
    };
}

var dq = new Queue();

dq.enque('r');
dq.enque('a');
dq.enque('c');
dq.enque('e');
dq.enque('c');
dq.enque('a');
dq.enque('r');

console.log(dq.toString());
dq.deque();
console.log(dq.toString());
dq.deque();
console.log(dq.toString());