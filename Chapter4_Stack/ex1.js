// A stack can be used to ensure that an arithmetic expression has balanced parentheses.
// Write a function that takes an arithmetic expression as an argument and returns the postion in the expression where a parenthesis is missing.
// An example of an arithmetic expression with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159 * .24.

var Stack = require('../class/stack');

var expression = '2.3+23/12+(3.14159*.24';

var s = new Stack();
var p1 = 0;

for (var i in expression) {
    s.push(expression[i]);
    if (expression[i] === '(' || expression[i] === ')') {
        p1 = s.top();
    }
}

