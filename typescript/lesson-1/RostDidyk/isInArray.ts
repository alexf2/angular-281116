function isInArray(
    list: (number | string)[],
    ...needle: (number | string)[]
) : boolean {
    return needle.every(value=>{
        let getIndex: number =  list.indexOf(value);
        return (getIndex != -1)
    });

}

console.log(isInArray([1,2,3,4,5,6,7,8], 7,6,2,11)); // false
console.log(isInArray([1,2,3,4,5,6,7,8], 7,6,2)); // true