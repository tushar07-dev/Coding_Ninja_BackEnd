const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request' , (req, res) => {
    var fs = require('fs');
    // ! Way 1] Old way of displaying data...
    // fs.readFile("input.txt" , (err, data) => {
    //     if(err) { return console.error(err); }
    //     res.end(data.toString());
    // });

    // ! Way 2] New way of streaming live data in pack of chunks...,
    // create a readable stream
    // Handle stream events - data, end & error.

    // const rdstream = fs.createReadStream('input.txt');
    // rdstream.on('data', (chunkData) => {
    //     res.write(chunkData);
    // });
    // rdstream.on('end', () =>{
    //     res.end() 
    // });
    
    // rdstream.on('error', (err) =>{
    //     console.log(err);
    //     res.end("File not found..")
    // });

        // ! Way 3] shortest way of streaming live data in pack of chunks...,
        const readstream = fs.createReadStream('input.txt');
        readstream.pipe(res);


});

server.listen(8000 , "127.0.0.1")