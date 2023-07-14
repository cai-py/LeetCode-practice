/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // loop through array and skip the current num    
    let answer = []
    // loop through array
    for (let i = 0; i < nums.length; i++) {
        let product = 1
        for (let j = 0; j < nums.length; j++) {
            // skip if it matches the counter 
            if (i === j) {
                continue
            }else {
                product = product * nums[j]
            }
        }
        console.log(nums[i] + ': ' + product)
        
        // create a new array with the products
        answer.push(product)
    }
    

    // return array
    return answer
};