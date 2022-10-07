const http = require('http');
const port = 8000;



function requestHandler(req, res) {
    console.log(req.url);
    // *    returning HTML /PDF filetype for different URL req different html files
    // * Responce code : if we getting sucess or not found or error to show it is 200/404/424;
    // * {'contest-type' : 'text/html'};

    // in Header we tell what is comming on / wht type of content is coming on &
    //  any additional hidden information that you want to send
    // Server to Browser.

    res.end( `<h1>YOur  Responce is  recived ! </h1>`)
}

const server = http.createServer(requestHandler);

server.listen(port , function(err){
    if(err) {
        console.error(err);
        return;
    }
    console.log("Server is up and running on port:" , port);
});