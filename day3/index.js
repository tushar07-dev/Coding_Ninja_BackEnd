const http = require('http');
const port = 8000;

function requestHandler(req, res) {
    console.log(req.url);
    
    res.end("YOur Req recived")
}

const server = http.createServer(requestHandler);

server.listen(port , function(err){
    if(err) {
        console.error(err);
        return;
    }
    console.log("Server is up and running on port:" , port);
});