/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let sArr = s.split('')
    let map={
        '(':')',
        '[':']',
        '{':'}'
    }
    for(let i = 0; i < sArr.length; i++){
        if(i === 0){
            stack.push(sArr[i])
        }else{
            let stackEnd = stack[stack.length - 1]
            if(map[stackEnd]===sArr[i]){
                stack.pop()
            }else{
                stack.push(sArr[i])
            }

        }
    }
    return !stack.length
};
// @lc code=end

// Accepted
// 76/76 cases passed (60 ms)
// Your runtime beats 89.57 % of javascript submissions
// Your memory usage beats 63.34 % of javascript submissions (34.1 MB)