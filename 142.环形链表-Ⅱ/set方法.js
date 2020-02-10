/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let cache = new Set()
    while(head){
        if(cache.has(head)){
            return head
        }
        cache.add(head)
        head = head.next

    }
    return null
};
// @lc code=end

// Accepted
// 16/16 cases passed (72 ms)
// Your runtime beats 92.09 % of javascript submissions
// Your memory usage beats 28.01 % of javascript submissions (37.6 MB)