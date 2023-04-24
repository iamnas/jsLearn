
const promise = new Promise((resolve, reject) => {
    if(false){
        resolve("It's working")
    }else{
        reject("It's not working")
    }
})

promise.then(console.log).catch(console.error)