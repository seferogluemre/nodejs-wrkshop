const url = require('url');

const address = "http://sadikturan.com/kurslar?year=2019&month=nisan"

let result = url.parse(address, true);

// Url adresinden ekledigimiz sorgu parametrelerini aldık
console.log(result)
console.log(result.path)
console.log(result.query.year)
console.log(result.query.month)
