

// let and const 

let a = 5

console.log(a);

// const means we can't resign the values 

// var

var b = 5
function callVar(){
    var b= 6
}
callVar();
console.log(b);
// 5


let c = 5
function callLet(){
    let c= 6
}
callLet();
console.log(c);
// 5
