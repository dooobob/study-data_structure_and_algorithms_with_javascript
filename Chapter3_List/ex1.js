// Write a function that inserts an element into a list only if the element to be inserted is larger than any of the elements currently in the list.
// Larger can mean either greater than when working with numeric values, or further down in the alphabet, when working with textual values.

let List = require('../class/list');

function InsertLarger(input, list) {
    var checkLarger = true;

    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (input < list.getElement()) {

            checkLarger = false;
            list.moveTo(0);
            return;
        }
        if (list.currPos() === list.length() - 1)
            break;
    }

    if (checkLarger) {
        list.append(input);
        list.moveTo(0);
    }
}

var newList = new List();

InsertLarger('z', newList);
newList.toString();
InsertLarger('c', newList);
newList.toString();
InsertLarger('b', newList);
newList.toString();
InsertLarger('f', newList);
newList.toString();
InsertLarger('e', newList);
newList.toString();