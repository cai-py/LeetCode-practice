/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()

    // count how many times each number appears 
    for (let num of nums) {
        if (map.has(num)){
            map.set(num, map.get(num) + 1)
        }else {
            map.set(num, 1)
        }
    }
    // sort keys by frequency(values)
    let sortedMap = new Map(
        [...map.entries()].sort((a,b) => b[1] - a[1])
    );
    console.log(sortedMap)

    // push to answer array and return
    let result = []
    let count = 0
    for(let [key, value] of sortedMap){
        result.push(key)
        count ++
        if (count === k) {
            break
        }
    }
    console.log(map)
    console.log(result)
    return result
};