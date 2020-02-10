/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = []
    let pathArr = path.split('/')
    for(let i = 0 ; i < pathArr.length; i++){
        switch(pathArr[i]){
            case '':
                continue
            case '.':
                continue
            case '..':
                stack.pop()
                break;
            default:
                stack.push(pathArr[i])
        }
    } 
    return '/' + stack.join('/')
};
// @lc code=end

// Accepted
// 254/254 cases passed (80 ms)
// Your runtime beats 33.18 % of javascript submissions
// Your memory usage beats 63.75 % of javascript submissions (35.7 MB)