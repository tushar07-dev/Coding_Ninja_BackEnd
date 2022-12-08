
const fs = require('fs');

//* 1] Create a Folfer name "Thapa";
// fs.mkdir('thapa' , (err) => {
//     console.log("-1 Folder is created");
// });


 //* 2] Create a File and data into it. ;
//  fs.writeFile('./thapa/bio.txt' , "My name is Tushar-developer" , (err) => {
//     console.log('-2 File created')
//  });


//* 3] add more data in previous data. ;
// fs.appendFile('thapa/bio.txt' , ' & i have skills.....' , (err) =>{
//     console.log('-3 Updated previos data')
// })


//* 4] read the data without getting buffer..;
//     fs.readFile('./thapa/bio.txt' ,  (err , data) => {
//     console.log("DATA" , data );
//     console.log("Error" , err );
//     console.log('-4 data with buffer data');
// });


//! Buffer problem solve..
    // const data2 = fs.readFile('thapa/bio.txt' , "utf8" , (err , data) => {
    //     console.log('-5 data with encoded data' , "DATA" , data);
    // });
    
    //* 5] remane file
    // fs.rename('thapa/bio.txt' , "thapa/myBio.txt" , (err, file) => {
    //     console.log('-6 File renamed' , file);
    // }); 

    // *6 ] delete file
    // fs.unlink( "./thapa/myBio.txt" , (err) => {
    //     console.log('-7 File deleted');
    // });


    // * 7] Foder deleted
    // fs.rmdir("./thapa" , (err) => {
    //     console.log('-8 Folder Deleted')
    // });
    