// Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two - dimensional array.
// Create functions to display the monthly average, a specific week’s average, and all the weeks’ averages.

function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.monthlyAverage = monthlyAverage;
    this.weekAverage = weekAverage;
    this.allWeekAverage = allWeekAverage;
}

function add(temp) {
    this.dataStore.push(temp);
}

function monthlyAverage() {
    for (var i in this.dataStore) {
        var total = 0;
        for (var j in this.dataStore[i]) {
            total += this.dataStore[i][j];
        }
        console.log('Month(' + (i + 1) + '): ' + total / this.dataStore[i].length);
    }
}

function weekAverage(weekNum) {
    var weekCount = 0;
    for (var i in this.dataStore) {
        for (var j in this.dataStore[i]) {
            weekCount += 1;
            if (weekCount === weekNum) {
                console.log('Week(' + weekNum + '): ' + this.dataStore[i][j]);
                return;
            }
        }
    }
}

function allWeekAverage() {
    var total = 0;
    var weekCount = 0;
    for (var i in this.dataStore) {
        weekCount += this.dataStore[i].length;
        for (var j in this.dataStore[i]) {
            total += this.dataStore[i][j];
        }
    }

    console.log('All Weeks: ' + total / weekCount);
}

var year2018 = new weekTemps();
var temp = 0;
for (var i = 0; i < 12; i++) {
    year2018.add([52 + temp, 55 + temp, 61 + temp, 65 + temp]);
    temp++;
}

console.log(year2018.dataStore);
year2018.monthlyAverage();
year2018.weekAverage(2);
year2018.weekAverage(40);
year2018.allWeekAverage();