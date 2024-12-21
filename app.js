const url = require('url');

const address = "http://sadikturan.com/kurslar?year=2019&month=nisan"

let result = url.parse(address, true);

console.log(result)