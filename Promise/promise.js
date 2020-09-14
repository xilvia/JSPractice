// Írj egy olyan függvényt, mely paraméterként kap egy tömböt.
// A függvény visszatérési érték egy Promise.
// A Promise resolved lesz, amennyiben a tömb minden eleme string, és sikeresen nagybetűssé alakíthatók.
// Ebben az esetben a Promise resolved lesz és visszaad egy új tömböt, 
// ami az eredeti tömb összes elemét nagybetűssé alakítva tartalmazza.
// Ellenkező esetben a Promise rejected lesz, és kiírja a konzolra: Each element must be a string!

const allElementsAreUppercasedStrings = (arr) => {
    return new Promise((resolve, reject) => {
        const stringArr = arr.every(item => typeof (item) === 'string')
        stringArr ?
            resolve(arr.map(item => {
                return item.toUpperCase()
            })) :
            reject('Each element must be a string!');
    })
}

const ar = ["kicsi", "nagy", "nem"]

allElementsAreUppercasedStrings(ar)
    .then(result => console.log(result))
    .catch(error => console.error(error))