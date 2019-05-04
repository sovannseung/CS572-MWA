const fs = require('fs');

function myReader(file_path, cb){
    fs.readFile(file_path, (err, data)=>{
        cb(data.toString());
    })
}

process.on('message', (file_path) => {
    myReader(file_path, (data)=>{
        process.send(data);
    })
});