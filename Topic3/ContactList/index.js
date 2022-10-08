const express = require('express');
const path = require('path');
const port  = 8000;

const app = express();

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname, 'views'));


// ! CONTROLLER (C) :
app.get('/' , function(req, res){
    console.log(req);
    return res.render('home' , {title: 'My Contacts List '})       
});

app.get('/practice' , function(req, res){
    return res.render('practice' , {title: 'Lets do Practice with EJS '})       
});


app.listen(port, function(err){
    if(err){
        console.log("Error in server:" , err);
        return;
    }
    console.log("Yup! , My express server is runing on PORT", port)
})