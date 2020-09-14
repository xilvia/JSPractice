// Adott az alábbi objektum:
//     const user = {
//         firstName: 'John',
//         lastName: 'Doe'
//     };
// Mentsd el külön lastName, firstName, és job változókba a fenti objektum propertyjeit!
// Ha valamelyik nincs megadva, akkor az érték legyen a "unknown" string!

const user = {
    firstName: 'John',
    lastName: 'Doe'
};

const {
    firstName = "unknown",
        lastName = "unknown",
        job = "unknown"
} = user;


console.log(lastName)
console.log(job)


// Adott az alábbi objektum:
//     const user = {
//         firstName: 'John',
//         lastName: 'Doe'
//     };
// Ments el külön l, f, és j változókba a fenti objektum lastName, firstName, és job propertijeit!
// Ha valamelyik nincs megadva, akkor az érték legyen a "unknown" string!

const {
    firstName: f = "unknown",
    lastName: l = "unknown",
    job: j = "unknown"
} = user;

console.log(f, l, j)

// Mentsd el külön, tetszőleges nevű változókba az alábbi tömb első, harmadik, és ötödik indexű elemét!

const names = ['John', 'Jane', 'Judith', 'Jennefer', 'Jeremiah', 'Johnny'];

const [first, third, fifth] = [names[1], names[3], names[5]];

console.log(first, third, fifth);