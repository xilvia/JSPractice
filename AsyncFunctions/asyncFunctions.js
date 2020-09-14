// Alakítsd át az alábbi függvény úgy, hogy fetch - et használsz, és
// try-catch - es kivételkezelést!
//     function request(method, url) {
//         const xhttp = new XMLHttpRequest();
//         xhr.onload = () => console.log('Request success')
//         xhr.onerror = () => console.error('Request error');
//         xhr.open(method, url);
//         xhr.send();
//     }
function request(method, url) {
    try {
        fetch(url, {
                method,
            })
            .then((response) => response.json())
            .then((response) => {
                console.log(response, "Request succeeded");
            })
    } catch (error) {
        throw new Error("Request error")
    }
}

request('GET', "../WebStorage/webStorage.json")

// Írj egy delay nevű aszinkron függvényt, ami paraméterként kap egy számot, és egy callback functiont.
// Az paraméternek megfelelő milliszekundum után lefuttatja a második paraméterként kapott callbacket!

function simple() {
    return console.log(42)
}

function delay(num, func) {
    setTimeout(func, num)
}

delay(5000, simple);

// Írj egy olyan async függvényt, ami paraméterként promiseokat(akármennyi lehet, számuk nem ismert) kap.
// A visszatérési érték egy Promise legyen, abban az esetben, ha mindegyik Promise fullfilled lett, egyébként egy Error object,
// az üzenet pedig: "Promise Error in functionName".
// A functionName a függvény neve.

const cat = new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            sound: "meow"
        });
    }, 1000);
});

const dog = new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            sound: "bark"
        });
    }, 2000);
});

const hamster = new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            sound: "mff"
        });
    }, 2500);
});

async function functionName(...args) {
    Promise.all(...args).then((results) => {
        return new Promise((resolve) => {
            resolve(console.log(results));
        }).catch((error) => {
            console.error({
                error: error,
                msg: "Promise Error in functionName",
            });
        });
    });
};

functionName([cat, dog, hamster]);