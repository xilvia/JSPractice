// Írj egy függvényt, aminek a visszatérési értéke az adott év 01.01.óta eltelt másodpercek száma!

const elapsedSecondsInThisYear = () => {
    const now = new Date()

    const firstDayOfThisYear = new Date()
    firstDayOfThisYear.setMonth(0)
    firstDayOfThisYear.setDate(1)
    firstDayOfThisYear.setHours(0)
    firstDayOfThisYear.setMinutes(0)
    firstDayOfThisYear.setSeconds(0)

    const elapsedTime = now.getTime() / 1000 - firstDayOfThisYear.getTime() / 1000
    return `Idén eddig ${elapsedTime} másodperc telt el az évből.`;

}

console.log(elapsedSecondsInThisYear())

// Írj egy függvényt, aminek a visszatérési értéke az adott évben eddig eltelt munkanapok
// (hétfő - péntek) száma!

const numberOfElapsedworkdaysOfThisYear = (date) => {
    const dayInMillisec = 24 * 60 * 60 * 1000
    const today = date;

    const firstDayOfThisYear = new Date()
    firstDayOfThisYear.setMonth(0)
    firstDayOfThisYear.setDate(1)
    firstDayOfThisYear.setHours(0)
    firstDayOfThisYear.setMinutes(0)
    firstDayOfThisYear.setSeconds(0)

    const diff = today.getTime() - firstDayOfThisYear.getTime()
    let days = Math.ceil(diff / dayInMillisec)
    const weeks = (Math.floor(days / 7))
    days = days - (weeks * 2)

    return `Idén ez a(z) ${days}. munkanap az évben.`
}
console.log(numberOfElapsedworkdaysOfThisYear(new Date()))

// Írj egy függvényt, ami paraméterként egy Date objektumot kap, 
// a visszatérési értéke pedig egy objektum két tulajdonsággal, 
// ami a következő formátumban tartalmazza a paraméterként kapott dátumot:

// short: 2020. jan.11. 14: 20(tehát évszám, a hónap neve röviden magyarul, 
//         kisbetűkkel a nap száma, majd az idő a másodperc nélkül)
// long: 2020. január 11. 14: 20: 10(tehát évszám, a hónap neve magyarul, 
//     a nap száma, majd az idő)

const todayIs = (date) => {

    const obj = {
        short: (function (date) {

            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            };

            return date.toLocaleTimeString('hu', options)
        })(date),
        long: (function (date) {

            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };

            return date.toLocaleTimeString('hu', options)
        })(date)
    }
    return obj;
}
console.log(todayIs(new Date()))