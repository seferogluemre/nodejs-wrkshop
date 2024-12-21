// const url = require('url');

// const address = "http://sadikturan.com/kurslar?year=2019&month=nisan"

// let result = url.parse(address, true);

// // Url adresinden ekledigimiz sorgu parametrelerini aldık
// console.log(result)
// console.log(result.path)
// console.log(result.query.year)
// console.log(result.query.month)


const fs = require('fs');

// const files = fs.readdir('.../', function (error, data) {
//     console.log(error ? error : data)
// })

// Örnek 2------

// const data = fs.readFile('index.html', "utf-8", function (error, data) {
//     console.log(error ? error : data);
// })

fs.writeFile('deneme.txt', 'Dosyanız oluşturuldu Emre SEFEROĞLU', function (error) {
    console.log(error ? error : "Dosyanız oluşturuldu");
})