
var a = prompt("Type a string")
// var b = Number(prompt("Enter a value of b"))

// alert(isUpperCase(a))
result(a)

const result = (a)=> {
    const ans = []
    for (let i = 0; i < a.length; i++) {
        if(isUpperCase(a[i])) ans.push(i)
        
    }
    alert("ANSWER",ans)
}

const isUpperCase = (char)=>{
    return ( /[A-Z]/.test(char))
}