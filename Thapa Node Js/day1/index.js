const fs = require('fs');

//* 1] Create a Folfer name "Thapa";
fs.mkdirSync('thapa');
console.log('Folder created');

//* 2] Create a File and data into it. ;
fs.writeFileSync('thapa/bio.txt' , "My name is Tushar-developer");
console.log('-File created')

//* 3] add more data in previous data. ;
fs.appendFileSync('thapa/bio.txt' , ' & i have skills.....')
console.log('-Updated previos data')

//* 4] read the data without getting buffer..;
const data = fs.readFileSync('thapa/bio.txt');
console.log("DATA" , data );
console.log('-data with buffer data');

// Buffer problem solve..
const data2 = fs.readFileSync('thapa/bio.txt' , "utf8");
console.log("DATA" , data2 );
console.log('-data with encoded data');

//* 5] remane file
fs.renameSync('thapa/bio.txt' , "thapa/myBio.txt");
console.log('-File renamed');

// *6 ] delete file
fs.unlinkSync( "thapa/myBio.txt" )
console.log('-File deleted');

//* 6] delete FOlder
fs.rmdirSync('thapa')
console.log('-Folder deleted');