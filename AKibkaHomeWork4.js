// ------------------------Task 1-----------------------

function removeNaN(obj) {
    const numericValues = {};
for (let key in obj) {
    if
    (typeof obj[key] === 'number') { numericValues[key] = obj[key]; } }
return numericValues;
}
const scores = {
    programming: 88,
    design: 74,
    jurisprudence: false,
    relational_DB: 92,
    computerGraphics: "submitted",
    patterns: 65,
    philosophy: "transferred",
    network: 81
};
const filteredScores = removeNaN(scores);
console.log(filteredScores);


//-------------------------Task 2-----------------------------------

class Student {
    constructor(fullName, direction) {
        this.fullName = fullName;
        this.direction = direction;
    }
// Method to return the full name 
    showFullName() {
    return this.fullName;
    }
// Method to check if the data is included in the fullName
    nameIncludes(data) {
    return this.showFullName().includes(data);
    }
// Getter for direction 
    get direction() {
    return this._direction;
    }
// Setter for direction
    set direction(value) {
    this._direction = value;
    }
// Static method to create a new Student instance
    static studentBuilder(fullName, direction) { 
    return new Student(fullName, direction);
    }
} 
// Using the studentBuilder method to create new instances
const stud1 = Student.studentBuilder('Ivan Petrenko', 'web');
const stud2 = Student.studentBuilder('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder('Ihor Kohut', 'qc');
// Example usage
console.log(stud1.showFullName());
// Output: Ivan Petrenko
console.log(stud2.nameIncludes('Koval'));
// Output: true
console.log(stud3.direction);
// Output: qc


//------------------Task 3--------------------------------

class Plane {
    constructor (model, fuelSupply, fuelConsumption) {
        this.model = model;
        this.fuelSupply = fuelSupply;
        this.fuelConsumption = fuelConsumption;
    }
    calcFlightRange () {
        let flightRange = (this.fuelSupply / this.fuelConsumption) * 100;
        return flightRange;
    }
    static sortFlightRange (planesArray) {
        function compareNumeric (a, b) {
            return a.calcFlightRange () - b.calcFlightRange ();
        }
        planesArray.sort (compareNumeric);
        planesArray.forEach (plane => {console.log (plane.model + ": " + plane.calcFlightRange())});
        return planesArray;
    }
}
class TransportPlane extends Plane {
    constructor (model, fuelSupply, fuelConsumption, cargo, addTank) {
        super (model,fuelSupply, fuelConsumption);
        this.cargo = cargo;
        this.addTank = addTank;
    }
    calcFlightRange () {
        let flightRange = ((this.fuelSupply + this.addTank) / this.fuelConsumption) * 100;
        return flightRange;
    }
}
class PassengerPlane extends Plane {
    constructor (model, fuelSupply, fuelConsumption, passengers, refueling) {
        super (model,fuelSupply, fuelConsumption);
        this.passengers = passengers;
        this.refueling = refueling;
    }
    calcFlightRange () {
        let flightRange = ((this.fuelSupply + this.refueling) / this.fuelConsumption) * 100;
        return flightRange;
    }
}
class WarPlane extends Plane {
    constructor (model, fuelSupply, fuelConsumption, missiles, aerodynamycKoef) {
        super (model,fuelSupply, fuelConsumption);
        this.missiles = missiles;
        this.aerodynamycKoef = aerodynamycKoef;
    }
    calcFlightRange () {
        let flightRange = (this.fuelSupply / this.fuelConsumption) * 100 * this.aerodynamycKoef;
        return flightRange;
    }
}
console.log("Unsorted range of planes:");
const plane1 = new TransportPlane("An-225 Mriya", 105000, 5000, 500, 300000);
console.log("An-225 Mriya: ", plane1.calcFlightRange());
const plane2 = new PassengerPlane("Boeing-747", 193000, 2500, 410, 90000);
console.log("Boeing-747:", plane2.calcFlightRange());
const plane3 = new WarPlane("F-22 Raptor", 8200, 320, 20, 1.2);
console.log("F-22 Raptor:", plane3.calcFlightRange());
console.log("Sorted range of planes:");
const planesArray = [plane1, plane2, plane3];
Plane.sortFlightRange(planesArray);


//---------------------------Task 4---------------------------------

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }
    addBook (book) {
        this.books.push (book);
        console.log (`Book '${book}' added to '${this.name}'.`);
    }
    removeBook (book) {
        const bookOrder = this.books.indexOf (book);
        if (bookOrder !== -1) {
            this.books.splice (bookOrder, 1);
            console.log (`Book '${book}' removed from '${this.name}'.`);
        } else {
            console.log (`Book '${book}' does not exist in '${this.name}'.`);
        }
    }
    displayBooks () {
        if (this.books.length > 0) {
            console.log (`Books in '${this.name}':`);
            this.books.forEach ((book, index) => {
                console.log (`${index + 1}. ${book}.`);
            });
        }
        else {
            console.log ('No books available.');
        }
        }
    }
    const library = new Library("JS library");
    library.displayBooks(); 
    library.addBook("Javascript: The Definitive Guide - David Flanagan");
    library.addBook("You don`t know JS - Kyle Simpson");
    library.addBook("Eloquent JavaScript, 4th Edition - Marijn Haverbeke");
    library.displayBooks();
    library.removeBook("Javascript: The Definitive Guide - David Flanagan");
    library.displayBooks();

    const library1 = new Library ("J. R. R. Tolkien");
    library1.displayBooks(); 
    library1.addBook("Hobbit");
    library1.addBook("Brotherhood of the Ring");
    library1.addBook("Two Towers");
    library1.displayBooks();
    library1.removeBook("Return of the King");
    library1.displayBooks();
    