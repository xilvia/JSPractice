    // Tárold el az alábbi értéket egy token nevű, httpOnly cookie - ba, ami 15 perc után lejár:
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

    const cookieStore = function (name, value) {
        return `${name}=${value}; max-age=900; Secure";`
    }
    document.cookie = cookieStore('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')

    // document.cookie =
    //     "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c; max-age=900; Secure";

    // Az alábbi cookie - k vannak a böngésződben tárolva(hozd létre őket):

    // viewed: 5
    // uid: 354774631237
    // ssid: Bx55OWbHJ0Vt_IGIF

    // Írj egy olyan objectet, az alábbi három metódust megvalósítja:

    // kiolvassa a sütik nevét, és értékét
    // átmenti őket sessionStorage - be
    // törli a sütiket

    const cookieHandler = {
        setCookie(name, value) {
            document.cookie = `${name}=${value}`;
            this.saveCookie(name, value);
        },
        getCookie(name) {
            const keysValues = document.cookie
                .split(";")
                .find((cookie) => cookie.includes(`${name}=`));
            return keysValues ? keysValues.split("=") : "";
        },
        saveCookie(name, value) {
            sessionStorage.setItem(
                'nameValue',
                JSON.stringify({
                    name: `${name}`,
                    value: `${value}`,
                })
            );
        },
        deleteCookie(name) {
            document.cookie = `${name}=;expires=Thu 01 Jan 1970 00:00:00 UTC`;
        },
    };
    cookieHandler.setCookie("viewed", 5);
    cookieHandler.setCookie("uid", 354774631237);
    cookieHandler.setCookie("ssid", "Bx55OWbHJ0Vt_IGIF");
    console.log(document.cookie);
    console.log(cookieHandler.getCookie("ssid"));
    cookieHandler.deleteCookie("uid");
    console.log(cookieHandler.getCookie("uid"));
    console.log(document.cookie);
    cookieHandler.saveCookie("job", "mentor");
    console.log(JSON.parse(sessionStorage.getItem("354774631237")));

    // Adott egy json file, ami valójában egy tömb, lastName, firstName propertyket tartalmazó objektumokkal.
    // Írj egy függvényt, ami indít egy ajax kérést, ami elkéri a json tartalmát,
    // és a firstName, lastName párosokat egymás alá beleírja egy div - en belüli p - tagekbe,
    // és létrehoz egy users nevű bejegyzés a localStorage - ba, ahol a json tartalmát letárolja.
    // Módosítsd a függvényt úgy, hogy amennyiben a localStorage - ba van users bejegyzés,
    // úgy onnan olvassa ki az adatokat, ha nincs csak akkor küldjön ajax kérést.

    (function () {
        let namesObj;

        function loadData() {
            const users = JSON.parse(localStorage.getItem("users"));
            if (users) {
                showNames(users);
              //  saveUser(users);
            } else {
                fetch("./webStorage.json")
                    .then((response) => {
                        return response.json();
                    })
                    .then((response) => {
                        namesObj = response;
                        showNames(namesObj);
                        saveUser(namesObj);
                    });
            }
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

        loadData();
    })();


    export default cookieHandler;
    export {
        cookieStore,
        loadData as ld
    };