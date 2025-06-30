const math = require('./math')
const os = require('os');
console.log(os.cpus);

console.log(math.add(5, 6));
console.log(math.sub(5, 6));
const fs = require('fs');
fs.writeFile('text.txt', 'hello world', (err) => { });
fs.readFile('./text.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log('error', err);
    } else {
        console.log(result);
    }
});