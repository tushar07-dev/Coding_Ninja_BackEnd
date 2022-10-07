const http = require('http');
const port = 8000;
const fs = require('fs');



function requestHandler(req, res) {
    console.log(req.url);
   
    res.writeHead(200, {'content-type': 'text/html'});

    // fs.readFile('./index.html' , function(err, data){
    //     if(err){
    //         console.log("Error:", err);
    //         return res.end(`<h1> Error! </h1>`);
    //     }
    //     return res.end(data);
    // })

    // res.end( `<h1>YOur  Responce is  recived ! </h1>`)

        let filePath;

        switch (req.url){
            case '/' :   filePath = './index.html'
            break;

            case '/profile' : filePath = './profile.html'
            break;
            
            case '/form' : filePath = './form.html'
            break;

            default : filePath = './404.html'
            break;
        }

        fs.readFile(filePath,  function(err, data){
            if(err){
                console.log(err);
                return res.end('<h1>Error!<h1>');
            }
            return res.end(data);
        })
}

const server = http.createServer(requestHandler);

server.listen(port , function(err){
    if(err) {
        console.error(err);
        return;
    }
    console.log("Server is up and running on port:" , port);
});

     // *    returning HTML /PDF filetype for different URL req different html files
    // * Responce code : if we getting sucess or not found or error to show it is 200/404/424;
    // * {'contest-type' : 'text/html'};

      // in Header we tell what is comming on / wht type of content is coming on &
    //  any additional hidden information that you want to send
    // Server to Browser.

    // *  fs 
    //  fs.readFile( PATH , function(err, data){ return res.end(data) })
    