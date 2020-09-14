// Írj egy függvényt, ami a paraméterként kapott tetszőleges darabszámú,
// tetszőlegesen méretű egész számot összead, és visszatér az összeadás végeredményével!
// A paraméterként kapott értékek egyszerű number típusúak legyenek!
// Amennyiben bármelyik paraméter értéke, vagy a részeredmény meghaladja a biztonságos tartományt,
// automatikusan konvertáljad BigIntbe, és természetesen a visszatérési érték is BigInt legyen!

const add = (...nums) => {
    let result;
    let prev;
    let curr;

    nums.map((num) => {
        if (typeof num === "number") {
            prev = num;
            curr = num;
            result = nums.reduce((prev, curr) => prev + curr);

            if (
                !Number.isSafeInteger(prev) ||
                !Number.isSafeInteger(curr) ||
                !Number.isSafeInteger(result)
            ) {
                prev = BigInt(prev);
                curr = BigInt(curr);
                result = BigInt(result);
            }
        } else {
            console.log("wrong input...");
        }
    });
    return result;
};
console.log(add(2, 9, 9007199254740970, 11));

// Írj egy függvényt, ami a paraméterként megadott tízes számrendszerbeli számot átkonvertálja kettes,
// nyolcas, és tizenhatos számrendszerbe is!Ezeket az értékeket pedig egy objectbe adja vissza!
// A propertyk neve legyen: binary, octal, hexa.

const converter = (num) => {
    if (num < 0) {
        num = 0xffffffff + num + 1;
    }
    const obj = {
        binary: (function (num) {
            return parseInt(num, 10).toString(2);
        })(num),
        octal: (function (num) {
            return parseInt(num, 10).toString(8);
        })(num),
        hexa: (function (num) {
            return parseInt(num, 10).toString(16);
        })(num),
    }
    return obj;

};

console.log(converter(10));