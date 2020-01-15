// 3. Add the function higher(element) to the Set class. This function returns the least element in the set strictly greater than the given element. Test your function in a program.

var Set = require('../class/set');

Set.prototype.higher = function(data) {
    var tmpSet = [];
    this.dataStore.forEach(member => {
        if (member > data) {
            tmpSet.push(member);
        }
    });

    if (tmpSet.length > 0) {
        tmpSet.sort(function(a, b) {
            return a - b;
        });

        return tmpSet[0];
    } else {
        return data;
    }
}

var set = new Set();

set.add(3);
set.add(5);
set.add(7);
set.add(9);
set.add(11);
set.add(13);

console.log(set.higher(14));