const http = require("http");
const fs = require("fs");
const path = require("path");


// Sync
// const downloadFile = http.createServer((req, res) => {
//   const video = fs.readFileSync(path.join(__dirname, 'video.mp4'));
//   res.write(video);
//   res.end();
// });


// Async
// const downloadFile = http.createServer(function(req, res){
//     fs.readFile(path.join(__dirname, 'video.mp4'),function(err, data){
//         res.write(file);
//         res.end();
//     });
// });


// Stream
const downloadFile = http.createServer(function(req, res){
    fs.createReadStream(path.join(__dirname, 'video.mp4'))
      .pipe(res);
});


downloadFile.listen(5000, ()=> console.log("Listening on 5000"));