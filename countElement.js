


const obj = ["a","b","a","c","c"]
let ans = {}

// obj.map((element)=>{
// //  console.log(element);
//     ans =  {element}
//     ans.value &&=1 

//     // return {element}
// })

obj.forEach((element)=>{
    // ans[element] = ans[element] ? ans[element]+1 :1;
    ans[element] = (ans[element]||0)+1

    
})

console.log(ans);