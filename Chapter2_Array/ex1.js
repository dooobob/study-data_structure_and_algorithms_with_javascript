// Create a grades object that stores a set of student grades in an object.
// Provide a function for adding a grade and a function for displaying the student’s grade average.

function student() {
    this.grades = [];
    this.add = add;
    this.displayAverage = displayAverage;
}

function add(grade) {
    this.grades.push(grade);
}

function displayAverage() {
    var total = 0;
    var average = 0;
    for (var i in this.grades) {
        total += this.grades[i];
    }
    average = total / this.grades.length;
    console.log('Average of this student\'s grades is : ' + average);
}

var dooobob = new student();
dooobob.add(10);
dooobob.add(9);
dooobob.add(8);

dooobob.displayAverage();