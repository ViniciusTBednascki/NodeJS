// include node fs module
var fs = require('fs');
var https = require('https');

// writeFile function with filename, content and callback function
function createFile(contador) {
    fs.writeFile(`./files/newfile_${contador}.txt`, `Learn Node FS module ${contador}`, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}

for (let i = 0; i < 10; i++) {
    createFile(i)
}