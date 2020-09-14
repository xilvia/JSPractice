// Írj egy függvényt, ami paraméterként tetszőleges darabszámú objektumot merge-öl össze, 
// majd visszatér ezzel az objektummal!Az összefűzést úgy hajtsa végre, 
// hogy az új objektum propertyjei egyszerű indexek legyenek(0, 1, 2, stb.), 
// amik tartalmazzák a részobjektumokat!
//     Pl.:


const johnDoe = {
    firstName: 'John',
    lastName: 'Doe'
};

const janeDoe = {
    firstName: 'Jane',
    lastName: 'Doe'
}

const person = {
    firstName: 'Kis',
    lastName: 'János'
}

const objectMerger = (...objects) => {
    let arrObj = []
    arrObj.push(objects)
    return arrObj
}
console.log(objectMerger(johnDoe, janeDoe, person))

// Írj egy olyan függvény(tagged template) ami a paraméterként kapott texts, 
// values értékeket úgy adja vissza egy stringben, hogy a text értékek dőltek, 
// a value - k félkövérek legyenek, ha beillesztjük a html - be, 
// tehát a megfelelő tagekkel kiegéstített stinget adjon vissza!

const tag = (texts, ...values) =>
    texts.map((text, idx) => `
    ${text.italics()} ${values[idx]? `<strong>${values[idx]}</strong>`:''
}`).join('')

const template = tag `Firstname is ${johnDoe.firstName}, lastname is ${johnDoe.lastName}`;
document.body.innerHTML = template

// Írj egy függvényt, ami első paraméterként egy karaktert kap, 
// a többi paraméter pedig tetszőleges számú tömb, amik stringeket tartalmaznak!
//     A függvény:

//     összefűz egy tömbbe az összes elemet,
//     eltávolítja az ismétlődő elemeket,
//     eltávolítja az összes olyan stringet, ami tartalmazza az első paraméterként megadott karaktert,
//     eltávolítja a stringek végén lévő hite space karaktert
// visszaadja ezt az új tömböt.

const arrayMethods = (a, ...b) =>
    Array.from(new Set([...a, b].flat(Infinity)))
    .filter((item) => !item.includes(a) || item === a)
    .map((item) => item.trimEnd());

console.log(
    arrayMethods("v", ["akár", "a", "kéve  "], ["agár", "a", "a", "valaki   "])
);