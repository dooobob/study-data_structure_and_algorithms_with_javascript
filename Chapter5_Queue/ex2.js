// Use the Deque class you created in Example 5-1 to determine if a given word is a palindrome.

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

function checkPalindrome(word) {
    var dq = new Queue();
    var result = true;

    for (var i in word) {
        dq.enqueue(word[i]);
    }

    if (dq.count() < 2) {
        result = false;
    }

    while (dq.count() > 1) {
        var characters = dq.deque();
        if (characters.front != characters.rear) {
            result = false;
            break;
        }
    }

    return result;
}


console.log(checkPalindrome('racecar'));
console.log(checkPalindrome('palindrome'));
console.log(checkPalindrome('a'));