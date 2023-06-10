/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // return new Set(nums).size !== nums.length;
    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length; j++) {
            if(i == j) {
                break;
            }else if(nums[i] == nums[j]) {
                return true;
            }
        }
    }
    return false;
};