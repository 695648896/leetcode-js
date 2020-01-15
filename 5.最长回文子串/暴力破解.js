/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    function isPalindromic(s){
        let len = s.length
        for(let i = 0; i < len/2; i++){
            if(s.charAt(i) !== s.charAt(len-i-1)){
                return false
            }
        }
        return true
    }
    let reslutS = ''
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < s.length; j++){
            if(j+1-i < reslutS.length){
                continue
            }
            let tempS =  s.substring(i, j + 1)
            if(tempS.length > reslutS.length && isPalindromic(tempS)){
                reslutS = tempS
            }
        }
    }
    return reslutS
};
// @lc code=end

// Accepted
// 103/103 cases passed (764 ms)
// Your runtime beats 10.97 % of javascript submissions
// Your memory usage beats 47.73 % of javascript submissions (37.4 MB)