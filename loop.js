let arr = ["cat","bat","mat"];

let num2 = [1,2,3,4]

arr.forEach((element,index)=>{
    console.log(element,index);
    // return element+1
})

// console.log(aee);
let num = [1,2,3,4,5,6,7,8,9,10]
let mapArray = num.map((element)=>{
    return element 
})
console.log(mapArray);

// filter
let filterArray = num.filter((element)=>{
    return element % 2 == 0
})
console.log(filterArray);


// reducer

const reducerArray = num.reduce((accumulator, element)=>{
    return accumulator+element
},0)

console.log(reducerArray);

const getMax = (a, b) => Math.max(a, b);

[1, 100].reduce(getMax, 50); // 100

