const http = require('http');
const {fork} = require('child_process');
const server = http.createServer();
const path = require('path');

server.on('request', (req, res)=>{
    const childProcess = fork('file_reader.js');
    childProcess.send(path.join(__dirname, 'myfile.txt'));
    childProcess.on('message', data =>{
        res.send(data);
    });
});

server.listen(3000);