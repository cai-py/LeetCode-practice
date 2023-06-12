 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length != t.length) return false;

    // counts the amount of times a character appears in s
    const sChars = {};
    for (let char of s) {
        //console.log(sChar[char]);
        if(!sChars[char]){
            sChars[char] = 1
        } else {
            sChars[char]++
        }
        console.log(char + ': ' + sChars[char])
    }

    for (let char of t) {
        if(!sChars[char]) return false;
        if(sChars[char]) sChars[char]--;
        if(sChars[char] === 0){
            delete sChars[char];
        }
    }
    return Object.keys(sChars).length === 0;
};