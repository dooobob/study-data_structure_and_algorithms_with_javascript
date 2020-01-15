// Radix Sort

var Queue = require('../class/queue');

function distribute(nums, queues, digit) {
    if (digit === 1) {
        for (var i in nums) {
            queues[nums[i] % 10].enqueue(nums[i]);
        }
    } else {
        for (var i in nums) {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums) {
    var numCount = 0;
    for (var i in queues) {
        while (!queues[i].empty()) {
            nums[numCount++] = queues[i].dequeue();
        }
    }
}

function dispArray(arr) {
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i] + " ");
    }
}

var queues = [];
for (var i = 0; i < 10; i++) {
    queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 1);
collect(queues, nums);
distribute(nums, queues, 10);
collect(queues, nums);
console.log("\n\nAfter radix sort: ");
dispArray(nums);