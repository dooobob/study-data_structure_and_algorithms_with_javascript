// Create a Person class that stores a person’s name and their gender.
// Create a list of at least 10 Person objects.
// Write a function that displays all the people in the list of the same gender.

let List = require('../class/list');

function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

function displayPerson(gender, list) {
    console.log('=====' + gender + '=====');
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement().gender === gender)
            console.log(list.getElement().name);
        if (list.currPos() === list.length() - 1)
            break;
    }
}

var personList = new List();

personList.append(new Person('Mike', "male"));
personList.append(new Person('Jane', "female"));
personList.append(new Person('Catherine', "female"));
personList.append(new Person('Leo', "male"));
personList.append(new Person('Jack', "male"));
personList.append(new Person('Steve', "male"));
personList.append(new Person('Julia', "female"));
personList.append(new Person('Lisa', "female"));
personList.append(new Person('Alice', "female"));
personList.append(new Person('Wayne', "male"));

displayPerson('male', personList);
displayPerson('female', personList);