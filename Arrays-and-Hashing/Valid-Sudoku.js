/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let answer = true
    const nums = [1,2,3,4,5,6,7,8,9]

    //Each row must contain the digits 1-9 without repetition.
    // loop through each column
    for (let i = 0; i < 9; i++) {
        // loop through each row
        let row = []
        for (let j = 0; j < 9; j++) {
            // create row array
            if (board[i][j] != '.'){
                row.push(board[i][j])
            }
            if (!answer) {
                break
            }
        }
        answer = !containsDuplicate(row)

        if (!answer) {
            break
        }
        // Each column must contain the digits 1-9 without repetition.
        let col = []
        for (let j = 0; j < 9; j++) {
            if (board[j][i] != '.'){
                col.push(board[j][i])
            }
            if (!answer) {
                break
            }
        }
        answer = !containsDuplicate(col)

        if (!answer) {
            break
        }
        
        console.log("----")
        console.log(col)
        console.log("----")

    }

    return answer
};

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