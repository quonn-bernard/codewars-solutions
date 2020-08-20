/*
Find indices of 2 integers that equal sum 
*/

findIndices = (arr,sum) => {
    let map = []
    let indices = []
   
    arr.forEach((_,i)=>{
      map.push({index: i, val: sum - arr[i]})
      map.forEach(elem => {
       if(elem.val === arr[i]){
         indices[0] = elem.index
         indices[1] = i
       }
      })
    })
    console.log(map)
    return indices
  }
  
  console.log(findIndices([10,20,60,50],80))