/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = []
    let n = 1
    output[0] = n
    // calculate prefix 
    for (let i = 0; i < nums.length - 1; i++) {
        //console.log(nums[i])
        n = n * nums[i]
        output[i+1] = n
    }
    //console.log("output: " + output)


    // calculate postfix
    n = 1
    output[output.length-1] = output[output.length-1] * n
    for (let i = nums.length - 1; i >= 0; i--) {
        //console.log(nums[i])
        n = n * nums[i]
        output[i-1] = n * output[i-1]
    }
    //console.log("output: " + output)

    // return
    return output
};



//////// OLD SOLUTION ////////
// - took wayyyy too much memory 

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function(nums) {
//     // loop through array and skip the current num    
//     let answer = []
//     // loop through array
//     for (let i = 0; i < nums.length; i++) {
//         let product = 1
//         for (let j = 0; j < nums.length; j++) {
//             // skip if it matches the counter 
//             if (i === j) {
//                 continue
//             }else {
//                 product = product * nums[j]
//             }
//         }
//         console.log(nums[i] + ': ' + product)
        
//         // create a new array with the products
//         answer.push(product)
//     }
    

//     // return array
//     return answer
// };