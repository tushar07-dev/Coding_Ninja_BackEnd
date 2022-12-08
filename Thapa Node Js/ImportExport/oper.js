// my own module 
const add = (a,b) => {
    return a + b;
}

const substract = (a,b) => {
    return a - b;
}

const name = "Tushar" ;


// *     for only one varible / function export
// module.exports = add;

// *     for more than one varible / function export

// module.exports.add = add;
// module.exports.substract = substract;
// module.exports.name = name;

// ShortCut
module.exports = {add , substract, name }