

const findIndexOfAString=(str)=>{
    let arr = []
        for (let i = 0; i < str.length; i++) {
            if(str[i].toUpperCase() === str[i])arr.push(i)
            // console.log(isUstr[i]);

            console.log(isUpperCase(str[i]));

        }
        console.log("(/[A-Z]/).test('A')",(/[A-Z]/).test('A'));
        return arr
}
const isUpperCase = (char) => {
    // return !!/[A-Z]/.exec(char[0]);
    return  (/[A-Z]/.test(char))
  };

console.log(findIndexOfAString("AheEe"));





