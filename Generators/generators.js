// Írj egy generátor függvényt, amit egyedi indexek generálására használsz!
// A index értéke kezdetben 1 legyen, és egyesével léptesd!

function* idGenerator() {
    let id = 1;
    while (true) {
        yield(id += 1);
    }
}
const id = idGenerator();
console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());

// Írj egy generátor függvényt, ami a 2 hatványait adja vissza!

function* exponentiation() {
    let num = 1;
    while (true) {
        yield(num *= 2);
    }
}

const numsToSecondPower = exponentiation();
console.log(numsToSecondPower.next());
console.log(numsToSecondPower.next());
console.log(numsToSecondPower.next());
console.log(numsToSecondPower.next());
console.log(numsToSecondPower.next());
console.log(numsToSecondPower.next());
console.log(numsToSecondPower.next());

// Van egy előre megírt fibonacci generátor függvényed:

function* fibonacci() {
    let a = 1;
    let b = 1;
    while (true) {
        [a, b] = [b, a + b];
        yield b;
    }
}

// A feladatod, hogy írj egy olyan generátor függvényt,
// ami a fibonacci generátor által visszaadott értékekből visszaadja a kapott érték négyzetét!


function* fiboToTheSecondPower() {
    let fibo = fibonacci()
    while (true) {
        let fib = fibo.next().value
        yield fib * fib
    }

}
const squareOfFibo = fiboToTheSecondPower()
console.log(squareOfFibo.next().value)
console.log(squareOfFibo.next().value)
console.log(squareOfFibo.next().value)
console.log(squareOfFibo.next().value)
console.log(squareOfFibo.next().value)