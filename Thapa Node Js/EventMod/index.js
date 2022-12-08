const EventEmitter = require('events');



const event = new EventEmitter();

//*  Ex-1   Register for event to be fired only one time using once.
// how to fire event
event.on('sayMyName' , () =>{
    console.log('Your name is Tushar')
})


// * Ex-2   Create an event emitter instance and register a couple of callback.
// you can trigger multiple callBack by using sing event

event.on('sayMyName' , () =>{
    console.log('Your name is Vilas')
})

event.on('sayMyName' , () =>{
    console.log('Your name is Shelke')
})

// ! event call
event.emit('sayMyName');

// * Ex-3   Register for event with calll Back parameter.
// passing parameter with callacks

event.on('checkTotal' , (ttl , msg) =>{
    console.log(`YOur grand total is ${ttl} and it is ${msg}`)
})

event.emit('checkTotal' , 200 , "ok");
// ! (name of event , para-1 , para-2)