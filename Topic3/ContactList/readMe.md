## FrameWork

Suppose there are 4-5 pages , But suppose some functionality like log in and log out to acess perticularpart of page,
are used in all pages that to solve it.

we can create comman component, whch has that data, all codes became complex and messy 

it is solved by  #Web-FrameWork

web-Frame work like rubyRails , django , ExpressJS , meteorJS , happieJS , koaJS, SailsJS

# Some Folder Structures OF NodeJs
MVC[ModelViewController], MV-VM[ModelView-ViewModel]

#MVC[ModelViewController] (Folder Structures)

Browser(user) localhost:/profile => Route(it will direct user to respective controller file by switch case)=>
=>Controller is a set / single función(Find HTML'JSON file) & by fs it read and send  back to Browser 

DataBase => IT s permanence storage to store data of all user
        [DB => both interact to each other <= Model]
Model=> we need some function to write that dataBase that are Model


# In this Course we are going to use MVC architecture Filder structure it is also use by PythonJango,RubyOnrails, ExpressJs , SailsJS.

Blog on MVC, MVP and MVVM Design Pattern: https://medium.com/@ankit.sinhal/mvc-mvp-and-mvvm-design-pattern-6e169567bbad


    // All the req Keys will apear on Terminal after browser refreshes.

# Type of Data :

1] GET : When you request/fetch data from server that is already present in the database.

2] POST : When i want to send some data & it will change data presemt in it. then give updated data back,
                even in post req server response/send back DAta.

3] PUT : Something already present (name:Ninja;age:_ _ , gender:_ _, location: Mumbai);And you putting it back
                (name:Ninja;age: 18 , gender: male, location: Mumbai)

4] PATCH : If we want to change the Data,
(name:Ninja;age: 18 , gender: male, location: Mumbai) =>(name:Ninja;age: 18 , gender: FEMALE, location: VASHI)

5] DELETE : delete the user who has Id === 10;


PUT / PATCH / DELETE => Use for AJAX or Non-synchronous requests.

GET / POST => Use for non-AJAX or synchronous requests.

# CONTACT LIST (APP):
consider an html file, Which  displays  list of contacts that is 5.
for this we will use Template engine.
(some Template engines are: HandlebarsJS(HBS) , EJS, Pug , visit github.com/expressjs/express/wiki)

app.set('view engine' , 'ejs'); => It is use to SetUp template engine(EJS)

# STEPs for 
1] install ejs
2] app.set ---> i) view engine ii) view path
3]set up views directory+file(folder)
4]we render using res.render ( extension is home.ejs)


# Locals :
Locals is an global object, your responce also an object with different keys , 
one of these key is Local , when i pass local.title in(file);
the whole title stored in,Local in object => locals : { title: "My Contacts List"}
this local is available globally to me.


# Create Contact List
create var contactList array of obj, with name & phone.

and pass this data dynamically to home.ejs (Template engine) with and by for loop show it to Browser.

# Sending data to server :
step1 : create for (from where we can take data from user)
step2 :getting that data reading it and adding to the list.

## Create a form : step1
in home.ejs created Form => input tag for phone, name & Submit.
on sub,it an obj of key name&phone will go to '/create-content' page & retuen statements redirect us to another url '/practice'

# Parse from data : step2
Now data is sended to server but  data is encoded and in form of stringto decode i need a parser 'body-parser'
parse => take data from browser => parser has req obj => req :{body :{name"arpan", phone:"123"},}

below app.set('view engine' , 'ejs') , write => app.use(express.urlencoded())

in POST req push req.body.name/phone in contactList and redirect to Home.ejs page
till now we have all data in store in ram when server get killed data vanish because we didnt use dataBase till now

# MiddleWear : 
It is function which also has access to your req&resp ; and it manipulate that req data and pass it on to next or retuen error to itself.
NEED OF MiddleWear:
for some preProcess like when form submitting the data, convert it to KEY Value pairs, Which was encoded 
e.g [ app.use(express.urlencoded());]

# Lets make our own middleware which console something :
//! Custome-Middlewear1 :
app.use(function(req, res, next){
    console.log('Middleware 01 called');
    next()
})
next() => pass function to next middlewar,If there is no another middleware then next pass it to controller

# OR bass dat ain chair format
//! Custome-Middlewear1 :
app.use(function(req, res, next){
    req.myName =  'TUshar';
    next()
})
//! Custome-Middlewear 2 :
app.use(function(req, res, next){
    console.log("My name from MW-2",req.myName)
    next()
})
// ! CONTROLLER (C) :
app.get('/' , function(req, res){
    console.log("My name from Get Route controller",req.myName)
    return res.render('home' , {
                    title: 'My Contacts List ',
                    contact_list : contactList
                })       
});


# Assesing static files(css/images..) BY Middlewear 
app.use(express.static('assets'));
create root folder name assets => Folder css=>Home.css / Folder js=>Home.js
now you can acess js & Css from anywhere


# Delect Contact :
there two ways to find and delect contact information are 
1] param : /delect-contact/10
2] query-param : /delect-contact/?phone='123456789'

app.get('/delete-contact/:phone' , function(req, res) {
    console.log(req.params);
    let phone = req.params.phone
})

//in css file :
1] Done by Params
                            <a href="/delete-contact/<%= i.phone %>" >
                                <i class="fas fa-window-close"></i>
                            </a>

2] Query : 
                            <a href="/delete-contact/?phone=<%= i.phone %>&name=<%= i.name %>" >
                                <i class="fas fa-window-close"></i>
                            </a>


# DElete :
Now i have phone = req.params.phone ; => { phone: '5555' }
finding contactIndex of same Kry value in Object of array. and remove it by slice(contactIndex,1)