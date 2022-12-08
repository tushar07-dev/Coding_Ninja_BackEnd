const fs = require('fs');

const bioData = {
    name : "Tushar", age : 24    
}

// *    convert to JSON
// *    append on another file
// *
// *
// *
const jsonData = JSON.stringify(bioData);

fs.writeFile('bio.txt', jsonData , (err)=>{
    console.log("Done...")
})

fs.readFile('bio.txt' , 'UTF-8' , (err, data)=>{
    console.log( "data" , data ) ;
    const objData = JSON.parse( data );
    console.log( "objData" ,objData ) ;
})