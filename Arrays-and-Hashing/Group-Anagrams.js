/**
 * @param {string[]} strs
 * @return {string[][]}
 */


var groupAnagrams = function(strs) {
    // 1 --> Build map of letter combo to strings that contain those letters
    const map = new Map()
    /*
    Example of the hash map
    let output = []
    let counter = 0;
    for (let value of map.values()) {
        console.log(value)
        output[counter] = value
        counter++
    }
    */
    for (let str of strs) {
        let letters = str.split('').sort()
        if(map[letters]){
            map[letters].push(str)
        }else {
            map[letters] = [str]
        }
    }

    //2--> return in an array
    let output = Object.values(map)
    console.log(output)
    return output
};

