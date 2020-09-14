// Írj reguláris kifejezést Visa típusú bankkártyák bankkártyaaszámának validálására!
// Teszteld is a megoldásod!

// Írj reguláris kifejezést IP cím validálására!Teszteld is a megoldásod!

// Írj reguláris kifejezést MAC cím validálására!Teszteld is a megoldásod!

const multiValidator = {
    patterns: {
        visa: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
        ip: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        mac: /^((([a-fA-F0-9][a-fA-F0-9]+[-]){5}|([a-fA-F0-9][a-fA-F0-9]+[:]){5})([a-fA-F0-9][a-fA-F0-9])$)|(^([a-fA-F0-9][a-fA-F0-9][a-fA-F0-9][a-fA-F0-9]+[.]){2}([a-fA-F0-9][a-fA-F0-9][a-fA-F0-9][a-fA-F0-9]))$/g
    },
    validate(text, type) {
        return text.match(this.patterns[type]) ? true : false
    }
}
console.log(multiValidator.validate('4112234548382347', 'visa'))
console.log(multiValidator.validate('115.42.150.37', 'ip'))
console.log(multiValidator.validate('00:A0:C9:14:C8:29', 'mac'))

// valid IP-k
// 115.42 .150 .37
// 192.168 .0 .1
// 110.234 .52 .124

// Visa :- Starting with 4, length 13 or 16 digits.

// valid MAC 
// 00:A0:C9:14:C8:29