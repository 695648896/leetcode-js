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
    let longestNum=1
    let arr = s.split('')
    for(let i = 0; i < arr.length; i++){
        let tempArr = [arr[i]]
        for(let j = i + 1; j < arr.length; j++){
            if(tempArr.includes(arr[j])){
                let tempIndex = tempArr.indexOf(arr[j])
                tempArr.splice(0,tempIndex + 1)
                tempArr.push(arr[j])
            }else{
                tempArr.push(arr[j])
                longestNum = tempArr.length > longestNum ? tempArr.length: longestNum
            }
        }
    }
    return longestNum
};
// @lc code=end

