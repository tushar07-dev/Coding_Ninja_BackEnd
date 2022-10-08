const express = require('express');
const path = require('path');
const port  = 8000;

const app = express();

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname, 'views'));
// ! Middleware
app.use(express.urlencoded());
app.use(express.static('assests'))
//! Custome-Middlewear1 :
// app.use(function(req, res, next){
//     req.myName =  'TUshar';
//     // console.log('Middleware 01 called');
//     next()
// })
// //! Custome-Middlewear 2 :
// app.use(function(req, res, next){
//     console.log("My name from MW-2",req.myName)
//     // console.log('Middleware 02 called');
//     next()
// })
// ! Contact data :[Static]

var contactList = [
    {   name : "Arpan", phone : "123456789"},
    {   name : "Tushar", phone : "987654321"},
    {   name : "Neel", phone : "5555"},
]


// ! CONTROLLER (C) :
app.get('/' , function(req, res){
    // console.log(req);
    // Render
    console.log("My name from Get Route controller",req.myName)
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
    // return res.redirect('/practice')   
    // console.log(req.body)   ;

    // contactList.push({
    //     name: req.body.name, 
    //     phone: req.body.phone
    // });

    contactList.push(req.body)
    // return res.redirect('/');   /// instead of '/' you can use 'back' keyword
    return res.redirect('back');
});

// ! Done by Params
app.get('/delete-contact/:phone' , function(req, res) {
    console.log(req.params);
    let phone = req.params.phone;

    let contactIndex = contactList.findIndex(contact => contact.phone === phone);

    if(contactIndex != -1){contactList.splice(contactIndex, 1);}

    return res.redirect('back');    
})

app.listen(port, function(err){
    if(err){
        console.log("Error in server:" , err);
        return;
    }
    console.log("Yup! , My express server is runing on PORT", port)
})