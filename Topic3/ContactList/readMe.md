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