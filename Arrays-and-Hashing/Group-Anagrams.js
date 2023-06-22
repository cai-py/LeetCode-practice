/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for(let str of strs) {
        // split and sort the characters of each string
        let letters = str.split('').sort()

        // check if set of characters already exists in solution
        if (map[letters]){
            // if true add the 'letters' value to the matching pair
            map[letters].push(str)
        }else {
            // if not add them
            map[letters] = [str]
        }
    }

    let answer = Object.values(map);
    console.log(answer)
    return answer
};