const express = require('express');
const path = require('path');
const port  = 8000;

const app = express();

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname, 'views'));

// ! Contact data :[Static]

var contactList = [
    {   name : "Arpan", phone : "123456789"},
    {   name : "Tushar", phone : "987654321"},
    {   name : "Neel", phone : "5555"},
]


// ! CONTROLLER (C) :
app.get('/' , function(req, res){
    console.log(req);
    // Render
    return res.render('home' , {
                    title: 'My Contacts List ',
                    contact_list : contactList
                })       
});

app.get('/practice' , function(req, res){
    // Render
    return res.render('practice' , {title: 'Lets do Practice with EJS '})       
});

app.post('/create-contact' , function(req, res){
    // redirect
    return res.redirect('/practice')       
});

app.listen(port, function(err){
    if(err){
        console.log("Error in server:" , err);
        return;
    }
    console.log("Yup! , My express server is runing on PORT", port)
})