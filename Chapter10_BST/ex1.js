// 1. Add a function to the BST class that counts the number of nodes in a BST.


var BST = require('../class/BST').BST;

BST.prototype.getNumOfNodes = function() {
    var count = 0;

    if (this.root != null) {
        increaseCount(this.root);
        return count;
    } else {
        return count;
    }

    function increaseCount(node) {
        if (!(node == null)) {
            count++;
            increaseCount(node.left);
            increaseCount(node.right);
        }
    }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);


console.log(nums.getNumOfNodes());