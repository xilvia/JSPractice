//  Módosítsd a 12 / 3. feladatot úgy, hogy amennyiben a kérés során bármilyen hiba van, 
//  szintén a localStorage - ból olvassa ki az adatokat a program!
//  Ebben az esetben jeleníts meg egy üzenetet, 
//  hogy az alkalmazás offline!Amennyiben a localStorage is üres, 
//  jeleníts meg egy szabadon választott hibaüzenetet, 
//  és alapértelmezetten 5 másodpercenként ismételd meg újra a kérést 10 alkalommal!
//  Ez a két érték paraméterként megadható legyen!

(function () {
    let namesObj;

    function loadData() {
        const users = JSON.parse(localStorage.getItem("users"));
        localStorage.clear()
        if (users) {
            showNames(users);
        } else {
            fetchData()
        }
    }

    function fetchData() {
        fetch("../WebStorage/webStorage.json")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                namesObj = response;
                showNames(namesObj);
                saveUser(namesObj);
            })
            .catch((error) => {
                const users = JSON.parse(localStorage.getItem("users"));
                console.log(users)
                if (users) {
                    showNames(users)
                    console.log('application in offline mode...')
                } else if (!users) {
                    console.log('trying to load again...')
                    timer(5000, 10)
                } else {
                    console.error(error)
                }
            })
    }

    function showNames(namesObj) {
        let result = [];
        for (let k of Object.keys(namesObj)) {
            result += `<p>${namesObj[k].lastname} ${namesObj[k].firstname}</p>`;
        }
        return (document.body.innerHTML = `<div>${result}</div>`);
    }

    function saveUser(names) {
        localStorage.setItem("users", JSON.stringify(names));
    }

    function retryFetch() {
        fetch("../WebStorage/webStorage.json")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                namesObj = response;
                showNames(namesObj);
                saveUser(namesObj);
            }).catch((error) => {
                console.error(error.message)
            })
    }

    function timer(delay, interval) {
        let i = 0;

        setTimeout(function run() {
            const users = JSON.parse(localStorage.getItem("users"));
            if (i < interval && !users && !namesObj) {
                retryFetch(i++);
                setTimeout(run, delay);
                console.log('fetching...')
            } else if (interval === i && !users && !namesObj) {
                console.log('cannot load content')
            } else {
                showNames(namesObj)
                console.log('done')
            }
        }, delay);
    }

    loadData();
})();