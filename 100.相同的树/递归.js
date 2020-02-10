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
    // 如果p和q都为null，则相等
    if(p===null && q===null){
        return true
    }
    // 如果p和q只有一个为null，则不相等
    if(p===null || q===null){
        return false
    }
    if(p.val !== q.val){
        return false
    }
    return isSameTree(p.left,q.left)&&isSameTree(p.right, q.right)
};
// @lc code=end

// Accepted
// 57/57 cases passed (52 ms)
// Your runtime beats 98.09 % of javascript submissions
// Your memory usage beats 41.4 % of javascript submissions (33.8 MB)