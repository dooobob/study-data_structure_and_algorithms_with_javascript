var Node = require('../class/linked_list').Node;
var LinkedList = require('../class/linked_list').LinkedList;

LinkedList.prototype.back = function (item, n) {
    for (var i = 0; i < n; i++) {
        var currentNode = this.find(item);
        var prevNode = this.findPrevious(item);
        var nextNode = currentNode.next;
        if (nextNode != null) {
            var newNextNode = nextNode.next;
            prevNode.next = nextNode;
            nextNode.next = currentNode;
            currentNode.next = newNextNode;
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

cities.back("Conway", 2);
console.log("=====");
cities.display();