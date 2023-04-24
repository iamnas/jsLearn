
// Callback: 
// A callback is a function that is passed as an argument 
// to another function that executes the callback based on the result. 
// They are basically functions that are executed only after a result is produced.
// Callbacks are an important part of asynchronous JavaScript.

const display = (sum) =>{
    console.log(sum);
}

const callSum = (a,b,mySum)=>{
    mySum(a+b)
}

callSum(12,23,display)

// CAllback Hell
// The phenomenon which happens 
// when we nest multiple callbacks within a function is called a callback hell. 

const animateAll = (animate) => {
    setTimeout(() => {
        animate(words[0]);
        setTimeout(() => {
            animate(words[1]);
            setTimeout(() => {
                animate(words[2]);
            }, 1000)
        }, 1000)
    }, 1000)
}

const animate = (word) => {
    word.classList.add("animate");
}

animateAll(animate);