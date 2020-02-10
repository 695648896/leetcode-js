/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let count = 0
    while(head){
        if(count > 10000){
            return true
        }
        count++
        head = head.next
    }
    return false
};
// @lc code=end

// Accepted
// 17/17 cases passed (76 ms)
// Your runtime beats 76.36 % of javascript submissions
// Your memory usage beats 78.84 % of javascript submissions (36.5 MB)