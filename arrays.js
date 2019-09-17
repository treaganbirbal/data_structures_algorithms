//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//Ex. input: [2,7,11,15], target = 9
//Ex. output [0,1]

const twoSum = (arr, target) => {
    //loop through array
    let output = []
    for(let i = 0; i < arr.length; i++){
        //check each value of idx to see if adds up to target
       for(let j = 1; j < arr.length; j++){
           if(arr[i] + arr[j]=== target){
                output.push(i)
                output.push(j)
           }
          
       }
    }
    return output
}
console.log(twoSum([2,7,11,15], 17))
