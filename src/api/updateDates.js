const fs = require('fs');
const { generateDates } = require('./generateDates.js');
const customers = require('./staticData')


const data = generateDates(customers);
const filename = 'data.json';
const filepath = `${__dirname}/${filename}`;
const jsonData = JSON.stringify(data);
fs.writeFileSync(filepath, jsonData);

console.log(`Data saved to ${filename}`);