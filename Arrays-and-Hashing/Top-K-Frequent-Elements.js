/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    let numss = nums.sort()

    // count how many times each number appears 
    for (let num of numss) {
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
    let answer = []
    for(let [key, value] of map) {
        if (value >= map.get(k) || !map.get(k)) {
            answer.push(key)
        }
    }
    console.log(map)
    console.log(answer)
    return answer
};