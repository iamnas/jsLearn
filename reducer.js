// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const newName = names.reduce((acc, name) =>{
    // console.log("acc",acc,"acc[name]",acc[name]);
    const count = acc[name] ?? 0;
    return {
        ...acc,
        [name]:count+1
    }
},{})
console.log(newName);



