/*remove duplicates
 */
function isUnique(str) {
  //a set can only contain unique characters
  return [...new Set(str)].join("");
}
// console.log(isUnique('889%df#$^a&x######')); // -> 89%df#$^a&x

/*Flatten The Array */

const flatten = nestedArr => {
    let newArr = [];

    //iterate thru the array
    nestedArr.forEach((_,i) => {
        let arrItem = nestedArr[i]

        //check type of first elem
        //if it is an array call flatten recursively and declare a variable
        if(Array.isArray(arrItem)){
            const flatArr = flatten(arrItem)

            //iterate thru new flattened array and add first elem to newarr
            flatArr.forEach((_,i)=>{
                newArr.push(flatArr[i])
            })
            //if first element is not an arr just add it to new Arr 
        }else{
            newArr.push(arrItem)
        }
    })

    // return our new array
    return newArr
}

console.log(flatten([[[[1], 2], 3], [4], [], [[5]]]));
// => [1, 2, 3, 4, 5]
console.log(flatten(["abc", ["def", ["ghi", ["jkl"]]]]));
// => ['abc', 'def', 'ghi', 'jkl']
