// Write a function that inserts an element into a list only if the element to be inserted is smaller than any of the elements currently in the list.

let List = require('../class/list');

function InsertSmaller(input, list) {
    var checkSmaller = true;

    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (input > list.getElement()) {

            checkSmaller = false;
            list.moveTo(0);
            return;
        }
        if (list.currPos() === list.length() - 1)
            break;
    }

    if (checkSmaller) {
        list.append(input);
        list.moveTo(0);
    }
}

var newList = new List();

InsertSmaller('z', newList);
newList.toString();
InsertSmaller('c', newList);
newList.toString();
InsertSmaller('b', newList);
newList.toString();
InsertSmaller('f', newList);
newList.toString();
InsertSmaller('e', newList);
newList.toString();