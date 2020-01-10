/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    if(s.length === 0 || s.length === 1){
        return s.length
    }
    let arr = [], num = 1
    for(let val of s){
        if(arr.includes(val)){
            let index = arr.indexOf(val)
            arr.splice(0, index + 1)
        }
        arr.push(val)
        num = arr.length > num ? arr.length : num
    }
    return num
};
// Accepted
// 987/987 cases passed (100 ms)
// Your runtime beats 68.16 % of javascript submissions
// Your memory usage beats 87.06 % of javascript submissions (37.7 MB)
// @lc code=end

