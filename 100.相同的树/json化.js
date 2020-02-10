/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(JSON.stringify(p) === JSON.stringify(q)){
        return true
    }
    return false
};
// @lc code=end

// Accepted
// 57/57 cases passed (56 ms)
// Your runtime beats 93.49 % of javascript submissions
// Your memory usage beats 34.41 % of javascript submissions (33.9 MB)