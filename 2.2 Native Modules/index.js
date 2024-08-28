const fs = require('fs')

fs.writeFile('messages2.txt',"Hello from yaseen!",(err) => {
    if (err) throw err;
    console.log("File saved");
})

