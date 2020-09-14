// Írj egy olyan függvény kifejezést, ami paraméterként vár egy egész számokat tartalmazó tömböt!
// A függvény szorozza meg tömbelemek értékét 1.27 - el, majd pedig térjen vissza az elemek összegével!

const multiplier = (arr) => {
    const multiplied = arr.map(item => item * 1.27)
    return console.log(multiplied)
}

const multi = multiplier([5, 4, 6, 6, 1]);


// paragraph.innerHTML = multiPar;

// Írj egy olyan függvénykifejezést, ami paraméterként kap egy tetszőleges típusú elemeket tartalmazó tömböt, 
// és egy tetszőleges primitív értéket! A függvény visszatérési értéke egy objektum, 
// ami a következő propertyket tartalmazza:

// exists: Értéke true / false attól függően, hogy a második paraméterként megadott érték megtalálható e a tömbben
// index: Értéke egy szám, ha második paraméterként megadott érték megtalálható a tömbben, 
// akkor a tömbben lévő indexe, ha nem akkor - 1 legyen az értéke
// allElementIsANumber: Értéke true / false attól függően, hogy a tömb minden eleme number típusú e vagy sem
// someElementIsANumber: Értéke true / false attól függően, hogy a tömbben van e number típusú elem vagy sem

const numsToEvaluate = (arr, b) => {

    const obj = {

        exist: (function (arr, b) {
            return arr.indexOf(b) !== -1 ? true : false;
        })(arr, b),
        index: (function (arr, b) {
            return arr.indexOf(b) !== -1 ? arr.indexOf(b) : -1;
        })(arr, b),
        allElementIsNumber: (function (arr) {
            return arr.every(item => typeof (item) === 'number');
        })(arr),
        someElementIsNumber: (function (arr) {
            return arr.some(item => typeof (item) === 'number');
        })(arr)
    }

    return obj;

}

const result = numsToEvaluate([true, "kérem", "bármi", null, 33], null)

// document.getElementById("objExist").innerHTML += result.exist;
// document.getElementById("objIndex").innerHTML += result.index;
// document.getElementById("objAllElements").innerHTML += result.allElementIsNumber;
// document.getElementById("objSomeElements").innerHTML += result.someElementIsNumber;
console.log(result);


// Írj egy olyan függvénykifejezést, ami paraméterként egy stringeket tartalmazó tömböt kap, 
// és visszaad egy html template - et(string)! A html template egy felsorolt lista, 
// aminek a listaelemei a kapott tömb értékeit tartalmazzák.
//     Pl.:

// // ha ez a tömb
// const content = ['első', 'második', 'harmadik'];

// // akkor ez legyen a visszatérési érték:
// <ul>
//     <li>első</li>
//     <li>második</li>
//     <li>harmadik</li>
// </ul>

const stringToTemplate = (arr) => `<ul>${arr.map((str) => `<li>${str}</li>`).join(' ')}</ul>`

const template = stringToTemplate(["egy", "kettő", "három", "négy"])
console.log(template);
document.body.innerHTML = template