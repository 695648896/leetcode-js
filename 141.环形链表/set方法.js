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
    let cache = new Set()
    while(head){
        if(cache.has(head)){
            return true
        }
        cache.add(head)
        head = head.next

    }
    return false
};
// @lc code=end

// Accepted
// 17/17 cases passed (80 ms)
// Your runtime beats 59.17 % of javascript submissions
// Your memory usage beats 11.14 % of javascript submissions (38 MB)