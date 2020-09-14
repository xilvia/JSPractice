// Adott az alábbi objektum:
// const Walker = {
//     name: 'John Doe',
//     state: 'dead',
//     walk: function (speedInMph) {
//         console.log(this.name + ' the ' + this.state + ' walks with ' + speedInMph + ' mph!')
//     },
//     eat: function (foodName) {
//         console.log(this.name + ' the ' + this.state + ' eats ' + foodName + '!')
//     },
//     speak: function (sound) {
//         console.log(this.name + ' the ' + this.state + ' says ' + sound + '!')
//     }
// }
// Alakítsd ár a következőket figyelembe véve:

// Legyen külön konstruktor függvény
// A metódusoknál a shorthand megadási módot használd
// Mindenhol tamplate stringet használj
// A metódusok a prototype - on keresztül legyenek elérhetőek
// Minden metódus paraméternek legyen alapértelmezett értéke az alábbiak szerint:
// speedInMph: 10
// foodName: meat
// sound: grrrrrr
// Legyen egy külön getter / setter amik a firstName - et, és a lastName - et módosítják, adják vissza a name - ből.

function Walker(name, state) {
    this.name = name;
    this.state = state;
}

Walker.prototype = {
    get firstname() {
        return this.name.split(" ")[0];
    },
    set firstname(firstname) {
        this.name = `${firstname} ${this.name.split(" ")[1]}`;
    },
    get lastname() {
        return this.name.split(" ")[1];
    },
    set lastname(lastname) {
        this.name = `${this.name.split(" ")[0]} ${lastname}`;
    },
    walk(speedInMph = 10) {
        console.log(`${this.name} the ${this.state} walks with ${speedInMph} mph!`);
    },
    eat(foodName = "meat") {
        console.log(`${this.name} the ${this.state} eats ${foodName}!`);
    },
    speak(sound = "grrrrrr") {
        console.log(`${this.name} the ${this.state} says ${sound}!`);
    },
};

Walker.prototype.constructor = Walker;

const walker1 = new Walker("John Doe", "dead");

console.log(walker1.firstname);
walker1.walk();
walker1.eat();
walker1.speak("ahoj");
walker1.firstname = "Alajos";
console.log(walker1.firstname);
console.log(walker1);
walker1.lastname = "Horváth";
console.log(walker1);