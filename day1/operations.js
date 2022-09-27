module.exports.add = function (a,b){
    return a + b;
}
module.exports.mult = function (a,b){
    return a * b;
}
module.exports.div = function (a,b){
    return a / b;
}

//* module.export is an object => { add : funct(){ ... }, mult : funct(){ ... } , div : funct(){}   }