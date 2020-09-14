// Írj egy függvény kifejezést, ami a paraméterként megadott tömbből eltávolítja a duplikált elemeket!
// A függvény visszatérési értéke a duplikált elemektől mentes új tömb!

const removeDuplicates = (arr) => {
    const afterSet = Array.from(new Set(arr));
    return afterSet;
};

const arrayOfDuplicatedItems = ["lett", 4, 56, "kis", 4, 89, "kis"];
console.log(removeDuplicates(arrayOfDuplicatedItems));

// Készíts egy HU nevű objektumot, aminek az alábbi propertijei vannak:
// date(): Visszaadja a paraméterként megadott dátumot a magyar dátumírás szabályainak megfelelően
// currency(): Visszaadja a paraméterként megadott számot a magyar pénzformátumnak megfelelően a Ft végződéssel együtt
// list(): A paraméterként kapott string tömböt visszaadja az alábbi formában: első, második és harmadik"
// (Tehát vesszőkkel elválasztva az utolsó elem előtt az és szóval)

const HU = {
    date(inputDate) {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "long",
        };
        return inputDate.toLocaleDateString("hu", options);
    },
    currency(number) {
        const forint = new Intl.NumberFormat("hu-HU", {
            style: "currency",
            currency: "HUF",
            maximumSignificantDigits: 15,
        }).format(number);
        return forint;
    },
    list(arr) {
        const formatter = new Intl.ListFormat("hu", {
            style: "long",
            type: "conjunction",
        }).format(arr);
        return formatter;
    },
};

console.log(HU.date(new Date()));
console.log(HU.currency(45643));
console.log(HU.list(["első", "második", "harmadik"]));

// Készíts egy objectConverter nevű objektumot, ami az alábbi metódusokkal rendelkezik:
// arrayToMap(array)
// arrayToSet(array)
// setToMap(set)
// setToArray(set)
// mapToArray(map)
// mapToSet(map)
// A fenti metódusok értelemszerűen nem másra szolgálnak,
// mint az egyik összetett adattípustból konvertálják át az adatokat egy másikba.
// Mindegyik metódus visszatérési értéke egy új Array, Map, vagy Set object.

const objectConverter = {
    arrayToMap(array) {
        const obj = {
            ...[array]
        }

        function objToStrMap(obj) {
            let strMap = new Map();
            for (let k of Object.keys(obj)) {
                strMap.set(k, obj[k]);
            }
            return strMap
        }
        const converter = objToStrMap(obj)
        console.log('__________array to Map_______________')
        return converter;
    },
    arrayToSet(array) {
        const converter = new Set(array);
        console.log('__________array to Set_______________')
        return converter;
    },
    setToMap(set) {
        const array = [...set]
        const obj = {
            ...[array]
        }

        function objToStrMap(obj) {
            let strMap = new Map();
            for (let k of Object.keys(obj)) {
                strMap.set(k, obj[k]);
            }
            return strMap
        }
        const converter = objToStrMap(obj)
        console.log('__________Set to Map_________________')
        return converter;
    },
    setToArray(set) {
        const converter = [...set];
        console.log('__________Set to array_______________')
        return converter;
    },
    mapToArray(map) {
        const converter = [...map];
        console.log('__________Map to array_______________')
        return converter;
    },
    mapToSet(map) {
        const array = [...map];
        const converter = new Set(array);
        console.log('__________Map to Set_________________')
        return converter;
    },
};

const myArr = [33, 55, 67, "bármi", null, null, 67];

let mySet = new Set();
mySet.add("res");
mySet.add("bal");
let o = {
    a: 1,
    b: 2,
};
mySet.add(o);

let myMap = new Map();
let keyString = "a string";
let keyObj = {};
let keyFunc = function () {};
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");
myMap.set(0, "zero");
myMap.set(1, "one");

const myAnotherMap = myMap.set(1, "one")
myAnotherMap.set(1, "one");
myAnotherMap.set(2, "two")

console.log(objectConverter.arrayToMap(myArr));
console.log(objectConverter.arrayToSet(myArr));
console.log(objectConverter.setToMap(mySet));
console.log(objectConverter.setToArray(mySet));
console.log(objectConverter.mapToArray(myMap));
console.log(objectConverter.mapToSet(myAnotherMap));