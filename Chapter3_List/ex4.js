// Modify the video - rental kiosk program so that when a movie is checked out it is added to a list of rented movies.
// Display this list whenever a customer checks out a movie.

let List = require('../class/list');

var movies_file = 'The Shawshank Redemption\nThe Godfather\nThe Godfather: Part II\nPulp Fiction\nThe Good, the Bad and the Ugly\n12 Angry Men\nSchindler \'s List\nThe Dark Knight\nThe Lord of the Rings: The Return of the King\nFight Club\nStar Wars: Episode V - The Empire Strikes Back\nOne Flew Over the Cuckoo \'s Nest\nThe Lord of the Rings: The Fellowship of the Ring\nInception\nGoodfellas\nStar Wars\nSeven Samurai\nThe Matrix\nForrest Gump\nCity of God';

function createArr(file) {
    var arr = file.split("\n");
    for (var i = 0; i < arr.length; ++i) {
        arr[i] = arr[i].trim();
    }
    return arr;
}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(list.getElement()["name"] + ", " +
                list.getElement()["movie"]);
        } else {
            console.log(list.getElement());
        }

        if (list.currPos() === list.length() - 1)
            break;
    }
}

function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

function checkOut(name, movie, movieList, customerList, rentedList) {
    if (movieList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        movieList.remove(movie);
        rentedList.append(movie);
    } else {
        console.log(movie + " is not available.");
    }
}

var movies = createArr(movies_file);
var movieList = new List();
var customers = new List();
var rentedMovie = new List();
for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}
console.log("Available movies: \n");
displayList(movieList);
checkOut("Jane Doe", "The Godfather", movieList, customers, rentedMovie);
checkOut("Julia Doe", "The Godfather", movieList, customers, rentedMovie);
checkOut("Alice Doe", "Star Wars", movieList, customers, rentedMovie);
checkOut("Sarah Doe", "Forrest Gump", movieList, customers, rentedMovie);
console.log("\nCustomer Rentals: \n");
displayList(customers);
console.log("\nRented Movies: \n");
displayList(rentedMovie);