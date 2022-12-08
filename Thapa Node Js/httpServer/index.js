const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);

    const data = fs.readFileSync(`${__dirname}/userAPI/userapi.json` , 'utf-8');
    const objData = data ;
    // console.log(objData);

    if(req.url === '/') {res.end('Hello, from Home page');}
    else if(req.url === '/about') {res.end('Hello, from About page');}
    else if(req.url === '/contact') {res.end('Hello, from COntact page');}
    else if(req.url === '/userapi') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(objData)
        }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1> 404 error pages. </h1>');
    } 
});

server.listen(8000 , "127.0.0.1" , () => {
    console.log("Listning to port 8000")
});