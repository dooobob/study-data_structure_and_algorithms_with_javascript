var Node = require('../class/linked_list').Node;
var LinkedList = require('../class/linked_list').LinkedList;

LinkedList.prototype.advance = function (item, n) {
    for (var i = 0; i < n; i++) {
        var currentNode = this.find(item);
        var prevNode = this.findPrevious(item);
        if (prevNode != this.head) {
            var newPrevNode = this.findPrevious(prevNode.element);
            prevNode.next = currentNode.next;
            currentNode.next = prevNode;
            newPrevNode.next = currentNode;
        }
    }
}

var cities = new LinkedList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
// cities.remove("Carlisle");
// cities.remove("Alma");

cities.advance("Alma", 10);
console.log("=====");
cities.display();