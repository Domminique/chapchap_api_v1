
XLSX = require('xlsx');

const workBook = XLSX.readFile('marketPrices.xls');
XLSX.writeFile(workBook, 'data.csv', { bookType: "csv" });

const dbname = db.getSiblingDB('chapchap_elogistics');
const final  = dbname.getCollection("market_prices_data");

const fs = require('fs');

const data = fs.readFileSync('data.csv','utf8');
const rows = data.split('\n')

const fieldnames = rows[0].split(',')
const results = [];

for(let i =1; i < rows.length; i++){
    const values = rows[i].split('');
    const documents = {};

    for(let j = 0; j < fieldnames.length; j++){
        documents[fieldnames[j]] = values[j]
    }
    
results.push(documents)

}

final.insertMany(results)
console.log("documents inserted successfully")