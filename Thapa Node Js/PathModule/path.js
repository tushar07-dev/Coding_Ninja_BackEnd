const path = require('path');

// * step1 -> Right cLick -copy Path 
// * step2 -> paste - > all back-Slack("\") to forward slash("/")
console.log(path.dirname("dirname" , 'C:/Masai New Repo/Coding_Ninja_BackEnd/Thapa Node Js/PathModule/path.js'))
console.log(path.extname("extname" , 'C:/Masai New Repo/Coding_NinjaCoding_Ninja_BackEnd/Thapa Node Js/PathModule/path.js'))
console.log(path.basename("basename" , 'C:/Masai New Repo/Coding_Ninja_BackEnd/Thapa Node Js/PathModule/path.js'))

// * Useful
console.log(path.parse("basename" , 'C:/Masai New Repo/Coding_Ninja_BackEnd/Thapa Node Js/PathModule/path.js'))